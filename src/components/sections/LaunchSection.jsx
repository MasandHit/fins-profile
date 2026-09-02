import { motion } from "framer-motion";
import { ArrowRight, Apple, Play } from "lucide-react";

const BETA_URL = "https://beta.finseekai.com";
const APP_STORE_URL = BETA_URL;
const PLAY_STORE_URL = BETA_URL;
const STORES_LIVE = false;

export default function LaunchSection() {
  return (
    <section id="launch" className="relative w-full flex-1 flex items-center justify-center px-6 ">
      <div className="max-w-3xl w-full text-center">

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-xs uppercase tracking-widest text-blue-300 font-medium">Public Beta Now Live</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
        >
          Your AI financial copilot,{" "}
          <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">ready to try.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl mx-auto"
        >
          Jump into the beta on the web now, or grab the mobile app when it drops.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center gap-6"
        >
          <a href={BETA_URL} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold text-base hover:bg-gray-100 transition-all duration-200 shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.25)]">
            Try the Beta
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <div className="flex items-center gap-4 w-full max-w-xs my-2">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-xs text-gray-500 uppercase tracking-widest">Or get the app</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
            <StoreButton href={APP_STORE_URL} icon={<Apple className="w-5 h-5" />} label="Download on the" store="App Store" comingSoon={!STORES_LIVE} />
            <StoreButton href={PLAY_STORE_URL} icon={<Play className="w-5 h-5" />} label="Get it on" store="Google Play" comingSoon={!STORES_LIVE} />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function StoreButton({ href, icon, label, store, comingSoon }) {
  const content = (
    <>
      <span className="text-white">{icon}</span>
      <div className="flex flex-col items-start leading-tight">
        <span className="text-[10px] uppercase tracking-wider text-gray-400">{label}</span>
        <span className="text-sm font-semibold text-white">{store}</span>
      </div>
      {comingSoon && (
        <span className="absolute -top-2 -right-2 px-2 py-0.5 text-[9px] uppercase tracking-wider rounded-full bg-blue-500 text-white font-semibold shadow-lg">Soon</span>
      )}
    </>
  );

  const baseClasses = "group relative flex-1 flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-white/5 border border-white/10 transition-all duration-200";

  if (comingSoon) {
    return (
      <div className={`${baseClasses} opacity-60 cursor-not-allowed`}>
        {content}
      </div>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${baseClasses} hover:bg-white/10 hover:border-white/20`}>
      {content}
    </a>
  );
}