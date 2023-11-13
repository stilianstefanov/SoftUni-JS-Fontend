function solve(args) {
    const [soap, ...inputCommands] = args;    
    let cleanValue = 10;
    const commands = {
        'water': (a) => a + a * 0.2,
        'vacuum cleaner': (a) => a + a * 0.25,
        'mud': (a) => a - a * 0.1,
        'soap': (a) => a + 10
    };

    inputCommands.forEach(c => cleanValue = commands[c](cleanValue));
    console.log(`The car is ${cleanValue.toFixed(2)}% clean.`);
}
