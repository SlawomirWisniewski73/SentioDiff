import { SentioData } from './types';

export function parse(input: unknown): SentioData {
  // W rzeczywistej implementacji nastąpiłaby transformacja/normalizacja danych.
  // Tutaj zakładamy, że input odpowiada już strukturze SentioData.
  return input as SentioData;
}
