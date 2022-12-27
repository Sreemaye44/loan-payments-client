import React from 'react';
import { Button, Form } from 'react-bootstrap';

const PersonalDetails = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const form=event.target;
        const firstName =form.firstName.value;
        const lastName =form.lastName.value;
        const age =form.age.value;
        const mobileNumber=form.mobileNumber.value;
        const details =form.details.value;
        console.log(details, age, firstName)
        
        const addPersonalDetails={
            firstName,
            lastName,
            age,
            mobileNumber,
            details
        }
        
        fetch('http://localhost:5000/personaldetails', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(addPersonalDetails)
  })
  .then(res=>res.json())
  .then(data=>{
    if(data.acknowledged){
      alert("successfully entered")
      form.reset();
    }
    console.log(data)})
  .catch(er=>console.error(er))


}
    return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="name" name="firstName" placeholder="Enter first name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="name" name="lastName" placeholder="Enter last name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" name="age" placeholder="Enter your age" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control type="number" name="mobileNumber" placeholder="Enter your mobile number" />
      </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Other personal details</Form.Label>
        <Form.Control as="textarea" rows={3} name="details" />
         </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}


export default PersonalDetails;