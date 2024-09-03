import React, {useState} from 'react'
import "./FoodItem.css"
import {assets} from '../../assets/assets'


const FoodItem = ({id, name, price, desc, image}) => {

    const [itemCount , setItemCount] = useState(0)

  return (
    
    <div className='food-item-container  w-100 shadow mb-4 bg-body rounded-3'>
      <div className='food-item-img-container '>
        <img src={image} className='food-item-image w-100 rounded-top-2 '/>
        {!itemCount
                ?<img className='add-button' onClick={() => setItemCount(prev => prev+1)} src={assets.add_icon_white} />
                :<div className='food-item-counter'>
                    <img onClick={() => setItemCount(prev => prev-1)} src={assets.remove_icon_red} />
                    
                    <h7>{itemCount}</h7>

                    <img onClick={() => setItemCount(prev => prev+1)} src={assets.add_icon_green} />
                </div>
        }
      </div>

      <div className='food-item-info p-3 '>
        <div className=' d-flex justify-content-between align-items-center'>
            <p className="fs-6 fw-bold mt-3">{name}</p>
            <img src={assets.rating_starts} />
        </div>
        <p className='food-item-desc'>{desc}</p>
        <p className='food-item-price mt-1 fw-bold'>${price}</p>
      </div>

    </div>
  )
}

export default FoodItem
