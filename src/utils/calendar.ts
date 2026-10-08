/**
 * RFC 5545 compliant iCalendar (.ics) generation utility for FOSS Club IIIT Kalyani events.
 * Runs 100% client-side without external dependencies or backend APIs.
 */

export interface CalendarEvent {
  id: string;
  title: string;
  description?: string;
  startDate?: Date | string;
  endDate?: Date | string;
  startDateValue?: string; // YYYYMMDD
  endDateValue?: string;   // YYYYMMDD (exclusive for all-day events)
  location?: string;
  url?: string;
  highlights?: string[];
}

/**
 * Escapes characters per RFC 5545 section 3.3.11:
 * Backslash (\) -> \\
 * Semicolon (;) -> \;
 * Comma (,) -> \,
 * Newlines -> \n
 */
export function escapeICS(str: string): string {
  return str
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\r?\n/g, '\\n');
}

/**
 * Folds a content line to <= 75 octets per RFC 5545 section 3.1
 * Continues on next line with CRLF followed by a single space.
 */
export function foldLine(line: string): string {
  const MAX_OCTETS = 75;
  const encoder = new TextEncoder();
  if (encoder.encode(line).length <= MAX_OCTETS) {
    return line;
  }

  let result = '';
  let currentChunk = '';

  for (const char of line) {
    const candidate = currentChunk + char;
    if (encoder.encode(candidate).length > MAX_OCTETS && currentChunk.length > 0) {
      result += currentChunk + '\r\n ';
      currentChunk = char;
    } else {
      currentChunk = candidate;
    }
  }

  result += currentChunk;
  return result;
}

/**
 * Formats a Date object as a UTC timestamp string (YYYYMMDDTHHMMSSZ).
 */
export function formatUTC(date: Date): string {
  const pad = (n: number) => String(n).padStart(2, '0');
  const year = date.getUTCFullYear();
  const month = pad(date.getUTCMonth() + 1);
  const day = pad(date.getUTCDate());
  const hours = pad(date.getUTCHours());
  const minutes = pad(date.getUTCMinutes());
  const seconds = pad(date.getUTCSeconds());
  return `${year}${month}${day}T${hours}${minutes}${seconds}Z`;
}

/**
 * Converts a string or Date into a YYYYMMDD representation.
 */
export function toYMD(d: Date | string | undefined, defaultVal: string): string {
  if (!d) return defaultVal;
  if (typeof d === 'string') {
    const cleaned = d.replace(/[^0-9]/g, '');
    if (cleaned.length >= 8) return cleaned.slice(0, 8);
    return defaultVal;
  }
  if (d instanceof Date && !isNaN(d.getTime())) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}${m}${day}`;
  }
  return defaultVal;
}

/**
 * Converts a string into a clean lowercase filename slug.
 */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/**
 * Generates an RFC 5545 compatible VCALENDAR string for an individual verified event.
 */
export function generateICS(event: CalendarEvent): string {
  const dtstamp = formatUTC(new Date());
  const uid = `${event.id}@fossclub.iiitkalyani`;
  const url = event.url || 'https://fossunited.org/c/iiit-kalyani';
  const location = event.location || 'IIIT Kalyani, Kalyani, West Bengal, India';
  const startYMD = event.startDateValue || toYMD(event.startDate, '20250101');
  const endYMD = event.endDateValue || toYMD(event.endDate, startYMD);

  // Construct comprehensive event description including highlights if available
  let fullDescription = event.description || '';
  if (event.highlights && event.highlights.length > 0) {
    fullDescription += '\n\nKey Highlights:\n' + event.highlights.map((h) => `• ${h}`).join('\n');
  }
  fullDescription += `\n\nOfficial Chapter Hub: ${url}\nOrganized by FOSS Club IIIT Kalyani (FOSS United Chapter)`;

  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//FOSS Club IIIT Kalyani//Events//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTAMP:${dtstamp}`,
    `DTSTART;VALUE=DATE:${startYMD}`,
    `DTEND;VALUE=DATE:${endYMD}`,
    `SUMMARY:${escapeICS(event.title)}`,
    `DESCRIPTION:${escapeICS(fullDescription)}`,
    `LOCATION:${escapeICS(location)}`,
    `URL:${escapeICS(url)}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ];

  return lines.map(foldLine).join('\r\n') + '\r\n';
}

/**
 * Client-side trigger to generate and download the .ics file.
 */
export function downloadICS(event: CalendarEvent): string {
  const icsData = generateICS(event);
  const filename = `foss-club-iiitk-${slugify(event.title)}.ics`;

  const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
  const objectUrl = URL.createObjectURL(blob);

  const anchor = document.createElement('a');
  anchor.href = objectUrl;
  anchor.download = filename;
  anchor.setAttribute('aria-hidden', 'true');
  anchor.style.display = 'none';

  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);

  // Clean up object URL after dispatch
  setTimeout(() => {
    URL.revokeObjectURL(objectUrl);
  }, 1000);

  return filename;
}

/**
 * Generates an RFC 5545 compatible VCALENDAR containing multiple events.
 */
export function generateAllEventsICS(events: CalendarEvent[]): string {
  const dtstamp = formatUTC(new Date());

  const vevents = events
    .map((event) => {
      const uid = `${event.id}@fossclub.iiitkalyani`;
      const url = event.url || 'https://fossunited.org/c/iiit-kalyani';
      const location = event.location || 'IIIT Kalyani, Kalyani, West Bengal, India';
      const startYMD = event.startDateValue || toYMD(event.startDate, '20250101');
      const endYMD = event.endDateValue || toYMD(event.endDate, startYMD);

      let fullDescription = event.description || '';
      if (event.highlights && event.highlights.length > 0) {
        fullDescription += '\n\nKey Highlights:\n' + event.highlights.map((h) => `• ${h}`).join('\n');
      }
      fullDescription += `\n\nOfficial Chapter Hub: ${url}\nOrganized by FOSS Club IIIT Kalyani (FOSS United Chapter)`;

      const lines = [
        'BEGIN:VEVENT',
        `UID:${uid}`,
        `DTSTAMP:${dtstamp}`,
        `DTSTART;VALUE=DATE:${startYMD}`,
        `DTEND;VALUE=DATE:${endYMD}`,
        `SUMMARY:${escapeICS(event.title)}`,
        `DESCRIPTION:${escapeICS(fullDescription)}`,
        `LOCATION:${escapeICS(location)}`,
        `URL:${escapeICS(url)}`,
        'END:VEVENT',
      ];

      return lines.map(foldLine).join('\r\n');
    })
    .join('\r\n');

  const header = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//FOSS Club IIIT Kalyani//Events//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'X-WR-CALNAME:FOSS Club IIIT Kalyani Events',
  ]
    .map(foldLine)
    .join('\r\n');

  return `${header}\r\n${vevents}\r\nEND:VCALENDAR\r\n`;
}

/**
 * Client-side trigger to download an .ics file containing all chapter events.
 */
export function downloadAllEventsICS(events: CalendarEvent[]): string {
  const icsData = generateAllEventsICS(events);
  const filename = 'foss-club-iiit-kalyani-all-events.ics';

  const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
  const objectUrl = URL.createObjectURL(blob);

  const anchor = document.createElement('a');
  anchor.href = objectUrl;
  anchor.download = filename;
  anchor.setAttribute('aria-hidden', 'true');
  anchor.style.display = 'none';

  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);

  setTimeout(() => {
    URL.revokeObjectURL(objectUrl);
  }, 1000);

  return filename;
}

/**
 * Generates a direct Google Calendar Web URL for one-click addition.
 */
export function getGoogleCalendarUrl(event: CalendarEvent): string {
  const startYMD = event.startDateValue || toYMD(event.startDate, '20250101');
  const endYMD = event.endDateValue || toYMD(event.endDate, startYMD);

  let details = event.description || '';
  if (event.highlights && event.highlights.length > 0) {
    details += '\n\nKey Highlights:\n' + event.highlights.map((h) => `• ${h}`).join('\n');
  }
  const url = event.url || 'https://fossunited.org/c/iiit-kalyani';
  details += `\n\nOfficial Chapter Hub: ${url}`;

  const location = event.location || 'IIIT Kalyani, Kalyani, West Bengal, India';

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: event.title,
    dates: `${startYMD}/${endYMD}`,
    details: details,
    location: location,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
