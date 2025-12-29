export type CardProgress = {
  dueAt: number; // ms timestamp
  intervalHrs: number;
  reviews: number;
  correct: number;
  favorite: boolean;
};

export type ProgressMap = Record<string, CardProgress>;

const KEY = 'qa_study_progress_v1';

export function loadProgress(): ProgressMap {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as ProgressMap;
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

export function saveProgress(map: ProgressMap) {
  localStorage.setItem(KEY, JSON.stringify(map));
}

export function getCardProgress(map: ProgressMap, id: string): CardProgress {
  return (
    map[id] ?? {
      dueAt: 0,
      intervalHrs: 0,
      reviews: 0,
      correct: 0,
      favorite: false,
    }
  );
}

export function updateAfterReview(
  map: ProgressMap,
  id: string,
  result: 'known' | 'unknown'
): ProgressMap {
  const p = getCardProgress(map, id);
  const now = Date.now();

  let nextIntervalHrs = p.intervalHrs;
  if (result === 'known') {
    nextIntervalHrs = Math.max(12, nextIntervalHrs ? nextIntervalHrs * 2 : 24);
  } else {
    nextIntervalHrs = 6;
  }

  const next: CardProgress = {
    ...p,
    intervalHrs: nextIntervalHrs,
    dueAt: now + nextIntervalHrs * 60 * 60 * 1000,
    reviews: p.reviews + 1,
    correct: p.correct + (result === 'known' ? 1 : 0),
  };

  return { ...map, [id]: next };
}

export function toggleFavorite(map: ProgressMap, id: string): ProgressMap {
  const p = getCardProgress(map, id);
  return { ...map, [id]: { ...p, favorite: !p.favorite } };
}

export function resetProgress(): void {
  localStorage.removeItem(KEY);
}
