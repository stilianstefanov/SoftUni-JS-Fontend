function solve(browserObj, commandArr) {
    for (const commandInfo of commandArr) {
        const [command, website] = commandInfo.split(' ');

        if (command === 'Open') {
            browserObj['Open Tabs'].push(website);
        } else if (command === 'Close') {
            if (!browserObj['Open Tabs'].includes(website)) continue;

            const index = browserObj['Open Tabs'].indexOf(website);
            browserObj['Open Tabs'].splice(index, 1);
            browserObj['Recently Closed'].push(website);
            
        } else {
            browserObj['Open Tabs'] = [];
            browserObj['Recently Closed'] = [];
            browserObj['Browser Logs'] = [];
            continue;
        }
        browserObj['Browser Logs'].push(commandInfo);
    }
    console.log(browserObj['Browser Name']);
    console.log(`Open Tabs: ${browserObj['Open Tabs'].join(', ')}`);
    console.log(`Recently Closed: ${browserObj['Recently Closed'].join(', ')}`);
    console.log(`Browser Logs: ${browserObj['Browser Logs'].join(', ')}`);
}