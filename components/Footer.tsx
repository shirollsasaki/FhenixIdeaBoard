import { Twitter, MessageCircle, Send } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    {
      href: 'https://x.com/fhenix',
      label: 'Twitter',
      icon: Twitter,
    },
    {
      href: 'https://discord.com/invite/FuVgxrvJMY',
      label: 'Discord',
      icon: MessageCircle,
    },
    {
      href: 'https://t.me/+OEO4CItQYh8xYzNh',
      label: 'Telegram',
      icon: Send,
    },
  ];

  return (
    <footer className="bg-gray-900 text-white mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Branding */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <div>
              <div className="text-lg font-bold">Fhenix Idea Board</div>
              <div className="text-sm text-gray-400">Building the future with FHE</div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                  aria-label={link.label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>

          {/* Links */}
          <div className="flex items-center space-x-6 text-sm">
            <a
              href="https://www.fhenix.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Website
            </a>
            <a
              href="https://cofhe-docs.fhenix.zone/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Documentation
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Fhenix. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
