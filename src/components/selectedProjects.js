import React, { useState, createRef, useEffect} from "react";
import Modal from 'react-modal';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import '../styles/projects.scss'
import {enable, disable} from '../utils/scroll-lock.js'


import projectsObject from './Projects.js'

const cont = {
  backgroundColor: "#eee",
  cursor: "pointer",
  overflow: "hidden",
  position: "relative"
};

const SelectedImage = ({
  photo,
  margin,
}) => {

    const [isOpen, setIsOpen] = useState(false)
    const [mouseOn, setMouseOn] = useState(false)


    function onModalClick(){
        setIsOpen(true)
        enable()
    }

    function onClose(){
      setIsOpen(false)
      disable()
  }

    const onMouseDown = () => {
      setMouseOn(true)
    }

    const onMouseLeave = () => {
      setMouseOn(false)
    }
    

    const imgStyle = {
      transition: "transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s"
    };
    const selectedImgStyle = {
      transform: "translateZ(0px) scale3d(0.9, 0.9, 1)",
      transition: "transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s"
    };

  return (
      <div >
    <div
      style={{ margin, height: photo.height, width: photo.width, ...cont}}
      onClick = {onModalClick}
      onMouseEnter = {onMouseDown}
      onMouseLeave = {onMouseLeave}
    >
<p className='fonts'>{photo.title}</p>
      <img 
        style={
         mouseOn ? { ...imgStyle, ...selectedImgStyle } : { ...imgStyle }
        }
        alt={photo.title}
        {...photo}
      />
      <style>{`.not-selected:hover{outline:2px solid #06befa}`}</style>
    </div>
    <Modal
    isOpen={isOpen}
    onRequestClose={onClose}
    className="Modal"
    shouldCloseOnOverlayClick={true}
  >

   <div className='fonts'>
  <div style ={{'display': 'flex', 'justifyContent': 'space-between', 'alignItems': 'center'}}>
   <h3>{projectsObject[photo.title].title}</h3>
   <IconButton style={{'height': '90%',}} onClick={onClose}>
  <CloseIcon/>
  </IconButton>
  </div>
   <div className = 'modal_design'></div>
   <div className='modal_guts'>
  <p>{projectsObject[photo.title].description}</p>
  <p>{projectsObject[photo.title].stack}</p>
  {projectsObject[photo.title].hosted !== "" ? <p>You can view the project <a href={projectsObject[photo.title].hosted}>here </a> or view the repository <a href= {projectsObject[photo.title].gitHublink}>here</a>.</p> : <p>You can view the repository <a href= {projectsObject[photo.title].gitHublink}>here</a>.</p>}
  <ul>
  <p>My contributions include:</p>
     {projectsObject[photo.title].tasks.map((task) => {
          return <li>{task}</li>
     })} 
  </ul>
  </div>
   </div>
  </Modal>
    </div>
  );
};


export default SelectedImage;