import * as readline from 'readline';
import { SPECore } from './spe-core.js';

const spe = new SPECore();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('🧠 Enhanced SPE Math REPL Started!');
console.log('Try: 2^3, sqrt(16), 5!, 20% of 50, 1/2 + 1/3');
console.log('Commands: "stats", "reflect", "save", "load", "list", "exit"\n');

function prompt() {
  rl.question('🔢 > ', async (input) => {
    const command = input.toLowerCase().trim();
    
    if (command === 'exit') {
      // Auto-save on exit
      await spe.saveBrainState();
      spe.close();
      rl.close();
      return;
    }

    if (command === 'stats') {
      console.log('📊 SPE Stats:', spe.getStats());
      prompt();
      return;
    }

    if (command === 'reflect') {
      spe.performSelfReflection();
      prompt();
      return;
    }

    if (command === 'save') {
      const filename = await spe.saveBrainState();
      console.log(`💾 Brain saved successfully!`);
      prompt();
      return;
    }

    if (command === 'load') {
      console.log('📂 Available brain states:');
      // Note: In a real implementation, we would list the brain states from the database
      console.log('  Latest brain state from database');
      prompt();
      return;
    }

    if (command === 'list') {
      console.log('📂 Brain states are stored in the database');
      prompt();
      return;
    }

    // Process math
    const result = spe.processMath(input.trim());
    console.log(`✨ Result: ${result}\n`);
    
    prompt();
  });
}

prompt();