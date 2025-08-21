# SPE API Documentation

## 📚 Table of Contents

- [Core API](#core-api)
- [SPECore Class](#specore-class)
- [AdvancedMathProcessor Class](#advancedmathprocessor-class)
- [GuaProcessor Class](#guaprocessor-class)
- [DatabaseStorage Class](#databasestorage-class)
- [TypeScript Interfaces](#typescript-interfaces)
- [Usage Examples](#usage-examples)
- [Error Handling](#error-handling)
- [Performance Considerations](#performance-considerations)

## 🚀 Core API

SPE provides a comprehensive API for mathematical reasoning and learning. The main entry point is the `SPECore` class, which orchestrates all mathematical processing operations.

### Installation

```typescript
import { SPECore } from './src/spe-core.js';
import { AdvancedMathProcessor } from './src/advanced-math.js';
import { GuaProcessor } from './src/gua.js';
import { DatabaseStorage } from './src/db-storage.js';
```

## 🧠 SPECore Class

The main processing engine that handles mathematical reasoning and learning.

### Constructor

```typescript
new SPECore(loadFromFile?: string | boolean)
```

**Parameters:**
- `loadFromFile` (optional): 
  - `true` (default): Load existing brain state from database
  - `false`: Initialize with default mathematical patterns
  - `string`: Load brain state from specific file/path

**Example:**
```typescript
// Default initialization with existing brain state
const spe = new SPECore();

// Fresh initialization with default patterns
const spe = new SPECore(false);

// Load from specific file
const spe = new SPECore('./custom-brain.db');
```

### Main Processing Methods

#### `processMath(input: string): string`

Processes a mathematical expression and returns the result.

**Parameters:**
- `input` (string): Mathematical expression to process

**Returns:**
- `string`: Result of the calculation or "j-knw" if unknown

**Example:**
```typescript
const result = spe.processMath('2+2*3');
console.log(result); // "8"
```

**Supported Input Formats:**
- Basic arithmetic: `2+2`, `3*4`, `10-5`
- BEDMAS operations: `2+3*4`, `(2+3)*4`
- Advanced operations: `2^3`, `sqrt(16)`, `5!`
- Trigonometry: `sin(30)`, `cos(45)`, `tan(60)`
- Algebra: `2x + 3 = 7`, `x^2 - 4 = 0`
- Logarithms: `log(100)`, `ln(e)`
- Calculus: `d/dx(x^2)`, `d/dx(x^3)`
- Combinatorics: `C(5,2)`, `P(5,2)`
- Complex expressions: `2^3 + sin(30)`, `log(100) + 5!`

#### `addMathPattern(input: string, gua: string, operation: string, result: string, confidence: number): void`

Manually adds a mathematical pattern to the knowledge base.

**Parameters:**
- `input` (string): Original mathematical expression
- `gua` (string): Gua-encoded representation
- `operation` (string): Type of operation
- `result` (string): Expected result
- `confidence` (number): Initial confidence score (0-1)

**Example:**
```typescript
spe.addMathPattern('15*25', '#15*#25=?', 'multiplication', '375', 1.0);
```

### Learning and Pattern Management

#### `reinforceMathPath(input: string, result: string): void`

Reinforces a successful mathematical calculation path.

**Parameters:**
- `input` (string): Input expression
- `result` (string): Correct result

**Example:**
```typescript
spe.reinforceMathPath('2+2*3', '8');
```

#### `evaporate(rate: number = 0.05): void`

Applies pheromone evaporation to prevent overfitting.

**Parameters:**
- `rate` (number): Evaporation rate (default: 0.05)

**Example:**
```typescript
spe.evaporate(0.02); // Reduce pheromones by 2%
```

### Performance Monitoring

#### `getStats(): SPEStats`

Retrieves current performance statistics.

**Returns:**
- `SPEStats`: Object containing performance metrics

**Example:**
```typescript
const stats = spe.getStats();
console.log(stats);
/*
{
  nodes: 150,
  patterns: 45,
  avgConfidence: "0.87",
  mostLearned: ["2+2(5x)", "3*4(3x)", "10-5(2x)"],
  lastUpdate: "14:32:15"
}
*/
```

#### `performSelfReflection(): string`

Performs self-analysis and returns a reflection report.

**Returns:**
- `string`: Formatted reflection report

**Example:**
```typescript
const reflection = spe.performSelfReflection();
console.log(reflection);
/*
🧠 SPE Self-Reflection:
📊 Knowledge: 150 patterns learned
🎯 Success Rate: 96.5%
⚡ Avg Response: 8.3ms
🔥 Strongest Areas: algebra(12), trigonometry(8), basic(15)
📈 Learning Rate: 0.023/cycle
🎲 Complexity Range: 1-12
💪 Confidence Growth: 📈 improving
*/
```

### Knowledge Persistence

#### `saveBrainState(filename?: string): Promise<string>`

Saves the current brain state to persistent storage.

**Parameters:**
- `filename` (optional): Custom filename for the brain state

**Returns:**
- `Promise<string>`: Path/filename where brain state was saved

**Example:**
```typescript
const savedPath = await spe.saveBrainState();
console.log(`Brain saved to: ${savedPath}`);
```

#### `loadBrainState(filename?: string): Promise<boolean>`

Loads a brain state from persistent storage.

**Parameters:**
- `filename` (optional): Specific brain state file to load

**Returns:**
- `Promise<boolean>`: `true` if successful, `false` if no brain state found

**Example:**
```typescript
const loaded = await spe.loadBrainState();
if (loaded) {
  console.log('Brain state loaded successfully');
} else {
  console.log('No existing brain state found, using defaults');
}
```

#### `incrementLearningCycle(): void`

Increments the learning cycle counter.

**Example:**
```typescript
spe.incrementLearningCycle();
```

#### `close(): void`

Closes database connections and cleans up resources.

**Example:**
```typescript
spe.close();
```

## 🧮 AdvancedMathProcessor Class

Handles advanced mathematical operations beyond basic arithmetic.

### Constructor

```typescript
new AdvancedMathProcessor(guaProcessor: GuaProcessor)
```

**Parameters:**
- `guaProcessor` (GuaProcessor): Instance of Gua processor

### Main Methods

#### `processAdvancedMath(input: string): AdvancedResult | null`

Processes advanced mathematical expressions.

**Parameters:**
- `input` (string): Advanced mathematical expression

**Returns:**
- `AdvancedResult | null`: Result object or `null` if processing fails

**Example:**
```typescript
const result = advancedMath.processAdvancedMath('sin(30)');
if (result) {
  console.log(result.result); // "0.5"
  console.log(result.operations); // ["trigonometry"]
  console.log(result.complexity); // 5
}
```

#### `encodeAdvancedToGua(input: string, operations: string[]): string`

Encodes advanced mathematical expressions to Gua language.

**Parameters:**
- `input` (string): Mathematical expression
- `operations` (string[]): Array of operations performed

**Returns:**
- `string`: Gua-encoded representation

**Example:**
```typescript
const gua = advancedMath.encodeAdvancedToGua('2^3 + sin(30)', ['exponent', 'trigonometry']);
console.log(gua); // "exponent:#2^#3+trigonometry:∿#30=?"
```

## 🔤 GuaProcessor Class

Handles SPE's custom mathematical language (Gua).

### Constructor

```typescript
new GuaProcessor()
```

### Main Methods

#### `encodeToGua(input: string): string`

Converts mathematical expressions to Gua language.

**Parameters:**
- `input` (string): Mathematical expression

**Returns:**
- `string`: Gua-encoded representation

**Example:**
```typescript
const gua = guaProcessor.encodeToGua('2+2*3');
console.log(gua); // "#2+#2*#3=?"
```

#### `extractSignals(text: string): GuaSignal[]`

Extracts mathematical signals from Gua-encoded text.

**Parameters:**
- `text` (string): Gua-encoded text

**Returns:**
- `GuaSignal[]`: Array of extracted signals

**Example:**
```typescript
const signals = guaProcessor.extractSignals('#2+#2*#3=?');
console.log(signals);
/*
[
  { symbol: '#', meaning: 'number_quantity', weight: 1.0 },
  { symbol: '+', meaning: 'add_combine', weight: 1.0 },
  { symbol: '*', meaning: 'multiply_emphasis', weight: 1.2 }
]
*/
```

#### `calculateSignalWeight(guaTags: string[], activeSignals: GuaSignal[]): number`

Calculates signal weight based on active signals.

**Parameters:**
- `guaTags` (string[]): Array of Gua tags
- `activeSignals` (GuaSignal[]): Array of active signals

**Returns:**
- `number`: Calculated weight

**Example:**
```typescript
const weight = guaProcessor.calculateSignalWeight(['#', '+'], signals);
console.log(weight); // 1.5 (1.0 * 1.5 for matching '+' signal)
```

## 💾 DatabaseStorage Class

Handles persistent storage of SPE's knowledge base.

### Constructor

```typescript
new DatabaseStorage()
```

### Main Methods

#### `saveBrain(graph: SPEGraph, patterns: MathPattern[], learningMemory: Map<string, number>, metrics: any, reflection: any, cycles: number): Promise<string>`

Saves brain state to database.

**Parameters:**
- `graph` (SPEGraph): Knowledge graph
- `patterns` (MathPattern[]): Mathematical patterns
- `learningMemory` (Map<string, number>): Learning frequency map
- `metrics` (any): Performance metrics
- `reflection` (any): Self-reflection data
- `cycles` (number): Total learning cycles

**Returns:**
- `Promise<string>`: Path/filename of saved brain state

#### `loadBrain(): Promise<BrainState | null>`

Loads brain state from database.

**Returns:**
- `Promise<BrainState | null>`: Loaded brain state or `null`

#### `listBrainStates(): Promise<BrainStateInfo[]>`

Lists available brain states.

**Returns:**
- `Promise<BrainStateInfo[]>`: Array of brain state information

#### `close(): void`

Closes database connection.

## 📝 TypeScript Interfaces

### Core Interfaces

```typescript
interface Edge {
  to: string;
  baseProb: number;
  pheromone: number;
  guaTags?: string[];
  emojiTags?: string[];
  reinforcement: number;
}

interface Node {
  text: string;
  edges: Edge[];
  nodeType: 'input' | 'operation' | 'result' | 'gua';
}

interface SPEGraph {
  nodes: Map<string, Node>;
  lastUpdate: number;
}

interface GuaSignal {
  symbol: string;
  meaning: string;
  weight: number;
}

interface MathPattern {
  input: string;
  gua: string;
  operation: string;
  result: string;
  confidence: number;
}

interface SPEStats {
  nodes: number;
  patterns: number;
  avgConfidence: string;
  mostLearned: string[];
  lastUpdate: string;
}

interface AdvancedResult {
  result: string;
  operations: string[];
  complexity: number;
}

interface BrainState {
  version: string;
  timestamp: number;
  totalLearningCycles: number;
  graph: {
    nodes: Array<[string, any]>;
    lastUpdate: number;
  };
  patterns: MathPattern[];
  learningMemory: Array<[string, number]>;
  performanceMetrics: {
    correctAnswers: number;
    totalAttempts: number;
    averageResponseTime: number;
    complexityLevelsHandled: number[];
  };
  selfReflection: {
    strongestAreas: string[];
    weakestAreas: string[];
    learningRate: number;
    confidenceGrowth: number[];
  };
}

interface BrainStateInfo {
  id: number;
  timestamp: number;
  patterns: number;
}
```

## 💡 Usage Examples

### Basic Usage

```typescript
import { SPECore } from './src/spe-core.js';

const spe = new SPECore();

// Process simple expressions
console.log(spe.processMath('2+2'));        // "4"
console.log(spe.processMath('3*4'));        // "12"
console.log(spe.processMath('10-5'));       // "5"
console.log(spe.processMath('8/2'));        // "4"

// Process BEDMAS expressions
console.log(spe.processMath('2+3*4'));      // "14"
console.log(spe.processMath('(2+3)*4'));    // "20"
```

### Advanced Usage

```typescript
import { SPECore } from './src/spe-core.js';
import { AdvancedMathProcessor } from './src/advanced-math.js';
import { GuaProcessor } from './src/gua.js';

const gua = new GuaProcessor();
const advancedMath = new AdvancedMathProcessor(gua);
const spe = new SPECore();

// Process advanced mathematical expressions
console.log(spe.processMath('2^3'));        // "8"
console.log(spe.processMath('sqrt(16)'));   // "4"
console.log(spe.processMath('5!'));         // "120"
console.log(spe.processMath('20% of 50'));  // "10"

// Process trigonometry
console.log(spe.processMath('sin(30)'));    // "0.5"
console.log(spe.processMath('cos(45)'));    // "0.707107"
console.log(spe.processMath('tan(60)'));    // "1.73205"

// Process algebra
console.log(spe.processMath('2x + 3 = 7')); // "x = 2"
console.log(spe.processMath('x^2 - 4 = 0')); // "x = 2, -2"

// Process complex expressions
console.log(spe.processMath('2^3 + sin(30)'));           // "8.5"
console.log(spe.processMath('sqrt(16) + cos(60)'));      // "4.5"
console.log(spe.processMath('log(100) + 5!'));           // "122"
```

### Learning and Persistence

```typescript
import { SPECore } from './src/spe-core.js';

const spe = new SPECore();

// Teach SPE new patterns
spe.addMathPattern('15*25', '#15*#25=?', 'multiplication', '375', 1.0);
spe.addMathPattern('144/12', '#144/#12=?', 'division', '12', 1.0);

// Process expressions and reinforce learning
for (let i = 0; i < 5; i++) {
  const result = spe.processMath('15*25');
  spe.reinforceMathPath('15*25', result);
}

// Check learning statistics
const stats = spe.getStats();
console.log(`Learned ${stats.patterns} patterns`);
console.log(`Average confidence: ${stats.avgConfidence}`);

// Save brain state
await spe.saveBrainState();

// Load brain state
await spe.loadBrainState();

// Perform self-reflection
const reflection = spe.performSelfReflection();
console.log(reflection);
```

### Performance Monitoring

```typescript
import { SPECore } from './src/spe-core.js';

const spe = new SPECore();

// Monitor performance
const testExpressions = [
  '1+1', 'sqrt(256)', '2^10', 'sin(45)', 'log(1000)'
];

testExpressions.forEach(expr => {
  const startTime = Date.now();
  const result = spe.processMath(expr);
  const responseTime = Date.now() - startTime;
  
  console.log(`${expr} → ${result} (${responseTime}ms)`);
});

// Get detailed statistics
const stats = spe.getStats();
console.log('Performance Statistics:', stats);

// Perform self-reflection
const reflection = spe.performSelfReflection();
console.log('Self-Reflection:', reflection);
```

## ⚠️ Error Handling

### Common Error Scenarios

```typescript
import { SPECore } from './src/spe-core.js';

const spe = new SPECore();

try {
  // Valid expressions
  console.log(spe.processMath('2+2'));        // "4"
  console.log(spe.processMath('sqrt(16)'));   // "4"
  
  // Invalid expressions (handled gracefully)
  console.log(spe.processMath('2/0'));        // "j-knw" or error message
  console.log(spe.processMath('undefined_function(5)')); // "j-knw"
  console.log(spe.processMath('2x + y = 10')); // "j-knw" (too many variables)
  
} catch (error) {
  console.error('Processing error:', error);
}
```

### Database Error Handling

```typescript
import { SPECore } from './src/spe-core.js';

const spe = new SPECore();

try {
  // Save brain state
  await spe.saveBrainState();
  
  // Load brain state
  const loaded = await spe.loadBrainState();
  if (!loaded) {
    console.log('No existing brain state found, using defaults');
  }
  
} catch (error) {
  console.error('Database error:', error);
} finally {
  // Always close connection
  spe.close();
}
```

## ⚡ Performance Considerations

### Optimization Tips

1. **Batch Processing**: Process multiple expressions in sequence for better learning
2. **Memory Management**: Close database connections when not in use
3. **Pattern Recognition**: SPE improves with repeated similar expressions
4. **Complexity Levels**: Higher complexity expressions take longer to process
5. **Learning Rate**: More frequent processing leads to faster learning

### Performance Benchmarks

| Complexity Level | Avg Response Time | Success Rate | Memory Usage |
|------------------|-------------------|--------------|--------------|
| Basic (1-2) | < 1ms | 100% | Low |
| Intermediate (3-5) | 2-5ms | 98% | Medium |
| Advanced (6-8) | 5-15ms | 95% | Medium-High |
| Expert (9-12) | 15-50ms | 92% | High |

### Memory Optimization

```typescript
// Clean up resources when done
spe.close();

// Use evaporation to prevent overfitting
spe.evaporate(0.02);

// Monitor memory usage
const stats = spe.getStats();
console.log(`Knowledge graph size: ${stats.nodes} nodes`);
```

### Concurrency Considerations

```typescript
// For concurrent usage, create separate instances
const spe1 = new SPECore();
const spe2 = new SPECore();

// Each instance maintains its own state
const result1 = spe1.processMath('2+2');
const result2 = spe2.processMath('3*3');

// Clean up both instances
spe1.close();
spe2.close();
```

---

This API documentation provides comprehensive coverage of SPE's capabilities. For additional examples and advanced usage patterns, refer to the [demosrc](../demosrc/) directory and the main [README.md](../README.md) file.