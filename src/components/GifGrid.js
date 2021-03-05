// import React, { useState, useEffect } from 'react'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

import { useFechGifs } from "../hooks/useFetchGifs"

export const GifGrid = ( { category } ) => {
    

    // const [images, setImages] = useState([]);

    // useEffect(() => {
    //     getGifs( category)
    //         .then( setImages);
    // }, [ category ]);
    
    const { data: gifs, loading } = useFechGifs( { category } );

    return (
    <>
        <h3 className="card animate__animated animate__fadeIn">{ category }</h3>
        { loading && <p>Loading!!!</p> }
        <div className="card-grid">
            {
                gifs.map(gif => {
                    return (
                        <GifGridItem 
                            key = { gif.id }
                            { ...gif }
                        />
                    );
                })
            }
        </div>
    </>
    )
}
