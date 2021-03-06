import React from 'react';
import ContentItem from '../../components/content-item/content-item.component';

class Content extends React.Component {

    constructor(props) {
        super(props);


        this.state = {

            sections :[

                {
                    
                    imageUrl :'https://media.istockphoto.com/vectors/abstract-hyderabad-skyline-with-color-landmarks-and-reflections-vector-id622521982?s=612x612',
                    id:0,
                    
                },


                {
                   
                   imageUrl : 'https://media.istockphoto.com/vectors/bangalore-skyline-with-color-buildings-blue-sky-and-reflections-vector-id624102166',
                   id:1,
                   

                },


                {
                   
                    imageUrl:'https://media.istockphoto.com/vectors/kochi-india-city-skyline-with-color-buildings-blue-sky-and-vector-id1044643010?s=612x612',
                    id:2,

                }
            ]
        }
    }

        render()
        {
            return(
                <div className="container">
                     <div className="row">
                    {
                        
                        this.state.sections.map(({id,imageUrl}) =>(
                        <ContentItem key={id} id={id} imageUrl={imageUrl}/>
                        ) )
                    }
                    </div>
                </div>
            )
        }
    }


export default Content;