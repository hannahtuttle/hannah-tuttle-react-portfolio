import React from 'react'
// import Gallery from 'react-grid-gallery'
import Gallery from 'react-photo-gallery'
import Projects from './Projects.js'
import food from "../assets/anise-aroma-art.jpg"
import outside from '../assets/landscape.jpg'
import plants from '../assets/green.jpg'


const ProjectGallery = () => {

// code for react grid gallery    
//     const images = [
//         {
//             src: Projects,
//             thumbnail: food,
//             thumbnailWidth: 220,
//             thumbnailHeight: 174,
//     },
//     {
//         src: "../assets/anise-aroma-art.jpg",
//         thumbnail: Projects,
//         thumbnailWidth: 320,
//         thumbnailHeight: 174,
// },
// {
//     src: "../assets/anise-aroma-art.jpg",
//     thumbnail: Projects,
//     thumbnailWidth: 320,
//     thumbnailHeight: 174,
// }
// ]

//code for react photo gallery
    // const images = [
    // {
    //     src: food,
    //     width: 220,
    //     height: 174,
    // },
    // {
    //     src: plants,
    //     width: 220,
    //     height: 174,
    // },
    // {
    //     src: outside,
    //     width: 220,
    //     height: 174,
    // }
    // ]

    //code for my own gallery
    const images = [food, plants, outside]
    class imageGraph {
        constructor(imgArray){
            this.imgArray = imgArray,
            this.possibleNodes = {}
        }

        findPossibleNodes = (images) => {
            let count = 0
            let posibleStartingNodes = []
            while (count < images.length){
                
            }
        }
    }

return (
    <>
    <Gallery photos={images}/>
    </>
)
}
export default ProjectGallery;