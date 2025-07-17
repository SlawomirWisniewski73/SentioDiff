export interface Track<T = any> {
  id: string;
  kind: string; // np. "geometry", "signal"
  data: T;
  meta?: Record<string, any>;
}

export interface Difference {
  from: string;
  to: string;
  distance: number;
}

export interface TraceEvent {
  step: number;
  action: string;
}

export interface SelfModelSummary {
  score: number;
  description: string;
}

export interface SentioData {
  name?: string;
  tracks: Track[];
  differences?: Difference[];
  trace?: TraceEvent[];
  attention?: number[][];
  selfModel?: SelfModelSummary;
}
