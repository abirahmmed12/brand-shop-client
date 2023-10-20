// api.js


export async function addToCartOnServer(cartItem) {
    try {
      const response = await fetch('/api/add-to-cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cartItem),
      });
  
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Failed to add item to cart on the server');
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }
  
  // Function to retrieve cart items from the server
  export async function getCartItemsFromServer(userId) {
    try {
      const response = await fetch(`/api/get-cart?userId=${userId}`);
  
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Failed to retrieve cart items from the server');
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }
  