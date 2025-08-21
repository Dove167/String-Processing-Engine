import * as readline from 'readline';
import { SPECore } from '../src/spe-core.js';

const spe = new SPECore();

console.log('🧠 SPE Interactive Demo');
console.log('========================');
console.log('This demo showcases SPE\'s mathematical reasoning capabilities.');
console.log('Try various mathematical expressions to see how SPE processes them.\n');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function demoPrompt() {
  rl.question('🔢 Enter a mathematical expression (or "exit" to quit): ', async (input) => {
    const expression = input.trim();
    
    if (expression.toLowerCase() === 'exit') {
      console.log('\n👋 Demo completed! SPE demonstrated its mathematical reasoning capabilities.');
      rl.close();
      return;
    }

    if (!expression) {
      demoPrompt();
      return;
    }

    console.log(`\n🎯 Processing: ${expression}`);
    console.log('─'.repeat(50));
    
    const startTime = Date.now();
    const result = spe.processMath(expression);
    const responseTime = Date.now() - startTime;
    
    console.log(`✨ Result: ${result}`);
    console.log(`⚡ Response Time: ${responseTime}ms`);
    
    // Show current stats
    const stats = spe.getStats();
    console.log(`📊 Current Knowledge: ${stats.patterns} patterns learned`);
    console.log(`🧠 Last Update: ${stats.lastUpdate}`);
    
    console.log('\n' + '='.repeat(50) + '\n');
    demoPrompt();
  });
}

// Start with some example demonstrations
console.log('🎬 Starting with example demonstrations...\n');

const examples = [
  '2+2*3',
  'sqrt(16)',
  '2^3 + sin(30)',
  '20% of 50',
  '5!',
  '1/2 + 1/3',
  '2x + 3 = 7',
  'log(100)'
];

let exampleIndex = 0;

function runNextExample() {
  if (exampleIndex >= examples.length) {
    console.log('\n🎯 Now try your own expressions!\n');
    demoPrompt();
    return;
  }

  const example = examples[exampleIndex];
  console.log(`📝 Example ${exampleIndex + 1}/${examples.length}: ${example}`);
  
  const startTime = Date.now();
  const result = spe.processMath(example);
  const responseTime = Date.now() - startTime;
  
  console.log(`   Result: ${result} (${responseTime}ms)\n`);
  
  exampleIndex++;
  setTimeout(runNextExample, 1000);
}

runNextExample();