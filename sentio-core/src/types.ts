// ########## POPRAWIONY KOD DLA sentio-core/src/types.ts ##########

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

// NOWA, POPRAWNA definicja dla SelfModelEntity
// Zastępuje ona stary interfejs SelfModelSummary
export interface SelfModelEntity {
  id: string;
  name: string;
  description?: string;
  children?: SelfModelEntity[]; // Umożliwia zagnieżdżanie
}

// Główny interfejs, teraz używający SelfModelEntity
export interface SentioData {
  name?: string;
  tracks: Track<any>[]; // Używamy generycznego Track
  differences?: Difference[];
  trace?: TraceEvent[];
  attention?: number[][];
  selfModel?: SelfModelEntity; // Zaktualizowane użycie
}
