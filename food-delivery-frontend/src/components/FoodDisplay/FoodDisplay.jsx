import React, {useContext} from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const FoodDisplay = ({category}) => {

    const {food_list} = useContext(StoreContext)
    

  return (
    <div className="Food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <Row xs={1} sm={1} md={2} lg={3} xl={4} className="food-display-list ">
        {food_list.map((food, index) =>{
            return (
                <Col>
                    <FoodItem 
                        key={index} 
                        id = {food._id} 
                        name = {food.name}
                        desc = {food.description}
                        price = {food.price}
                        image = {food.image}/>
                </Col>
            )
        })}
      </Row>
    </div>
  )
}

export default FoodDisplay
