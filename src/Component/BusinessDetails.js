import React from 'react';
import { Button, Form } from 'react-bootstrap';

const BusinessDetails = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const form=event.target;
        const businessName =form.businessName.value;
        const gstNo =form.gstNo.value;
        const address =form.address.value;
        const businessDetails=form.businessDetails.value;
        console.log(businessDetails)
        
        const addBusinessDetails={
            businessName,
            gstNo,
            address,
            businessDetails
        }
        fetch('http://localhost:5000/businessdetails', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(addBusinessDetails)
  })
  .then(res=>res.json())
  .then(data=>{
    if(data.acknowledged){
      alert('added')
      form.reset();
    }
    console.log(data)})
  .catch(er=>console.error(er))


}
    return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Business Name</Form.Label>
        <Form.Control type="name" name="businessName" placeholder="Enter businessName" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>GST no</Form.Label>
        <Form.Control type="number" name="gstNo" placeholder="Enter GST No" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Address</Form.Label>
        <Form.Control as="textarea" rows={3} name="address" />
         </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Business Details</Form.Label>
        <Form.Control as="textarea" rows={3} name="businessDetails" />
         </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default BusinessDetails;