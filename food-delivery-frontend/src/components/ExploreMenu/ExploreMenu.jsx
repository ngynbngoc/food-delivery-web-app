import React from 'react'
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';
import { useRef, useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';

const ExploreMenu = () => {
    const menuRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
  
    useEffect(() => {
        const menuElement = menuRef.current;
        let scrollAmount = 0;
    
        const scroll = () => {
          if (menuElement && !isHovered) {
            scrollAmount += 1; // Adjust this value to control the speed
            if (scrollAmount >= menuElement.scrollWidth / 2) {
              scrollAmount = 0; // Reset the scroll amount when halfway through the list
            }
            menuElement.scrollLeft = scrollAmount;
          }
        };
    
  
      const interval = setInterval(scroll, 25); // Adjust the speed of the scroll by changing the interval time
  
      return () => clearInterval(interval); // Cleanup on component unmount
    }, [isHovered]);
  
    return (
      <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>
          Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
        </p>
        <div 
            className='explore-menu-list-wrapper' ref={menuRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
          <div className='explore-menu-list'>
            {menu_list.concat(menu_list).map((item, index) => (
              <Col key={index} className='menu-item'>
                <img src={item.menu_image} alt={item.menu_name} />
                <p>{item.menu_name}</p>
              </Col>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default ExploreMenu;