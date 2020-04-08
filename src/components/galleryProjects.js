import React from 'react'
// import Gallery from 'react-grid-gallery'
import Gallery from 'react-photo-gallery'
import SelectedImage from './selectedProjects.js'
import food from "../assets/anise-aroma-art.jpg"
import outside from '../assets/landscape.jpg'
import plants from '../assets/green.jpg'
import '../styles/projects.scss'


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
        title: 'Water my Plants'
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


return (
    <>
        <div className = "border_horizontal"></div>
        <div className = "border_v"></div>
        <div className = "border_horizontal"></div>
    <h2 className = 'project_title'>Projects</h2>
    <div className = "gallery"> 
    <Gallery photos={images} renderImage={imageRenderer}/>
    </div>
    </>
)
}
export default ProjectGallery;