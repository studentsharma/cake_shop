import React, { useContext, useEffect } from 'react'
import { CakeContext } from '../context/cakeContext'

const Ordres = () => {
  const { selectedCakes } = useContext(CakeContext);

  console.log(selectedCakes)

  return (
    <div className='bg-transparent flex justify-center items-center min-h-screen'>
      <div className='flex flex-col items-center gap-4 '>
        {selectedCakes && selectedCakes.length > 0 ? (
          <>
            <h1 className="text-pink-500 text-5xl text-center p-4 ">Your Orders</h1>
            <div className='w-72 rounded-md bg-white'>
              {selectedCakes.map((item, index) => (
                <div key={index} className='flex justify-between mt-2 mb-2'>
                  <h1 className='ml-10'>{item.cake_id}</h1>
                  <span className='mr-10'>{item.price}</span>
                </div>
              )

              )}
              <div className='flex justify-end mt-5 mb-5'>
                <h1 className='mr-10'>Total Price</h1>
              </div>

              <div className='flex justify-end mt-5 mb-5'>
                <button type='submit' className='px-4 py-2 bg-blue-500 text-white rounded-md mr-8'>Pay</button>
              </div>
            </div>
          </>
        ) : (
          <p className="text-pink-500 text-5xl text-center p-4 "><em>No orders yet...</em></p>
        )}
      </div>
    </div>
  )
}

export default Ordres
