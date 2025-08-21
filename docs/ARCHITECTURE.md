# SPE Architecture Overview

## 🏗️ High-Level Architecture

SPE (String-Processing Engine) is a sophisticated AI system that combines symbolic processing with neural learning to achieve exact mathematical reasoning. The architecture is designed for modularity, scalability, and continuous improvement.

### System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                     SPE (String-Processing Engine)          │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  │
│  │   Input Layer   │  │  Processing    │  │   Output Layer  │  │
│  │                 │  │    Engine       │  │                 │  │
│  │ • Expression    │  │ • SPECore       │  │ • Results       │  │
│  │   Parser        │  │ • Path Selection│  │ • Confidence    │  │
│  │ • Normalization │  │ • Pattern Match │  │   Scores        │  │
│  │ • Validation    │  │ • Learning     │  │ • Analytics     │  │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘  │
│           │                     │                     │        │
│           └─────────────────────┼─────────────────────┘        │
│                                 │                              │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  │
│  │   Knowledge     │  │   Advanced     │  │   Persistence   │  │
│  │   Base          │  │   Math         │  │   Layer         │  │
│  │ • Graph         │  │ • Trigonometry │  │ • SQLite DB     │  │
│  │ • Patterns      │  │ • Algebra      │  │ • Brain States  │  │
│  │ • Memory        │  │ • Calculus     │  │ • Versioning    │  │
│  │ • Signals       │  │ • Combinatorics│  │ • Backup/Restore│  │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘  │
│                                 │                              │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │                  Gua Language Layer                     │  │
│  │ • Symbol Encoding • Signal Processing • Pattern Tags    │  │
│  └─────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

## 🧠 Core Components

### 1. SPECore (Main Processing Engine)

The heart of the system, responsible for orchestrating all mathematical processing operations.

**Key Responsibilities:**
- Input parsing and validation
- Pattern matching and recognition
- Path selection using pheromone-based algorithms
- Learning reinforcement and adaptation
- Performance monitoring and analytics

**Core Methods:**
- [`processMath(input: string): string`](../src/spe-core.ts:60) - Main processing entry point
- [`selectPath(startNode: string, activeSignals: string[]): string[]`](../src/spe-core.ts:203) - Optimal path selection
- [`reinforceMathPath(input: string, result: string): void`](../src/spe-core.ts:308) - Learning reinforcement
- [`performSelfReflection(): string`](../src/spe-core.ts:351) - System self-analysis

### 2. AdvancedMathProcessor (Specialized Mathematics)

Handles domain-specific mathematical operations beyond basic arithmetic.

**Supported Domains:**
- **Trigonometry**: `sin(30)`, `cos(45)`, `tan(60)`
- **Algebra**: Linear and quadratic equations, substitution
- **Logarithms**: `log(100)`, `ln(e)`
- **Calculus**: Basic derivatives `d/dx(x^2)`
- **Combinatorics**: Combinations `C(5,2)`, permutations `P(5,2)`
- **Matrix Operations**: Basic 2x2 matrix multiplication

**Key Methods:**
- [`processAdvancedMath(input: string): AdvancedResult`](../src/advanced-math.ts:20) - Advanced processing
- [`encodeAdvancedToGua(input: string, operations: string[]): string`](../src/advanced-math.ts:558) - Gua encoding

### 3. GuaProcessor (Mathematical Language)

SPE's custom mathematical language for efficient symbolic processing.

**Language Features:**
- Symbolic representation of mathematical operations
- Signal extraction and weight calculation
- Pattern tagging and categorization
- Efficient encoding/decoding of expressions

**Core Methods:**
- [`encodeToGua(input: string): string`](../src/gua.ts:23) - Convert to Gua language
- [`extractSignals(text: string): GuaSignal[]`](../src/gua.ts:42) - Extract mathematical signals
- [`calculateSignalWeight(guaTags: string[], activeSignals: GuaSignal[]): number`](../src/gua.ts:55) - Calculate signal importance

### 4. DatabaseStorage (Knowledge Persistence)

Handles persistent storage and retrieval of SPE's knowledge base.

**Storage Architecture:**
- SQLite database for efficient storage
- Versioned brain states
- Automatic backup and restore
- Performance metrics tracking

**Key Methods:**
- [`saveBrain(graph, patterns, memory, metrics, reflection, cycles): Promise<string>`](../src/db-storage.ts:68)
- [`loadBrain(): Promise<BrainState | null>`](../src/db-storage.ts:129)
- [`listBrainStates(): Promise<BrainStateInfo[]>`](../src/db-storage.ts:176)

## 🧠 Knowledge Architecture

### Knowledge Graph Structure

SPE uses a graph-based knowledge representation:

```typescript
interface Node {
  text: string;           // Mathematical expression or result
  edges: Edge[];          // Connections to other nodes
  nodeType: 'input' | 'operation' | 'result' | 'gua';
}

interface Edge {
  to: string;             // Target node ID
  baseProb: number;       // Base probability
  pheromone: number;      // Learning reinforcement
  guaTags?: string[];     // Associated Gua symbols
  emojiTags?: string[];   // Visual categorization
  reinforcement: number;  // Learning strength
}
```

### Pattern Learning System

SPE learns mathematical patterns through:

1. **Pattern Recognition**: Identifies recurring mathematical structures
2. **Confidence Scoring**: Tracks success rates for each pattern
3. **Reinforcement Learning**: Strengthens successful paths
4. **Memory Consolidation**: Merges related patterns
5. **Complexity Assessment**: Evaluates difficulty levels

**Pattern Structure:**
```typescript
interface MathPattern {
  input: string;      // Original expression
  gua: string;        // Gua representation
  operation: string;  // Type of operation
  result: string;     // Expected result
  confidence: number; // Success confidence (0-1)
}
```

## 🔄 Processing Flow

### 1. Input Processing Pipeline

```
Input Expression → Normalization → Validation → Complexity Assessment
                                                    ↓
                                              Pattern Matching
                                                    ↓
                                            Advanced Processing
                                                    ↓
                                              Path Selection
                                                    ↓
                                              Result Generation
                                                    ↓
                                              Learning Reinforcement
```

### 2. Decision Making Process

SPE uses a multi-layered decision system:

1. **Direct Evaluation**: Simple expressions evaluated immediately
2. **Pattern Matching**: Checks against learned patterns
3. **Advanced Processing**: Applies domain-specific rules
4. **Path Selection**: Uses pheromone-based optimization
5. **Fallback**: Returns "j-knw" for unknown expressions

### 3. Learning Reinforcement Cycle

```
Successful Processing → Pattern Recognition → Confidence Update
                                                    ↓
                                              Pheromone Reinforcement
                                                    ↓
                                              Memory Consolidation
                                                    ↓
                                              Performance Analytics
                                                    ↓
                                              Self-Reflection
```

## 📊 Performance Architecture

### Complexity Assessment System

SPE evaluates expression complexity using multiple factors:

```typescript
assessComplexity(input: string): number {
  let complexity = 0;
  
  // Basic operators
  complexity += (input.match(/[+\-*/]/g) || []).length;
  
  // Parentheses
  complexity += (input.match(/[()]/g) || []).length;
  
  // Advanced operators
  if (input.includes('^')) complexity += 2;
  if (input.includes('sqrt') || input.includes('√')) complexity += 2;
  if (input.includes('%')) complexity += 1;
  if (input.includes('!')) complexity += 2;
  
  return complexity;
}
```

### Performance Metrics

**Key Metrics Tracked:**
- Response time (sub-millisecond target)
- Success rate by complexity level
- Learning rate improvement
- Pattern recognition accuracy
- Memory usage optimization

**Analytics Structure:**
```typescript
interface PerformanceMetrics {
  correctAnswers: number;
  totalAttempts: number;
  averageResponseTime: number;
  complexityLevelsHandled: number[];
}
```

## 🧠 Self-Reflection Architecture

### Self-Analysis System

SPE performs continuous self-analysis to improve performance:

1. **Performance Review**: Analyzes success rates and response times
2. **Learning Assessment**: Evaluates pattern effectiveness
3. **Weakness Identification**: Finds areas for improvement
4. **Strategy Optimization**: Adjusts processing approaches
5. **Confidence Tracking**: Monitors learning progress

**Reflection Output:**
```typescript
interface SelfReflection {
  strongestAreas: string[];      // Best performing domains
  weakestAreas: string[];        // Areas needing improvement
  learningRate: number;          // Learning improvement rate
  confidenceGrowth: number[];    // Pattern confidence trends
}
```

## 🗄️ Storage Architecture

### Database Schema

```sql
CREATE TABLE brain_states (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  version TEXT NOT NULL,
  timestamp INTEGER NOT NULL,
  total_learning_cycles INTEGER NOT NULL,
  graph_nodes TEXT NOT NULL,
  graph_last_update INTEGER NOT NULL,
  patterns TEXT NOT NULL,
  learning_memory TEXT NOT NULL,
  performance_metrics TEXT NOT NULL,
  self_reflection TEXT NOT NULL,
  is_latest BOOLEAN DEFAULT FALSE
);
```

### Knowledge Persistence Strategy

1. **Version Control**: Each brain state is versioned
2. **Incremental Updates**: Only changes are saved
3. **Automatic Backup**: Regular backups prevent data loss
4. **Performance Optimization**: Efficient indexing and queries
5. **Migration Support**: Schema evolution handling

## 🔧 Extensibility Architecture

### Plugin System Design

SPE is designed for easy extension:

1. **Domain Modules**: Add new mathematical domains
2. **Processors**: Custom processing algorithms
3. **Storage Backends**: Alternative persistence systems
4. **UI Interfaces**: Different user interaction modes
5. **Analytics Extensions**: Custom performance metrics

### Extension Points

- **AdvancedMathProcessor**: Add new mathematical domains
- **GuaProcessor**: Extend language capabilities
- **DatabaseStorage**: Alternative storage systems
- **PerformanceMetrics**: Custom analytics
- **SelfReflection**: Advanced analysis algorithms

## 🚀 Scalability Architecture

### Performance Optimization

1. **Caching**: Frequently used patterns cached in memory
2. **Parallel Processing**: Multi-threaded operation support
3. **Lazy Loading**: On-demand pattern loading
4. **Memory Management**: Automatic garbage collection
5. **Query Optimization**: Efficient database indexing

### Load Balancing

For deployment in high-traffic environments:

1. **Horizontal Scaling**: Multiple SPE instances
2. **Load Distribution**: Intelligent request routing
3. **Session Management**: Stateful processing support
4. **Resource Monitoring**: Real-time performance tracking
5. **Auto-scaling**: Dynamic resource allocation

## 🔒 Security Architecture

### Data Protection

1. **Input Validation**: Sanitization of mathematical expressions
2. **SQL Injection Prevention**: Parameterized queries
3. **Memory Safety**: Type-safe processing
4. **Access Control**: Permission-based access
5. **Audit Logging**: Processing activity tracking

### Privacy Considerations

1. **Anonymization**: No personal data collection
2. **Data Minimization**: Only essential data stored
3. **Encryption**: Secure data transmission
4. **Compliance**: Privacy regulation adherence
5. **Transparency**: Clear data usage policies

---

This architecture provides a solid foundation for SPE's mathematical reasoning capabilities while maintaining flexibility for future enhancements and optimizations.