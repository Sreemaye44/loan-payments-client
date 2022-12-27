import React from 'react';
import { Button, Form } from 'react-bootstrap';

const LoanApplication = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const form=event.target;
        const loanAmount =form.loanAmount.value;
        const interestRate =form.interestRate.value;
        const loanTenture =form.loanTenture.value;
    
        console.log(loanAmount, interestRate)
        
        const addApplicationDetails = {
            loanAmount,
            interestRate,
            loanTenture
        }
        fetch('http://localhost:5000/applicationdetails', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(addApplicationDetails)
  })
  .then(res=>res.json())
  .then(data=>{
    if(data.acknowledged){
        alert('application received');
      form.reset();
    }
    console.log(data)})
  .catch(er=>console.error(er))


}
    return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Loan Amount</Form.Label>
        <Form.Control type="name" name="loanAmount" placeholder="Enter loan amount" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Interest Rate</Form.Label>
        <Form.Control type="number" name="interestRate" placeholder="Enter interest rate" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>loan tenture</Form.Label>
        <Form.Control as="textarea" rows={3} name="loanTenture" />
         </Form.Group>
        
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default LoanApplication;