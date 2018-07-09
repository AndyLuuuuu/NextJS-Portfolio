import React from "react";
import {
  FormContainer,
  FormInstruction,
  FormContent,
  FormTitle,
  FormLabel,
  FormInput,
  FormTextArea,
  FormButton
} from "./ContactFormStyled";

const ContactForm = props => {
  return (
    <FormContainer flipped={props.flipped}>
      <FormTitle>I'd love to hear from you!</FormTitle>
      <FormContent>
        <FormLabel for="name">Full Name:</FormLabel>
        <FormInput
          name="name"
          height="3rem"
          onChange={event => props.onInputChange(event)}
          placeholder="Your Full Name"
        />
        <FormLabel>Email:</FormLabel>
        <FormInput
          name="email"
          height="3rem"
          onChange={event => props.onInputChange(event)}
          placeholder="Your Email"
        />
        <FormLabel>Phone Number:</FormLabel>
        <FormInput
          name="number"
          height="3rem"
          onChange={event => props.onInputChange(event)}
          placeholder="Your Phone Number * Optional"
        />
        <FormLabel>Message:</FormLabel>
        <FormTextArea
          name="message"
          onChange={event => props.onInputChange(event)}
          placeholder="Enter Your Message"
        />
        <FormButton onClick={event => props.onSubmit(event)}>Submit</FormButton>
      </FormContent>
    </FormContainer>
  );
};

export default ContactForm;
