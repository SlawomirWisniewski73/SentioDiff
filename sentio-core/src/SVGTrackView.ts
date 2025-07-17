// --- DEFINICJE INTERFEJSÓW ---
// Definiujemy, jak wygląda pojedyncza klatka kluczowa pozycji
interface PoseKeyframe {
  x: number;
  y: number;
}

// Definiujemy, jak wygląda obiekt ze ścieżkami (tracks)
interface EntityTracks {
  pose?: PoseKeyframe[]; // Ścieżka 'pose' jest opcjonalna i jest tablicą klatek
}

// Definiujemy, jak wyglądają właściwości (props) obiektu
interface EntityProps {
  fill?: string;
}

// Definiujemy, jak wygląda pojedyncza encja (obiekt) w dokumencie
interface SentioEntity {
  typeRef: string;
  tracks?: EntityTracks;
  props?: EntityProps;
}

// Definiujemy główną strukturę dokumentu Sentio
interface SentioDocument {
  entities: Record<string, SentioEntity>; // Obiekt, gdzie kluczem jest ID, a wartością jest encja
}


// --- POPRAWIONA KLASA ---
export class SVGTrackView {
  private root: HTMLElement | null = null;

  // Zmieniamy 'doc: any' na 'doc: SentioDocument'
  render(target: HTMLElement, doc: SentioDocument) {
    this.root = target;
    target.innerHTML = '';

    // Teraz TypeScript wie, że doc.entities to obiekt z encjami
    for (const [id, ent] of Object.entries(doc.entities)) {
      // I wie, że 'ent' ma typ SentioEntity
      if (ent.typeRef === 'GeomRect') {
        const el = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        
        // Dostęp do właściwości jest teraz bezpieczny i sprawdzany
        el.setAttribute("x", String(ent.tracks?.pose?.[0]?.x || 0));
        el.setAttribute("y", String(ent.tracks?.pose?.[0]?.y || 0));
        el.setAttribute("width", "100");
        el.setAttribute("height", "50");
        el.setAttribute("fill", ent.props?.fill || "gray");

        target.appendChild(el);
      }
    }
  }
}
