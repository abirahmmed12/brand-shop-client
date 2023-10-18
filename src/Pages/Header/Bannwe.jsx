

const Banner = () => {
  const bannerStyle = {
    backgroundImage: `url('https://i.ibb.co/CtLYvSD/three-open-sandwiches-with-eggs-3.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '500px', // Adjust the height as needed
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '24px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
  };

  return (
    <div className='max-w-screen-xl m-auto' style={bannerStyle}>
      <p className='text-6xl text-center font-extrabold'>Embark on a Culinary Journey of Unforgettable Flavors</p>
    </div>
  );
};

export default Banner;
