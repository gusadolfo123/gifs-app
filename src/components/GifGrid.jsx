import React, {useState, useEffect} from 'react'
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);

    useEffect(()=>{
     getGifs();
    }, []);

    const getGifs = async () => {
        const url = "http://api.giphy.com/v1/gifs/search?limit=20&q=worldofwarcraft&api_key=rIi9ma7bAf1k6IBrO2AyxS4UpXyAf07F";
        const resp = await fetch(url);
        const {data} = await resp.json();
        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.fixed_height_downsampled.url
            }
        });
        setImages(gifs);
    }

    return (
        <div className="grid-gifs">
            {/* <h3>{category}</h3> */}
            {images.map((image, i) =>
                <GifGridItem key={i}{...image} />                     
            )}
        </div>
    )
}
