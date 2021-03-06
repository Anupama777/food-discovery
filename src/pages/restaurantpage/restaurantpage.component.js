import React from 'react';
//import Content from '../../components/content/content.component'
import RESTAURANT_DATA from './restaurant-data.js'
import ResataurantContentItem  from '../../components/content-item/restaurant-content-1.component';






 class RestaurantPage extends React.Component {

    //this component will receive index through the url
    
    constructor(props) {
        
        super(props);

        console.error("id= ",RESTAURANT_DATA[this.props.match.params.id].restaurant_sections
)

        this.state = {

            collections: RESTAURANT_DATA[this.props.match.params.id].restaurant_sections

           // collections: RESTAURANT_DATA[2]. restaurant_sections 

        }
       // console.log(RESTAURANT_DATA.restaurant_sections)


    }


    render(){

        const {collections} = this.state;

        return(<div className="restaurant-page">
         
            {
                collections.map(({id,title,imageUrl}) =>(
                   <ResataurantContentItem  key={id} title={title} imageUrl={imageUrl}></ResataurantContentItem > 
                ))
             
                

            }

        </div>)
        }
}

export default RestaurantPage;

