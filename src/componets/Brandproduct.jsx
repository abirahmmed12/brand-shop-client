import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

const BrandProducts = () => {
    const { brand } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch data when the component mounts
        fetch(`http://localhost:5000/create-service/${brand}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                console.log(data, "data");
                // Update the state with the fetched data
                setProducts(data);
            })
            .catch((error) => {
                console.error("Fetch error:", error);
            });
    }, [brand]); // Make sure to include brand as a dependency

    return (
        <div className="grid grid-cols-4 max-w-screen-xl m-auto gap-5">
            {products.length === 0 ? (
                <div className="text-center text-6xl text-red-600"> OOpps!! No products found for {brand}</div>
            ) : (
                products.map((product) => (
                    <Product key={product.name} product={product}></Product>
                ))
            )}
        </div>
    );
};

export default BrandProducts;
