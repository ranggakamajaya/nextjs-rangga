import React, {useState} from 'react'
import { data } from '@/data/data';
const ServicesList = () => {
  //   console.log(data);
  const [foods, setFoods] = useState(data);

  //   Filter Type burgers/pizza/etc
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  //   Filter by price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-gray-800 font-bold text-4xl text-center mb-4'>
        Top Services Available
      </h1>

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Fliter Type */}
        <div>
          <p className='font-bold'>Filter Type</p>
          <div className='flex justfiy-between flex-wrap'>
            <button
              onClick={() => setFoods(data)}
              className='m-1 px-2 py-1 duration-150 rounded-full border hover:bg-gray-800 hover:text-gray-100 dark:hover:bg-gray-200 dark:hover:text-gray-800'
            >
              All
            </button>
            <button
              onClick={() => filterType('Akademik')}
              className='m-1 px-2 py-1 duration-150 rounded-full border hover:bg-gray-800 hover:text-gray-100 dark:hover:bg-gray-200 dark:hover:text-gray-800'
            >
              Akademik
            </button>
            <button
              onClick={() => filterType('Organisasi')}
              className='m-1 px-2 py-1 duration-150 rounded-full border hover:bg-gray-800 hover:text-gray-100 dark:hover:bg-gray-200 dark:hover:text-gray-800'
            >
              Organisasi
            </button>
            <button
              onClick={() => filterType('Penelitian')}
              className='m-1 px-2 py-1 duration-150 rounded-full border hover:bg-gray-800 hover:text-gray-100 dark:hover:bg-gray-200 dark:hover:text-gray-800'
            >
              Penelitian
            </button>
            <button
              onClick={() => filterType('Tambahan')}
              className='m-1 px-2 py-1 duration-150 rounded-full border hover:bg-gray-800 hover:text-gray-100 dark:hover:bg-gray-200 dark:hover:text-gray-800'
            >
              Tambahan
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className='font-bold '>Filter Price</p>
          <div className='flex max-w-[390px] w-full'>
            <button
              onClick={() => filterPrice('$')}
              className='m-1 px-2 py-1 duration-150 rounded-full border hover:bg-gray-800 hover:text-gray-100 dark:hover:bg-gray-200 dark:hover:text-gray-800'
            >
              $
            </button>
            <button
              onClick={() => filterPrice('$$')}
              className='m-1 px-2 py-1 duration-150 rounded-full border hover:bg-gray-800 hover:text-gray-100 dark:hover:bg-gray-200 dark:hover:text-gray-800'
            >
              $$
            </button>
            <button
              onClick={() => filterPrice('$$$')}
              className='m-1 px-2 py-1 duration-150 rounded-full border hover:bg-gray-800 hover:text-gray-100 dark:hover:bg-gray-200 dark:hover:text-gray-800'
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice('$$$$')}
              className='m-1 px-2 py-1 duration-150 rounded-full border hover:bg-gray-800 hover:text-gray-100 dark:hover:bg-gray-200 dark:hover:text-gray-800'
            >
              $$$$
            </button>
          </div>
        </div>
      </div>

      {/* Display foods */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {foods.map((item, index) => (
          <div
            key={index}
            className='border shadow-lg rounded-lg hover:scale-105 duration-300'
          >
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-[200px] object-cover rounded-t-lg bg-white'
            />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{item.name}</p>
              <p>
                <span className='p-1 rounded-lg'>
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesList