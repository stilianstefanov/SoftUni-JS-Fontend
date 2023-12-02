function solve() {
   let addButtons = Array.from(document.getElementsByClassName('add-product'));
   let checkOutButton = document.getElementsByClassName('checkout')[0]; 

   addButtons.forEach(b => {
      b.addEventListener('click', addToCart);
   });

   checkOutButton.addEventListener('click', goToCheckOut);

   let addedProducts = [];
   let totalPrice = 0;

   function addToCart(e) {
      const parentElement = e.target.parentElement.parentElement;
      const productName = parentElement.querySelector('.product-title').textContent;
      const productPrice = parentElement.querySelector('.product-line-price').textContent;

      if (!addedProducts.includes(productName)) {
         addedProducts.push(productName);
      }
      totalPrice += Number(productPrice);

      let outputElement = document.getElementsByTagName('textarea')[0];
      outputElement.value += `Added ${productName} for ${Number(productPrice).toFixed(2)} to the cart.\n`;
   }

   function goToCheckOut(e) {
      let outputElement = document.getElementsByTagName('textarea')[0];
      outputElement.value += `You bought ${addedProducts.join(', ')} for ${totalPrice.toFixed(2)}.`

      disableButtons();
   }

   function disableButtons() {
      addButtons.forEach(b => {
         b.removeEventListener('click', addToCart);
      });

      checkOutButton.removeEventListener('click', goToCheckOut);
   }
}