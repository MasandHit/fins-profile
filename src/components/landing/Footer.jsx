import React from 'react';
import { TrendingUp } from "lucide-react";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-primary" />
          </div>
          <span className="text-lg font-bold text-foreground">FinSeek AI</span>
        </div>

        <div className="flex items-center gap-6">
          <Link
            to="/privacy"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Terms & Conditions
          </Link>
        </div>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} FinSeek AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}