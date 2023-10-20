import React from 'react';

const ExtraSection = () => {
    return (
        <div className='lg:p-0 p-7 '>
            <img src="https://i.ibb.co/tDxqtdb/burgerking.jpg" alt="" />
            <section
  className="bg-gray-100 py-12 mt-8"
  style={{
    backgroundImage: `url('https://i.ibb.co/CnHmcgM/Free-Electricity-Business-Summer-Background-Images-Taobao-Summer-Summer-Food-Promotion-Poster-Banner.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <div className="container mx-auto">
    <div className="text-center mb-10">
      <h2 className="text-4xl font-bold text-white">Our Commitment to You</h2>
      <p className="text-gray-600 text-lg mt-4">
        At CulinaryCrafters, your satisfaction is our top priority.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* First Feature */}
      <div className="p-8 border rounded shadow-lg bg-yellow-600 text-center">
        <h3 className="text-2xl font-semibold text-white mb-4">Quality Ingredients</h3>
        <p className="text-gray-600">
          We use the finest, locally sourced ingredients to ensure that every
          dish is bursting with flavor and freshness.
        </p>
      </div>

      {/* Second Feature */}
      <div className="p-8 border rounded shadow-lg  bg-yellow-600 text-center">
        <h3 className="text-2xl font-semibold text-white mb-4">Exceptional Service</h3>
        <p className="text-gray-600">
          Our dedicated team is here to make your dining experience memorable.
          We're committed to providing excellent service from start to finish.
        </p>
      </div>

      {/* Third Feature */}
      <div className="p-8 border rounded shadow-lg  bg-yellow-600 text-center">
        <h3 className="text-2xl font-semibold text-white mb-4">Online Convenience</h3>
        <p className="text-gray-600">
          Order online and have your favorite dishes delivered to your doorstep.
          We're all about making your life easier.
        </p>
      </div>
    </div>
  </div>
</section>
<section className="bg-gray-100 py-12">
    <div className="container mx-auto">
        <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800">Explore Our Selection</h2>
            <p className="text-gray-600 text-lg mt-4">Discover the brands and products we offer.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* First Product */}
            <div className="bg-white rounded shadow-lg">
                <img  src="https://i.ibb.co/Lk6f1qq/Food-Photography-by-Kamile-Kave.jpg" alt="Product 1" className="w-full h-72 object-cover rounded-t" />
                <div className="p-4">
                    <h3 className="text-2xl font-semibold text-gray-800">KFC Original Recipe Chicken</h3>
                    <p className="text-gray-600 mt-2">Indulge in the crispy and flavorful KFC Original Recipe Chicken that's loved worldwide.</p>
                </div>
            </div>

            {/* Second Product */}
            <div className="bg-white rounded shadow-lg">
                <img src="https://i.ibb.co/R2sY2Sv/Rate-These-Fast-Food-Chains-And-We-ll-Reveal-Your-Dominant-Personality-Trait.jpg" alt="Product 2" className="w-full h-72 object-cover rounded-t" />
                <div className="p-4">
                    <h3 className="text-2xl font-semibold text-gray-800">Burger King Whopper</h3>
                    <p className="text-gray-600 mt-2">Savor the flame-grilled goodness of the Burger King Whopper, a classic favorite.</p>
                </div>
            </div>

            {/* Third Product */}
            <div className="bg-white rounded shadow-lg">
                <img src="https://i.ibb.co/W6BQPPK/download-2.jpg" alt="Product 3" className="w-full h-72 object-cover rounded-t" />
                <div className="p-4">
                    <h3 className="text-2xl font-semibold text-gray-800">McDonald's Big Mac</h3>
                    <p className="text-gray-600 mt-2">Enjoy the iconic McDonald's Big Mac with its special sauce and two all-beef patties.</p>
                </div>
            </div>
        </div>
    </div>
</section>



        </div>
    );
};

export default ExtraSection;