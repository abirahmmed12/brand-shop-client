
import { useLoaderData } from 'react-router-dom';

import SingleBrand from '../componets/SingleBrand';
import Banner from './Header/Bannwe';
import ExtraSection from '../componets/ExtraSection';
'components'

const Home = () => {
    const brands = useLoaderData();

    return (
        <div className='max-w-screen-xl m-auto'>
          <Banner></Banner>
            <h1 className="lg:text-6xl text-4xl text-center">Chose Your Brands.</h1>
            <div  className="lg:grid grid-cols-3 lg:gap-4 lg:ml-0 ml-12 max-w-screen-lg m-auto" >
                {brands.map((brand) => (
                    <SingleBrand key={brand.id} brand={brand}></SingleBrand>
                ))}
            </div>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;
