import type { Card } from '../data/deck';
import type { CardProgress } from '../lib/storage';

type Props = {
  card: Card;
  progress: CardProgress;
  showAnswer: boolean;
  onToggleAnswer: () => void;
  onKnown: () => void;
  onUnknown: () => void;
  onToggleFavorite: () => void;
};

export function Flashcard({
  card,
  progress,
  showAnswer,
  onToggleAnswer,
  onKnown,
  onUnknown,
  onToggleFavorite,
}: Props) {
  
  const accuracy = progress.reviews 
    ? Math.round((progress.correct / progress.reviews) * 100) 
    : 0;

  const dueText = progress.dueAt
    ? new Date(progress.dueAt).toLocaleString('tr-TR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })
    : 'Hemen';

  return (
    <div className={`card ${showAnswer ? 'is-flipped' : ''}`}>
      <div className="card-header">
        <div className="status-pills">
          <span className="pill category">{card.category}</span>
          <span className="pill accuracy">📈 %{accuracy}</span>
        </div>
        <button 
          className={`btn-fav ${progress.favorite ? 'active' : ''}`} 
          onClick={onToggleFavorite}
          aria-label="Favorilere ekle"
        >
          {progress.favorite ? '★' : '☆'}
        </button>
      </div>

      <div className="hr" />

      <div className="flashcard-content">
        <p className="flashQ">{card.question}</p>

        {!showAnswer ? (
          <button className="btn primary full-width" onClick={onToggleAnswer}>
            Cevabı Göster
          </button>
        ) : (
          <div className="answer-section">
            <div className="flashA">{card.answer}</div>
            
            <div className="action-buttons">
              <button className="btn success" onClick={onKnown}>
                Bildim ✅
              </button>
              <button className="btn danger" onClick={onUnknown}>
                Bilemedim ❌
              </button>
              <button className="btn ghost" onClick={onToggleAnswer}>
                Gizle
              </button>
            </div>

            <footer className="card-footer">
              <p className="small">
                Sonraki tekrar: <strong>{dueText}</strong> 
                <span className="interval"> ({Math.round(progress.intervalHrs)} sa)</span>
              </p>
            </footer>
          </div>
        )}
      </div>
    </div>
  );
}