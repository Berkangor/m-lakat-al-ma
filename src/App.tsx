import React, { useEffect, useMemo, useRef, useState } from 'react';
import { DECK, type Card, type Category } from './data/deck';
import {
  loadProgress,
  saveProgress,
  getCardProgress,
  updateAfterReview,
  toggleFavorite,
  resetProgress,
  type ProgressMap,
} from './lib/storage';
import { addCustomCard, loadCustomCards, saveCustomCards } from './lib/custom';
import { Flashcard } from './components/Flashcard';
import { Stats } from './components/Stats';

type CategoryFilter = 'Hepsi' | Category;

export default function App() {
  const [progress, setProgress] = useState<ProgressMap>(() => loadProgress());
  const [customCards, setCustomCards] = useState<Card[]>(() => loadCustomCards());
  const [category, setCategory] = useState<CategoryFilter>('Hepsi');
  const [search, setSearch] = useState('');
  const [dueOnly, setDueOnly] = useState(true);
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const [showAdd, setShowAdd] = useState(false);
  const [newCat, setNewCat] = useState<Category>('React');
  const [newQ, setNewQ] = useState('');
  const [newA, setNewA] = useState('');
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  useEffect(() => {
    saveCustomCards(customCards);
  }, [customCards]);

  const allCards = useMemo(() => [...DECK, ...customCards], [customCards]);
  const now = Date.now();

  const filteredCards = useMemo(() => {
    const q = search.trim().toLowerCase();

    let list = allCards.filter((c) => {
      const p = getCardProgress(progress, c.id);
      if (category !== 'Hepsi' && c.category !== category) return false;
      if (favoritesOnly && !p.favorite) return false;
      if (dueOnly && p.dueAt && p.dueAt > now) return false;
      if (q && !c.question.toLowerCase().includes(q) && !c.answer.toLowerCase().includes(q)) return false;
      return true;
    });

    list.sort((a, b) => {
      const pa = getCardProgress(progress, a.id);
      const pb = getCardProgress(progress, b.id);
      if (dueOnly) return pa.dueAt - pb.dueAt;
      return (a.category + a.id).localeCompare(b.category + b.id, 'tr-TR');
    });

    return list;
  }, [allCards, category, dueOnly, favoritesOnly, now, progress, search]);

  useEffect(() => {
    setIndex(0);
    setShowAnswer(false);
  }, [filteredCards.length]);

  const stats = useMemo(() => {
    const entries = Object.values(progress);
    const reviewed = entries.reduce((sum, p) => sum + (p.reviews || 0), 0);
    const correct = entries.reduce((sum, p) => sum + (p.correct || 0), 0);
    const accuracy = reviewed ? Math.round((correct / reviewed) * 100) : 0;
    const dueCount = allCards.filter((c) => {
      const p = getCardProgress(progress, c.id);
      return !p.dueAt || p.dueAt <= now;
    }).length;
    return { reviewed, accuracy, dueCount };
  }, [allCards, now, progress]);

  const current = filteredCards[index];

  const go = (delta: number) => {
    if (filteredCards.length === 0) return;
    setIndex((i) => (i + delta + filteredCards.length) % filteredCards.length);
    setShowAnswer(false);
  };

  const mark = (result: 'known' | 'unknown') => {
    if (!current) return;
    setProgress((m) => updateAfterReview(m, current.id, result));
    go(1); 
  };

  const fav = () => {
    if (!current) return;
    setProgress((m) => toggleFavorite(m, current.id));
  };

  const handleAddCard = () => {
    if (!newQ.trim() || !newA.trim()) return;
    const card = addCustomCard({ category: newCat, question: newQ, answer: newA });
    setCustomCards((prev) => [card, ...prev]);
    setNewQ(''); setNewA(''); setShowAdd(false);
  };

  return (
    <div className="container">
      <aside className="sidebar">
        <h1 className="h1">QA Study Master</h1>
        
        <div className="card" style={{ padding: 12 }}>
          <div className="label">Kategori</div>
          <select value={category} onChange={(e) => setCategory(e.target.value as CategoryFilter)}>
            <option value="Hepsi">Hepsi</option>
            <option value="React">React</option>
            <option value="JavaScript">JavaScript</option>
            <option value="HTML/CSS">HTML/CSS</option>
          </select>

          <div style={{ height: 12 }} />
          <div className="label">Ara</div>
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Soru veya cevapta ara..." />

          <div className="hr" />

          <label className="small row" style={{ cursor: 'pointer', alignItems: 'center' }}>
            <input type="checkbox" checked={dueOnly} onChange={(e) => setDueOnly(e.target.checked)} />
            Sadece tekrarı gelenler
          </label>
          
          <div style={{ height: 8 }} />
          
          <label className="small row" style={{ cursor: 'pointer', alignItems: 'center' }}>
            <input type="checkbox" checked={favoritesOnly} onChange={(e) => setFavoritesOnly(e.target.checked)} />
            Sadece favoriler
          </label>
        </div>

        <div style={{ height: 16 }} />

        <button className="btn primary" style={{ width: '100%' }} onClick={() => setShowAdd(!showAdd)}>
          {showAdd ? 'Kapat' : '+ Yeni Kart Ekle'}
        </button>

        {showAdd && (
          <div className="card" style={{ marginTop: 12 }}>
            <div className="label">Kategori</div>
            <select value={newCat} onChange={(e) => setNewCat(e.target.value as Category)}>
              <option value="React">React</option>
              <option value="JavaScript">JavaScript</option>
              <option value="HTML/CSS">HTML/CSS</option>
            </select>
            <textarea placeholder="Soru..." value={newQ} onChange={(e) => setNewQ(e.target.value)} style={{ marginTop: 8 }} />
            <textarea placeholder="Cevap..." value={newA} onChange={(e) => setNewA(e.target.value)} style={{ marginTop: 8 }} />
            <button className="btn primary" style={{ width: '100%', marginTop: 8 }} onClick={handleAddCard}>Kaydet</button>
          </div>
        )}

        <div className="hr" />
        
        <button className="btn danger" style={{ width: '100%', fontSize: '11px' }} onClick={() => confirm('Sıfırlansın mı?') && resetProgress() && setProgress({})}>
          İlerlemeyi Sıfırla
        </button>
      </aside>

      <main className="main">
        <Stats 
          total={filteredCards.length} 
          due={stats.dueCount} 
          reviewed={stats.reviewed} 
          accuracy={stats.accuracy} 
        />

        {filteredCards.length > 0 && current ? (
          <>
            <div className="card" style={{ padding: '8px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="small">Kart: <strong>{index + 1} / {filteredCards.length}</strong></span>
              <div className="row">
                <button className="btn" onClick={() => go(-1)}>◀</button>
                <button className="btn" onClick={() => go(1)}>▶</button>
              </div>
            </div>

            <Flashcard
              card={current}
              progress={getCardProgress(progress, current.id)}
              showAnswer={showAnswer}
              onToggleAnswer={() => setShowAnswer(!showAnswer)}
              onKnown={() => mark('known')}
              onUnknown={() => mark('unknown')}
              onToggleFavorite={fav}
            />
          </>
        ) : (
          <div className="card" style={{ textAlign: 'center', padding: '40px' }}>
            <strong>Eşleşen kart bulunamadı.</strong>
            <p className="small">Filtreleri temizlemeyi veya yeni kart eklemeyi deneyin.</p>
          </div>
        )}

        <div className="card small" style={{ textAlign: 'center', opacity: 0.7 }}>
          Kısayollar: <strong>Space</strong>: Göster/Gizle | <strong>1</strong>: Bildim | <strong>2</strong>: Bilemedim | <strong>Ok Tuşları</strong>: Gezinme
        </div>
      </main>

      <KeyboardShortcuts 
        enabled={filteredCards.length > 0}
        onToggle={() => setShowAnswer(v => !v)}
        onKnown={() => mark('known')}
        onUnknown={() => mark('unknown')}
        onNext={() => go(1)}
        onPrev={() => go(-1)}
      />
    </div>
  );
}

function KeyboardShortcuts({ enabled, onToggle, onKnown, onUnknown, onNext, onPrev }: any) {
  useEffect(() => {
    if (!enabled) return;
    const handleKey = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) return;
      
      switch(e.key) {
        case ' ': e.preventDefault(); onToggle(); break;
        case '1': onKnown(); break;
        case '2': onUnknown(); break;
        case 'ArrowRight': onNext(); break;
        case 'ArrowLeft': onPrev(); break;
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [enabled, onToggle, onKnown, onUnknown, onNext, onPrev]);
  return null;
}