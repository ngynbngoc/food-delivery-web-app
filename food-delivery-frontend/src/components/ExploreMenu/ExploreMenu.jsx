import React from 'react'
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';
import { useRef, useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';

const ExploreMenu = ({category, setCategory}) => {
    const menuRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isScrolling, setIsScrolling] = useState(true)

    //autoscroll effectt]
    useEffect(() => {
        const menuElement = menuRef.current;
        const scrollSpeed = 0.5; // Speed of scrolling
        const scrollInterval = 10; // Interval time in milliseconds


        let scrollAmount = 0;

        const startScrolling = () => {
            const scrollIntervalId = setInterval(() => {
                if (menuElement && isScrolling && !isHovered) {
                    scrollAmount += scrollSpeed;

                    // Check if we've reached the end of the original content
                    if (scrollAmount >= menuElement.scrollWidth / 2) {
                        scrollAmount = 0;
                    }

                    menuElement.scrollLeft = scrollAmount;
                }
            }, scrollInterval);

            return scrollIntervalId;
        };

        const intervalId = startScrolling();

        return () => clearInterval(intervalId);
    }, [isHovered, isScrolling]);

    const handleCategoryClick = (itemMenuName) => {
        setCategory(prev => {
            const newCategory = prev === itemMenuName ? "All" : itemMenuName;
            // Stop scrolling if the selected category is not "All"
            //setisscrolling = true when the new category is "All"
            setIsScrolling(newCategory === "All");
            return newCategory;
        });
    };

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
                    {menu_list.map((item, index) => (
                        <Col 
                            onClick={() => handleCategoryClick(item.menu_name)}
                            key={index} className='menu-item'
                        >
                            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt={item.menu_name} />
                            <p>{item.menu_name}</p>
                        </Col>
                    ))}
                </div>
            </div>
            <hr />
        </div>
    );
};
  export default ExploreMenu;