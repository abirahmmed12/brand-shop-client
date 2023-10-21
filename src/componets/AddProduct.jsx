import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const AddProduct = () => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch(`https://coffe-store-server-2x8ec96r6-abirahmmed12s-projects.vercel.app/brands`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setBrands(data);
        })
        .catch((error) => {
            console.error('Error adding a product:', error);
        });
    }, []);

    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const brand = document.getElementById("brands").value;
        const type = form.type.value;
        const price = form.price.value
        const rating = form.rating.value
        const name = form.name.value;
        const img = form.img.value;
        const newProduct = { brand, type, price, rating, name, img };
        console.log(newProduct)

        fetch(`https://coffe-store-server-2x8ec96r6-abirahmmed12s-projects.vercel.app/create-service`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProduct),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
         
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                  })
            
        })
    };

    return (
        <div className="bg-image max-w-screen-xl m-auto pb-10 pt-10 lg:p-0 p-10" style={{ backgroundImage: `url(https://i.ibb.co/2cF61XY/vecteezy-delicious-fast-foods-hand-drawing-black-and-white-set-that-7410726.jpg)` }}>
            <form onSubmit={handleAddProduct} className="max-w-md mx-auto p-5 rounded-lg bg-white shadow-lg ">
                <div className="mb-4">
                    <label htmlFor="brand" className="block text-gray-700 font-bold mb-2">Brand</label>
                    <select className='w-full border-2 py-2 px-3' id="brands">
                        {
                            brands.map((brand, i) => (
                                <option name="brand" key={i} value={brand.brand}>{brand.name}</option>
                            ))
                        }
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                    <input type="text" id="name" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                    <label htmlFor="img" className="block text-gray-700 font-bold mb-2">Image URL</label>
                    <input type="text" id="img" name="img" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>

                <div className="mb-4">
                    <label htmlFor="type" className="block text-gray-700 font-bold mb-2">Type</label>
                    <input type="text" id="type" name="type" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                    <label htmlFor="type" className="block text-gray-700 font-bold mb-2">Short Description</label>
                    <input type="text" id="type" name="type" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
    <label htmlFor="price" className="block text-gray-700 font-bold mb-2">Price</label>
    <input type="text" id="price" name="price" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
</div>


                <div className="mb-4">
                    <label htmlFor="rating" className="block text-gray-700 font-bold mb-2">Rating</label>
                    <input type="text" id="rating" name="rating" step="0.1" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>

                <div className="flex items-center justify-between">
                    <button  type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
                    
                </div>
            </form>
        </div>
    );
};

export default AddProduct;
