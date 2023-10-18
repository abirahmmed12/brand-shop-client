import React from 'react';

const Product = ({product}) => {
    const  { brand, type, price, rating, name,img } = product

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
  </div>
  <figure><img src={img} alt="Shoes" /></figure>
</div>
        </div>
    );
};

export default Product;