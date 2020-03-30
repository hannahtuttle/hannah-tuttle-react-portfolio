import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import Modal from 'react-modal'
import './projects.scss'


import projectsObject from './Projects.js'


const cont = {
  backgroundColor: "#eee",
  cursor: "pointer",
  overflow: "hidden",
  position: "relative"
};

const SelectedImage = ({
  index,
  photo,
  margin,
  direction,
  top,
  left,
  selected
}) => {

    // const [isOpen, setIsOpen] = useState(false)


    // function onModalClick(){
    //     setIsOpen(true)
    // }

    // function onClose(){
    //     setIsOpen(false)
    // }

  return (
      <>
    <Link to={{
        pathname:`/projects/${photo.title}`,
        title: photo.title
    }}><div
      style={{ margin, height: photo.height, width: photo.width, ...cont }}

    //   onClick = {onModalClick}
    >
    <p>{photo.title}</p>
      <img
        alt={photo.title}
        {...photo}
      />
      <style>{`.not-selected:hover{outline:2px solid #06befa}`}</style>
    </div></Link>
    </>
  );
};

export default SelectedImage;