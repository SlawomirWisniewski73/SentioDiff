import { SentioData } from '../../sentio-core/src/index.js';

export function visualizeTrace(data: SentioData): void {
  if (data.trace && data.trace.length > 0) {
    const actions = data.trace.map(ev => ev.action).join(' -> ');
    console.log('Trace sequence:', actions);
  } else {
    console.log('No trace data available.');
  }
}
