import type { Card, Category } from '../data/deck';

const CUSTOM_KEY = 'qa_study_custom_cards_v1';

export function loadCustomCards(): Card[] {
  try {
    const raw = localStorage.getItem(CUSTOM_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(isCard);
  } catch {
    return [];
  }
}

export function saveCustomCards(cards: Card[]) {
  localStorage.setItem(CUSTOM_KEY, JSON.stringify(cards));
}

export function addCustomCard(input: {
  category: Category;
  question: string;
  answer: string;
}): Card {
  const id = `custom-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  return { id, ...input };
}

function isCard(x: any): x is Card {
  return (
    x &&
    typeof x === 'object' &&
    typeof x.id === 'string' &&
    typeof x.category === 'string' &&
    typeof x.question === 'string' &&
    typeof x.answer === 'string'
  );
}
