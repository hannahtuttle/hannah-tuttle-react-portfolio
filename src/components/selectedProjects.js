import React, { useState} from "react";
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

    const [isOpen, setIsOpen] = useState(false)


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
          className="Modal"
          shouldCloseOnOverlayClick={true}
        >
 
         <>

         <h4>{projectsObject[photo.title].title}</h4>
        <p>{projectsObject[photo.title].description}</p>
        <p>{projectsObject[photo.title].stack}</p>
        <p>You can veiw the project <a href={projectsObject[photo.title].hosted}>here </a> or veiw the repsoitoty <a href= {projectsObject[photo.title].gitHublink}>here</a>.</p>
        <ul>
           {projectsObject[photo.title].tasks.map((task) => {
                return <li>{task}</li>
           })} 
        </ul>

         </>
        <button onClick={onClose}>close</button>
        </Modal>
    </>
  );
};

export default SelectedImage;