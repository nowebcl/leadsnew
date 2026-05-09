'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CATEGORIES, PRODUCTS, Category, Product, WHATSAPP_NUMBER } from '@/data/catalog';
import { 
  Bot, 
  ShoppingBag, 
  Cpu, 
  ChevronRight, 
  ArrowLeft, 
  Check,
  MessageCircle,
  ExternalLink,
  Briefcase,
  Calendar,
  Sparkles,
  HardHat,
  Utensils,
  Stethoscope,
  GraduationCap,
  Hammer,
  Plus
} from 'lucide-react';

const iconMap = {
  Bot: Bot,
  ShoppingBag: ShoppingBag,
  Cpu: Cpu
};

const INDUSTRIES = [
  { id: 'construction', label: 'Construcción', icon: HardHat },
  { id: 'fashion', label: 'Ropa / Moda', icon: ShoppingBag },
  { id: 'food', label: 'Comida / Resto', icon: Utensils },
  { id: 'health', label: 'Salud / Bienestar', icon: Stethoscope },
  { id: 'services', label: 'Servicios Prof.', icon: Briefcase },
  { id: 'education', label: 'Educación / Tech', icon: GraduationCap },
  { id: 'other', label: 'Otro', icon: Plus }
];

const DEADLINES = [
  { id: 'asap', label: 'Lo antes posible ⚡', value: 'Urgente' },
  { id: 'month', label: 'En 1 mes 📅', value: '1 mes' },
  { id: 'three-months', label: 'En 2-3 meses ⏳', value: '2-3 meses' },
  { id: 'planning', label: 'Solo cotizando 🔍', value: 'Solo cotizando' }
];

const TOTAL_STEPS = 6;

export default function QuoteGenerator() {
  const [step, setStep] = useState(1);
  const [industry, setIndustry] = useState('');
  const [otherIndustry, setOtherIndustry] = useState('');
  const [deadline, setDeadline] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = selectedCategory 
    ? PRODUCTS.filter(p => p.category === selectedCategory.id)
    : [];

  const reset = () => {
    setStep(1);
    setIndustry('');
    setOtherIndustry('');
    setDeadline('');
    setSelectedCategory(null);
    setSelectedProduct(null);
  };

  const generateWhatsAppLink = () => {
    if (!selectedProduct) return '#';
    const finalIndustry = industry === 'Otro' ? (otherIndustry || 'Otro') : industry;
    const message = `Hola Noweb! 👋 Vengo del cotizador instantáneo.\n\n💼 *Negocio:* ${finalIndustry}\n📅 *Plazo:* ${deadline}\n🚀 *Interés:* ${selectedProduct.name}\n💰 *Presupuesto:* ${selectedProduct.price}`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  const progress = (step / TOTAL_STEPS) * 100;

  return (
    <div className="w-full max-w-lg h-full flex flex-col p-6 max-h-screen overflow-hidden justify-between">
      {/* Progress Bar & Navigation */}
      <div className="pt-2 mb-6">
        <div className="flex items-center justify-between mb-4">
          {step > 1 ? (
            <button 
              onClick={() => (step === 2 && industry !== 'Otro' ? setStep(1) : setStep(step - 1))}
              className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors"
            >
              <ArrowLeft size={18} />
              <span className="text-xs font-bold uppercase tracking-widest">Atrás</span>
            </button>
          ) : (
            <div className="w-10 h-10" />
          )}
          
          <div className="text-right">
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Paso {step} de {TOTAL_STEPS}</span>
          </div>
        </div>
        
        {/* Progress bar line */}
        <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden border border-white/5">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="h-full bg-primary shadow-[0_0_10px_rgba(124,58,237,0.5)]"
          />
        </div>
      </div>

      {/* Structured Header */}
      <header className="mb-8">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-1"
        >
          <span className="text-primary text-[11px] font-bold uppercase tracking-widest flex items-center gap-2">
            <div className="w-4 h-[1px] bg-primary/40" /> 
            {step === 1 && "Personalización"}
            {step === 2 && "Detalle Rubro"}
            {step === 3 && "Planificación"}
            {step === 4 && "Servicio"}
            {step === 5 && "Selección de Plan"}
            {step === 6 && "Presupuesto Final"}
          </span>
          <h1 className="text-4xl font-black text-white leading-tight tracking-tight">
            {step === 1 && "¿Cuál es tu rubro?"}
            {step === 2 && "¿Qué rubro es?"}
            {step === 3 && "¿Para cuándo lo quieres?"}
            {step === 4 && "¿Qué buscas hoy?"}
            {step === 5 && selectedCategory?.name}
            {step === 6 && "Tu Presupuesto"}
          </h1>
        </motion.div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto pr-1 custom-scrollbar">
        <AnimatePresence mode="wait">
          {/* Step 1: Industry Selection */}
          {step === 1 && (
            <motion.div key="s1" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} className="grid grid-cols-2 gap-4">
              {INDUSTRIES.map((ind) => (
                <button
                  key={ind.id}
                  onClick={() => { setIndustry(ind.label); ind.id === 'other' ? setStep(2) : setStep(3); }}
                  className="glass p-5 rounded-2xl flex flex-col items-center justify-center gap-4 text-center transition-all active:scale-95 group border-white/5"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <ind.icon size={24} />
                  </div>
                  <span className="font-bold text-sm text-white leading-none">{ind.label}</span>
                </button>
              ))}
            </motion.div>
          )}

          {/* Step 2: Other Input */}
          {step === 2 && (
            <motion.div key="s2" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col gap-3">
              <input
                autoFocus
                placeholder="Ej: Inmobiliaria..."
                value={otherIndustry}
                onChange={(e) => setOtherIndustry(e.target.value)}
                className="glass w-full text-white p-5 rounded-2xl outline-none border-primary/20 focus:border-primary transition-all"
              />
              <button onClick={() => setStep(3)} className="bg-primary text-white font-black py-5 rounded-2xl transition-all shadow-lg shadow-primary/20">Continuar</button>
            </motion.div>
          )}

          {/* Step 3: Deadline */}
          {step === 3 && (
            <motion.div key="s3" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="grid gap-3">
              {DEADLINES.map((d) => (
                <button
                  key={d.id}
                  onClick={() => { setDeadline(d.value); setStep(4); }}
                  className={`glass p-6 rounded-2xl text-left flex justify-between items-center transition-all active:scale-95 ${deadline === d.value ? 'border-primary bg-primary/10' : 'border-white/5'}`}
                >
                  <span className="font-bold text-base text-white">{d.label}</span>
                  {deadline === d.value && <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white"><Check size={14} /></div>}
                </button>
              ))}
            </motion.div>
          )}

          {/* Step 4: Categories */}
          {step === 4 && (
            <motion.div key="s4" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="grid gap-4">
              {CATEGORIES.map((cat) => {
                const Icon = iconMap[cat.icon as keyof typeof iconMap];
                return (
                  <button
                    key={cat.id}
                    onClick={() => { setSelectedCategory(cat); setStep(5); }}
                    className="glass p-5 rounded-2xl flex items-center gap-4 text-left border-white/5 active:scale-95 transition-all"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary"><Icon size={24} /></div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-white">{cat.name}</h3>
                      <p className="text-zinc-500 text-xs leading-tight">{cat.description}</p>
                    </div>
                    <ChevronRight size={20} className="text-zinc-700" />
                  </button>
                );
              })}
            </motion.div>
          )}

          {/* Step 5: Products */}
          {step === 5 && (
            <motion.div key="s5" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="grid gap-3">
              {filteredProducts.map((prod) => (
                <button
                  key={prod.id}
                  onClick={() => { setSelectedProduct(prod); setStep(6); }}
                  className="glass p-6 rounded-2xl flex justify-between items-center border-white/5 active:scale-95 transition-all"
                >
                  <div className="flex flex-col gap-1">
                    <h3 className="font-bold text-lg text-white">{prod.name}</h3>
                    <p className="text-zinc-500 text-xs">{prod.description}</p>
                  </div>
                  <span className="text-primary font-black text-xl">{prod.price.replace(' CLP', '')}</span>
                </button>
              ))}
            </motion.div>
          )}

          {/* Step 6: Summary */}
          {step === 6 && selectedProduct && (
            <motion.div key="s6" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col gap-6">
              <div className="glass p-8 rounded-[2rem] relative overflow-hidden border-primary/20 bg-primary/5">
                <div className="absolute -top-10 -right-10 opacity-10 pointer-events-none">
                   <Sparkles size={200} className="text-primary" />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-primary font-black text-[11px] uppercase tracking-[0.2em] mb-4">
                    <Sparkles size={14} /> Tu Propuesta Noweb
                  </div>

                  <h2 className="text-3xl font-black text-white mb-8 leading-tight">{selectedProduct.name}</h2>
                  
                  <div className="space-y-6 mb-8">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center text-primary shadow-inner">
                        <Briefcase size={18} />
                      </div>
                      <div>
                        <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest mb-1">Rubro</p>
                        <p className="text-white text-sm font-medium">{industry === 'Otro' ? otherIndustry : industry}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center text-primary shadow-inner">
                        <Calendar size={18} />
                      </div>
                      <div>
                        <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest mb-1">Prioridad</p>
                        <p className="text-white text-sm font-medium">{deadline}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-zinc-950/80 rounded-2xl border border-white/10 flex flex-col gap-1 items-center">
                     <span className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">Inversión Total Estimada</span>
                     <span className="text-4xl font-black text-primary">{selectedProduct.price}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Final Action */}
      <div className="pt-8 pb-4">
        {step === 6 ? (
          <div className="flex flex-col gap-4">
            <a href={generateWhatsAppLink()} target="_blank" className="w-full bg-primary text-white font-black py-6 rounded-2xl flex items-center justify-center gap-3 shadow-[0_20px_50px_rgba(124,58,237,0.3)] active:scale-95 transition-all text-xl">
              <MessageCircle size={28} /> Hablar con un Experto
            </a>
            <button onClick={reset} className="w-full text-zinc-500 text-sm font-bold hover:text-white transition-colors">Volver a cotizar</button>
          </div>
        ) : (
          <div className="text-center opacity-40">
            <p className="text-[10px] font-bold text-zinc-500 flex items-center justify-center gap-2 tracking-[0.1em]">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              COTIZACIÓN EN TIEMPO REAL
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
