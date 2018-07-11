import React from "react";
import {
  FormContainer,
  FormContent,
  FormTitle,
  FormLabel,
  FormInput,
  FormTextArea,
  FormMessageButtonContainer,
  FormErrorMessage,
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
          onChange={event => props.onInputChange(event)}
          placeholder="Your Full Name"
          value={props.formValue.name}
        />

        <FormLabel>Email:</FormLabel>
        <FormInput
          name="email"
          onChange={event => props.onInputChange(event)}
          placeholder="Your Email"
          value={props.formValue.email}
        />

        <FormLabel>Phone Number:</FormLabel>
        <FormInput
          name="number"
          height="3rem"
          onChange={event => props.onInputChange(event)}
          placeholder="Your Phone Number (Optional)"
          value={props.formValue.phoneNumber}
        />

        <FormLabel>Message:</FormLabel>
        <FormTextArea
          name="message"
          onChange={event => props.onInputChange(event)}
          placeholder="Enter Your Message"
          value={props.formValue.message}
        />
        <FormMessageButtonContainer>
          <FormErrorMessage validationError={props.validationError}>
            Please enter correct information.
          </FormErrorMessage>
          <FormButton onClick={event => props.onSubmit(event)}>Send</FormButton>
        </FormMessageButtonContainer>
      </FormContent>
    </FormContainer>
  );
};

export default ContactForm;
