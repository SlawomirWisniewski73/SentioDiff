import { SentioData } from 'sentio-core/types';

export function getSelfModelSummary(data: SentioData): string {
  if (data.selfModel) {
    return 'Self model score: ' + data.selfModel.score +
           ', description: ' + data.selfModel.description;
  } else {
    return 'No self model data.';
  }
}
