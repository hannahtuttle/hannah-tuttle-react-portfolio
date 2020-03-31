import React, {useState} from 'react'
//import axios from 'axios'

const ContactForm = () => {

    const [message, setMessage] = useState({name: '', email: '', message: ''})

    const handleChange = (event) => {
        setMessage({
            ...message,
            [event.target.name]: event.target.value
        })

        console.log(message)

    }

    const onSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <form onSubmit = {onSubmit}>
           <h3>Contact</h3> 
           <label>Name</label>
           <input 
           type='text'
           name='name'
           value={message.name}
           onChange={handleChange}
           ></input>
           <label>Email</label>
           <input 
           type='email'
           name='email'
           value={message.email}
           onChange={handleChange}
           ></input>
           <label>Message</label>
           <textarea 
           type='text'
           name='message'
           value={message.message}
           onChange={handleChange}
           ></textarea>
           <button>Send</button>
        </form>
    )
}

export default ContactForm