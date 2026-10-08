import React, { useState, useEffect } from 'react';
import { X, Send, Copy, Check, Sparkles, ExternalLink, CheckCircle } from 'lucide-react';
import { CLUB_METADATA } from '../data/content';

interface ProjectSubmitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectSubmitModal: React.FC<ProjectSubmitModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [projectName, setProjectName] = useState('');
  const [repoUrl, setRepoUrl] = useState('');
  const [techStack, setTechStack] = useState('');
  const [description, setDescription] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Close on Escape key and lock body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const mailSubject = encodeURIComponent(`[FOSS Club Project Pitch] ${projectName || 'New Project Submission'}`);
  const mailBody = encodeURIComponent(
`Hi FOSS Club IIIT Kalyani Team,

I'd like to submit my open-source project for review and community showcase:

• Project Name: ${projectName || '(Not specified)'}
• Repository URL: ${repoUrl || '(Not specified)'}
• Tech Stack: ${techStack || '(Not specified)'}
• My Handle / Contact: ${contactInfo || '(Not specified)'}

Description & Goals:
${description || '(Provide a brief overview)'}

Looking forward to your feedback and community guidance!

Regards,
IIIT Kalyani Student Builder`
  );

  const mailtoLink = `mailto:${CLUB_METADATA.email}?subject=${mailSubject}&body=${mailBody}`;

  const copyTemplate = () => {
    const text = `Project Pitch for FOSS Club IIIT Kalyani:\n- Name: ${projectName}\n- Repo: ${repoUrl}\n- Stack: ${techStack}\n- Contact: ${contactInfo}\n- Details: ${description}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="submit-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="bg-[#12151b] border border-[#2b323e] rounded-2xl max-w-lg w-full p-6 text-zinc-200 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
          <Sparkles className="w-4 h-4" />
          <span>STUDENT REPOSITORY PIPELINE</span>
        </div>

        <h3 id="submit-modal-title" className="text-xl font-bold text-white mb-2">
          Pitch Your Open-Source Project
        </h3>

        <p className="text-xs text-zinc-400 leading-relaxed mb-6 font-sans">
          Whether you&apos;re crafting a command-line tool, an OS utility, or a web platform, our team will review your README, help structure issues for new contributors, and submit nominations for FOSS United student grants.
        </p>

        {submitted && (
          <div className="mb-4 p-3 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-mono flex items-start gap-2">
            <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <div>
              <strong className="block font-semibold">Pitch Draft Prepared!</strong>
              Your default email client was opened. If it didn&apos;t pop up, use the &quot;Copy Pitch&quot; button below and email to {CLUB_METADATA.email}.
            </div>
          </div>
        )}

        <form
          onSubmit={(e) => {
            e.preventDefault();
            window.open(mailtoLink, '_blank');
            setSubmitted(true);
          }}
          className="space-y-4 text-xs font-mono"
        >
          <div>
            <label className="block text-zinc-300 mb-1 font-medium">
              Project Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. kalyani-bus-tracker / rust-grep"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="w-full bg-[#0d1013] border border-zinc-800 rounded-lg px-3 py-2 text-zinc-200 focus:outline-none focus:border-emerald-500 focus-visible:ring-1 focus-visible:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-zinc-300 mb-1 font-medium">
              Repository URL (GitHub / GitLab) *
            </label>
            <input
              type="url"
              required
              placeholder="https://github.com/your-username/your-repo"
              value={repoUrl}
              onChange={(e) => setRepoUrl(e.target.value)}
              className="w-full bg-[#0d1013] border border-zinc-800 rounded-lg px-3 py-2 text-zinc-200 focus:outline-none focus:border-emerald-500 focus-visible:ring-1 focus-visible:ring-emerald-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-zinc-300 mb-1 font-medium">
                Primary Toolchain / Language
              </label>
              <input
                type="text"
                placeholder="e.g. Rust, C++, Go, TypeScript"
                value={techStack}
                onChange={(e) => setTechStack(e.target.value)}
                className="w-full bg-[#0d1013] border border-zinc-800 rounded-lg px-3 py-2 text-zinc-200 focus:outline-none focus:border-emerald-500 focus-visible:ring-1 focus-visible:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-zinc-300 mb-1 font-medium">
                Your Contact (Telegram or Email) *
              </label>
              <input
                type="text"
                required
                placeholder="@username or email"
                value={contactInfo}
                onChange={(e) => setContactInfo(e.target.value)}
                className="w-full bg-[#0d1013] border border-zinc-800 rounded-lg px-3 py-2 text-zinc-200 focus:outline-none focus:border-emerald-500 focus-visible:ring-1 focus-visible:ring-emerald-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-zinc-300 mb-1 font-medium">
              Brief Description &amp; Goals *
            </label>
            <textarea
              required
              rows={3}
              placeholder="What does it do? What kind of help or review are you seeking?"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-[#0d1013] border border-zinc-800 rounded-lg px-3 py-2 text-zinc-200 focus:outline-none focus:border-emerald-500 focus-visible:ring-1 focus-visible:ring-emerald-500 font-sans"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-2">
            <button
              type="submit"
              className="flex-1 py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-emerald-950/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <Send className="w-4 h-4" />
              <span>Send via Email Client</span>
            </button>

            <button
              type="button"
              onClick={copyTemplate}
              className="py-2.5 px-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors flex items-center justify-center gap-1.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              title="Copy pitch text"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Pitch</span>
                </>
              )}
            </button>
          </div>
        </form>

        <div className="mt-4 pt-4 border-t border-zinc-800/80 text-[11px] font-mono text-zinc-500 flex items-center justify-between">
          <span>Target: {CLUB_METADATA.email}</span>
          <a
            href="https://t.me/fossclubiiitkalyani"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:underline flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded px-1"
          >
            <span>Or pitch on Telegram</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
