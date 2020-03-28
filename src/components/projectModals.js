import React, {useState} from 'react'
import Modal from 'react-modal'

import projectsObject from './Projects.js'

function Modals() {

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
        <div>
        <button onClick={onModalClick}>Open Modal</button>
        <Modal
          isOpen={isOpen}
        //   onAfterOpen={afterOpenModal}
          onRequestClose={onClose}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <button onClick={onClose}>close</button>
    <div>{projectsObject['recipeShare'].title}</div>
        </Modal>
      </div>
    )
}

export default Modals;