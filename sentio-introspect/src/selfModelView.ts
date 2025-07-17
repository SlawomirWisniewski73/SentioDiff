import { SentioData } from '../../sentio-core/src/index.js';

/**
 * Generuje tekstowe podsumowanie dla danych selfModel z obiektu SentioData.
 * @param data Główny obiekt danych SentioData.
 * @returns Tekstowe podsumowanie lub informacja o braku danych.
 */
export function getSelfModelSummary(data: SentioData): string {
  // Sprawdzamy, czy pole selfModel istnieje
  if (data.selfModel) {
    // Zmieniamy zwracany tekst, aby używał 'name' i 'id' zamiast nieistniejącego 'score'
    return `Self model summary: [Name: ${data.selfModel.name}, ID: ${data.selfModel.id}]`;
  } else {
    return 'No self model data.';
  }
}
