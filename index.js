class ShoppingCartItem {
    constructor(product, quantity) {
      this.product = product; 
      this.quantity = quantity; 
    }
  
    getTotalPrice() {
      return this.product.price * this.quantity;
    }
  }

  class ShoppingCart {
    constructor() {
      this.items = []; }
  
    getTotalItems() {
      return this.items.reduce((total, item) => total + item.quantity, 0);
    }
  
    addItem(product, quantity) {
      const existingItem = this.items.find(item => item.product.id === product.id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        this.items.push(new ShoppingCartItem(product, quantity));
      }
    }
  
    removeItem(productId) {
      this.items = this.items.filter(item => item.product.id !== productId);
    }
  
    displayCart() {
      this.items.forEach(item => {
        console.log(`${item.product.name} (x${item.quantity}): $${item.getTotalPrice()}`);
      });
    }
  
    getTotalCost() {
      return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }
  }