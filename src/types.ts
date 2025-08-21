// Core SPE Types
export interface Edge {
  to: string;
  baseProb: number;
  pheromone: number;
  guaTags?: string[];
  emojiTags?: string[];
  reinforcement: number;
}

export interface Node {
  text: string;
  edges: Edge[];
  nodeType: 'input' | 'operation' | 'result' | 'gua';
}

export interface SPEGraph {
  nodes: Map<string, Node>;
  lastUpdate: number;
}

export interface GuaSignal {
  symbol: string;
  meaning: string;
  weight: number;
}

export interface MathPattern {
  input: string;
  gua: string;
  operation: string;
  result: string;
  confidence: number;
}