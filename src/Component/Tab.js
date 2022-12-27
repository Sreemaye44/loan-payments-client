import React from 'react';
import { Tabs } from 'react-bootstrap';
import BusinessDetails from './BusinessDetails';
import LoanApplication from './LoanApplication';
import PersonalDetails from './PersonalDetails';

const Tab = () => {
    return (
        <div>
           <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Personal Details">
       <PersonalDetails></PersonalDetails>
      </Tab>
      <Tab eventKey="profile" title="Business Details">
        <BusinessDetails></BusinessDetails>
      </Tab>
      <Tab eventKey="contact" title="Loan Application Details">
     <LoanApplication></LoanApplication>
      </Tab>
    </Tabs> 
        </div>
    );
};

export default Tab;