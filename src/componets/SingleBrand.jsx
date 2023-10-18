import React from 'react';
import { Link } from 'react-router-dom';

const SingleBrand = ({ brand }) => {
    return (
        <div>
            
            <Link to={`/brands/${brand.name}`}>
                <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-10">
                    <div className="px-4 py-2">
                        <h1 className="text-white text-center bg-gray-900 font-bold text-3xl uppercase">{brand.name}</h1>
                        
                    </div>
                    <img className="h-72 w-full object-cover mt-2" src={brand.image} alt="" />
                    <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                        <h1 className="text-gray-200 font-bold text-xl">$129</h1>
                        <button className="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded">Add to cart</button>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default SingleBrand;
