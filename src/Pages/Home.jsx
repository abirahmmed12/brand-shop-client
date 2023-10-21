
import { useLoaderData } from 'react-router-dom';

import SingleBrand from '../componets/SingleBrand';
import Banner from './Header/Bannwe';
import ExtraSection from '../componets/ExtraSection';
import { useState } from 'react';
'components'

const Home = () => {
    const brands = useLoaderData();
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
    };
  

    return (
        <div className={`max-w-screen-xl m-auto ${isDarkMode ? 'bg-dark' : 'bg-light'}`}>
        <button
          onClick={toggleDarkMode}
          className="p-2 fixed top-4 -right-10 w-16 h-14 bg-gray-800 text-white rounded-full"
        >
          {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
  

        <div className='max-w-screen-xl m-auto'>
          <Banner></Banner>
            <h1 className="lg:text-6xl text-4xl text-center">Chose Your Brands.</h1>
            <div  className="lg:grid grid-cols-3 lg:gap-4 lg:ml-0 ml-12  " >
                {brands.map((brand) => (
                    <SingleBrand key={brand.id} brand={brand}></SingleBrand>
                ))}
            </div>
            <ExtraSection></ExtraSection>
        </div>
        </div>
    );
};

export default Home;
