# API i użycie biblioteki SentioDiff

SentioDiff można używać poprzez interfejs wiersza poleceń (CLI) lub jako bibliotekę w kodzie Node.js/TypeScript.

## CLI (Narzędzia wiersza poleceń)
Po zainstalowaniu paczki dostępne są następujące komendy:
- **`sentio-validate <plik.json>`** – waliduje podany plik JSON z danymi względem schematu `sentio.schema.json`. Wypisuje wynik walidacji (sukces lub ewentualne błędy).
- **`sentio-render <tryb> <plik.json>`** – renderuje wizualizację danych do formatu graficznego:
  - `tryb` może być `svg` (renderowanie 2D do pliku SVG) lub `three` (renderowanie 3D przy użyciu Three.js).
  - Dla `svg` wynikowy plik zostanie zapisany jako **output.svg** w bieżącym folderze.  
    Dla `three` (3D) narzędzie uruchomi proces renderowania 3D (w implementacji szkieletowej jest to symulowane komunikatem w konsoli).
- **`sentio-to-vector <plik.json> [output.txt]`** – konwertuje dane z pliku JSON do wektora liczbowego. Jeśli podano dodatkowy argument `output.txt`, wektor zostanie zapisany do pliku tekstowego; w przeciwnym razie zostanie wypisany na konsolę.

## API biblioteki (Node/TypeScript)
Biblioteka może być używana bezpośrednio w kodzie JavaScript/TypeScript. Przykładowo:
```ts
import { Validator, SvgRenderer, toVector } from 'sentio-diff';
// Wczytaj dane (np. z pliku JSON) i sparsuj je do obiektu:
const data = JSON.parse(fs.readFileSync('examples/basic_example.json', 'utf-8'));
// Walidacja danych:
const validator = new Validator();
if (validator.validate(data)) {
  console.log('Dane s\u0105 poprawne.');
}
// Renderowanie SVG w kodzie:
const svgRenderer = new SvgRenderer();
const svgOutput = svgRenderer.render(data);
console.log('SVG output:', svgOutput);
// Konwersja danych na wektor:
const vector = toVector(data);
console.log('Vector:', vector);

