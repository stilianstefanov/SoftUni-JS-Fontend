function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      const inputText = document.querySelector('#inputs textarea').value;
      const inputArray = JSON.parse(inputText);
      let restaurants = {};

      for (const restaurantInfo of inputArray) {
         let [name, workersInfo] = restaurantInfo.split(' - ');
         if (!restaurants.hasOwnProperty(name)) restaurants[name] = [];

         for (const workerInfo of workersInfo.split(', ')) {
            let [workerName, workerSalary] = workerInfo.split(' ');
            restaurants[name].push({
               workerName,
               workerSalary: Number(workerSalary)
            });
         }
      }
      const bestRestaurantName = Object.entries(restaurants)
         .sort((a, b) => findAverage(b[1].map(w => w.workerSalary)) - findAverage(a[1].map(w => w.workerSalary)))[0][0];

      const bestRestaurantAvgSalary = findAverage(restaurants[bestRestaurantName]
         .map(w => w.workerSalary));
      const bestRestaurantMaxSalary = restaurants[bestRestaurantName].sort((a, b) => b.workerSalary - a.workerSalary)[0].workerSalary;

      let restaurantElement = document.querySelector('#bestRestaurant p');
      restaurantElement.textContent = `Name: ${bestRestaurantName} Average Salary: ${bestRestaurantAvgSalary.toFixed(2)} Best Salary: ${bestRestaurantMaxSalary.toFixed(2)}`;

      let workersOutput = restaurants[bestRestaurantName].sort((a, b) => b.workerSalary - a.workerSalary)
         .map(w => `Name: ${w.workerName} With Salary: ${w.workerSalary}`)
         .join(' ');

      document.querySelector('#workers p').textContent = workersOutput;

      function findAverage(numbers) {
         if (numbers.length === 0) {
            return 0;
         }

         const sum = numbers.reduce((acc, num) => acc + num, 0);
         const average = sum / numbers.length;

         return average;
      }
   }
}