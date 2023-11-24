function solve(passwords) {
    let username = passwords.shift();
    let counter = 1;

    passwords.forEach(p => {
        if(p === username.split('').reverse().join('')) {
            console.log(`User ${username} logged in.`);
            return;
            
        } else if(counter === 4){
            console.log(`User ${username} blocked!`);
            return;

        } else {
            console.log(`Incorrect password. Try again.`);
            counter++;
        }
    });
}