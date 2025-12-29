
type Props = {
  total: number;
  due: number;
  reviewed: number;
  accuracy: number;
};

export function Stats({ total, due, reviewed, accuracy }: Props) {
  const dueClass = due > 0 ? 'text-warning' : 'text-success';
  const accuracyColor = accuracy > 75 ? '#2ecc71' : accuracy > 40 ? '#f1c40f' : '#e74c3c';

  return (
    <div className="kpi-container">
      <div className="card shadow-sm">
        <div className="label">📚 Toplam Kart</div>
        <div className="kpiValue">{total}</div>
      </div>

      <div className="card shadow-sm">
        <div className="label">⏰ Tekrar Bekleyen</div>
        <div className={`kpiValue ${dueClass}`}>
          {due === 0 ? 'Tertemiz! ✨' : due}
        </div>
      </div>

      <div className="card shadow-sm">
        <div className="label">🎯 Başarı Oranı</div>
        <div className="kpiValue" style={{ color: accuracyColor }}>
          {reviewed > 0 ? `%${accuracy}` : '--'}
        </div>
        <div className="small text-muted">{reviewed} gözden geçirme</div>
      </div>
    </div>
  );
}