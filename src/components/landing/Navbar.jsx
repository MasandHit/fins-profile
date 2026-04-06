import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { TrendingUp, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border/50' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-primary" />
          </div>
          <span className="text-xl font-bold text-foreground tracking-tight">FinSeek</span>
          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">AI</span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {['features', 'pricing'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors capitalize"
            >
              {item}
            </button>
          ))}
          <Button onClick={() => scrollTo('waitlist')} className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
            Join Waitlist
          </Button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {['features', 'pricing'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors capitalize text-left"
                >
                  {item}
                </button>
              ))}
              <Button onClick={() => scrollTo('waitlist')} className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-full">
                Join Waitlist
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}