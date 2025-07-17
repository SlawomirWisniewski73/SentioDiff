# Format danych SentioDiff

Pliki JSON wykorzystywane przez SentioDiff (np. `basic_example.json`, `introspection_demo.json`) muszą mieć określoną strukturę. Poniżej opis głównych pól:

- **name** (string, opcjonalne) – nazwa zestawu danych lub eksperymentu.
- **tracks** (array of objects) – lista "ścieżek" danych. Każdy obiekt track posiada:
  - **id** (string) – unikalny identyfikator ścieżki.
  - **data** (array of numbers) – tablica wartości numerycznych reprezentująca zawartość ścieżki (np. próbki sygnału, wektory cech).
- **differences** (array of objects, opcjonalne) – lista porównań lub różnic między ścieżkami. Każdy obiekt może zawierać:
  - **from** (string) – id pierwszej porównywanej ścieżki.
  - **to** (string) – id drugiej ścieżki.
  - **distance** (number) – wartość numeryczna reprezentująca różnicę lub odległość między dwiema ścieżkami.
- **trace** (array of objects, opcjonalne) – sekwencja zdarzeń (dla trybów introspekcji). Każdy obiekt zdarzenia posiada:
  - **step** (number) – numer kroku lub znacznika czasu.
  - **action** (string) – opis czynności lub etapu (np. nazwa operacji wykonywanej na danym kroku).
- **attention** (array of arrays of numbers, opcjonalne) – macierz wag "uwagi" (np. w modelu uczenia maszynowego), gdzie każda podtablica reprezentuje rozkład uwagi dla kolejnego elementu sekwencji.
- **selfModel** (object, opcjonalne) – dodatkowe dane opisujące "samoocenę" lub wewnętrzny stan modelu:
  - **score** (number) – wartość oceniająca model (np. miara jakości dopasowania).
  - **description** (string) – opis tekstowy uzupełniający wynik oceny.

Plik schematu JSON `sentio.schema.json` formalnie definiuje powyższą strukturę i jest używany do walidacji danych. Przy pomocy narzędzia CLI `sentio-validate` można łatwo sprawdzić, czy dany plik JSON spełnia ten format.

