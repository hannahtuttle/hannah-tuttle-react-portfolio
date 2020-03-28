import React, { useState, useEffect } from "react";
import Modal from 'react-modal'

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

    const [isOpen, setIsOpen] = useState(false)

    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
      };

    function onModalClick(){
        setIsOpen(true)
    }

    function onClose(){
        setIsOpen(false)
    }

  return (
      <>
    <div
      style={{ margin, height: photo.height, width: photo.width, ...cont }}
      onClick = {onModalClick}
    >
<p>{photo.title}</p>
      <img
        alt={photo.title}
        {...photo}
      />
      <style>{`.not-selected:hover{outline:2px solid #06befa}`}</style>
    </div>
    <Modal
          isOpen={isOpen}
        //   onAfterOpen={afterOpenModal}
          onRequestClose={onClose}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
         <>

         <h4>{projectsObject[photo.title].title}</h4>
         </>
        <button onClick={onClose}>close</button>
        </Modal>
    </>
  );
};

export default SelectedImage;