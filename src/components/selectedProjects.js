import React, { useState, createRef, useEffect} from "react";
import Modal from 'react-modal';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import '../styles/projects.scss'


import projectsObject from './Projects.js'

const cont = {
  backgroundColor: "#eee",
  cursor: "pointer",
  overflow: "hidden",
  position: "relative"
};

let pos = {
  position: 'relative'
}

const SelectedImage = ({
  photo,
  margin,
}) => {

    const [isOpen, setIsOpen] = useState(false)
    const [mouseOn, setMouseOn] = useState(false)


    function onModalClick(){
        setIsOpen(true)
        disableBodyScroll()
    }


    const onMouseDown = () => {
      setMouseOn(true)
    }

    const onMouseLeave = () => {
      setMouseOn(false)
    }

    const handleAfterOpen = () => {
      if(isOpen){
        let pos = {
          position: 'absolute'}
        }
      }
    

    const handleAfterClose = () => {
      if(!isOpen){
        let pos = {
          position: 'relative'}
        }
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
    <ModalC isOpen ={isOpen} photo = {photo} setIsOpen = {setIsOpen}/>
    </div>
  );
};

const ModalC = ({isOpen, photo, setIsOpen}) => {

  let targetRef = createRef();
  let targetElement = null

  useEffect(() => {
    targetElement = targetRef.current
  },[])

  function onClose(){
    setIsOpen(false)
    enableBodyScroll()
}

  return (
    <Modal
    isOpen={isOpen}
  //   onAfterOpen={afterOpenModal}
    onRequestClose={onClose}
    className="Modal"
    shouldCloseOnOverlayClick={true}
    ref={targetRef}
    // onAfterOpen = {handleAfterOpen}
    // onAfterClose = {handleAfterClose}
    //overlayClassName = "ReactModal__Overlay "
  >

   <div className='fonts'>
  <div style ={{'display': 'flex', 'justifyContent': 'space-between', 'alignItems': 'center'}}>
   <h3>{projectsObject[photo.title].title}</h3>
   <IconButton style={{'height': '90%',}}>
  <CloseIcon onClick={onClose} />
  </IconButton>
  </div>
   <div className = 'modal_design'></div>
   <div className='modal_guts'>
  <p>{projectsObject[photo.title].description}</p>
  <p>{projectsObject[photo.title].stack}</p>
  {projectsObject[photo.title].hosted !== "" ? <p>You can view the project <a href={projectsObject[photo.title].hosted}>here </a> or veiw the repository <a href= {projectsObject[photo.title].gitHublink}>here</a>.</p> : <p>You can veiw the repository <a href= {projectsObject[photo.title].gitHublink}>here</a>.</p>}
  <ul>
  <p>My contributions include:</p>
     {projectsObject[photo.title].tasks.map((task) => {
          return <li>{task}</li>
     })} 
  </ul>
  </div>
   </div>
  </Modal>
  )
}

export default SelectedImage;