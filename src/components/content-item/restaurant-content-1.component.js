import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import {Card} from 'react-bootstrap';


const ResataurantContentItem = ({imageUrl,title}) => (


   
    <Card className="col-md-4">
        <Card.Img variant="top" src={imageUrl}/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
            <Link className="btn btn-primary text-center">View </Link>
            
        </Card.Body>


    </Card>
    

    
    )
export default ResataurantContentItem ;
      