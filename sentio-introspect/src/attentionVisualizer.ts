import { SentioData } from 'sentio-core/src/index.js';

export function visualizeAttention(data: SentioData): void {
  if (data.attention && data.attention.length > 0) {
    const rows = data.attention.length;
    const cols = data.attention[0].length;
    console.log('Attention matrix size:', rows + 'x' + cols);
  } else {
    console.log('No attention data available.');
  }
}
