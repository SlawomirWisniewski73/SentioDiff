export interface SelfModelEntity {
  id: string;
  name: string;
  description?: string;
  children?: SelfModelEntity[];
}

export function createSelfModel(): SelfModelEntity {
  // Create a default self-model with one root entity
  return {
    id: "root",
    name: "Root Entity",
    description: "The root of the self model",
    children: []
  };
}
