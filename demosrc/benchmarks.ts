import { SPECore } from '../src/spe-core.js';

const spe = new SPECore();

console.log('⚡ SPE Performance Benchmarks');
console.log('============================');
console.log('This benchmark suite tests SPE\'s performance across different mathematical domains.\n');

interface BenchmarkResult {
  expression: string;
  result: string;
  responseTime: number;
  complexity: number;
  domain: string;
}

interface DomainStats {
  name: string;
  totalTests: number;
  successfulTests: number;
  averageResponseTime: number;
  totalResponseTime: number;
  fastestTime: number;
  slowestTime: number;
  complexityRange: { min: number; max: number };
}

// Benchmark test cases organized by complexity and domain
const benchmarkTests = [
  // Basic Operations (Complexity: 1-2)
  { expr: '1+1', domain: 'Basic Addition', complexity: 1 },
  { expr: '2+3', domain: 'Basic Addition', complexity: 1 },
  { expr: '5*3', domain: 'Basic Multiplication', complexity: 1 },
  { expr: '10-4', domain: 'Basic Subtraction', complexity: 1 },
  { expr: '8/2', domain: 'Basic Division', complexity: 1 },
  { expr: '25+17', domain: 'Two-digit Addition', complexity: 2 },
  { expr: '144/12', domain: 'Division', complexity: 2 },
  
  // BEDMAS Operations (Complexity: 2-4)
  { expr: '2+3*4', domain: 'BEDMAS', complexity: 3 },
  { expr: '10-2*3', domain: 'BEDMAS', complexity: 3 },
  { expr: '15/3+2', domain: 'BEDMAS', complexity: 3 },
  { expr: '4*5-10', domain: 'BEDMAS', complexity: 3 },
  { expr: '2+3*4-1', domain: 'BEDMAS', complexity: 4 },
  { expr: '10/2+15/3', domain: 'BEDMAS', complexity: 4 },
  { expr: '(2+3)*4', domain: 'Parentheses', complexity: 4 },
  { expr: '10/(2+3)', domain: 'Parentheses', complexity: 4 },
  
  // Advanced Operations (Complexity: 3-6)
  { expr: '2^3', domain: 'Exponents', complexity: 3 },
  { expr: '5^2', domain: 'Exponents', complexity: 3 },
  { expr: 'sqrt(16)', domain: 'Square Roots', complexity: 3 },
  { expr: 'sqrt(25)', domain: 'Square Roots', complexity: 3 },
  { expr: '5!', domain: 'Factorials', complexity: 4 },
  { expr: '4!', domain: 'Factorials', complexity: 4 },
  { expr: '20% of 50', domain: 'Percentages', complexity: 2 },
  { expr: '15% of 200', domain: 'Percentages', complexity: 2 },
  
  // Fractions (Complexity: 4-5)
  { expr: '1/2 + 1/3', domain: 'Fraction Addition', complexity: 5 },
  { expr: '2/3 * 3/4', domain: 'Fraction Multiplication', complexity: 5 },
  { expr: '3/4 - 1/2', domain: 'Fraction Subtraction', complexity: 5 },
  
  // Trigonometry (Complexity: 5-6)
  { expr: 'sin(30)', domain: 'Trigonometry', complexity: 5 },
  { expr: 'cos(45)', domain: 'Trigonometry', complexity: 5 },
  { expr: 'tan(60)', domain: 'Trigonometry', complexity: 5 },
  { expr: 'sin(90)', domain: 'Trigonometry', complexity: 5 },
  { expr: 'cos(0)', domain: 'Trigonometry', complexity: 5 },
  { expr: 'sin(0)', domain: 'Trigonometry', complexity: 5 },
  { expr: 'cos(30)', domain: 'Trigonometry', complexity: 5 },
  { expr: 'tan(45)', domain: 'Trigonometry', complexity: 5 },
  
  // Algebra (Complexity: 6-8)
  { expr: '2x + 3 = 7', domain: 'Linear Algebra', complexity: 6 },
  { expr: 'x - 5 = 10', domain: 'Linear Algebra', complexity: 6 },
  { expr: '3x = 15', domain: 'Linear Algebra', complexity: 6 },
  { expr: '4x + 1 = 9', domain: 'Linear Algebra', complexity: 6 },
  { expr: 'x^2 - 4 = 0', domain: 'Quadratic Equations', complexity: 8 },
  
  // Logarithms (Complexity: 4-5)
  { expr: 'log(100)', domain: 'Logarithms', complexity: 4 },
  { expr: 'log(1000)', domain: 'Logarithms', complexity: 4 },
  { expr: 'ln(e)', domain: 'Natural Log', complexity: 5 },
  { expr: 'log(10)', domain: 'Logarithms', complexity: 4 },
  
  // Calculus (Complexity: 7-8)
  { expr: 'd/dx(x^2)', domain: 'Derivatives', complexity: 7 },
  { expr: 'd/dx(x^3)', domain: 'Derivatives', complexity: 7 },
  { expr: 'd/dx(5)', domain: 'Derivatives', complexity: 7 },
  { expr: 'd/dx(x)', domain: 'Derivatives', complexity: 7 },
  
  // Combinatorics (Complexity: 8-9)
  { expr: 'C(5,2)', domain: 'Combinations', complexity: 8 },
  { expr: 'C(10,3)', domain: 'Combinations', complexity: 9 },
  { expr: 'P(5,2)', domain: 'Permutations', complexity: 8 },
  { expr: '5 choose 2', domain: 'Combinations', complexity: 8 },
  
  // Complex Combined (Complexity: 8-12)
  { expr: '2^3 + sin(30)', domain: 'Combined Operations', complexity: 9 },
  { expr: 'sqrt(16) + cos(60)', domain: 'Combined Operations', complexity: 8 },
  { expr: 'log(100) + 5!', domain: 'Combined Operations', complexity: 9 },
  { expr: 'sin(45) + cos(45)', domain: 'Combined Operations', complexity: 8 },
  { expr: '2^3 + sin(30) + sqrt(16)', domain: 'Complex Combined', complexity: 11 },
  { expr: 'log(100) + 5! - 10% of 50', domain: 'Complex Combined', complexity: 10 },
  { expr: 'sin(45) + cos(45) + tan(45)', domain: 'Complex Combined', complexity: 9 },
  { expr: 'd/dx(x^2) + log(100) + sqrt(25)', domain: 'Complex Combined', complexity: 12 }
];

// Run benchmarks
const results: BenchmarkResult[] = [];
const domainStats: Map<string, DomainStats> = new Map();

console.log('🚀 Running benchmark tests...\n');

for (let i = 0; i < benchmarkTests.length; i++) {
  const test = benchmarkTests[i];
  const startTime = Date.now();
  
  const result = spe.processMath(test.expr);
  const responseTime = Date.now() - startTime;
  
  const benchmarkResult: BenchmarkResult = {
    expression: test.expr,
    result,
    responseTime,
    complexity: test.complexity,
    domain: test.domain
  };
  
  results.push(benchmarkResult);
  
  // Update domain statistics
  if (!domainStats.has(test.domain)) {
    domainStats.set(test.domain, {
      name: test.domain,
      totalTests: 0,
      successfulTests: 0,
      averageResponseTime: 0,
      totalResponseTime: 0,
      fastestTime: Infinity,
      slowestTime: 0,
      complexityRange: { min: test.complexity, max: test.complexity }
    });
  }
  
  const stats = domainStats.get(test.domain)!;
  stats.totalTests++;
  stats.totalResponseTime += responseTime;
  stats.fastestTime = Math.min(stats.fastestTime, responseTime);
  stats.slowestTime = Math.max(stats.slowestTime, responseTime);
  stats.complexityRange.min = Math.min(stats.complexityRange.min, test.complexity);
  stats.complexityRange.max = Math.max(stats.complexityRange.max, test.complexity);
  
  if (result !== 'j-knw') {
    stats.successfulTests++;
  }
  
  // Show progress
  if ((i + 1) % 10 === 0) {
    console.log(`  Progress: ${i + 1}/${benchmarkTests.length} tests completed`);
  }
}

// Calculate final averages
for (const stats of domainStats.values()) {
  stats.averageResponseTime = stats.totalResponseTime / stats.totalTests;
}

// Generate benchmark report
console.log('\n📊 BENCHMARK RESULTS');
console.log('='.repeat(80));

// Overall statistics
const totalTests = results.length;
const successfulTests = results.filter(r => r.result !== 'j-knw').length;
const overallSuccessRate = (successfulTests / totalTests) * 100;
const averageResponseTime = results.reduce((sum, r) => sum + r.responseTime, 0) / totalTests;
const fastestTime = Math.min(...results.map(r => r.responseTime));
const slowestTime = Math.max(...results.map(r => r.responseTime));

console.log('\n🎯 Overall Performance:');
console.log(`  Total Tests: ${totalTests}`);
console.log(`  Successful: ${successfulTests} (${overallSuccessRate.toFixed(1)}%)`);
console.log(`  Average Response Time: ${averageResponseTime.toFixed(0)}ms`);
console.log(`  Fastest Response: ${fastestTime}ms`);
console.log(`  Slowest Response: ${slowestTime}ms`);

// Performance by complexity
console.log('\n📈 Performance by Complexity Level:');
const complexityGroups = new Map<number, BenchmarkResult[]>();
results.forEach(r => {
  if (!complexityGroups.has(r.complexity)) {
    complexityGroups.set(r.complexity, []);
  }
  complexityGroups.get(r.complexity)!.push(r);
});

const sortedComplexities = Array.from(complexityGroups.keys()).sort((a, b) => a - b);
sortedComplexities.forEach(level => {
  const tests = complexityGroups.get(level)!;
  const successful = tests.filter(t => t.result !== 'j-knw').length;
  const avgTime = tests.reduce((sum, t) => sum + t.responseTime, 0) / tests.length;
  const successRate = (successful / tests.length) * 100;
  
  console.log(`  Level ${level}: ${successRate.toFixed(1)}% success, ${avgTime.toFixed(0)}ms avg`);
});

// Performance by domain
console.log('\n🧮 Performance by Mathematical Domain:');
const sortedDomains = Array.from(domainStats.values()).sort((a, b) => 
  b.averageResponseTime - a.averageResponseTime
);

sortedDomains.forEach(domain => {
  const successRate = (domain.successfulTests / domain.totalTests) * 100;
  console.log(`  ${domain.name}: ${successRate.toFixed(1)}% success, ${domain.averageResponseTime.toFixed(0)}ms avg`);
  console.log(`    Complexity: ${domain.complexityRange.min}-${domain.complexityRange.max}`);
  console.log(`    Range: ${domain.fastestTime}-${domain.slowestTime}ms`);
});

// Performance outliers
console.log('\n⚡ Performance Analysis:');
const fastTests = results.filter(r => r.responseTime < 50).length;
const slowTests = results.filter(r => r.responseTime > 200).length;
const errorTests = results.filter(r => r.result === 'j-knw').length;

console.log(`  Fast responses (<50ms): ${fastTests} (${(fastTests/totalTests*100).toFixed(1)}%)`);
console.log(`  Slow responses (>200ms): ${slowTests} (${(slowTests/totalTests*100).toFixed(1)}%)`);
console.log(`  Failed responses: ${errorTests} (${(errorTests/totalTests*100).toFixed(1)}%)`);

// SPE self-reflection
console.log('\n🧠 SPE Self-Reflection:');
const reflection = spe.performSelfReflection();
console.log(reflection);

// Final knowledge stats
console.log('\n📚 Final Knowledge Statistics:');
const stats = spe.getStats();
console.log(`  Patterns Learned: ${stats.patterns}`);
console.log(`  Knowledge Graph Nodes: ${stats.nodes}`);
console.log(`  Average Confidence: ${stats.avgConfidence}`);
console.log(`  Most Frequently Learned: ${stats.mostLearned.join(', ')}`);

// Save brain state
console.log('\n💾 Saving benchmark results...');
spe.saveBrainState().then(() => {
  console.log('Benchmark results saved successfully!');
  
  console.log('\n🎉 BENCHMARK COMPLETED');
  console.log('='.repeat(80));
  console.log('SPE has been benchmarked across multiple mathematical domains.');
  console.log(`Final Success Rate: ${overallSuccessRate.toFixed(1)}%`);
  console.log(`Average Response Time: ${averageResponseTime.toFixed(0)}ms`);
  console.log(`Total Patterns Learned: ${stats.patterns}`);
  
  spe.close();
});

console.log('\n🎉 BENCHMARK COMPLETED');
console.log('='.repeat(80));
console.log('SPE has been benchmarked across multiple mathematical domains.');
console.log(`Final Success Rate: ${overallSuccessRate.toFixed(1)}%`);
console.log(`Average Response Time: ${averageResponseTime.toFixed(0)}ms`);
console.log(`Total Patterns Learned: ${stats.patterns}`);

spe.close();