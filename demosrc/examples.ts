import { SPECore } from '../src/spe-core.js';

const spe = new SPECore();

console.log('📚 SPE Usage Examples');
console.log('====================');
console.log('This file demonstrates various ways to use SPE in your applications.\n');

// Example 1: Basic mathematical processing
console.log('🔢 Example 1: Basic Mathematical Processing');
console.log('─'.repeat(50));

const basicExamples = [
  '2+2*3',
  'sqrt(16)', 
  '2^3 + sin(30)',
  '20% of 50',
  '5!'
];

basicExamples.forEach(example => {
  const result = spe.processMath(example);
  console.log(`  ${example} = ${result}`);
});

console.log('\n');

// Example 2: Advanced mathematical domains
console.log('🧮 Example 2: Advanced Mathematical Domains');
console.log('─'.repeat(50));

const advancedExamples = [
  { expr: '2x + 3 = 7', domain: 'Linear Algebra' },
  { expr: 'x^2 - 4 = 0', domain: 'Quadratic Equations' },
  { expr: 'log(100)', domain: 'Logarithms' },
  { expr: 'd/dx(x^2)', domain: 'Calculus' },
  { expr: 'C(5,2)', domain: 'Combinatorics' }
];

advancedExamples.forEach(({expr, domain}) => {
  console.log(`  ${domain}: ${expr}`);
  const result = spe.processMath(expr);
  console.log(`    → ${result}\n`);
});

// Example 3: Performance monitoring
console.log('⚡ Example 3: Performance Monitoring');
console.log('─'.repeat(50));

const testExpressions = [
  '1+1',
  'sqrt(256)', 
  '2^10',
  'sin(45)',
  'log(1000)'
];

console.log('Testing performance with various expressions...\n');

testExpressions.forEach(expr => {
  const startTime = Date.now();
  const result = spe.processMath(expr);
  const responseTime = Date.now() - startTime;
  
  console.log(`  ${expr} → ${result} (${responseTime}ms)`);
});

console.log('\n');

// Example 4: Learning and pattern recognition
console.log('🧠 Example 4: Learning and Pattern Recognition');
console.log('─'.repeat(50));

// Teach SPE some patterns
const teachingExamples = [
  '15*25',
  '144/12', 
  '13*7',
  '100-23'
];

console.log('Teaching SPE new patterns...\n');

teachingExamples.forEach(expr => {
  const result = spe.processMath(expr);
  console.log(`  Learned: ${expr} = ${result}`);
});

// Now test if SPE remembers
console.log('\nTesting if patterns are remembered...\n');

teachingExamples.forEach(expr => {
  const startTime = Date.now();
  const result = spe.processMath(expr);
  const responseTime = Date.now() - startTime;
  
  console.log(`  ${expr} = ${result} (${responseTime}ms)`);
});

console.log('\n');

// Example 5: Self-reflection and analysis
console.log('🔍 Example 5: Self-Reflection and Analysis');
console.log('─'.repeat(50));

const reflection = spe.performSelfReflection();
console.log('SPE Self-Analysis:');
console.log(reflection);

console.log('\n');

// Example 6: Statistics and metrics
console.log('📊 Example 6: Statistics and Metrics');
console.log('─'.repeat(50));

const stats = spe.getStats();
console.log('Current SPE Statistics:');
console.log(`  Nodes in knowledge graph: ${stats.nodes}`);
console.log(`  Mathematical patterns learned: ${stats.patterns}`);
console.log(`  Average pattern confidence: ${stats.avgConfidence}`);
console.log(`  Most frequently learned: ${stats.mostLearned.join(', ')}`);
console.log(`  Last update: ${stats.lastUpdate}`);

console.log('\n');

// Example 7: Complex expression handling
console.log('🎯 Example 7: Complex Expression Handling');
console.log('─'.repeat(50));

const complexExpressions = [
  '2^3 + sin(30) + sqrt(16)',
  'log(100) + 5! - 10% of 50',
  'sin(45) + cos(45) + tan(45)',
  'd/dx(x^2) + log(100) + sqrt(25)'
];

complexExpressions.forEach(expr => {
  const startTime = Date.now();
  const result = spe.processMath(expr);
  const responseTime = Date.now() - startTime;
  
  console.log(`  ${expr}`);
  console.log(`    → ${result} (${responseTime}ms)\n`);
});

// Example 8: Error handling
console.log('❌ Example 8: Error Handling');
console.log('─'.repeat(50));

const errorExamples = [
  '2/0',
  'sqrt(-1)',
  'undefined_function(5)',
  '2x + y = 10'  // Too many variables
];

errorExamples.forEach(expr => {
  const result = spe.processMath(expr);
  console.log(`  ${expr} → ${result}`);
});

console.log('\n');

// Save the learned state
console.log('💾 Example 9: Saving Knowledge State');
console.log('─'.repeat(50));

spe.saveBrainState().then(() => {
  console.log('SPE knowledge state saved successfully!');
  
  // Final statistics
  const finalStats = spe.getStats();
  console.log('\n🎯 Final Summary:');
  console.log(`  Total patterns learned: ${finalStats.patterns}`);
  console.log(`  Knowledge graph nodes: ${finalStats.nodes}`);
  console.log(`  Average response time: ${spe.getStats().lastUpdate}`);
  
  spe.close();
  console.log('\n👋 All examples completed successfully!');
});