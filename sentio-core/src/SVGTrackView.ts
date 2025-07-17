export class SVGTrackView {
  private root: HTMLElement | null = null;

  render(target: HTMLElement, doc: any) {
    this.root = target;
    target.innerHTML = '';
    for (const [id, ent] of Object.entries(doc.entities)) {
      if (ent.typeRef === 'GeomRect') {
        const el = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        el.setAttribute("x", ent.tracks?.pose?.[0]?.x || 0);
        el.setAttribute("y", ent.tracks?.pose?.[0]?.y || 0);
        el.setAttribute("width", "100");
        el.setAttribute("height", "50");
        el.setAttribute("fill", ent.props?.fill || "gray");
        target.appendChild(el);
      }
    }
  }
}
