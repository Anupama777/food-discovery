import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import {Card} from 'react-bootstrap';


const ContentItem = ({imageUrl,id}) => (


   
    <Card className="col-md-4">
        <Card.Img variant="top" src={imageUrl}/>
        <Card.Body>
          
            <Link to= {"restaurantpage/"+id} className="btn btn-primary">Explore more Restaurants.. </Link>
            
        </Card.Body>


    </Card>
    

    
    )
export default ContentItem;
      