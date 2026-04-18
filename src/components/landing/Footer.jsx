import React from 'react';
import { Link } from 'react-router-dom';
import LinkedIn from '@/components/icons/LinkedIn';
import Instagram from '@/components/icons/Instagram';

export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="FinSeek AI" className="w-8 h-8 rounded-lg" />
          <span className="text-lg font-bold text-foreground">FinSeek AI</span>
        </div>

        <div className="flex items-center gap-6">
          <Link to="/privacy" className="text-sm text-white/80 hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="text-sm text-white/80 hover:text-white transition-colors">Terms & Conditions</Link>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/company/panmas/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors group">
            <LinkedIn className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
          <a href="https://www.instagram.com/finseek_ai/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors group">
            <Instagram className="w-5 h-5" />
            <span>Instagram</span>
          </a>
        </div>

        <p className="text-sm text-white/60">© {new Date().getFullYear()} FinSeek AI. All rights reserved.</p>

      </div>
    </footer>
  );
}