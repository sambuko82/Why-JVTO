import React from 'react';
import { 
  MapPin, 
  ArrowLeft, 
  Mountain, 
  Waves, 
  Camera, 
  Compass,
  ChevronRight,
  Star,
  Clock,
  Navigation,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Info,
  Calendar,
  Share2
} from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { SSOT } from '../../lib/ssot';
import { PageSEO } from '../../components/PageSEO';
import { motion } from 'motion/react';

export default function DestinationDetail() {
  const navigate = useNavigate();
  const { destinationId } = useParams();
  const onBack = () => navigate('/destinations');
  
  const route = `/destinations/${destinationId}`;
  const meta = SSOT.pages[route];

  const destinationData: Record<string, any> = {
    'ojen-crater': {
      title: 'Ijen Crater',
      image: 'https://picsum.photos/seed/ijen/1920/1080',
      category: 'Volcano',
      duration: '1-2 Days',
      description: 'The world\'s largest acidic crater lake and the home of the rare blue fire phenomenon.',
      highlights: ['Blue Fire Phenomenon', 'Acidic Crater Lake', 'Sulfur Miners', 'Sunrise Views'],
      safety: 'Mandatory health screening required. Gas masks provided.'
    },
    'mount-bromo': {
      title: 'Mount Bromo',
      image: 'https://picsum.photos/seed/bromo/1920/1080',
      category: 'Volcano',
      duration: '1-2 Days',
      description: 'The most iconic sunrise in Indonesia, featuring an active volcano in a vast sea of sand.',
      highlights: ['Sunrise at Penanjakan', 'Bromo Crater Hike', 'Sea of Sand', 'Luhur Poten Temple'],
      safety: 'Active volcano monitoring. Safe viewing zones enforced.'
    },
    'tumpak-sewu-waterfall': {
      title: 'Tumpak Sewu',
      image: 'https://picsum.photos/seed/tumpaksewu/1920/1080',
      category: 'Waterfall',
      duration: '1 Day',
      description: 'A thousand waterfalls cascading down a semicircular cliff. A true hidden paradise.',
      highlights: ['Panorama Viewpoint', 'Bottom of the Falls Hike', 'Goa Tetes Cave', 'River Trekking'],
      safety: 'Slippery terrain. Professional guides mandatory.'
    },
    'madakaripura-waterfall': {
      title: 'Madakaripura',
      image: 'https://picsum.photos/seed/madakaripura/1920/1080',
      category: 'Waterfall',
      duration: '1 Day',
      description: 'The eternal waterfall, believed to be the meditation place of Gajah Mada.',
      highlights: ['Eternal Waterfall', 'Deep Canyon Trek', 'Gajah Mada Statue', 'Sacred Atmosphere'],
      safety: 'Wet conditions. Raincoats and waterproof gear recommended.'
    },
    'papuma-beach': {
      title: 'Papuma Beach',
      image: 'https://picsum.photos/seed/papuma/1920/1080',
      category: 'Beach',
      duration: '1 Day',
      description: 'White sands and dramatic rock formations on the southern coast of Jember.',
      highlights: ['White Sand Beach', 'Rock Formations', 'Sunset Views', 'Local Seafood'],
      safety: 'Strong southern currents. Swimming only in designated areas.'
    }
  };

  const data = destinationData[destinationId || ''] || destinationData['ijen-crater'];

  if (!destinationId || !destinationData[destinationId]) {
    // Fallback or 404
  }

  return (
    <div className="min-h-screen bg-white text-authority-navy font-sans selection:bg-safety-orange/30 pb-24 md:pb-0">
      {/* Header */}
      <div className="border-b border-slate-100 bg-white/80 relative z-40 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="group flex items-center gap-3 text-[11px] font-mono font-bold text-slate-500 hover:text-authority-navy transition-all uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Registry
          </button>
          <div className="flex items-center gap-3 text-safety-orange text-[11px] font-mono font-bold uppercase tracking-[0.2em]">
            <MapPin className="w-4 h-4" /> {data.title}
          </div>
        </div>
      </div>

      <div className="relative h-[70vh] overflow-hidden">
        <img 
          src={data.image} 
          alt={data.title}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
        <div className="absolute bottom-24 left-0 right-0">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="px-4 py-2 bg-safety-orange text-white text-[11px] font-mono font-black uppercase tracking-widest rounded-full">
                  {data.category}
                </span>
                <span className="px-4 py-2 bg-white/80 backdrop-blur-md text-authority-navy text-[11px] font-mono font-black uppercase tracking-widest rounded-full border border-slate-200">
                  <Clock className="w-3 h-3 inline mr-2" /> {data.duration}
                </span>
              </div>
              <h1 className="text-6xl md:text-9xl font-black text-authority-navy uppercase tracking-tighter leading-[0.85] mb-8">
                {meta?.h1 || data.title + '.'}
              </h1>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24 max-w-6xl relative z-10">
        <PageSEO route={route as any} />
        
        <div className="grid lg:grid-cols-3 gap-24">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-8">Overview</h2>
              <p className="text-2xl text-slate-500 leading-tight font-light">
                {data.description}
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-8">Highlights</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {data.highlights.map((highlight: string, i: number) => (
                  <div key={i} className="flex items-center gap-4 p-6 bg-slate-50 rounded-3xl border border-slate-100">
                    <CheckCircle2 className="w-6 h-6 text-safety-orange shrink-0" />
                    <span className="text-lg font-bold uppercase tracking-tight">{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="p-12 bg-safety-orange/5 rounded-[3rem] border border-safety-orange/20">
              <div className="flex items-center gap-4 mb-8">
                <ShieldCheck className="w-10 h-10 text-safety-orange" />
                <h2 className="text-3xl font-black uppercase tracking-tighter">Safety & Coordination</h2>
              </div>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                {data.safety}
              </p>
              <div className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-safety-orange/10">
                <Info className="w-6 h-6 text-safety-orange" />
                <span className="text-sm font-mono uppercase tracking-widest text-slate-500">JVTO Safety Protocol V2.1 Active</span>
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <div className="p-12 bg-authority-navy text-white rounded-[3rem] sticky top-32">
              <h3 className="text-2xl font-black uppercase tracking-tighter mb-8">Ready to Explore?</h3>
              <p className="text-white/60 mb-12 leading-relaxed">
                Book your journey with the most trusted operator in East Java.
              </p>
              <button className="w-full py-6 bg-safety-orange text-white font-black uppercase tracking-widest rounded-2xl hover:bg-white hover:text-safety-orange transition-all mb-6">
                Book This Tour
              </button>
              <button className="w-full py-6 bg-white/10 text-white font-black uppercase tracking-widest rounded-2xl hover:bg-white/20 transition-all flex items-center justify-center gap-3">
                <Share2 className="w-5 h-5" /> Share Destination
              </button>
            </div>
          </div>
        </div>
        
        {/* Footer Audit Stamp */}
        <div className="mt-32 pt-12 border-t border-slate-200 flex flex-col items-center">
          <div className="p-12 bg-white border-4 border-safety-orange rounded-[2.5rem] -rotate-2 shadow-2xl relative overflow-hidden group hover:rotate-0 transition-transform">
            <div className="scanline"></div>
            <div className="flex flex-col items-center">
              <Navigation className="w-20 h-20 text-safety-orange mb-8" />
              <span className="text-5xl font-black text-authority-navy uppercase tracking-tighter leading-none mb-3">DESTINATION_VERIFIED</span>
              <span className="font-mono text-[11px] text-slate-500 tracking-[0.4em] uppercase">JVTO Registry 2026</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
