import React, {useState} from 'react'
import { Button, Header, Image, Modal, Form } from 'semantic-ui-react'

function NewTripForm() {
    const [open, setOpen] = useState(false)
    return (
        <Modal onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        closeIcon
        trigger={<Button floated="right">Have You Visited?</Button>}>


        <Modal.Header>Tell Us About Your Trip!</Modal.Header> 
        <Modal.Description>
          <Header>Your Trip to (park name)</Header>
          <Form >
                <Form.Input value ="" fluid label ='How long was your stay?' placeholder='A week? 5 days? ' />
                <Form.TextArea value="" label ='Give us a brief overview of your trip' placeholder='Where did you stay? What were your thoughts? Did you hike,swim, etc?' />
                <Form.Input value="" fluid label ='Upload your favorite image from your trip:' placeholder='image url here'/>
                <Form.Button>Submit</Form.Button>
            </Form>
        </Modal.Description>



        </Modal>
    )
}

export default NewTripForm;