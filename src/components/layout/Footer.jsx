import React from "react";

const FacebookIcon = ({ className = "" }) => (
  <svg
    aria-hidden="true"
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M13.5 21v-7h2.3l.4-3h-2.7V9.1c0-.9.2-1.6 1.5-1.6H16V4.9c-.5-.1-1.4-.2-2.4-.2-2.4 0-4 1.5-4 4.2V11H7v3h2.2v7h4.3Z" />
  </svg>
);

const InstagramIcon = ({ className = "" }) => (
  <svg
    aria-hidden="true"
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.3" cy="6.7" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

const TikTokIcon = ({ className = "" }) => (
  <svg
    aria-hidden="true"
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M14.8 3c.3 1.8 1.4 3.5 3.2 4.2.8.3 1.6.5 2.4.5v2.8c-1.1 0-2.3-.2-3.3-.7-.5-.2-.9-.5-1.4-.8v6.3c0 3-2.3 5.4-5.3 5.4S5 18.3 5 15.4 7.4 10 10.3 10c.3 0 .7 0 1 .1v2.9c-.3-.1-.6-.2-1-.2-1.4 0-2.5 1.1-2.5 2.5s1.1 2.6 2.5 2.6 2.6-1.1 2.6-2.6V3h1.9Z" />
  </svg>
);

const YouTubeIcon = ({ className = "" }) => (
  <svg
    aria-hidden="true"
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M21.6 7.2a2.9 2.9 0 0 0-2-2C17.8 4.7 12 4.7 12 4.7s-5.8 0-7.6.5a2.9 2.9 0 0 0-2 2C2 9 2 12 2 12s0 3 .4 4.8a2.9 2.9 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.9 2.9 0 0 0 2-2C22 15 22 12 22 12s0-3-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" />
  </svg>
);

const WhatsAppIcon = ({ className = "" }) => (
  <svg
    aria-hidden="true"
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 3.2a8.7 8.7 0 0 0-7.5 13.2L3.2 21l4.8-1.3A8.8 8.8 0 1 0 12 3.2Zm0 15.8c-1.3 0-2.6-.3-3.7-1l-.3-.2-2.8.8.8-2.7-.2-.3a7 7 0 1 1 6.2 3.4Zm3.8-5.2c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.5.1l-.4.5c-.1.1-.3.2-.5.1a5.7 5.7 0 0 1-2.8-2.5c-.1-.2 0-.3.1-.5l.3-.4.2-.3a.4.4 0 0 0 0-.4l-.7-1.6c-.1-.2-.2-.2-.4-.2h-.3a.7.7 0 0 0-.5.2c-.2.2-.8.8-.8 2s.8 2.3.9 2.5A7 7 0 0 0 13 16c.8.3 1.5.5 2 .3.6-.2 1.2-.8 1.4-1.2.2-.5.2-.9.1-1 0-.1-.2-.2-.4-.3Z" />
  </svg>
);

const socialLinks = [
  { label: "WhatsApp", Icon: WhatsAppIcon, href: "https://wa.me/263775179744" },
  {
    label: "Facebook",
    Icon: FacebookIcon,
    href: "https://www.facebook.com/share/1CdzTfWuaQ/?mibextid=wwXIfr",
  },
  {
    label: "Instagram",
    Icon: InstagramIcon,
    href: "https://instagram.com/travel_asambe",
  },
  {
    label: "TikTok",
    Icon: TikTokIcon,
    href: "https://tiktok.com/@travelasambe",
  },
  {
    label: "YouTube",
    Icon: YouTubeIcon,
    href: "https://youtube.com/@TravelAsambe",
  },
];

function Footer() {
  return (
    <footer className="bg-[#f1f3f5] text-[#161b1d]">
      <div className="mx-auto max-w-6xl px-6 py-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-[#4f5658]">
            © 2026 codewithdavies.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            {socialLinks.map((socialLink) => (
              <a
                key={socialLink.label}
                href={socialLink.href}
                target="_blank"
                rel="noreferrer"
                aria-label={socialLink.label}
                className="flex h-10 w-10 items-center justify-center border border-black/10 bg-white text-[#161b1d] transition hover:-translate-y-0.5 hover:border-[#223441] hover:text-[#223441]"
                style={{ borderRadius: "2px" }}
              >
                <socialLink.Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;