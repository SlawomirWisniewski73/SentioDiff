# SentioDiff
VectorDiff evo-revo

## A.Wersja polska
## B. English version
---

```markdown
# 🧠 SentioDiff

**SentioDiff** to zaawansowany format i biblioteka do reprezentacji dynamicznych danych, introspekcji AI oraz semantycznego opisu złożonych procesów. To następca formatu VectorDiff — wzbogacony o introspekcję, typowanie semantyczne, strumieniowanie, agentowość i interoperacyjność dziedzinową.

---

## 🚀 Główne cechy

- **Uniwersalna reprezentacja**: animacje 2D/3D, sygnały, dane medyczne, ścieżki decyzyjne AI.
- **Semantyczne typowanie**: jednostki, ontologie, dziedzinowe profile (np. `med`, `ui2d`, `robotics`).
- **SelfModel**: introspekcyjna reprezentacja stanu systemu (uwaga, pewność, decyzje).
- **Warstwa czasu**: wiele zegarów, interpolacje, ścieżki kontrfaktyczne.
- **Renderery**: SVG, WebGL (Three.js), Lit/Web Components, VR/AR.
- **Strumieniowanie i delta**: aktualizacje różnicowe, hash-chain, subskrypcje.
- **Mosty i interoperacyjność**: import/export VectorDiff, glTF, CSV, DICOM (w przygotowaniu).

```
---


## 🗂 Struktura repozytorium



- sentio-core/         – typy bazowe, walidator schematów, SelfModel
- sentio-viz/          – renderery: SVG, Three.js, LitTrackView
- sentio-introspect/   – wizualizacja i walidacja introspekcji AI
- sentio-bridge/       – adaptery do formatów zewnętrznych (np. VectorDiff)
- scripts/             – CLI: walidacja, konwersja, renderowanie
- examples/            – przykładowe dane i mini-aplikacje demonstracyjne
- docs/                – specyfikacja formatu i API
- sentio.schema.json   – schemat JSON SentioDiff

````

---

## 🔧 Instalacja

```bash
git clone https://github.com/yourname/sentio-diff.git
cd sentio-diff
npm install
npm run build
````

Lub z użyciem `pnpm` (zalecane dla workspace’ów):

```bash
pnpm install
pnpm -F sentio-core build
```

---

## 🧪 CLI

W katalogu `scripts/` znajdują się narzędzia:

```bash
npx ts-node scripts/sentio-validate.ts examples/basic_example.json
npx ts-node scripts/sentio-render.ts examples/basic_example.json
npx ts-node scripts/sentio-to-vector.ts examples/basic_example.json
```

---

## 🧬 Przykład dokumentu SentioDiff (JSON)

```json
{
  "version": "1.0-sentio",
  "profiles": ["ui2d", "selfmodel"],
  "entities": {
    "rect1": {
      "typeRef": "GeomRect",
      "props": { "fill": "#FF0000" },
      "tracks": {
        "pose": [
          { "t": 0, "x": 100, "y": 100 },
          { "t": 1000, "x": 300, "y": 100 }
        ]
      }
    },
    "self": {
      "typeRef": "SelfModel",
      "tracks": {
        "attention": [
          { "t": 500, "target": "rect1", "weight": 0.9 }
        ]
      }
    }
  }
}
```

---

## 🧠 SelfModel: introspekcja AI

Moduł `sentio-core` zawiera typy i narzędzia do tworzenia modeli introspekcyjnych:

```ts
import { createSelfModel, SelfModelEntity } from 'sentio-core';

const sm: SelfModelEntity = createSelfModel();
```

Walidacja introspekcji za pomocą `ajv`:

```ts
import { validateSelfModel } from 'sentio-introspect';
validateSelfModel(sm);
```

---

## 🖼 Wizualizacja danych

```ts
import { SVGTrackView, ThreeTrackView } from 'sentio-viz';

const svgView = new SVGTrackView();
svgView.render(document.getElementById('svg-container')!);

const threeView = new ThreeTrackView();
threeView.render(document.getElementById('3d-container')!);
```

---

## 🌉 Interoperacyjność

Za pomocą `sentio-bridge` można:

* zaimportować dokument VectorDiff (`.json`) i przekształcić go do SentioDiff,
* zapisać dokument SentioDiff jako standardowy plik VectorDiff.

---

## 🔍 Przykłady

Znajdują się w folderze `examples/`, np.:

* `basic_example.json` – animacja prostokąta z SelfModel.
* `introspection_demo.json` – introspekcja z punktami uwagi.
* `viewer-demo/` – prosty interaktywny podgląd SVG + Lit (HTML/JS).

---

## ✅ Testy i CI

Zautomatyzowane testy walidacji uruchamiane są przez GitHub Actions (`.github/workflows/ci.yml`).
Po pushu kodu lub PR uruchamiane są:

* testy walidatora schematu,
* kompilacja TypeScript,
* test CLI na danych przykładowych.

---

## 📄 Licencja

Dual licensing - AGPL 3.0 oraz licencja komercyjna dla podmiotów, które nie mogą skorzystać z licencji AGPL 3.0

---

## 📬 Kontakt i rozwój

Chcesz pomóc? Masz pytania?
Zgłoś issue 

---

## 🧭 Droga rozwoju

* [x] Prototyp `sentio-core`
* [x] SelfModel i introspekcja
* [x] Parser i walidator schema
* [x] Adapter z VectorDiff
* [ ] Obsługa danych medycznych (DICOM, NIfTI)
* [ ] UI do eksploracji SelfModel
* [ ] Tryb offline / strumieniowanie

Dołącz do projektu i pomóż budować nową jakość meta‑języka danych.

--- 

## B. English version

---

```markdown
# 🧠 SentioDiff

**SentioDiff** is an advanced format and library for representing dynamic data, AI introspection, and semantic descriptions of complex processes. It is the evolution of the VectorDiff format — enhanced with introspection, strong typing, streaming, agency, and domain interoperability.

---

## 🚀 Key Features

- **Universal representation**: animate 2D/3D scenes, signals, medical data, cognitive tracks.
- **Semantic typing**: units, ontologies, domain-specific profiles (`med`, `ui2d`, `robotics`, etc.).
- **SelfModel**: internal representation of the system's state (attention, certainty, decision trace).
- **Time layer**: multiple clocks, interpolations, hypothetical and branching timelines.
- **Renderers**: SVG, WebGL (Three.js), Lit/Web Components, VR/AR-ready.
- **Streaming and deltas**: differential updates, hash-chain, selective subscriptions.
- **Bridges and interoperability**: import/export to VectorDiff, glTF, CSV, DICOM (planned).

```
---


## 🗂 Repository Structure



- sentio-core/         – base types, validator, SelfModel logic
- sentio-viz/          – renderers: SVG, Three.js, LitTrackView
- sentio-introspect/   – tools for AI introspection and validation
- sentio-bridge/       – import/export adapters (e.g., VectorDiff)
- scripts/             – CLI: validate, convert, render
- examples/            – example data and mini viewer apps
- docs/                – format and API documentation
- sentio.schema.json   – core JSON Schema for validation

````

---

## 🔧 Installation

```bash
git clone https://github.com/yourname/sentio-diff.git
cd sentio-diff
npm install
npm run build
````

Or using `pnpm` (recommended for monorepos):

```bash
pnpm install
pnpm -F sentio-core build
```

---

## 🧪 CLI Tools

Available in the `scripts/` folder:

```bash
npx ts-node scripts/sentio-validate.ts examples/basic_example.json
npx ts-node scripts/sentio-render.ts examples/basic_example.json
npx ts-node scripts/sentio-to-vector.ts examples/basic_example.json
```

---

## 🧬 Sample SentioDiff Document (JSON)

```json
{
  "version": "1.0-sentio",
  "profiles": ["ui2d", "selfmodel"],
  "entities": {
    "rect1": {
      "typeRef": "GeomRect",
      "props": { "fill": "#FF0000" },
      "tracks": {
        "pose": [
          { "t": 0, "x": 100, "y": 100 },
          { "t": 1000, "x": 300, "y": 100 }
        ]
      }
    },
    "self": {
      "typeRef": "SelfModel",
      "tracks": {
        "attention": [
          { "t": 500, "target": "rect1", "weight": 0.9 }
        ]
      }
    }
  }
}
```

---

## 🧠 SelfModel: AI Introspection

The `sentio-core` module contains types and helpers for building introspective models:

```ts
import { createSelfModel, SelfModelEntity } from 'sentio-core';

const sm: SelfModelEntity = createSelfModel();
```

Validation using `ajv`:

```ts
import { validateSelfModel } from 'sentio-introspect';
validateSelfModel(sm);
```

---

## 🖼 Visualizing Data

```ts
import { SVGTrackView, ThreeTrackView } from 'sentio-viz';

const svgView = new SVGTrackView();
svgView.render(document.getElementById('svg-container')!);

const threeView = new ThreeTrackView();
threeView.render(document.getElementById('3d-container')!);
```

---

## 🌉 Interoperability

With `sentio-bridge`, you can:

* Import a `VectorDiff` document and convert it to SentioDiff,
* Export a SentioDiff document into legacy `VectorDiff` format.

---

## 🔍 Examples

Located in the `examples/` folder, including:

* `basic_example.json` – animated rectangle with SelfModel.
* `introspection_demo.json` – introspective tracks and attention timeline.
* `viewer-demo/` – interactive HTML viewer with SVG + Lit renderer.

---

## ✅ Testing and CI

GitHub Actions CI (`.github/workflows/ci.yml`) automatically runs:

* Schema validation tests,
* TypeScript compilation,
* CLI validation on sample data.

---

## 📄 License

Dual licensing - AGPL 3.0 and a commercial license for entities that cannot use AGPL 3.0

---

## 📬 Contact & Development

Want to contribute or have questions?
Open an issue 

---

## 🧭 Roadmap

* [x] `sentio-core` prototype
* [x] SelfModel with introspection tracks
* [x] JSON schema validator
* [x] VectorDiff compatibility bridge
* [ ] Medical data support (DICOM, NIfTI)
* [ ] Interactive SelfModel timeline
* [ ] Delta updates and streamable engine

Join us to shape the next generation of introspective, semantic data language.

---
