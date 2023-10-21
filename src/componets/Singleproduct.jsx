import { useLoaderData } from "react-router-dom";
import { useContext } from "react";


import { AuthContext } from "../Authprovider/Authprovider";
import Swal from "sweetalert2";


const Singleproduct = () => {
  const loadedProducts = useLoaderData();
  const { user } = useContext(AuthContext);

  const addToCart = async () => {
    if (user) {
      const cartItem = {
        userId: user.uid,
        productId: loadedProducts.id,
        name: loadedProducts.name,
        price: loadedProducts.price,
        img: loadedProducts.img,
        brand: loadedProducts.brand,
        rating: loadedProducts.rating,
        type: loadedProducts.type,

      };

      try {


        fetch('https://brand-shop-q9478mt03-abirahmmed12s-projects.vercel.app/add-to-cart', {
          method: 'POST', // HTTP method
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(cartItem)
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((data) => {

            if (data?.insertedId) {
              Swal.fire('Succesfully Added Item')
            }
          })
          .catch((error) => {
            console.error('Error adding item to cart:', error);
          });






      } catch (error) {
        console.error("Error adding item to cart:", error);
      }
    } else {

      Swal.fire('Please Login Frist')
    }
    console.log(user)
  };

  return (
    <div className="max-w-screen-xl m-auto">
      <div className="bg-green-100 px-2 py-10 ">
        <article className="mx-auto my-10 flex max-w-md flex-col rounded-2xl bg-white px-4 shadow md:max-w-5xl md:flex-row md:items-center">
          <div className="shrink-0 my-4 md:mr-8 md:max-w-sm">
            <img className="rounded-2xl" src={loadedProducts.img} alt="" />
          </div>
          <div className="py-4 sm:py-8">
            <a href="#" className="mb-3 block text-2xl font-semibold bg-red-500 text-gray-700">
              {loadedProducts.name}
            </a>
            <p className="block text-xl text-gray-700">Brand: {loadedProducts.brand}</p>
            <a className="block text-xl text-gray-700">Type: {loadedProducts.type}</a>
            <a className="block text-xl text-gray-700">Price: {loadedProducts.price} $</a>
            <a className="block text-xl mb-5 text-gray-700">{loadedProducts.rating} Rating</a>
            <p className="t
            ext-gray-400">
              Discover a curated menu filled with mouthwatering delights, from savory classics to innovative creations. Satisfy your cravings with our expertly crafted dishes made from the finest ingredients.
            </p>
            <div className="flex items-center">
              <img className="h-10 w-10 rounded-full object-cover" src="https://i.ibb.co/0sSpyMJ/kisspng-hamburger-black-and-white-food-monochrome-painting-western-food-5b3900af6db9a9-4477478015304.png" alt="Simon Lewis" />
              <p className="ml-4 w-56">
                <strong className="block font-medium text-gray-700">CulinaryCrafters</strong>
              </p>
              <button onClick={addToCart} className="btn btn-error">
                <img className="w-6" src="https://i.ibb.co/7VJxHw3/add-to-cart.png" alt="" />
                Add to Cart
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Singleproduct;
