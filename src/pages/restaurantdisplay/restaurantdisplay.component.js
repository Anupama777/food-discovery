import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RESTAURANT_DATA from '../restaurantpage/restaurant-data.js';

import {Card} from 'react-bootstrap';



  class RestaurantDisplayItem extends React.Component {

    constructor(props)
    {
      super(props);

      const{id}=this.props.match.params
      console.error(id)

     this.state={restaurant:RESTAURANT_DATA[0].restaurant_sections[id]}
     /*console.error(this.state.restaurant)*/
    }


    render()
        {
            return(
            
             <div className="container">
      <div className="row">
        <Card className="col-md-4">
        <Card.Img variant="top" src={this.state.restaurant.imageUrl}/>
        {/* <Card.Body>
          
           <Card.Title>{this.state.restaurnat.title}</Card.Title>
          </Card.Body>*/}
        </Card>

    </div>
    </div>
            
          
            )
        }
  }
     
  
    
    

    export default RestaurantDisplayItem;
