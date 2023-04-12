import { useState } from "react";
import { Button, Form, FormLabel } from "react-bootstrap";

const ContactForm = () => {

    const [field,setField] = useState({
        name:'',
        email:'',
        message:''
    });
    const [show,setShow] = useState('')

    
    const handleChange = (e)=>{
        setField({
            ... field,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = (e)=>{
    e.preventDefault()
    setShow(field)
  
    }

    return (
        <>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="d-flex">
            <FormLabel className="me-3" htmlFor="name">name:</FormLabel>
            <Form.Control type="text" id="name" name='name' onChange={handleChange} value={field.name}></Form.Control>
        </Form.Group>

        <Form.Group className="d-flex my-2">
            <FormLabel className="me-3" htmlFor="email">email:</FormLabel>
            <Form.Control type="text" id="email" name='email' onChange={handleChange} value={field.email}></Form.Control>
        </Form.Group>

        <Form.Group className="d-flex">
            <FormLabel className="me-3" htmlFor="message">Mensaje:</FormLabel>
            <Form.Control type="text" id="message" name='message' onChange={handleChange} value={field.message}></Form.Control>
        </Form.Group>
            <Button type="submit" className="mt-3">Enviar</Button>
        </Form>
       {Object.values(show).map(value =>value)} 
        </>
      );
}
 
export default ContactForm;