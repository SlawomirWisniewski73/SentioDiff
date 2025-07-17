export function importVectorDiff(vectordiff: any): any {
  const entities: Record<string, any> = {};

  vectordiff.baseScene.objects.forEach((obj: any, i: number) => {
    entities[`obj${i}`] = {
      typeRef: "GeomRect",
      props: obj.attributes,
      tracks: {
        pose: vectordiff.timeline.map((frame: any) => {
          const change = frame.changes.find((ch: any) => ch.id === obj.id);
          return { t: frame.t, ...change?.transform };
        }).filter(Boolean)
      }
    };
  });

  return {
    version: "1.0-sentio",
    entities
  };
}
