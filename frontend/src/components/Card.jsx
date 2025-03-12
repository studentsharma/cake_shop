import React, { useContext } from 'react';
import { CakeContext } from '../context/cakeContext';
import { useNavigate } from 'react-router-dom';


const Card = (props) => {

  const { addCake } = useContext(CakeContext);
  const navigate = useNavigate();

  const handleAdd = () => {
    const cakeData = {
      cake_id: props.cake_id,
      price: props.price
    };
    addCake(cakeData);
    // console.log(cakeData)
    navigate('/Orders'); 
  };

  return (
    <div className='w-56 h-64 bg-gray-200 mt-20 rounded-2xl'>
      {/* <div className='ml-8  w-40 h-40'>
        <img className='object-cover overflow-hidden' src="" alt="cake_img" />
      </div> */}

      <h1 className='ml-8 mt-2 mb-2'>{props.cake_id}</h1>

      <div className='ml-8 flex justify-between  w-40'>

        <span>{props.price}</span>
        <button onClick={handleAdd} className='bg-red-400 p-1 rounded-md'>Add</button>

      </div>
    </div>
  )
}

export default Card
