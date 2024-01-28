import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';


const Help = () => {
  return (
    <>
    <div className='help-1'>
      <div className='help-support'>
        <h1>Help & Support</h1>
        <span>Let's take a step ahead and help you better.</span>
      </div>
      
      
    <div className='help-info'>

      <h2>General issues</h2>
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>What is Swiggy Customer Care Number?</Accordion.Header>
        <Accordion.Body>
        We value our customer’s time and hence moved away from a single customer care number to a comprehensive chat-based support system for quick and easy resolution. You no longer have to go through the maze of an IVRS call support. Just search for your issue in the help section on this page and initiate a chat with us. A customer care executive will be assigned to you shortly. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>I am unable to find the restaurant I'm looking for</Accordion.Header>
        <Accordion.Body>
        The restaurant might either be closed at the moment or temporarily not serviceable due to the low rider availability near the restaurant. Please try again after some time or consider ordering from a different restauraunt 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>I see surge fees on app</Accordion.Header>
        <Accordion.Body>
        Non-Swiggy one customer: Surge fee is generally enabled temporarily due to higher than expected demand to help us to fairly compensate the delivery executive. Explore our Swiggy one feature which eliminates surge fee along with other benefits. If you have any questions please feel free to drop a note at 'support@swiggy.in'
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>I am unable to place a cash on delivery order</Accordion.Header>
        <Accordion.Body>
        COD option may not be available due to below reasons:
        - High value order
        - If order is placed from a desktop application
        - Any recent history of cancelling a COD order

        In case if your reason is not listed here, Please write to us at support@swiggy.in restauraunt 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>I did not receive my OTP on SMS</Accordion.Header>
        <Accordion.Body>
        If you're not receiving the OTP, it's usually due to a network issue. Please check your mobile network settings and try generating a new OTP. If the problem persists, you might want to restart your device or reach out to us at support@swiggy.in for assistance.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>My payment was deducted but the order was not processed</Accordion.Header>
        <Accordion.Body>
        If your payment has been deducted, it will be refunded to the source account 
        1. UPI (2 hours)
        2. Credit Card (4-7 days)
        3. Debit Card (4-7 days)
        4. Net Banking (4-7 days)
        In case you have not received the refund within the above timelines please reach out to us at support@swiggy.in
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>I was charged a cancellation fees</Accordion.Header>
        <Accordion.Body>
        A cancellation fee is applicable if you request cancellation after 1 minute of placing the order. For more information, choose the relevant order in the "My Account" section, proceed to "HELP," and select "I have a payment and bill-related query." Our support agent will be available to assist you.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header>I have a query/issue regarding the bill amount</Accordion.Header>
        <Accordion.Body>
        Kindly send us an email at support@swiggy.in with the following information:
        - Attach a screenshot of the bill, indicating the issue
        - Include the Order ID (if applicable)
        - Specify the item price and any extra charges
        - Provide a description of the problem you're encountering
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      </div>
      </div>
      </>
      )
    }
    

export default Help;