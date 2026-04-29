import { motion } from 'motion/react';
import { 
  Zap, 
  Settings, 
  ShieldCheck, 
  Anchor, 
  Truck, 
  Globe, 
  ChevronRight,
  ArrowUpRight,
  Activity,
  Cpu
} from 'lucide-react';
import { useState } from 'react';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service_type: '',
    message: ''
  });

  const expertiseItems = [
    {
      category: "Precision Systems",
      items: ["Fiber Laser Systems Service", "CNC Control Logic", "Multi-Axis Calibration"],
    },
    {
      category: "Power & Logic",
      items: ["Hydraulic Logic Tuning", "Press Brake Service", "PLC Implementation"],
    },
    {
      category: "Autonomous Cells",
      items: ["Robotic Assisted Mfg", "Material Handling Logic", "Vision System Setup"],
    },
    {
      category: "Facility Tech",
      items: ["Access Control Systems", "Building Automation", "Network Infrastructure"],
    },
    {
      category: "Maritime Tech",
      items: ["Navigational Telemetry", "Ruggedized Sensor Arrays", "NMEA Data Backbones"],
    },
    {
      category: "Next-Gen",
      items: ["IoT Edge Gateways", "AI Prediction Nodes", "Fleet Telematics"],
    }
  ];

  return (
    <div className="min-h-screen mesh-bg text-slate-400 font-sans selection:bg-sky-500/30 selection:text-sky-200">
      {/* Dynamic Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div 
          animate={{
            x: [0, 40, 0],
            y: [0, 60, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-sky-500/10 rounded-full blur-[160px]"
        />
        <motion.div 
          animate={{
            x: [0, -60, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[140px]"
        />
        <motion.div 
          animate={{
            x: [0, 30, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[10%] left-[20%] w-[45%] h-[45%] bg-teal-500/10 rounded-full blur-[150px]"
        />
      </div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 glass border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-9 h-9 bg-sky-500 rounded flex items-center justify-center shadow-[0_0_20px_rgba(14,165,233,0.4)]">
              <span className="text-slate-950 font-black text-lg">K</span>
            </div>
            <span className="font-display text-xl font-bold text-white tracking-tighter uppercase font-['Space_Grotesk']">
              Kinetic<span className="text-teal-400">.</span>
            </span>
          </div>
          <div className="hidden lg:flex space-x-10 text-[11px] font-bold uppercase tracking-[0.2em]">
            <a href="#services" className="text-white hover:text-sky-400 transition">Technical Services</a>
            <a href="#integration" className="hover:text-sky-400 transition">Digital Integration</a>
            <a href="#expertise" className="hover:text-sky-400 transition">Expertise</a>
          </div>
          <a href="#contact" className="px-6 py-2 bg-sky-500/80 hover:bg-sky-400 text-slate-950 rounded-full font-bold text-xs uppercase tracking-wider transition shadow-lg shadow-sky-500/20 active:scale-95 backdrop-blur-xl border border-white/20">
            Initialize
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-52 pb-40 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div 
            {...fadeUp}
            className="inline-flex items-center space-x-2 py-2 px-4 rounded-full bg-white/5 border border-white/20 backdrop-blur-2xl text-sky-400 text-[10px] font-black uppercase tracking-[0.3em] mb-10"
          >
            <span>Field Service • Implementation • Optimization</span>
          </motion.div>
          
          <motion.h1 
            {...fadeUp}
            transition={{ delay: 0.1 }}
            className="font-display text-6xl md:text-8xl font-bold text-white mb-8 leading-[1.05] font-['Space_Grotesk']"
          >
            Building the <br/><span className="text-gradient">Autonomous Frontier</span>
          </motion.h1>
          
          <motion.p 
            {...fadeUp}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 mb-12 leading-relaxed font-light"
          >
            Kinetic Industrial Tech provides mission-critical service and system implementation for high-stakes industrial environments.
          </motion.p>
          
          <motion.div 
            {...fadeUp}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-5"
          >
            <a href="#services" className="px-10 py-5 bg-white text-slate-950 font-bold rounded-lg hover:bg-sky-400 transition-all uppercase text-sm tracking-widest active:scale-95">
              Our Capabilities
            </a>
            <a href="#contact" className="px-10 py-5 glass text-white font-bold rounded-lg hover:bg-white/10 transition-all uppercase text-sm tracking-widest border border-white/10 active:scale-95">
              Start a Project
            </a>
          </motion.div>
        </div>
      </header>

      {/* Advanced Field Technical Service */}
      <section id="services" className="py-32 px-6 relative scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeUp}>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-8 uppercase tracking-tight leading-tight font-['Space_Grotesk']">
                Advanced Field <br/><span className="text-gradient">Technical Service</span>
              </h2>
              <p className="text-slate-400 mb-10 leading-relaxed text-lg font-light">
                We specialize in the intersection of industrial hardware and digital control. Our mission is to save complex integrations from failure by deploying a multidisciplinary approach to troubleshooting and system building.
              </p>
              <div className="space-y-8">
                <div className="group flex items-start space-x-6 p-6 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all duration-500">
                  <div className="mt-1 bg-sky-500/10 p-3 rounded-2xl text-sky-400 border border-sky-500/20 shadow-[0_0_15px_rgba(14,165,233,0.15)]">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase text-sm tracking-widest mb-1">Rapid Implementation</h4>
                    <p className="text-sm font-light text-slate-500">Deployment of automated cells and tuned hardware updates for zero-lag production.</p>
                  </div>
                </div>
                <div className="group flex items-start space-x-6 p-6 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all duration-500">
                  <div className="mt-1 bg-indigo-500/10 p-3 rounded-2xl text-indigo-400 border border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.15)]">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase text-sm tracking-widest mb-1">Operational Continuity</h4>
                    <p className="text-sm font-light text-slate-500">Rigorous maintenance protocols designed to ensure your mission-critical machines stay kinetic.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { 
                  img: "/images/john.png",
                  label: "Robotic Systems",
                  offset: ""
                },
                { 
                  img: "/images/peter.png",
                  label: "Diagnostics",
                  offset: "translate-y-8"
                },
                { 
                  img: "/images/cnc.png",
                  label: "Machine Repair",
                  offset: "-translate-y-8"
                },
                { 
                  img: "/images/tb.png",
                  label: "Hardware Tuning",
                  offset: ""
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  {...fadeUp}
                  transition={{ delay: idx * 0.1 }}
                  className={`group relative aspect-square rounded-[2rem] overflow-hidden border border-white/10 card-hover bg-slate-900/50 backdrop-blur-sm ${item.offset}`}
                >
                  <img 
                    src={item.img} 
                    alt={item.label}
                    className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-70 group-hover:scale-110 transition duration-700" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent p-6 flex flex-col justify-end">
                    <h3 className="text-white font-bold uppercase text-xs tracking-[0.2em]">{item.label}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Integration Section */}
      <section id="integration" className="py-32 px-6 bg-white/[0.01] border-y border-white/10 relative overflow-hidden scroll-mt-24">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <motion.h2 {...fadeUp} className="font-display text-4xl font-bold text-white mb-6 uppercase tracking-tight font-['Space_Grotesk']">Industrial Integration</motion.h2>
            <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="max-w-2xl mx-auto font-light text-lg text-slate-400">Bridging the gap between physical infrastructure and digital intelligence.</motion.p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Cpu className="w-8 h-8 text-sky-400" />,
                title: "AI Orchestration",
                desc: "Deploying localized intelligence frameworks that allow machines to communicate, predict maintenance, and optimize output."
              },
              {
                icon: <Truck className="w-8 h-8 text-indigo-400" />,
                title: "Fleet Logistics",
                desc: "Complete telematics implementation. We install the data backbone for mobile assets to ensure visibility and asset utilization."
              },
              {
                icon: <Anchor className="w-8 h-8 text-sky-400" />,
                title: "Vessel Systems & Telemetry",
                desc: "Ruggedized building for aquatic environments—navigation aids, data integration, and remote sensor arrays for offshore ops.",
                highlight: true
              }
            ].map((card, idx) => (
              <motion.div 
                key={idx}
                {...fadeUp}
                transition={{ delay: idx * 0.1 }}
                className="p-12 glass rounded-[3rem] card-hover group shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-sky-500/10 transition-colors">
                  {card.icon}
                </div>
                <h3 className={`text-xl font-bold mb-4 uppercase tracking-tighter ${card.highlight ? 'text-sky-400' : 'text-white'}`}>
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed font-light mb-8 text-slate-400">
                  {card.desc}
                </p>
                <div className="h-1 w-12 bg-sky-400 group-hover:w-full transition-all duration-500 rounded-full"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Insight Section */}
      <section className="py-24 px-6 relative backdrop-blur-3xl bg-white/[0.01] border-b border-white/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center">
            <motion.div {...fadeUp} className="group">
                <div className="mb-6 mx-auto w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-sky-500/30 transition-colors">
                  <Activity className="w-5 h-5 text-sky-400/70" />
                </div>
                <h4 className="text-white font-bold mb-3 uppercase tracking-tighter text-xl">Legacy Friction</h4>
                <p className="text-sm font-light leading-relaxed text-slate-500 px-4">Traditional facilities are held back by hardware that can't speak to modern intelligence. We bridge that communication gap.</p>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="group">
                <div className="mb-6 mx-auto w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-indigo-400/30 transition-colors">
                  <Settings className="w-5 h-5 text-indigo-400/70" />
                </div>
                <h4 className="text-white font-bold mb-3 uppercase tracking-tighter text-xl">Technical Debt</h4>
                <p className="text-sm font-light leading-relaxed text-slate-500 px-4">Aging infrastructure shouldn't prevent you from launching autonomous agents. We retrofit and optimize for the future.</p>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="group">
                <div className="mb-6 mx-auto w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-teal-400/30 transition-colors">
                  <Zap className="w-5 h-5 text-teal-400/70" />
                </div>
                <h4 className="text-white font-bold mb-3 uppercase tracking-tighter text-xl">Autonomous Rescue</h4>
                <p className="text-sm font-light leading-relaxed text-slate-500 px-4">We architect the logic that allows your operation to solve its own problems through agentic oversight.</p>
            </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-32 px-6 scroll-mt-24">
        <motion.div 
          {...fadeUp}
          className="max-w-7xl mx-auto border border-white/10 rounded-[4rem] glass-card p-12 lg:p-20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none"></div>
          
          <div className="flex flex-col lg:flex-row gap-16 relative z-10">
            <div className="lg:w-1/3">
              <h2 className="font-display text-4xl font-bold text-white mb-6 uppercase tracking-tight font-['Space_Grotesk']">
                Technical Mastery
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-8">
                Our field experience spans multiple industrial domains, allowing us to implement solutions where traditional providers stop.
              </p>
              <div className="p-8 bg-sky-500/5 rounded-3xl border border-sky-500/10">
                <div className="flex items-center space-x-3 mb-2">
                  <Activity className="w-5 h-5 text-sky-500" />
                  <span className="text-2xl font-black text-white">30%</span>
                </div>
                <p className="text-[10px] uppercase font-bold tracking-widest text-sky-500/80 leading-tight">
                  Average Efficiency Gain <br/>Post-Integration
                </p>
              </div>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
              {expertiseItems.map((exp, idx) => (
                <div key={idx}>
                  <h4 className="text-sky-500 font-bold text-[10px] uppercase tracking-widest mb-6 py-1 px-3 bg-sky-500/5 border border-sky-500/10 rounded-full inline-block">
                    {exp.category}
                  </h4>
                  <ul className="text-sm text-slate-300 space-y-3 font-light">
                    {exp.items.map((item, i) => (
                      <li key={i} className="flex items-center space-x-2 group/item">
                        <ChevronRight className="w-3 h-3 text-sky-500 opacity-50 group-hover/item:translate-x-1 transition-transform" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 scroll-mt-24">
        <motion.div {...fadeUp} className="max-w-4xl mx-auto glass-card p-10 md:p-20 rounded-[4rem] relative overflow-hidden backdrop-saturate-200">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-sky-500/10 blur-[80px] rounded-full"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500/10 blur-[80px] rounded-full"></div>
          
          <div className="text-center mb-16 relative z-10">
            <h2 className="font-display text-4xl font-bold text-white mb-4 uppercase tracking-tight font-['Space_Grotesk']">Initialize Project</h2>
            <p className="text-slate-400 font-light">Secure a technical consultation or agent design roadmap.</p>
          </div>
          
          <form 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-4 text-left">
              <label className="text-[10px] uppercase font-bold text-sky-400 tracking-[0.2em] pl-1">Full Name</label>
              <input 
                type="text" 
                name="name" 
                required 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="John Doe"
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:border-sky-500 focus:bg-white/10 outline-none transition-all text-white placeholder:text-slate-700"
              />
            </div>
            <div className="space-y-4 text-left">
              <label className="text-[10px] uppercase font-bold text-sky-400 tracking-[0.2em] pl-1">Email Address</label>
              <input 
                type="email" 
                name="email" 
                required 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="john@company.com"
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:border-sky-500 focus:bg-white/10 outline-none transition-all text-white placeholder:text-slate-700"
              />
            </div>
            
            <div className="md:col-span-2 space-y-4 text-left">
              <label className="text-[10px] uppercase font-bold text-sky-500 tracking-[0.2em] pl-1">Primary Interest</label>
              <div className="relative">
                <select 
                  name="service_type" 
                  required 
                  value={formData.service_type}
                  onChange={(e) => setFormData({...formData, service_type: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:border-sky-500 focus:bg-white/10 outline-none transition-all text-slate-300 appearance-none cursor-pointer"
                >
                  <option value="">Select Service...</option>
                  <option value="Technical Field Service">Technical Field Service</option>
                  <option value="Agent Design & Launch">Agent Design & Launch</option>
                  <option value="Maritime Systems">Maritime Systems Deployment</option>
                  <option value="Smart Fleet Logistics">Smart Fleet Logistics</option>
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                  <ChevronRight className="w-4 h-4 rotate-90" />
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2 space-y-4 text-left">
              <label className="text-[10px] uppercase font-bold text-sky-500 tracking-[0.2em] pl-1">Technical Requirements</label>
              <textarea 
                name="message" 
                rows={5} 
                required 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:border-sky-500 focus:bg-white/10 outline-none transition-all text-white placeholder:text-slate-700 resize-none" 
                placeholder="Briefly describe your hardware or agentic needs..."
              ></textarea>
            </div>
            
            <button type="submit" className="md:col-span-2 py-6 bg-sky-500/90 hover:bg-sky-400 text-slate-950 font-black rounded-2xl uppercase text-[11px] tracking-[0.4em] transition-all shadow-xl shadow-sky-500/10 transform active:scale-[0.98] mt-4 backdrop-blur-md">
              Initialize Connection
            </button>
          </form>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 border-t border-white/5 bg-slate-950/50 backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-sky-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-slate-900 font-black text-xl">K</span>
              </div>
              <span className="font-display font-bold text-white tracking-tighter uppercase text-2xl font-['Space_Grotesk']">Kinetic Industrial</span>
            </div>
            <p className="text-[10px] text-slate-500 uppercase tracking-[0.3em] font-bold leading-loose max-w-xs">
              © 2024 Kinetic Industrial Tech. <br/> Florida Technical Building & <br/>Autonomous Integration Specialist.
            </p>
          </div>
          
          <div className="flex space-x-16 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
              <div className="flex flex-col gap-6">
                <span className="text-white opacity-20 border-b border-white/10 pb-2">Operations</span>
                <a href="#services" className="hover:text-sky-400 transition">Services</a>
                <a href="#integration" className="hover:text-sky-400 transition">Integration</a>
                <a href="#expertise" className="hover:text-sky-400 transition">Expertise</a>
              </div>
            <div className="flex flex-col gap-6">
              <span className="text-white opacity-20 border-b border-white/10 pb-2">Connect</span>
              <a href="mailto:info@kineticindustrial.tech" className="hover:text-sky-400 transition">Email Lead</a>
              <a href="#" className="hover:text-sky-400 transition">Security</a>
              <a href="#" className="hover:text-sky-400 transition">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
