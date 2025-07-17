import { SentioData } from 'sentio-core/types';

export function toVector(data: SentioData): number[] {
  // Łączy wszystkie dane ze ścieżek w jeden wektor (przykładowa implementacja)
  const vectors: number[] = [];
  for (const track of data.tracks) {
    vectors.push(...track.data);
  }
  return vectors;
}
