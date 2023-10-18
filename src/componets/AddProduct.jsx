import React, { useEffect, useState } from 'react';

const AddProduct = () => {

    const [brands, setBrands] = useState([]); // Fixed the typo in variable name

    useEffect(() => {

        fetch(`http://localhost:5000/brands`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setBrands(data); // Corrected the variable name here
            })
            .catch((error) => {
                console.error('Error adding a product:', error);
                // Handle the error, show an error message, etc.
            });
    }, []);

    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const brand = document.getElementById("brands").value;
        const type = form.type.value;
        const price = parseFloat(form.price.value);
        const rating = parseFloat(form.rating.value);
        const name = form.name.value;
        const img = form.img.value;
        const newProduct = { brand, type, price, rating, name,img };

        fetch(`http://localhost:5000/create-service`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProduct),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                // You can handle the response, show a success message, or redirect as needed.
            })
            .catch((error) => {
                console.error('Error adding a product:', error);
                // Handle the error, show an error message, etc.
            });
    };

    return (
        <div>
            <form onSubmit={handleAddProduct} className="max-w-md mx-auto">
                <div className="mb-4">
                    <label htmlFor="brand" className="block text-gray-700 font-bold mb-2">Brand</label>
                    <select className='w-full border-2 py-2 px-3' id="brands">
                        {
                            brands.map((brand, i) => {
                                return <><option name="brand" key={i} value={brand.brand}>{brand.name}</option></>
                            })
                        }
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                    <input type="text" id="name" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Image URL</label>
                    <input type="text" id="name" name="img" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>

                <div className="mb-4">
                    <label htmlFor="type" className="block text-gray-700 font-bold mb-2">Type</label>
                    <input type="text" id="type" name="type" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>

                <div className="mb-4">
                    <label htmlFor="price" className="block text-gray-700 font-bold mb-2">Price</label>
                    <input type="number" id="price" name="price" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>

                <div className="mb-4">
                    <label htmlFor="rating" className="block text-gray-700 font-bold mb-2">Rating</label>
                    <input type="number" id="rating" name="rating" step="0.1" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>

                <div className="flex items-center justify-between">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;
