# SPE Usage Examples

## 📚 Table of Contents

- [Basic Usage](#basic-usage)
- [Advanced Mathematical Operations](#advanced-mathematical-operations)
- [Learning and Pattern Recognition](#learning-and-pattern-recognition)
- [Performance Monitoring](#performance-monitoring)
- [Knowledge Persistence](#knowledge-persistence)
- [Complex Expression Processing](#complex-expression-processing)
- [Integration Examples](#integration-examples)
- [Real-world Applications](#real-world-applications)

## 🚀 Basic Usage

### Simple Arithmetic

```typescript
import { SPECore } from './src/spe-core.js';

const spe = new SPECore();

// Basic arithmetic operations
console.log(spe.processMath('2+2'));        // "4"
console.log(spe.processMath('3*4'));        // "12"
console.log(spe.processMath('10-5'));       // "5"
console.log(spe.processMath('8/2'));        // "4"
console.log(spe.processMath('15+7'));       // "22"
console.log(spe.processMath('25-12'));      // "13"
console.log(spe.processMath('36/6'));       // "6"
console.log(spe.processMath('7*8'));        // "56"
```

### BEDMAS Order of Operations

```typescript
// BEDMAS (Brackets, Exponents, Division/Multiplication, Addition/Subtraction)
console.log(spe.processMath('2+3*4'));      // "14" (3*4=12, 2+12=14)
console.log(spe.processMath('10-2*3'));     // "4" (2*3=6, 10-6=4)
console.log(spe.processMath('15/3+2'));     // "7" (15/3=5, 5+2=7)
console.log(spe.processMath('4*5-10'));     // "10" (4*5=20, 20-10=10)
console.log(spe.processMath('2+3*4-1'));    // "13" (3*4=12, 2+12=14, 14-1=13)
console.log(spe.processMath('10/2+15/3'));  // "9" (10/2=5, 15/3=5, 5+5=9)

// With parentheses
console.log(spe.processMath('(2+3)*4'));    // "20" (2+3=5, 5*4=20)
console.log(spe.processMath('10/(2+3)'));   // "2" (2+3=5, 10/5=2)
console.log(spe.processMath('(15-5)/2'));   // "5" (15-5=10, 10/2=5)
console.log(spe.processMath('2*(3+4)'));    // "14" (3+4=7, 2*7=14)
```

## 🧮 Advanced Mathematical Operations

### Exponents and Roots

```typescript
// Exponents
console.log(spe.processMath('2^3'));        // "8" (2*2*2)
console.log(spe.processMath('5^2'));        // "25" (5*5)
console.log(spe.processMath('3^4'));        // "81" (3*3*3*3)
console.log(spe.processMath('2^10'));       // "1024" (2^10)

// Square roots
console.log(spe.processMath('sqrt(16)'));   // "4" (4*4=16)
console.log(spe.processMath('sqrt(25)'));   // "5" (5*5=25)
console.log(spe.processMath('sqrt(36)'));   // "6" (6*6=36)
console.log(spe.processMath('sqrt(49)'));   // "7" (7*7=49)
console.log(spe.processMath('sqrt(64)'));   // "8" (8*8=64)
console.log(spe.processMath('sqrt(81)'));   // "9" (9*9=81)
console.log(spe.processMath('sqrt(100)'));  // "10" (10*10=100)
```

### Factorials and Percentages

```typescript
// Factorials
console.log(spe.processMath('5!'));         // "120" (5*4*3*2*1)
console.log(spe.processMath('4!'));         // "24" (4*3*2*1)
console.log(spe.processMath('3!'));         // "6" (3*2*1)
console.log(spe.processMath('6!'));         // "720" (6*5*4*3*2*1)
console.log(spe.processMath('7!'));         // "5040" (7*6*5*4*3*2*1)

// Percentages
console.log(spe.processMath('20% of 50'));  // "10" (20% of 50 = 10)
console.log(spe.processMath('15% of 200')); // "30" (15% of 200 = 30)
console.log(spe.processMath('25% of 80'));  // "20" (25% of 80 = 20)
console.log(spe.processMath('10% of 150')); // "15" (10% of 150 = 15)
console.log(spe.processMath('50% of 100')); // "50" (50% of 100 = 50)
```

### Fractions

```typescript
// Fraction operations
console.log(spe.processMath('1/2 + 1/3'));  // "0.833333" (1/2 + 1/3 = 5/6)
console.log(spe.processMath('2/3 * 3/4'));  // "0.5" (2/3 * 3/4 = 6/12 = 1/2)
console.log(spe.processMath('3/4 - 1/2'));  // "0.25" (3/4 - 1/2 = 3/4 - 2/4 = 1/4)
console.log(spe.processMath('1/2 + 1/4 + 1/8')); // "0.875" (1/2 + 1/4 + 1/8 = 7/8)
console.log(spe.processMath('2/3 / 1/2'));  // "1.33333" (2/3 ÷ 1/2 = 4/3)
```

## 📐 Trigonometry

### Basic Trigonometric Functions

```typescript
// Sine function (angles in degrees)
console.log(spe.processMath('sin(0)'));     // "0"
console.log(spe.processMath('sin(30)'));    // "0.5"
console.log(spe.processMath('sin(45)'));    // "0.707107"
console.log(spe.processMath('sin(60)'));    // "0.866025"
console.log(spe.processMath('sin(90)'));    // "1"

// Cosine function (angles in degrees)
console.log(spe.processMath('cos(0)'));     // "1"
console.log(spe.processMath('cos(30)'));    // "0.866025"
console.log(spe.processMath('cos(45)'));    // "0.707107"
console.log(spe.processMath('cos(60)'));    // "0.5"
console.log(spe.processMath('cos(90)'));    // "0"

// Tangent function (angles in degrees)
console.log(spe.processMath('tan(0)'));     // "0"
console.log(spe.processMath('tan(30)'));    // "0.57735"
console.log(spe.processMath('tan(45)'));    // "1"
console.log(spe.processMath('tan(60)'));    // "1.73205"
console.log(spe.processMath('tan(90)'));    // "Infinity"
```

### Combined Trigonometric Operations

```typescript
// Combined trigonometric expressions
console.log(spe.processMath('sin(45) + cos(45)'));     // "1.41421" (√2)
console.log(spe.processMath('tan(45) + sin(30)'));     // "1.5"
console.log(spe.processMath('cos(60) + sin(30)'));     // "1"
console.log(spe.processMath('sin(30) * cos(60)'));     // "0.25"
console.log(spe.processMath('tan(30) + tan(60)'));     // "2.3094")
```

## 🔢 Algebra

### Linear Equations

```typescript
// Linear equations in one variable
console.log(spe.processMath('2x + 3 = 7'));  // "x = 2"
console.log(spe.processMath('x - 5 = 10'));  // "x = 15"
console.log(spe.processMath('3x = 15'));     // "x = 5"
console.log(spe.processMath('4x + 1 = 9'));  // "x = 2"
console.log(spe.processMath('5x - 3 = 12')); // "x = 3"
console.log(spe.processMath('2x + 8 = 16')); // "x = 4"

// Equations with fractions
console.log(spe.processMath('x/2 + 3 = 7')); // "x = 8"
console.log(spe.processMath('3x/4 = 12'));   // "x = 16"
console.log(spe.processMath('2x/3 = 8'));    // "x = 12"
```

### Quadratic Equations

```typescript
// Quadratic equations
console.log(spe.processMath('x^2 - 4 = 0'));         // "x = 2, -2"
console.log(spe.processMath('x^2 + 5x + 6 = 0'));    // "x = -2, -3"
console.log(spe.processMath('x^2 - 2x - 3 = 0'));    // "x = 3, -1"
console.log(spe.processMath('x^2 + 2x - 3 = 0'));    // "x = 1, -3"
console.log(spe.processMath('x^2 - 9 = 0'));         // "x = 3, -3"

// Simple quadratic forms
console.log(spe.processMath('x^2 + 1 = 0'));         // "no real solutions"
console.log(spe.processMath('x^2 + 4 = 0'));         // "no real solutions"
console.log(spe.processMath('x^2 - 1 = 0'));         // "x = 1, -1"
```

### Substitution Problems

```typescript
// Substitution problems
console.log(spe.processMath('if x = 3, what is 2x + 1?')); // "7"
console.log(spe.processMath('if x = 5, what is x^2 + 3x?')); // "40"
console.log(spe.processMath('if x = 2, what is 3x^2 - 4?')); // "8")
console.log(spe.processMath('if x = 4, what is sqrt(x) + 1?')); // "3")
```

## 📈 Logarithms

### Common and Natural Logarithms

```typescript
// Common logarithms (base 10)
console.log(spe.processMath('log(10)'));    // "1"
console.log(spe.processMath('log(100)'));   // "2"
console.log(spe.processMath('log(1000)'));  // "3"
console.log(spe.processMath('log(1)'));     // "0"
console.log(spe.processMath('log(2)'));     // "0.30103"

// Natural logarithms (base e)
console.log(spe.processMath('ln(e)'));      // "1"
console.log(spe.processMath('ln(1)'));      // "0"
console.log(spe.processMath('ln(10)'));     // "2.30259"
console.log(spe.processMath('ln(2)'));      // "0.693147")
```

## 🧮 Calculus

### Basic Derivatives

```typescript
// Basic polynomial derivatives
console.log(spe.processMath('d/dx(x)'));     // "1"
console.log(spe.processMath('d/dx(x^2)'));   // "2x"
console.log(spe.processMath('d/dx(x^3)'));   // "3x^2"
console.log(spe.processMath('d/dx(x^4)'));   // "4x^3"
console.log(spe.processMath('d/dx(5)'));     // "0" (derivative of constant)
console.log(spe.processMath('d/dx(3x)'));    // "3"
console.log(spe.processMath('d/dx(2x^2)'));  // "4x")
```

## 🎲 Combinatorics

### Combinations and Permutations

```typescript
// Combinations (n choose k)
console.log(spe.processMath('C(5,2)'));     // "10" (5 choose 2)
console.log(spe.processMath('C(10,3)'));    // "120" (10 choose 3)
console.log(spe.processMath('C(6,2)'));     // "15" (6 choose 2)
console.log(spe.processMath('C(8,3)'));     // "56" (8 choose 3)

// Permutations (nPk)
console.log(spe.processMath('P(5,2)'));     // "20" (5 permute 2)
console.log(spe.processMath('P(4,3)'));     // "24" (4 permute 3)
console.log(spe.processMath('P(6,2)'));     // "30" (6 permute 2)

// Natural language expressions
console.log(spe.processMath('5 choose 2'));  // "10"
console.log(spe.processMath('10 choose 3')); // "120"
```

## 🔄 Learning and Pattern Recognition

### Teaching SPE New Patterns

```typescript
import { SPECore } from './src/spe-core.js';

const spe = new SPECore();

// Manually teach SPE new mathematical patterns
spe.addMathPattern('15*25', '#15*#25=?', 'multiplication', '375', 1.0);
spe.addMathPattern('144/12', '#144/#12=?', 'division', '12', 1.0);
spe.addMathPattern('13*7', '#13*#7=?', 'multiplication', '91', 1.0);
spe.addMathPattern('100-23', '#100-#23=?', 'subtraction', '77', 1.0);

// Process the taught patterns
console.log(spe.processMath('15*25'));  // "375"
console.log(spe.processMath('144/12')); // "12"
console.log(spe.processMath('13*7'));   // "91"
console.log(spe.processMath('100-23')); // "77"
```

### Reinforcement Learning

```typescript
// Reinforce learning through repeated processing
const testExpression = '15*25';

for (let i = 0; i < 5; i++) {
  const result = spe.processMath(testExpression);
  console.log(`Iteration ${i + 1}: ${testExpression} = ${result}`);
  
  // Reinforce the successful path
  spe.reinforceMathPath(testExpression, result);
}

// Check learning statistics
const stats = spe.getStats();
console.log(`\nLearning Statistics:`);
console.log(`- Patterns learned: ${stats.patterns}`);
console.log(`- Average confidence: ${stats.avgConfidence}`);
console.log(`- Most learned: ${stats.mostLearned.join(', ')}`);
```

### Learning Progress Tracking

```typescript
// Track learning progress over time
const learningProgress = [];

for (let cycle = 0; cycle < 10; cycle++) {
  // Process various expressions
  const expressions = ['2+2', '3*4', '10-5', '8/2', '15*25'];
  let correct = 0;
  
  expressions.forEach(expr => {
    const result = spe.processMath(expr);
    if (result !== 'j-knw') {
      correct++;
      spe.reinforceMathPath(expr, result);
    }
  });
  
  const successRate = (correct / expressions.length) * 100;
  learningProgress.push(successRate);
  
  console.log(`Cycle ${cycle + 1}: ${successRate.toFixed(1)}% success`);
}

console.log('\nLearning Progress:', learningProgress);
```

## ⚡ Performance Monitoring

### Response Time Measurement

```typescript
import { SPECore } from './src/spe-core.js';

const spe = new SPECore();

// Test response times for different complexity levels
const testExpressions = [
  { expr: '1+1', complexity: 'Basic' },
  { expr: '2+3*4', complexity: 'BEDMAS' },
  { expr: 'sqrt(16)', complexity: 'Advanced' },
  { expr: 'sin(30)', complexity: 'Trigonometry' },
  { expr: '2x + 3 = 7', complexity: 'Algebra' },
  { expr: '2^3 + sin(30)', complexity: 'Complex' }
];

console.log('Performance Testing:');
console.log('─'.repeat(50));

testExpressions.forEach(({ expr, complexity }) => {
  const startTime = Date.now();
  const result = spe.processMath(expr);
  const responseTime = Date.now() - startTime;
  
  console.log(`${complexity.padEnd(12)} | ${expr.padEnd(15)} → ${result.padEnd(10)} (${responseTime}ms)`);
});
```

### Performance Analytics

```typescript
// Get detailed performance statistics
const stats = spe.getStats();
console.log('\nPerformance Analytics:');
console.log('─'.repeat(30));
console.log(`Knowledge Graph Nodes: ${stats.nodes}`);
console.log(`Mathematical Patterns: ${stats.patterns}`);
console.log(`Average Confidence: ${stats.avgConfidence}`);
console.log(`Last Update: ${stats.lastUpdate}`);
console.log(`Most Learned: ${stats.mostLearned.join(', ')}`);

// Perform self-reflection
const reflection = spe.performSelfReflection();
console.log('\nSelf-Reflection:');
console.log(reflection);
```

### Complexity Analysis

```typescript
// Analyze performance by complexity level
const complexityTests = {
  'Basic (1-2)': ['1+1', '2+2', '3*4'],
  'Intermediate (3-4)': ['2+3*4', 'sqrt(16)', '2^3'],
  'Advanced (5-6)': ['sin(30)', 'cos(45)', '5!'],
  'Expert (7-8)': ['2x + 3 = 7', 'x^2 - 4 = 0', 'log(100)']
};

for (const [level, expressions] of Object.entries(complexityTests)) {
  let totalTime = 0;
  let successCount = 0;
  
  expressions.forEach(expr => {
    const startTime = Date.now();
    const result = spe.processMath(expr);
    const responseTime = Date.now() - startTime;
    
    totalTime += responseTime;
    if (result !== 'j-knw') successCount++;
  });
  
  const avgTime = totalTime / expressions.length;
  const successRate = (successCount / expressions.length) * 100;
  
  console.log(`${level}: ${successRate.toFixed(1)}% success, ${avgTime.toFixed(1)}ms avg`);
}
```

## 💾 Knowledge Persistence

### Saving and Loading Brain States

```typescript
import { SPECore } from './src/spe-core.js';

const spe = new SPECore();

// Teach SPE some patterns
console.log('Teaching SPE new patterns...');
spe.addMathPattern('15*25', '#15*#25=?', 'multiplication', '375', 1.0);
spe.addMathPattern('144/12', '#144/#12=?', 'division', '12', 1.0);

// Process expressions to reinforce learning
for (let i = 0; i < 3; i++) {
  spe.processMath('15*25');
  spe.processMath('144/12');
}

// Check current statistics
const beforeStats = spe.getStats();
console.log(`Before save: ${beforeStats.patterns} patterns`);

// Save brain state
console.log('\nSaving brain state...');
const savedPath = await spe.saveBrainState();
console.log(`Brain saved to: ${savedPath}`);

// Continue learning
spe.addMathPattern('13*7', '#13*#7=?', 'multiplication', '91', 1.0);
for (let i = 0; i < 3; i++) {
  spe.processMath('13*7');
}

const afterStats = spe.getStats();
console.log(`After additional learning: ${afterStats.patterns} patterns`);

// Load brain state
console.log('\nLoading brain state...');
const loaded = await spe.loadBrainState();
if (loaded) {
  const loadedStats = spe.getStats();
  console.log(`After load: ${loadedStats.patterns} patterns`);
} else {
  console.log('No brain state found');
}

// Clean up
spe.close();
```

### Version Control and Backup

```typescript
import { SPECore } from './src/spe-core.js';

// Create multiple brain states
const spe1 = new SPECore();
const spe2 = new SPECore();

// Teach different patterns to each instance
spe1.addMathPattern('15*25', '#15*#25=?', 'multiplication', '375', 1.0);
spe2.addMathPattern('13*7', '#13*#7=?', 'multiplication', '91', 1.0);

// Save both brain states
await spe1.saveBrainState('brain-multiplication.db');
await spe2.saveBrainState('brain-algebra.db');

// List available brain states
const storage = new (await import('./src/db-storage.js')).DatabaseStorage();
const brainStates = await storage.listBrainStates();

console.log('Available brain states:');
brainStates.forEach(state => {
  console.log(`  ID: ${state.id}, Timestamp: ${new Date(state.timestamp).toLocaleString()}, Patterns: ${state.patterns}`);
});

storage.close();
spe1.close();
spe2.close();
```

## 🎯 Complex Expression Processing

### Multi-step Mathematical Operations

```typescript
import { SPECore } from './src/spe-core.js';

const spe = new SPECore();

// Complex expressions combining multiple operations
const complexExpressions = [
  '2^3 + sin(30)',           // 8 + 0.5 = 8.5
  'sqrt(16) + cos(60)',      // 4 + 0.5 = 4.5
  'log(100) + 5!',           // 2 + 120 = 122
  'sin(45) + cos(45)',       // 0.707107 + 0.707107 = 1.41421
  '2^3 + sin(30) + sqrt(16)', // 8 + 0.5 + 4 = 12.5
  'log(100) + 5! - 10% of 50', // 2 + 120 - 5 = 117
  'sin(45) + cos(45) + tan(45)', // 0.707107 + 0.707107 + 1 = 2.41421
  'd/dx(x^2) + log(100) + sqrt(25)' // 2x + 2 + 5 = 2x + 7
];

console.log('Complex Expression Processing:');
console.log('─'.repeat(50));

complexExpressions.forEach(expr => {
  const startTime = Date.now();
  const result = spe.processMath(expr);
  const responseTime = Date.now() - startTime;
  
  console.log(`${expr.padEnd(40)} → ${result.padEnd(15)} (${responseTime}ms)`);
});
```

### Real-world Mathematical Problems

```typescript
// Real-world problem solving
const realWorldProblems = [
  {
    problem: "Calculate compound interest: $1000 at 5% for 3 years",
    expression: "1000 * 1.05^3"
  },
  {
    problem: "Calculate area of circle with radius 5",
    expression: "pi * 5^2"
  },
  {
    problem: "Calculate volume of sphere with radius 3",
    expression: "4/3 * pi * 3^3"
  },
  {
    problem: "Calculate probability of 5 heads in 8 coin flips",
    expression: "C(8,5) * 0.5^8"
  },
  {
    problem: "Calculate monthly payment for $200k loan at 4% for 30 years",
    expression: "200000 * 0.04/12 * (1+0.04/12)^(30*12) / ((1+0.04/12)^(30*12)-1)"
  }
];

console.log('\nReal-world Mathematical Problems:');
console.log('─'.repeat(60));

realWorldProblems.forEach(({ problem, expression }) => {
  try {
    const result = spe.processMath(expression);
    console.log(`${problem}\n  Expression: ${expression}\n  Result: ${result}\n`);
  } catch (error) {
    console.log(`${problem}\n  Expression: ${expression}\n  Error: ${error.message}\n`);
  }
});
```

## 🔧 Integration Examples

### Web Server Integration

```typescript
// Example Express.js integration
import express from 'express';
import { SPECore } from './src/spe-core.js';

const app = express();
const port = 3000;
const spe = new SPECore();

app.use(express.json());
app.use(express.static('public'));

// Math calculation endpoint
app.post('/calculate', (req, res) => {
  try {
    const { expression } = req.body;
    
    if (!expression) {
      return res.status(400).json({ error: 'Expression is required' });
    }
    
    const result = spe.processMath(expression);
    const stats = spe.getStats();
    
    res.json({
      expression,
      result,
      timestamp: new Date().toISOString(),
      stats
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Learning endpoint
app.post('/learn', (req, res) => {
  try {
    const { expression, result } = req.body;
    
    if (!expression || !result) {
      return res.status(400).json({ error: 'Expression and result are required' });
    }
    
    spe.reinforceMathPath(expression, result);
    
    res.json({
      message: 'Learning reinforced successfully',
      expression,
      result
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Statistics endpoint
app.get('/stats', (req, res) => {
  const stats = spe.getStats();
  const reflection = spe.performSelfReflection();
  
  res.json({
    stats,
    reflection,
    timestamp: new Date().toISOString()
  });
});

app.listen(port, () => {
  console.log(`SPE Math Server running at http://localhost:${port}`);
});
```

### Command-line Interface

```typescript
// Advanced CLI interface
import { SPECore } from './src/spe-core.js';
import * as readline from 'readline';

const spe = new SPECore();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('🧠 SPE Advanced Math CLI');
console.log('Type "help" for commands, "exit" to quit\n');

function processCommand(command: string) {
  const cmd = command.toLowerCase().trim();
  
  switch (cmd) {
    case 'help':
      console.log(`
Available commands:
  calculate <expression>  - Calculate mathematical expression
  stats                  - Show performance statistics
  reflect                - Perform self-reflection
  save                   - Save brain state
  load                   - Load brain state
  reset                  - Reset to default patterns
  clear                  - Clear screen
  exit                   - Exit program
      `);
      break;
      
    case 'stats':
      console.log(spe.getStats());
      break;
      
    case 'reflect':
      console.log(spe.performSelfReflection());
      break;
      
    case 'save':
      spe.saveBrainState().then(path => {
        console.log(`Brain saved to: ${path}`);
      });
      break;
      
    case 'load':
      spe.loadBrainState().then(loaded => {
        console.log(loaded ? 'Brain state loaded successfully' : 'No brain state found');
      });
      break;
      
    case 'reset':
      spe = new SPECore(false);
      console.log('Brain reset to default patterns');
      break;
      
    case 'clear':
      console.clear();
      break;
      
    case 'exit':
      spe.close();
      rl.close();
      return;
      
    default:
      if (cmd.startsWith('calculate ')) {
        const expression = cmd.substring(10);
        const result = spe.processMath(expression);
        console.log(`Result: ${result}`);
      } else {
        console.log('Unknown command. Type "help" for available commands.');
      }
  }
}

function prompt() {
  rl.question('🔢 > ', (input) => {
    processCommand(input);
    prompt();
  });
}

prompt();
```

## 🏢 Real-world Applications

### Educational Tool

```typescript
// Interactive math learning assistant
class MathLearningAssistant {
  private spe: SPECore;
  
  constructor() {
    this.spe = new SPECore();
  }
  
  generatePracticeProblems(difficulty: 'basic' | 'intermediate' | 'advanced') {
    const problems = {
      basic: ['2+2', '3*4', '10-5', '8/2'],
      intermediate: ['2+3*4', 'sqrt(16)', '2^3', '5!'],
      advanced: ['sin(30)', '2x + 3 = 7', 'log(100)', 'C(5,2)']
    };
    
    return problems[difficulty];
  }
  
  checkAnswer(expression: string, userAnswer: string): boolean {
    const correctAnswer = this.spe.processMath(expression);
    return userAnswer === correctAnswer;
  }
  
  getHint(expression: string): string {
    // Analyze the expression and provide hints
    if (expression.includes('^')) return 'Remember: exponent means repeated multiplication';
    if (expression.includes('sqrt')) return 'Square root finds the number that, when multiplied by itself, gives the original number';
    if (expression.includes('sin') || expression.includes('cos') || expression.includes('tan')) return 'Trigonometric functions work with angles in degrees';
    if (expression.includes('x')) return 'This is an algebraic equation. Solve for x.';
    return 'Try to remember the order of operations: PEMDAS/BEDMAS';
  }
  
  trackProgress(studentId: string, results: Array<{expression: string, correct: boolean}>) {
    // Track student progress over time
    const correct = results.filter(r => r.correct).length;
    const accuracy = (correct / results.length) * 100;
    
    console.log(`Student ${studentId} progress:`);
    console.log(`- Accuracy: ${accuracy.toFixed(1)}%`);
    console.log(`- Total problems: ${results.length}`);
    console.log(`- Correct: ${correct}`);
    console.log(`- Areas for improvement: ${this.identifyWeakAreas(results)}`);
  }
  
  private identifyWeakAreas(results: Array<{expression: string, correct: boolean}>): string[] {
    const weakAreas: string[] = [];
    
    results.forEach(({expression, correct}) => {
      if (!correct) {
        if (expression.includes('^')) weakAreas.push('exponents');
        if (expression.includes('sqrt')) weakAreas.push('square roots');
        if (expression.includes('sin') || expression.includes('cos') || expression.includes('tan')) weakAreas.push('trigonometry');
        if (expression.includes('x')) weakAreas.push('algebra');
      }
    });
    
    return [...new Set(weakAreas)];
  }
}

// Usage example
const assistant = new MathLearningAssistant();

const problems = assistant.generatePracticeProblems('intermediate');
console.log('Practice Problems:', problems);

problems.forEach(problem => {
  const hint = assistant.getHint(problem);
  console.log(`Problem: ${problem}`);
  console.log(`Hint: ${hint}`);
  console.log('');
});
```

### Scientific Calculator Application

```typescript
// Advanced scientific calculator using SPE
class ScientificCalculator {
  private spe: SPECore;
  private history: Array<{expression: string, result: string, timestamp: Date}>;
  
  constructor() {
    this.spe = new SPECore();
    this.history = [];
  }
  
  calculate(expression: string): string {
    const result = this.spe.processMath(expression);
    
    // Add to history
    this.history.push({
      expression,
      result,
      timestamp: new Date()
    });
    
    return result;
  }
  
  getHistory(): Array<{expression: string, result: string, timestamp: Date}> {
    return [...this.history];
  }
  
  clearHistory(): void {
    this.history = [];
  }
  
  getStatistics() {
    const stats = this.spe.getStats();
    return {
      ...stats,
      totalCalculations: this.history.length,
      averageResponseTime: this.calculateAverageResponseTime()
    };
  }
  
  private calculateAverageResponseTime(): number {
    // This would require timing each calculation
    // For now, return the SPE's average response time
    return parseFloat(stats.avgConfidence) * 10; // Simplified calculation
  }
  
  // Scientific functions
  sin(degrees: number): string {
    return this.calculate(`sin(${degrees})`);
  }
  
  cos(degrees: number): string {
    return this.calculate(`cos(${degrees})`);
  }
  
  tan(degrees: number): string {
    return this.calculate(`tan(${degrees})`);
  }
  
  log(value: number): string {
    return this.calculate(`log(${value})`);
  }
  
  ln(value: number): string {
    return this.calculate(`ln(${value})`);
  }
  
  sqrt(value: number): string {
    return this.calculate(`sqrt(${value})`);
  }
  
  factorial(n: number): string {
    return this.calculate(`${n}!`);
  }
  
  power(base: number, exponent: number): string {
    return this.calculate(`${base}^${exponent}`);
  }
  
  combination(n: number, k: number): string {
    return this.calculate(`C(${n},${k})`);
  }
  
  permutation(n: number, k: number): string {
    return this.calculate(`P(${n},${k})`);
  }
}

// Usage example
const calculator = new ScientificCalculator();

// Basic calculations
console.log('2 + 2 =', calculator.calculate('2+2'));
console.log('3 * 4 =', calculator.calculate('3*4'));

// Scientific calculations
console.log('sin(30) =', calculator.sin(30));
console.log('log(100) =', calculator.log(100));
console.log('sqrt(16) =', calculator.sqrt(16));
console.log('5! =', calculator.factorial(5));

// Complex expressions
console.log('2^3 + sin(30) =', calculator.calculate('2^3 + sin(30)'));

// History and statistics
console.log('History:', calculator.getHistory());
console.log('Statistics:', calculator.getStatistics());
```

### Data Analysis Tool

```typescript
// Statistical analysis using SPE
class StatisticalAnalyzer {
  private spe: SPECore;
  
  constructor() {
    this.spe = new SPECore();
  }
  
  // Calculate basic statistics
  mean(data: number[]): number {
    const sum = data.reduce((a, b) => a + b, 0);
    return sum / data.length;
  }
  
  median(data: number[]): number {
    const sorted = [...data].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 === 0 
      ? (sorted[mid - 1] + sorted[mid]) / 2 
      : sorted[mid];
  }
  
  mode(data: number[]): number[] {
    const frequency: { [key: number]: number } = {};
    data.forEach(num => {
      frequency[num] = (frequency[num] || 0) + 1;
    });
    
    const maxFreq = Math.max(...Object.values(frequency));
    return Object.keys(frequency)
      .filter(key => frequency[Number(key)] === maxFreq)
      .map(Number);
  }
  
  standardDeviation(data: number[]): number {
    const mean = this.mean(data);
    const squaredDiffs = data.map(num => Math.pow(num - mean, 2));
    const avgSquaredDiff = this.mean(squaredDiffs);
    return Math.sqrt(avgSquaredDiff);
  }
  
  // Calculate probability
  probability(event: number, sampleSpace: number): number {
    return this.calculate(`(${event})/(${sampleSpace})`);
  }
  
  // Calculate combinations for probability
  combinations(n: number, k: number): number {
    return Number(this.spe.processMath(`C(${n},${k})`));
  }
  
  // Calculate permutations
  permutations(n: number, k: number): number {
    return Number(this.spe.processMath(`P(${n},${k})`));
  }
  
  // Calculate correlation coefficient
  correlation(x: number[], y: number[]): number {
    const n = x.length;
    const sumX = x.reduce((a, b) => a + b, 0);
    const sumY = y.reduce((a, b) => a + b, 0);
    const sumXY = x.reduce((total, xi, i) => total + xi * y[i], 0);
    const sumX2 = x.reduce((total, xi) => total + xi * xi, 0);
    const sumY2 = y.reduce((total, yi) => total + yi * yi, 0);
    
    const numerator = n * sumXY - sumX * sumY;
    const denominator = Math.sqrt((n * sumX2 - sumX * sumX) * (n * sumY2 - sumY * sumY));
    
    return numerator / denominator;
  }
  
  // Calculate regression line
  linearRegression(x: number[], y: number[]): { slope: number, intercept: number } {
    const n = x.length;
    const sumX = x.reduce((a, b) => a + b, 0);
    const sumY = y.reduce((a, b) => a + b, 0);
    const sumXY = x.reduce((total, xi, i) => total + xi * y[i], 0);
    const sumX2 = x.reduce((total, xi) => total + xi * xi, 0);
    
    const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
    const intercept = (sumY - slope * sumX) / n;
    
    return { slope, intercept };
  }
  
  private calculate(expression: string): number {
    return Number(this.spe.processMath(expression));
  }
}

// Usage example
const analyzer = new StatisticalAnalyzer();

const data1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const data2 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

console.log('Data 1:', data1);
console.log('Data 2:', data2);

console.log('Mean of data 1:', analyzer.mean(data1));
console.log('Median of data 1:', analyzer.median(data1));
console.log('Mode of data 1:', analyzer.mode(data1));
console.log('Standard deviation of data 1:', analyzer.standardDeviation(data1));

console.log('Probability of rolling a 6:', analyzer.probability(1, 6));
console.log('Combinations of 5 choose 2:', analyzer.combinations(5, 2));
console.log('Permutations of 5 choose 2:', analyzer.permutations(5, 2));

console.log('Correlation coefficient:', analyzer.correlation(data1, data2));
const regression = analyzer.linearRegression(data1, data2);
console.log('Linear regression: y =', regression.slope, 'x +', regression.intercept);
```

---

These examples demonstrate SPE's versatility across different domains and use cases. From basic arithmetic to complex scientific calculations, SPE provides a robust foundation for mathematical reasoning and learning applications.