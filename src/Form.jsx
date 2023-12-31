import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

console.log("Service ID:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
console.log("Template ID:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
console.log("Public Key:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);


const Form = () => {
  const form = useRef();
  const [message, setMessage] = useState("");

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const userId = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, userId,)
      .then((result) => {
        setMessage("Message sent!");
        // Clear the form
        form.current.reset();
        // Remove the success message after 5 seconds
        setTimeout(() => {
          setMessage("");
        }, 5000);
      }, (error) => {
        setMessage("Sending email failed.");
      });
  };

return (
<>
    <Header>Send me a message for any inquiries...</Header>
    <FormContainer ref={form} onSubmit={sendEmail}>
    <FormInput type="text" name="name" placeholder="Your Name" required />
    <FormInput type="email" name="email" placeholder="Your Email" required />
    <MessageInput type="text" name="message" placeholder="Message" required />
    <FormButton type="submit">Submit</FormButton>
    </FormContainer>
    {message && <SuccessMessage>{message}</SuccessMessage>}
</>
);
};

const FormContainer = styled.form`
display: flex;
flex-direction: column;
padding: 10px;
width: 280.6px;
margin-left: auto;
margin-right: auto;

@media (min-width: 601px) {
padding: 15px;
width: 366px;
}

@media (min-width: 1201px) {
padding: 20px;
width: 488px;
} 
`;

const Header = styled.h1`
padding: 15px 0 0 15px;
color: #000;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 15px; 
letter-spacing: 0.22px;
margin-bottom: 10px;

@media (min-width: 601px) {
padding: 22.5px 0 0 22.5px;
font-size: 24px;
line-height: 22.5px; 
letter-spacing: 0.33px;
margin-bottom: 15px;
}

@media (min-width: 1201px) {
padding: 30px 0 0 30px;
font-size: 32px;
line-height: 30px; 
letter-spacing: 0.44px;
margin-bottom: 20px;
} 
`;

const FormInput = styled.input`
-webkit-appearance: none;
border-radius: 2px;
margin-bottom: 10px;
background: #FFF;
box-shadow: 0px 1px 0px 0px #000, 1px 1px 0px 0px #000, 1px 0px 0px 0px #000, 2px 2px 0px 0px rgba(244, 244, 244, 0.80) inset, -1px -1px 0px 0px rgba(0, 0, 0, 0.25) inset, 1px 1px 0px 0px #FFF inset;
color: #434343;
font-size: 14px;
font-style: normal;
font-weight: 400;
letter-spacing: 0.22px;
font-family: VT323;
border-style: none;
resize: none;
height: 23px;
line-height: 23px;
padding-left: 5px;

@media (min-width: 601px) {
margin-bottom: 15px;
box-shadow: 0px 1px 1px 0px #000, 1px 1px 1px 0px #000, 1px 0px 1px 0px #000, 2px 2px 1px 0px rgba(244, 244, 244, 0.80) inset, -1px -1px 1px 0px rgba(0, 0, 0, 0.25) inset, 1px 1px 1px 0px #FFF inset;
font-size: 21px;
}

@media (min-width: 1201px) {
margin-bottom: 20px;
box-shadow: 0px 1px 2px 0px #000, 1px 1px 2px 0px #000, 1px 0px 2px 0px #000, 2px 2px 2px 0px rgba(244, 244, 244, 0.80) inset, -1px -1px 2px 0px rgba(0, 0, 0, 0.25) inset, 1px 1px 2px 0px #FFF inset;
font-size: 28px;
} 

&.active {
border-radius: 2px 2px 0px 0px;
}

&:focus {
outline:none;
border: 1px solid #000;
border-radius: 2px 2px 0px 0px;
}
`;

const MessageInput = styled.textarea`
-webkit-appearance: none;
border-radius: 2px;
margin-bottom: 10px;
height: 100px;
background: #FFF;
box-shadow: 0px 1px 0px 0px #000, 1px 1px 0px 0px #000, 1px 0px 0px 0px #000, 2px 2px 0px 0px rgba(244, 244, 244, 0.80) inset, -1px -1px 0px 0px rgba(0, 0, 0, 0.25) inset, 1px 1px 0px 0px #FFF inset;
color: #434343;
font-size: 14px;
font-style: normal;
font-weight: 400;
letter-spacing: 0.22px;
font-family: 'VT323';
display: flex;
justify-content: flex-start;
border-style: none;
resize: none;
padding-left: 5px;
padding-top: 5px;

@media (min-width: 601px) {
margin-bottom: 15px;
height: 150px;
box-shadow: 0px 1px 1px 0px #000, 1px 1px 1px 0px #000, 1px 0px 1px 0px #000, 2px 2px 1px 0px rgba(244, 244, 244, 0.80) inset, -1px -1px 1px 0px rgba(0, 0, 0, 0.25) inset, 1px 1px 1px 0px #FFF inset;
font-size: 21px;
letter-spacing: 0.33px;
padding-left: 7.5px;
padding-top: 7.5px;
}

@media (min-width: 1201px) {
margin-bottom: 20px;
height: 200px;
box-shadow: 0px 1px 2px 0px #000, 1px 1px 2px 0px #000, 1px 0px 2px 0px #000, 2px 2px 2px 0px rgba(244, 244, 244, 0.80) inset, -1px -1px 2px 0px rgba(0, 0, 0, 0.25) inset, 1px 1px 2px 0px #FFF inset;
font-size: 28px;
letter-spacing: 0.44px;
padding-left: 10px;
padding-top: 10px;
} 

&.active {
border-radius: 2px 2px 0px 0px;
}

&:focus {
outline:none;
border: 1px solid #000;
border-radius: 2px 2px 0px 0px;
}
`;

const FormButton = styled.button`
cursor: pointer;
position: absolute;
bottom: 0;
right: 0;
margin: 15px 15px 22px 0;
width: 75px;
height: 23px;
flex-shrink: 0;
background: #D9D9D9;
box-shadow: 0px 1px 0px 0px #000, 1px 1px 0px 0px #000, 1px 0px 0px 0px #000, 2px 2px 0px 0px rgba(244, 244, 244, 0.80) inset, -1px -1px 0px 0px rgba(0, 0, 0, 0.25) inset, 1px 1px 0px 0px #FFF inset;
color: #000;
font-family: 'VT323', monospace;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: 12px; 
letter-spacing: 0.22px;

@media (min-width: 601px) {
margin: 22.5px 22.5px 33px 0;
width: 112.5px;
height: 34.5px;
box-shadow: 0px 1px 1px 0px #000, 1px 1px 1px 0px #000, 1px 0px 1px 0px #000, 2px 2px 1px 0px rgba(244, 244, 244, 0.80) inset, -1px -1px 1px 0px rgba(0, 0, 0, 0.25) inset, 1px 1px 1px 0px #FFF inset;
font-size: 19.5px;
line-height: 18px; 
letter-spacing: 0.33px;
}

@media (min-width: 1201px) {
margin: 30px 30px 44px 0;
width: 150px;
height: 46px;
box-shadow: 0px 1px 2px 0px #000, 1px 1px 2px 0px #000, 1px 0px 2px 0px #000, 2px 2px 2px 0px rgba(244, 244, 244, 0.80) inset, -1px -1px 2px 0px rgba(0, 0, 0, 0.25) inset, 1px 1px 2px 0px #FFF inset;
font-size: 26px;
line-height: 24px; 
letter-spacing: 0.44px;
} 

&:focus {
outline:none;
border: 1px solid #000;
box-shadow: 1px 1px 0px 0px #000, 0px 1px 0px 0px #000, 1px 0px 0px 0px #000;
}
&:active {
border: 1px solid #000;
box-shadow: 1px 1px 0px 0px #000, 0px 1px 0px 0px #000, 1px 0px 0px 0px #000;
}
`;

const SuccessMessage = styled.div`
text-align: center;
margin-top: 1rem;
font-size: 1.7rem;
color: #005100;
`;

export default Form;