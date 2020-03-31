import React from 'react'
// import Gallery from 'react-grid-gallery'
import Gallery from 'react-photo-gallery'
import SelectedImage from './selectedProjects.js'
import food from "../assets/anise-aroma-art.jpg"
import outside from '../assets/landscape.jpg'
import plants from '../assets/green.jpg'
import './projects.scss'


const ProjectGallery = () => {


//code for react photo gallery
    const images = [
    {
        src: food,
        width: 200,
        height: 174,
        title: 'recipeShare'
    },
    {
        src: plants,
        width: 200,
        height: 174,
        title: 'Water my plants'
    },
    {
        src: outside,
        width: 200,
        height: 174,
        title: 'GUIDR'
    }
    ]
    const imageRenderer = ({ index, left, top, key, photo }) => (
          <SelectedImage
            key={key}
            margin={"2px"}
            index={index}
            photo={photo}
            left={left}
            top={top}
          />
        );

    // //code for my own gallery
    // const images = [food, plants, outside]
    // class imageGraph {
    //     constructor(){
    //         this.possibleNodes = {}
    //     }

    //     findPossibleNodes(images){
    //        for (let i = 0; i < images.length; i++){
    //            this.possibleNodes[i] = [[images[i]]]
    //        }
    //       for (let i =0; i <images.length; i++){
    //         if(this.possibleNodes[i] && i !== images.length - 1){
    //           let temp = [images[i]]
    //           for (let j = i+1; j <images.length - i; j++){
    //             temp.push(images[j])
    //             console.log('temp', temp)
    //             this.possibleNodes[i].push(temp)
    //             console.log('possible nodes',this.possibleNodes)
    //           }
    //         }
    //       }
    //     }
    // }

return (
    <div>
        <div className = "border_horizontal"></div>
        <div className = "border_v"></div>
        <div className = "border_horizontal"></div>
    <h2 className = 'project_title'>Projects</h2>
    <Gallery photos={images} renderImage={imageRenderer}/>
    </div>
)
}
export default ProjectGallery;