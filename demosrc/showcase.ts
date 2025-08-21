import { SPECore } from '../src/spe-core.js';

const spe = new SPECore();

console.log('🎬 SPE Automated Showcase');
console.log('========================');
console.log('This automated showcase demonstrates SPE\'s capabilities across different mathematical domains.\n');

// Test cases organized by mathematical domain
const testDomains = [
  {
    name: 'Basic Arithmetic',
    examples: [
      '2+2', '3*4', '10-5', '8/2', '15+7', '25-12', '36/6', '7*8'
    ]
  },
  {
    name: 'BEDMAS Order of Operations',
    examples: [
      '2+3*4', '10-2*3', '15/3+2', '4*5-10', '2+3*4-1', '10/2+15/3'
    ]
  },
  {
    name: 'Advanced Operations',
    examples: [
      '2^3', '5^2', 'sqrt(16)', 'sqrt(25)', '5!', '4!', '20% of 50', '15% of 200'
    ]
  },
  {
    name: 'Fractions and Mixed Operations',
    examples: [
      '1/2 + 1/3', '2/3 * 3/4', '3/4 - 1/2', '1/2 + 1/4 + 1/8'
    ]
  },
  {
    name: 'Trigonometry',
    examples: [
      'sin(30)', 'cos(45)', 'tan(60)', 'sin(90)', 'cos(0)', 'sin(0)', 'cos(30)', 'tan(45)'
    ]
  },
  {
    name: 'Algebra',
    examples: [
      '2x + 3 = 7', 'x - 5 = 10', '3x = 15', '4x + 1 = 9', 'x^2 - 4 = 0'
    ]
  },
  {
    name: 'Logarithms',
    examples: [
      'log(100)', 'log(1000)', 'ln(e)', 'log(10)'
    ]
  },
  {
    name: 'Calculus',
    examples: [
      'd/dx(x^2)', 'd/dx(x^3)', 'd/dx(5)', 'd/dx(x)'
    ]
  },
  {
    name: 'Competition Math',
    examples: [
      'C(5,2)', 'C(10,3)', 'P(5,2)', '5 choose 2'
    ]
  },
  {
    name: 'Complex Combined Expressions',
    examples: [
      '2^3 + sin(30)', 'sqrt(16) + cos(60)', 'log(100) + 5!', 'sin(45) + cos(45)'
    ]
  }
];

let currentDomain = 0;
let totalExamples = 0;
let successfulExamples = 0;
let totalTime = 0;

async function runDomain(domainIndex: number) {
  if (domainIndex >= testDomains.length) {
    await showFinalResults();
    return;
  }

  const domain = testDomains[domainIndex];
  console.log(`🎯 Testing: ${domain.name}`);
  console.log('─'.repeat(60));
  
  let domainStartTime = Date.now();
  let domainSuccessCount = 0;
  
  for (let i = 0; i < domain.examples.length; i++) {
    const example = domain.examples[i];
    console.log(`  ${i + 1}. ${example}`);
    
    const startTime = Date.now();
    const result = spe.processMath(example);
    const responseTime = Date.now() - startTime;
    
    totalTime += responseTime;
    totalExamples++;
    
    if (result !== 'j-knw') {
      domainSuccessCount++;
      successfulExamples++;
      console.log(`     ✅ ${result} (${responseTime}ms)`);
    } else {
      console.log(`     ❌ Failed to solve (${responseTime}ms)`);
    }
    
    // Small delay between examples
    await new Promise(resolve => setTimeout(resolve, 200));
  }
  
  const domainTime = Date.now() - domainStartTime;
  const domainSuccessRate = (domainSuccessCount / domain.examples.length) * 100;
  
  console.log(`\n📊 Domain Results: ${domainSuccessRate.toFixed(1)}% success (${domainSuccessCount}/${domain.examples.length})`);
  console.log(`⏱️  Domain Time: ${domainTime}ms\n`);
  
  currentDomain++;
  setTimeout(() => runDomain(currentDomain), 1000);
}

async function showFinalResults() {
  console.log('🎉 SHOWCASE COMPLETED');
  console.log('='.repeat(60));
  
  const overallSuccessRate = (successfulExamples / totalExamples) * 100;
  const averageResponseTime = totalTime / totalExamples;
  
  console.log(`📈 Overall Performance:`);
  console.log(`   Total Examples: ${totalExamples}`);
  console.log(`   Successful: ${successfulExamples}`);
  console.log(`   Success Rate: ${overallSuccessRate.toFixed(1)}%`);
  console.log(`   Average Response Time: ${averageResponseTime.toFixed(0)}ms`);
  
  // Show SPE's self-reflection
  console.log('\n🧠 SPE Self-Reflection:');
  const reflection = spe.performSelfReflection();
  console.log(reflection);
  
  // Show final stats
  console.log('\n📊 Final Knowledge Stats:');
  const stats = spe.getStats();
  console.log(`   Patterns Learned: ${stats.patterns}`);
  console.log(`   Average Confidence: ${stats.avgConfidence}`);
  console.log(`   Most Learned: ${stats.mostLearned.join(', ')}`);
  
  // Save brain state
  await spe.saveBrainState();
  console.log('\n💾 Brain state saved successfully!');
  
  spe.close();
  console.log('\n👋 Showcase completed! SPE demonstrated comprehensive mathematical reasoning.');
}

// Start the showcase
runDomain(0);