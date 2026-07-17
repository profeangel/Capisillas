import { useState, useMemo } from 'react';
import { CHAIRS_DATA } from './data';
import { ChairIllustration } from './components/ChairIllustration';
import { ChairSpec, UserPreferences } from './types';
import { Check, X, ExternalLink, ShieldCheck, SlidersHorizontal, Calculator, AlertTriangle, Sparkles, DollarSign, Layers, ChevronRight, ChevronLeft, Info, HelpCircle, Heart, Award, Maximize2, RefreshCw, ShoppingBag, Sliders, User, MoveVertical, ArrowRight, ListFilter } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
 // Navigation / Views State
 const [activeTab, setActiveTab] = useState<'all' | 'compare' | 'advisor'>('all');
 
 // Comparative Table Configuration State
 const [selectedChairs, setSelectedChairs] = useState<string[]>(
 CHAIRS_DATA.map(chair => chair.id)
 );
 const [highlightDiff, setHighlightDiff] = useState<boolean>(false);
 const [sortField, setSortField] = useState<'price' | 'comfort' | 'ergonomics' | 'weight'>('price');
 const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

 // Body Fit Simulator State
 

 // Search and Filter State
   const [quickFilter, setQuickFilter] = useState<string>('all');

 // Detail Modal State
 const [detailChair, setDetailChair] = useState<ChairSpec | null>(null);

 // Interactive Illustration State for the Detail Modal
 const [detailInteractive, setDetailInteractive] = useState<{
 foldedArms: boolean;
 extendedFootrest: boolean;
 }>({
 foldedArms: false,
 extendedFootrest: false
 });
  const [showCompare, setShowCompare] = useState<boolean>(false);

 // Smart Advisor Quiz State
 const [quizStep, setQuizStep] = useState<number>(0);
 const [quizPreferences, setQuizPreferences] = useState<UserPreferences>({
 maxBudget: 120000,
 minWeightCapacity: 100,
 needsHeadrest: false,
 needsReclining: false,
 needsFootrest: false,
 needsFoldableArms: false,
 usageHours: 'medium'
 });

 // Format money helper
 const formatCLP = (val: number) => {
 return new Intl.NumberFormat('es-CL', {
 style: 'currency',
 currency: 'CLP',
 minimumFractionDigits: 0
 }).format(val);
 };

 // Toggle selection for comparison table
 const toggleChairSelection = (id: string) => {
 if (selectedChairs.includes(id)) {
 if (selectedChairs.length > 2) {
 setSelectedChairs(selectedChairs.filter(c => c !== id));
 } else {
 // Keep at least 2 for meaningful comparison
 alert("Se recomienda mantener al menos 2 sillas seleccionadas para realizar una comparación.");
 }
 } else {
 setSelectedChairs([...selectedChairs, id]);
 }
 };

 // Quick helper to categorize a chair's rating to a badge
 const getBadgeForChair = (chair: ChairSpec) => {
 switch (chair.id) {
 case 'emilia-negra':
 return { label: '🏆 Más Vendida', color: 'bg-amber-100 text-amber-950 border-[#e6dcd0]' };
 case 'emilia-blanca':
 return { label: '🎨 Estética Limpia', color: 'bg-sky-100 text-sky-950 border-[#e6dcd0]' };
 case 'serena-gris':
 return { label: '🎒 Abatible & Ahorro', color: 'bg-indigo-100 text-indigo-950 border-[#e6dcd0]' };
 case 'mesh-anatomic':
 return { label: '🧘 Ajuste Lumbar Activo', color: 'bg-emerald-100 text-emerald-950 border-[#e6dcd0]' };
 case 'ikemma-reclinable':
 return { label: '👑 Reposapiés & Siesta', color: 'bg-purple-100 text-purple-950 border-[#e6dcd0]' };
 case 'vonconn-gamer':
 return { label: '🎮 Butaca Ergo Gamer', color: 'bg-red-100 text-red-950 border-[#e6dcd0]' };
 case 'lubabycas-w901':
 return { label: '⚖️ Mejor Calidad-Precio', color: 'bg-teal-100 text-teal-950 border-[#e6dcd0]' };
 case 'emilio-premium':
 return { label: '☁️ Doble Acolchado PU', color: 'bg-pink-100 text-pink-950 border-[#e6dcd0]' };
 default:
 return { label: '⭐ Destacada', color: 'bg-slate-100 text-slate-950 border-[#e6dcd0]' };
 }
 };

 

 // Filter & Sort core chairs list
 const filteredChairs = useMemo(() => {
 return CHAIRS_DATA.filter(chair => {
 

 // Quick filter tabs
 let quickMatch = true;
 if (quickFilter === 'headrest') {
 quickMatch = chair.ergonomics.headrest !== 'No incluye';
 } else if (quickFilter === 'recline') {
 quickMatch = chair.adjustments.footrest || chair.adjustments.recline.includes('135');
 } else if (quickFilter === 'armrests') {
 quickMatch = chair.adjustments.armrests.includes('Abatibles') || chair.adjustments.armrests.includes('pliegan');
 } else if (quickFilter === 'under80') {
 quickMatch = chair.price < 80000;
 }

 return quickMatch;
 }).sort((a, b) => {
 let comparison = 0;
 if (sortField === 'price') {
 comparison = a.price - b.price;
 } else if (sortField === 'comfort') {
 comparison = a.ratings.comfort - b.ratings.comfort;
 } else if (sortField === 'ergonomics') {
 comparison = a.ratings.ergonomics - b.ratings.ergonomics;
 } else if (sortField === 'weight') {
 comparison = a.maxWeight - b.maxWeight;
 }

 return sortDirection === 'asc' ? comparison : -comparison;
 });
 }, [quickFilter, sortField, sortDirection]);


 // Check if properties have differences for visual highlighting
 const checkDifference = (key: 'price' | 'headrest' | 'recline' | 'armrests' | 'maxWeight' | 'footrest') => {
 const activeChairs = CHAIRS_DATA.filter(c => selectedChairs.includes(c.id));
 if (activeChairs.length <= 1) return false;

 if (key === 'price') {
 const val = activeChairs[0].price;
 return activeChairs.some(c => c.price !== val);
 }
 if (key === 'headrest') {
 const val = activeChairs[0].ergonomics.headrest;
 return activeChairs.some(c => c.ergonomics.headrest !== val);
 }
 if (key === 'recline') {
 const val = activeChairs[0].adjustments.recline;
 return activeChairs.some(c => c.adjustments.recline !== val);
 }
 if (key === 'armrests') {
 const val = activeChairs[0].adjustments.armrests;
 return activeChairs.some(c => c.adjustments.armrests !== val);
 }
 if (key === 'maxWeight') {
 const val = activeChairs[0].maxWeight;
 return activeChairs.some(c => c.maxWeight !== val);
 }
 if (key === 'footrest') {
 const val = activeChairs[0].adjustments.footrest;
 return activeChairs.some(c => c.adjustments.footrest !== val);
 }
 return false;
 };

 const handleOpenDetail = (chair: ChairSpec) => {
 setDetailChair(chair);
 setDetailInteractive({
 foldedArms: false,
 extendedFootrest: false
 });
 };

 return (
 <div className="min-h-screen bg-[#fdfbf7] font-sans text-[#4a4036] transition-all duration-300">
 
 {/* Upper Micro Header */}
 <div className="bg-[#8a7a6c] text-[#fdfbf7]/90 border-b border-[#fdfbf7]/20 py-2 px-4 text-xs font-sans tracking-wide flex justify-between items-center">
 <span>📍 Comparación de Mercado Libre Chile (Precios en CLP)</span>
 <span className="hidden sm:inline">Actualizado: Julio 2026</span>
 </div>

 {/* Main Interactive Header */}
 <header className="bg-white border-b border-[#e6dcd0] py-8 px-4 md:px-8">
 <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6">
 <div className="space-y-3">
 <span className="text-xs font-sans tracking-widest text-[#8a7a6c] block">Product Comparison Matrix</span>
 <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-none font-serif text-[#4a4036]">
 Capicomparación de sillas <span className="not-italic text-3xl">🦫</span>
 </h1>
 </div>

 {/* Quick Metrics at Glance styled to Artistic theme */}
 <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-white p-3 border border-[#e6dcd0] rounded-2xl shrink-0 shadow-md shadow-[#cbbda9]/30">
 <div className="text-center p-2 bg-[#fdfbf7] border border-[#e6dcd0] rounded-2xl">
 <span className="text-[9px] font-sans tracking-wider text-[#8a7a6c] block">Opción Económica</span>
 <span className="text-xs font-semibold font-sans text-emerald-600">{formatCLP(49990)}</span>
 <span className="text-[9px] text-[#cbbda9] block mt-0.5">Silla Emilia</span>
 </div>
 <div className="text-center p-2 bg-[#fdfbf7] border border-[#e6dcd0] rounded-2xl">
 <span className="text-[9px] font-sans tracking-wider text-[#8a7a6c] block">Opción Premium</span>
 <span className="text-xs font-semibold font-sans text-purple-600">{formatCLP(127390)}</span>
 <span className="text-[9px] text-[#cbbda9] block mt-0.5">Silla Emilio</span>
 </div>
 <div className="text-center p-2 bg-[#fdfbf7] border border-[#e6dcd0] rounded-2xl col-span-2 sm:col-span-1">
 <span className="text-[9px] font-sans tracking-wider text-[#8a7a6c] block">Soporte Máximo</span>
 <span className="text-xs font-semibold font-sans text-[#b85b45]">Hasta 200 kg</span>
 <span className="text-[9px] text-[#cbbda9] block mt-0.5">Silla Emilio</span>
 </div>
 </div>
 </div>
 </header>

 {/* Main Container */}
 <main className="max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-8">
 
 {/* Navigation Tabs bar */}
 {/* Navigation Tabs bar - Styled to Artistic theme */}
 <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 bg-white p-4 border border-[#e6dcd0] shadow-md shadow-[#cbbda9]/30 rounded-2xl">
 <div className="flex flex-wrap p-1 gap-1.5 bg-[#f4efe8] border border-[#e6dcd0] rounded-2xl">
 <button
 onClick={() => setActiveTab('all')}
 className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer rounded-2xl ${
 activeTab === 'all'
 ? 'bg-[#8a7a6c] text-[#fdfbf7]'
 : 'text-[#4a4036] hover:bg-[#eadecc]'
 }`}
 >
 <Layers className="w-4 h-4" />
 <span>Catálogo Individual</span>
 </button>
 <button
 onClick={() => setActiveTab('compare')}
 className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer rounded-2xl ${
 activeTab === 'compare'
 ? 'bg-[#8a7a6c] text-[#fdfbf7]'
 : 'text-[#4a4036] hover:bg-[#eadecc]'
 }`}
 >
 <SlidersHorizontal className="w-4 h-4" />
 <span>Tabla Comparativa</span>
 </button>
 <button
 onClick={() => setActiveTab('advisor')}
 className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer rounded-2xl ${
 activeTab === 'advisor'
 ? 'bg-[#8a7a6c] text-[#fdfbf7]'
 : 'text-[#4a4036] hover:bg-[#eadecc]'
 }`}
 >
 <Sparkles className="w-4 h-4" />
 <span>Asesor de Compra</span>
 </button>
 </div>

 </div>
{/* ======================================= */}
 {/* VIEW 1: CATALOG CARD GRID VIEW */}
 {/* ======================================= */}
        {activeTab === 'all' && (
          <div className="space-y-6">
            {/* Filters panel - Styled to Artistic theme */}
  <div className="bg-white rounded-2xl border border-[#e6dcd0] p-5 shadow-md shadow-[#cbbda9]/30">
    <div className="flex flex-row flex-wrap items-center justify-between gap-4 text-xs">
      
      {/* Quick preset filters */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-[#8a7a6c] font-semibold tracking-wide font-sans mr-1">Filtros Rápidos:</span>
        <button
          onClick={() => setQuickFilter('all')}
          className={`px-3 py-1 rounded-2xl border border-[#e6dcd0] transition-all cursor-pointer font-semibold text-[10px] tracking-wider shadow-sm shadow-[#cbbda9]/30 ${
            quickFilter === 'all'
              ? 'bg-[#8a7a6c] text-[#fdfbf7]'
              : 'bg-white text-[#4a4036] hover:bg-[#f4efe8]'
          }`}
        >
          Todas las sillas
        </button>
        <button
          onClick={() => setQuickFilter('headrest')}
          className={`px-3 py-1 rounded-2xl border border-[#e6dcd0] transition-all cursor-pointer font-semibold text-[10px] tracking-wider shadow-sm shadow-[#cbbda9]/30 ${
            quickFilter === 'headrest'
              ? 'bg-[#b85b45] text-white'
              : 'bg-white text-[#b85b45] hover:bg-blue-50'
          }`}
        >
          Con Apoyacabeza
        </button>
        <button
          onClick={() => setQuickFilter('recline')}
          className={`px-3 py-1 rounded-2xl border border-[#e6dcd0] transition-all cursor-pointer font-semibold text-[10px] tracking-wider shadow-sm shadow-[#cbbda9]/30 ${
            quickFilter === 'recline'
              ? 'bg-purple-600 text-white'
              : 'bg-white text-purple-600 hover:bg-purple-50'
          }`}
        >
          Reclinable / Reposapiés
        </button>
        <button
          onClick={() => setQuickFilter('armrests')}
          className={`px-3 py-1 rounded-2xl border border-[#e6dcd0] transition-all cursor-pointer font-semibold text-[10px] tracking-wider shadow-sm shadow-[#cbbda9]/30 ${
            quickFilter === 'armrests'
              ? 'bg-indigo-600 text-white'
              : 'bg-white text-indigo-700 hover:bg-indigo-50'
          }`}
        >
          Brazos Abatibles
        </button>
        <button
          onClick={() => setQuickFilter('under80')}
          className={`px-3 py-1 rounded-2xl border border-[#e6dcd0] transition-all cursor-pointer font-semibold text-[10px] tracking-wider shadow-sm shadow-[#cbbda9]/30 ${
            quickFilter === 'under80'
              ? 'bg-emerald-600 text-white'
              : 'bg-white text-emerald-700 hover:bg-emerald-50'
          }`}
        >
          Económicas (&lt; $80.000)
        </button>
      </div>

      {/* Sort logic selector */}
      <div className="flex items-center gap-2 shrink-0 self-start lg:self-auto">
        <span className="text-xs text-[#8a7a6c] font-bold font-sans shrink-0">Ordenar por:</span>
        <select
          value={sortField}
          onChange={(e) => setSortField(e.target.value as any)}
          className="text-xs font-semibold tracking-wide text-[#8a7a6c] text-[#4a4036] bg-white border border-[#e6dcd0] rounded-2xl px-2.5 py-1.5 focus:outline-hidden cursor-pointer"
        >
          <option value="price">Precio (CLP)</option>
          <option value="comfort">Confort Promedio</option>
          <option value="ergonomics">Ergonomía Promedio</option>
          <option value="weight">Soporte de Peso (kg)</option>
        </select>
        <button
          onClick={() => setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')}
          className="p-1.5 bg-white border border-[#e6dcd0] rounded-2xl text-[#4a4036] hover:bg-[#8a7a6c] hover:text-white transition-colors cursor-pointer"
          title="Invertir orden"
        >
          <RefreshCw className={`w-3.5 h-3.5 transition-transform duration-300 ${sortDirection === 'desc' ? 'rotate-180' : ''}`} />
        </button>
      </div>

    </div>
    </div>
 {/* Empty state */}
 {filteredChairs.length === 0 && (
 <div className="bg-white border border-[#e6dcd0] rounded-2xl py-12 px-4 text-center space-y-3 shadow-md shadow-[#cbbda9]/30">
 <Info className="w-12 h-12 text-[#4a4036] mx-auto" />
 <h4 className="text-[#4a4036] font-semibold text-[#4a4036]">No se encontraron sillas que cumplan los filtros</h4>
 <p className="text-[#8a7a6c] text-xs max-w-md mx-auto">
 Prueba quitando los filtros rápidos del catálogo.
 </p>
 <button
 onClick={() => {
  setQuickFilter('all');
 }}
 className="mt-2 bg-[#8a7a6c] text-[#fdfbf7] border border-[#e6dcd0] rounded-2xl text-xs font-semibold tracking-wide text-[#8a7a6c] px-4 py-2 hover:bg-[#b85b45] hover:border-blue-600 transition shadow-sm shadow-[#cbbda9]/30 cursor-pointer"
 >
 Restablecer Filtros
 </button>
 </div>
 )}

 {/* Grid display */}
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
 {filteredChairs.map(chair => {
 const badge = getBadgeForChair(chair);
 

 return (
 <div
 key={chair.id}
 id={`chair-card-${chair.id}`}
 className="bg-white rounded-2xl border border-[#e6dcd0] shadow-md shadow-[#cbbda9]/30 hover:shadow-lg shadow-[#cbbda9]/30 transition-all duration-200 flex flex-col overflow-hidden group"
 >
 {/* Upper decorative container */}
 <div className="bg-[#fdfbf7] p-3 flex items-center justify-between border-b border-[#e6dcd0] group-hover:bg-[#f4efe8]/50 transition-colors">
 {/* Top Badges */}

 <span className={`text-[9px] font-sans tracking-wide text-[#8a7a6c] font-semibold px-2 py-0.5 rounded-2xl border-2 ${badge.color}`}>
 {badge.label}
 </span>
 
 {/* Selector indicator for the comparison table */}
 <button
 onClick={(e) => {
 e.stopPropagation();
 toggleChairSelection(chair.id);
 }}
 className={`w-6 h-6 rounded-2xl border-2 flex items-center justify-center transition-all cursor-pointer ${
 selectedChairs.includes(chair.id)
 ? 'bg-[#8a7a6c] text-[#fdfbf7] border-[#e6dcd0]'
 : 'bg-white text-[#cbbda9] border-[#e6dcd0] hover:bg-[#f4efe8]'
 }`}
 title={selectedChairs.includes(chair.id) ? "Quitar de la lista de comparación" : "Añadir a la lista de comparación"}
 >
 <Check className="w-3.5 h-3.5 stroke-2" />
 </button>


 {/* Vector SVG Chair Illustration */}
                     {/* Image Placeholder or Actual Image */}
                  </div>
                  
                  {/* Card Body */}
                  <div className="p-5 flex flex-col flex-grow bg-white">
                    <h3 className="font-serif text-[#4a4036] font-semibold text-lg leading-tight mb-1">
                      {chair.name}
                    </h3>
                    <p className="text-xs text-[#8a7a6c] mb-3">{chair.brand}</p>
                    
                    {/* Compact Ergonomic Highlights */}
                    <div className="space-y-2 mb-6 flex-grow">
                      <div className="flex items-start gap-2 text-xs">
                        <User className="w-3.5 h-3.5 text-[#b85b45] shrink-0 mt-0.5" />
                        <span className="text-[#6b5c4d]"><strong className="text-[#4a4036]">Soporte Lumbar:</strong> {chair.ergonomics.lumbarSupport}</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs">
                        <MoveVertical className="w-3.5 h-3.5 text-[#b85b45] shrink-0 mt-0.5" />
                        <span className="text-[#6b5c4d]"><strong className="text-[#4a4036]">Ajustes:</strong> {chair.adjustments.height}, {chair.adjustments.armrests}</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs">
                        <RefreshCw className="w-3.5 h-3.5 text-[#b85b45] shrink-0 mt-0.5" />
                        <span className="text-[#6b5c4d]"><strong className="text-[#4a4036]">Reclinación:</strong> {typeof chair.adjustments.recline === 'string' ? chair.adjustments.recline : (chair.adjustments.recline ? 'Sí' : 'No')}</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#b85b45] shrink-0 mt-0.5" />
                        <span className="text-[#6b5c4d]"><strong className="text-[#4a4036]">Peso Máximo:</strong> {chair.maxWeight} kg</span>
                      </div>
                    </div>
                    
                    {/* Price & Action */}
                    <div className="mt-auto pt-4 border-t border-[#e6dcd0] flex items-center justify-between">
                      <span className="text-xl font-semibold text-[#b85b45] font-sans">
                        {formatCLP(chair.price)}
                      </span>
                      <button
                        onClick={() => setDetailChair(chair)}
                        className="bg-[#eadecc] hover:bg-[#d4c5b9] text-[#4a4036] p-2 rounded-2xl transition"
                        title="Ver detalle completo"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        )}
        {/* ======================================= */}
        {/* =        COMPARISON TRAY DRAWER       = */}
        {/* ======================================= */}
        <AnimatePresence>
          {selectedChairs.length > 0 && (
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#e6dcd0] shadow-[0_-4px_20px_rgba(203,189,169,0.2)] z-30 p-4"
            >
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                
                <div className="flex items-center gap-4 w-full md:w-auto">
                  <div className="bg-[#f4efe8] text-[#4a4036] px-3 py-1 rounded-2xl text-xs font-semibold whitespace-nowrap">
                    {selectedChairs.length} seleccionadas
                  </div>
                  
                  <div className="flex gap-2 overflow-x-auto pb-1 md:pb-0 w-full md:w-auto">
                    {selectedChairs.map(id => {
                      const c = CHAIRS_DATA.find(x => x.id === id);
                      if (!c) return null;
                      return (
                        <div key={'tray-'+id} className="relative bg-[#fdfbf7] border border-[#e6dcd0] rounded-2xl p-1.5 flex items-center gap-2 shrink-0">
                          <div className="flex flex-col pr-6">
                            <span className="text-[10px] font-semibold text-[#4a4036] line-clamp-1 w-24">{c.name}</span>
                            <span className="text-[9px] text-[#8a7a6c]">{formatCLP(c.price)}</span>
                          </div>
                          <button
                            onClick={() => toggleChairSelection(c.id)}
                            className="absolute right-1 top-1.5 p-1 text-[#cbbda9] hover:text-[#b85b45]"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="flex gap-2 w-full md:w-auto shrink-0 justify-end">
                  <button
                    onClick={() => setSelectedChairs([])}
                    className="px-4 py-2 text-xs font-semibold text-[#8a7a6c] hover:text-[#4a4036]"
                  >
                    Limpiar
                  </button>
                  <button
                    onClick={() => setShowCompare(true)}
                    disabled={selectedChairs.length < 2}
                    className={`px-6 py-2 rounded-2xl text-xs font-semibold tracking-wide flex items-center gap-2 transition ${
                      selectedChairs.length >= 2
                        ? 'bg-[#8a7a6c] text-[#fdfbf7] hover:bg-[#b85b45]'
                        : 'bg-[#eadecc] text-[#cbbda9] cursor-not-allowed'
                    }`}
                  >
                    <ListFilter className="w-4 h-4" />
                    Comparar
                  </button>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ======================================= */}
        {/* =        COMPARISON MODAL TABLE       = */}
        {/* ======================================= */}
        <AnimatePresence>
          {showCompare && (
            <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
              <div className="sticky top-0 bg-[#fdfbf7] border-b border-[#e6dcd0] p-4 flex items-center justify-between z-20">
                <h3 className="font-serif text-[#4a4036] text-xl font-semibold">Comparación de Sillas</h3>
                <button onClick={() => setShowCompare(false)} className="p-2 rounded-2xl bg-[#eadecc] hover:bg-[#d4c5b9] text-[#4a4036]">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4 md:p-8 max-w-7xl mx-auto overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[800px]">
                  <thead>
                    <tr>
                      <th className="p-4 bg-white sticky left-0 z-10 border-b border-[#e6dcd0] min-w-[200px]">Características</th>
                      {selectedChairs.map(id => {
                        const c = CHAIRS_DATA.find(x => x.id === id);
                        return (
                          <th key={'th-'+id} className="p-4 border-b border-[#e6dcd0] min-w-[250px] align-top">
                            <h4 className="font-serif text-sm font-semibold text-[#4a4036]">{c?.name}</h4>
                            <p className="text-[#b85b45] font-sans font-semibold mt-1">{c && formatCLP(c.price)}</p>
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody className="text-sm text-[#6b5c4d]">
                    <tr>
                      <td className="p-4 bg-[#fdfbf7] sticky left-0 z-10 font-semibold text-[#4a4036] border-b border-[#e6dcd0]/30">Material Respaldo</td>
                      {selectedChairs.map(id => (
                        <td key={'mat-'+id} className="p-4 border-b border-[#e6dcd0]/30">{CHAIRS_DATA.find(x => x.id === id)?.materials.backrest}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-4 bg-[#fdfbf7] sticky left-0 z-10 font-semibold text-[#4a4036] border-b border-[#e6dcd0]/30">Soporte Lumbar</td>
                      {selectedChairs.map(id => (
                        <td key={'lumb-'+id} className="p-4 border-b border-[#e6dcd0]/30">{CHAIRS_DATA.find(x => x.id === id)?.ergonomics.lumbarSupport}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-4 bg-[#fdfbf7] sticky left-0 z-10 font-semibold text-[#4a4036] border-b border-[#e6dcd0]/30">Apoyabrazos</td>
                      {selectedChairs.map(id => (
                        <td key={'arm-'+id} className="p-4 border-b border-[#e6dcd0]/30">{CHAIRS_DATA.find(x => x.id === id)?.adjustments.armrests}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-4 bg-[#fdfbf7] sticky left-0 z-10 font-semibold text-[#4a4036] border-b border-[#e6dcd0]/30">Apoyacabezas</td>
                      {selectedChairs.map(id => (
                        <td key={'head-'+id} className="p-4 border-b border-[#e6dcd0]/30">{CHAIRS_DATA.find(x => x.id === id)?.ergonomics.headrest}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-4 bg-[#fdfbf7] sticky left-0 z-10 font-semibold text-[#4a4036] border-b border-[#e6dcd0]/30">Reclinación</td>
                      {selectedChairs.map(id => (
                        <td key={'recl-'+id} className="p-4 border-b border-[#e6dcd0]/30">{CHAIRS_DATA.find(x => x.id === id)?.adjustments.recline}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-4 bg-[#fdfbf7] sticky left-0 z-10 font-semibold text-[#4a4036] border-b border-[#e6dcd0]/30">Peso Máximo</td>
                      {selectedChairs.map(id => (
                        <td key={'weight-'+id} className="p-4 border-b border-[#e6dcd0]/30">{CHAIRS_DATA.find(x => x.id === id)?.maxWeight} kg</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </AnimatePresence>

        {/* ======================================= */}
        {/* =            DETAIL MODAL             = */}
        {/* ======================================= */}
        <AnimatePresence>
          {detailChair && (
            <div className="fixed inset-0 bg-[#8a7a6c]/60 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-[#fdfbf7] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-xl shadow-[#cbbda9]/30 border border-[#e6dcd0] flex flex-col"
                id="spec-modal"
              >
                {/* Modal Header */}
                <div className="p-6 border-b border-[#e6dcd0] flex justify-between items-center bg-[#fdfbf7] rounded-t-2xl sticky top-0 z-20">
                  <div className="space-y-0.5">
                    <span className="text-xs font-sans tracking-widest text-[#8a7a6c] text-[#8a7a6c] font-semibold">{detailChair.brand}</span>
                    <h4 className="font-serif text-[#4a4036] font-semibold text-[#4a4036] text-base md:text-lg">
                      Ficha Técnica Completa
                    </h4>
                  </div>
                  <button
                    onClick={() => setDetailChair(null)}
                    className="p-1.5 hover:bg-[#8a7a6c] hover:text-[#fdfbf7] border border-[#e6dcd0] rounded-2xl text-[#4a4036] transition cursor-pointer"
                    title="Cerrar Ficha"
                  >
                    <X className="w-5 h-5 stroke-2" />
                  </button>
                </div>

                
                {/* Modal Body */}
                <div className="p-6 space-y-8 bg-white">
                  <div className="flex flex-col w-full max-w-3xl mx-auto gap-8 items-start">
                    {/* Feature Quality Ratings bar chart */}
                    <div className="w-full space-y-3 pt-2">
                      <h5 className="text-xs font-sans tracking-widest text-[#8a7a6c] text-[#4a4036] font-semibold">Evaluación Ergonómica</h5>
                      <div className="space-y-2 text-xs">
                        <div>
                          <div className="flex justify-between text-[#4a4036] font-bold mb-0.5">
                            <span>Ergonomía General</span>
                            <span className="font-bold font-sans">{detailChair.ratings.ergonomics} / 5.0</span>
                          </div>
                          <div className="w-full bg-[#eadecc] border border-[#e6dcd0] rounded-2xl h-4 overflow-hidden">
                            <div className="bg-emerald-400 h-full" style={{ width: `${detailChair.ratings.ergonomics * 20}%` }} />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-[#4a4036] font-bold mb-0.5">
                            <span>Comodidad</span>
                            <span className="font-bold font-sans">{detailChair.ratings.comfort} / 5.0</span>
                          </div>
                          <div className="w-full bg-[#eadecc] border border-[#e6dcd0] rounded-2xl h-4 overflow-hidden">
                            <div className="bg-emerald-400 h-full" style={{ width: `${detailChair.ratings.comfort * 20}%` }} />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-[#4a4036] font-bold mb-0.5">
                            <span>Materiales</span>
                            <span className="font-bold font-sans">{detailChair.ratings.materials} / 5.0</span>
                          </div>
                          <div className="w-full bg-[#eadecc] border border-[#e6dcd0] rounded-2xl h-4 overflow-hidden">
                            <div className="bg-emerald-400 h-full" style={{ width: `${detailChair.ratings.materials * 20}%` }} />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-[#4a4036] font-bold mb-0.5">
                            <span>Ajustabilidad</span>
                            <span className="font-bold font-sans">{detailChair.ratings.adjustability} / 5.0</span>
                          </div>
                          <div className="w-full bg-[#eadecc] border border-[#e6dcd0] rounded-2xl h-4 overflow-hidden">
                            <div className="bg-emerald-400 h-full" style={{ width: `${detailChair.ratings.adjustability * 20}%` }} />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Dimensions & Specs Grid */}
                    <div className="w-full grid grid-cols-2 gap-4 text-xs">
                      <div className="bg-[#fdfbf7] p-3 rounded-2xl border border-[#e6dcd0] shadow-sm shadow-[#cbbda9]/30">
                        <span className="text-[10px] text-[#8a7a6c] font-sans block mb-1 font-semibold">Altura Total</span>
                        <span className="font-semibold text-[#4a4036] font-sans">{detailChair.dimensions.totalHeight}</span>
                      </div>
                      <div className="bg-[#fdfbf7] p-3 rounded-2xl border border-[#e6dcd0] shadow-sm shadow-[#cbbda9]/30">
                        <span className="text-[10px] text-[#8a7a6c] font-sans block mb-1 font-semibold">Ancho Total</span>
                        <span className="font-semibold text-[#4a4036] font-sans">{detailChair.dimensions.totalWidth}</span>
                      </div>
                      <div className="bg-[#fdfbf7] p-3 rounded-2xl border border-[#e6dcd0] shadow-sm shadow-[#cbbda9]/30">
                        <span className="text-[10px] text-[#8a7a6c] font-sans block mb-1 font-semibold">Ancho Asiento</span>
                        <span className="font-semibold text-[#4a4036] font-sans">{detailChair.dimensions.seatWidth}</span>
                      </div>
                      <div className="bg-[#fdfbf7] p-3 rounded-2xl border border-[#e6dcd0] shadow-sm shadow-[#cbbda9]/30">
                        <span className="text-[10px] text-[#8a7a6c] font-sans block mb-1 font-semibold">Soporte Máx</span>
                        <span className="font-semibold text-[#b85b45] font-sans">{detailChair.maxWeight} kg</span>
                      </div>
                    </div>

                    {/* Pros and Cons lists side by side */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t-2 border-[#e6dcd0] w-full">
                      <div className="bg-emerald-50 p-4 rounded-2xl border border-[#e6dcd0] space-y-2 shadow-sm shadow-[#cbbda9]/30">
                        <h5 className="text-xs font-sans tracking-widest text-[#8a7a6c] text-emerald-950 font-semibold flex items-center gap-1">
                          <Check className="w-4 h-4 text-emerald-600 stroke-2" />
                          Pros (Puntos Fuertes)
                        </h5>
                        <ul className="space-y-1.5 text-xs text-[#4a4036]">
                          {detailChair.pros.map((p, i) => (
                            <li key={i} className="flex items-start gap-2 font-medium">
                              <span className="text-emerald-600 font-bold">✓</span>
                              <span>{p}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-rose-50 p-4 rounded-2xl border border-[#e6dcd0] space-y-2 shadow-sm shadow-[#cbbda9]/30">
                        <h5 className="text-xs font-sans tracking-widest text-[#8a7a6c] text-rose-950 font-semibold flex items-center gap-1">
                          <X className="w-4 h-4 text-rose-600 stroke-2" />
                          Contras (Limitaciones)
                        </h5>
                        <ul className="space-y-1.5 text-xs text-[#4a4036]">
                          {detailChair.cons.map((c, i) => (
                            <li key={i} className="flex items-start gap-2 font-medium">
                              <span className="text-rose-600 font-bold">✕</span>
                              <span>{c}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Checkout CTA */}
                    <div className="bg-[#8a7a6c] text-[#fdfbf7] rounded-2xl border border-[#e6dcd0] p-5 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 shadow-md shadow-[#cbbda9]/30 w-full">
                      <div className="space-y-1 text-center sm:text-left">
                        <h5 className="font-semibold tracking-wide text-sm">¿Esta es tu silla ideal?</h5>
                        <p className="text-xs text-[#fdfbf7]/80 font-sans">
                          Serás redirigido de forma directa y segura a Mercado Libre Chile para proceder con la compra o revisar el despacho.
                        </p>
                      </div>
                      <a
                        href={detailChair.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#b85b45] hover:bg-[#9d4c38] text-white font-semibold tracking-wide border border-[#e6dcd0] text-xs py-2.5 px-6 rounded-2xl transition flex items-center gap-2 shrink-0 shadow-sm shadow-[#cbbda9]/30"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        <span>Ver enlace en Mercado Libre</span>
                        <ExternalLink className="w-3.5 h-3.5 stroke-2" />
                      </a>
                    </div>

                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

{/* ======================================= */}
      {/* =        COMPARISON TAB VIEW          = */}
      {/* ======================================= */}
      {activeTab === 'compare' && (
        <div className="bg-white rounded-2xl border border-[#e6dcd0] shadow-md shadow-[#cbbda9]/30 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-serif text-[#4a4036] text-xl font-semibold">Comparación Detallada</h3>
            <button onClick={() => setActiveTab('all')} className="px-4 py-2 bg-[#eadecc] text-[#4a4036] rounded-2xl text-xs font-semibold hover:bg-[#d4c5b9] transition">
              Volver al catálogo
            </button>
          </div>
          
          {selectedChairs.length < 2 ? (
            <div className="text-center py-12 text-[#8a7a6c] space-y-4">
              <ListFilter className="w-12 h-12 mx-auto text-[#cbbda9]" />
              <p>Selecciona al menos 2 sillas del catálogo para compararlas.</p>
              <button onClick={() => setActiveTab('all')} className="bg-[#8a7a6c] text-[#fdfbf7] px-4 py-2 rounded-2xl font-semibold hover:bg-[#b85b45]">
                Ir al catálogo
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto pb-4">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr>
                    <th className="p-4 bg-[#fdfbf7] border-b border-[#e6dcd0] min-w-[200px]">Características</th>
                    {selectedChairs.map(id => {
                      const c = CHAIRS_DATA.find(x => x.id === id);
                      return (
                        <th key={'tab-th-'+id} className="p-4 border-b border-[#e6dcd0] min-w-[250px] align-top bg-white">
                          <h4 className="font-serif text-sm font-semibold text-[#4a4036] text-center">{c?.name}</h4>
                          <p className="text-[#b85b45] font-sans font-semibold mt-1 text-center">{c && formatCLP(c.price)}</p>
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody className="text-sm text-[#6b5c4d]">
                  <tr>
                    <td className="p-4 bg-[#fdfbf7] font-semibold text-[#4a4036] border-b border-[#e6dcd0]/30">Material Respaldo</td>
                    {selectedChairs.map(id => (
                      <td key={'tab-mat-'+id} className="p-4 border-b border-[#e6dcd0]/30">{CHAIRS_DATA.find(x => x.id === id)?.materials.backrest}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 bg-[#fdfbf7] font-semibold text-[#4a4036] border-b border-[#e6dcd0]/30">Soporte Lumbar</td>
                    {selectedChairs.map(id => (
                      <td key={'tab-lumb-'+id} className="p-4 border-b border-[#e6dcd0]/30">{CHAIRS_DATA.find(x => x.id === id)?.ergonomics.lumbarSupport}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 bg-[#fdfbf7] font-semibold text-[#4a4036] border-b border-[#e6dcd0]/30">Apoyabrazos</td>
                    {selectedChairs.map(id => (
                      <td key={'tab-arm-'+id} className="p-4 border-b border-[#e6dcd0]/30">{CHAIRS_DATA.find(x => x.id === id)?.adjustments.armrests}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 bg-[#fdfbf7] font-semibold text-[#4a4036] border-b border-[#e6dcd0]/30">Apoyacabezas</td>
                    {selectedChairs.map(id => (
                      <td key={'tab-head-'+id} className="p-4 border-b border-[#e6dcd0]/30">{CHAIRS_DATA.find(x => x.id === id)?.ergonomics.headrest}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 bg-[#fdfbf7] font-semibold text-[#4a4036] border-b border-[#e6dcd0]/30">Reclinación</td>
                    {selectedChairs.map(id => (
                      <td key={'tab-recl-'+id} className="p-4 border-b border-[#e6dcd0]/30">{CHAIRS_DATA.find(x => x.id === id)?.adjustments.recline}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 bg-[#fdfbf7] font-semibold text-[#4a4036] border-b border-[#e6dcd0]/30">Peso Máximo</td>
                    {selectedChairs.map(id => (
                      <td key={'tab-weight-'+id} className="p-4 border-b border-[#e6dcd0]/30">{CHAIRS_DATA.find(x => x.id === id)?.maxWeight} kg</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}


      </main>


 </div>
 );
}
