import React from 'react';
import Swal from 'sweetalert2';


const Cartadded = ({item}) => {
  const  { _id,brand, type, price, rating, name,img } = item
  
  const handledlt = _id => {
    console.log(_id)
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        
        fetch(`https://brand-shop-q9478mt03-abirahmmed12s-projects.vercel.app/add-to-cart/${_id}`,{
          method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
          if(data.deletedCount>0)
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        })
      }
    })
  }
    return (
        <div>
           <div className="mx-auto my-10 flex max-w-xs flex-col items-center rounded-xl border px-4 py-4 text-center md:max-w-lg md:flex-row md:items-start md:text-left">
  <div className="mb-4 md:mr-6 md:mb-0">
    <img className="h-56 rounded-lg object-cover md:w-56" src={item.img} alt="" />
  </div>
  <div className="">
    <p className="text-xl font-medium text-gray-700">{item.name}</p>
    <p className="mb-4 text-sm font-medium text-gray-500">{item.brand}</p> 
    <div className="flex space-x-2">
     
      <div className="flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2">
        <p className="text-sm font-medium text-gray-500">Type</p>
        <p className="text-3xl font-medium text-gray-600">{item.type}</p>
      </div>
      <div className="flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2">
        <p className="text-sm font-medium text-gray-500">Price</p>
        <p className="text-3xl font-medium text-gray-600">{item.price}</p>
      </div>
      <div className=""></div>
    </div>
    <div className="mb-3"></div>
    <div className="flex space-x-2">
     
      <button onClick={()=>handledlt(_id)} className="w-full rounded-lg border-2 border-transparent bg-red-600 px-4 py-2 font-medium text-white">Delete</button>
    </div>
  </div>
</div>

        </div>
    );
};

export default Cartadded;