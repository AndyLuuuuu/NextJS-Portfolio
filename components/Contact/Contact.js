import React, { Component } from "react";
import {
  ContactContainer,
  Content,
  CTABox,
  CTATitle,
  CTAContent,
  CTAText,
  FollowBox,
  FollowText,
  FollowIconContainer,
  FollowIcon,
  FormCompletedBack,
  FormCompletedTextContainer,
  FormCompletedTitle,
  FormCompletedText,
  FormCompletedButton
} from "./ContactStyled";
import ContactForm from "./ContactForm/ContactForm";
import GithubIcon from "../../static/icons/github.svg";
import InstagramIcon from "../../static/icons/instagram.svg";
import LinkedinIcon from "../../static/icons/linkedin.svg";
import CloseButton from "../../static/icons/button gold.svg";
import axios from "axios";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
    submitComplete: false,
    submitError: "Something went wrong!",
    inputValidated: {
      name: false,
      email: false,
      message: false
    },
    validationError: false
  };

  inputValidation = () => {
    if (
      this.state.inputValidated.name &&
      this.state.inputValidated.email &&
      this.state.inputValidated.message
    ) {
      this.setState(prevState => ({ validationError: false }));
      this.submitEmailHandler();
    } else {
      this.setState(prevState => ({ validationError: true }));
      setTimeout(() => {
        this.setState(prevState => ({ validationError: false }));
      }, 3000);
    }
  };

  submitEmailHandler = () => {
    let data = {
      name: this.state.name,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
      message: this.state.message
    };
    axios.post("/api/contact", data).then(res => {
      if (res.status === 200) {
        this.setState({
          name: "",
          email: "",
          phoneNumber: "",
          message: "",
          submitComplete: !this.state.submitComplete,
          inputValidated: {
            name: false,
            email: false,
            message: false
          },
          validationError: false
        });
      } else if (res.status === 500) {
        this.setState({ submitError: true });
        setTimeout(() => {
          this.setState({
            submitError: false,
            name: "",
            email: "",
            phoneNumber: "",
            message: ""
          });
        }, 3000);
      }
    });
  };

  onSubmitHandler = event => {
    event.preventDefault();
    this.inputValidation();
  };

  onCloseButtonHandler = event => {
    this.setState({
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
      submitComplete: false,
      inputValidated: {
        name: false,
        email: false,
        message: false
      },
      validationError: false
    });
  };

  onInputChangeHandler = event => {
    switch (event.target.name) {
      case "name":
        event.persist();
        this.setState(prevState => ({ name: event.target.value }));
        if (this.state.name.length > 5) {
          this.setState(prevState => ({
            inputValidated: {
              name: true,
              email: prevState.inputValidated.email,
              message: prevState.inputValidated.message
            }
          }));
        }
        break;
      case "email":
        event.persist();
        this.setState(prevState => ({ email: event.target.value }));
        if (this.state.email.includes("@")) {
          this.setState(prevState => ({
            inputValidated: {
              name: prevState.inputValidated.name,
              email: true,
              message: prevState.inputValidated.message
            }
          }));
        }
        break;
      case "number":
        event.persist();
        this.setState(prevState => ({ phoneNumber: event.target.value }));
        break;
      case "message":
        event.persist();
        this.setState(prevState => ({ message: event.target.value }));
        if (this.state.message.length > 20) {
          this.setState(prevState => ({
            inputValidated: {
              name: prevState.inputValidated.name,
              email: prevState.inputValidated.email,
              message: true
            }
          }));
        }
        break;
    }
  };
  render() {
    return (
      <ContactContainer id="Contact">
        <Content>
          <CTABox>
            <CTAContent>
              <CTATitle>Hello.</CTATitle>
              <CTAText>
                I hope my portfolio gave you some insight into who I am and what
                I can do for you. <br />
                <br />
                If you have any questions or any business inquiries, please do
                not hesitate to contact me!
              </CTAText>
            </CTAContent>
          </CTABox>

          <ContactForm
            onInputChange={event => this.onInputChangeHandler(event)}
            onSubmit={event => this.onSubmitHandler(event)}
            flipped={this.state.submitComplete}
            validationError={this.state.validationError}
            inputValidation={this.state.inputValidated}
            formValue={this.state}
          />
          <FormCompletedBack flipped={this.state.submitComplete}>
            <FormCompletedTextContainer>
              <FormCompletedTitle>Hurray!</FormCompletedTitle>
              <FormCompletedText>
                Thank you {this.state.name} for contacting me!<br />I will get
                back to you as soon as I can!
              </FormCompletedText>
            </FormCompletedTextContainer>
            <FormCompletedButton
              src={CloseButton}
              onClick={event => this.onCloseButtonHandler(event)}
            />
          </FormCompletedBack>
          <FollowBox>
            <FollowText>Follow Me</FollowText>
            <FollowIconContainer>
              <a href="https://www.linkedin.com" target="_blank">
                <FollowIcon src={LinkedinIcon} alt="LinkedIn" />
              </a>
              <a href="https://www.instagram.com/andy.luuuuu/" target="_blank">
                <FollowIcon src={InstagramIcon} alt="Instagram" />
              </a>
              <a href="https://github.com/AndyLuuuuu" target="_blank">
                <FollowIcon src={GithubIcon} alt="Github" />
              </a>
            </FollowIconContainer>
          </FollowBox>
        </Content>
      </ContactContainer>
    );
  }
}

export default Contact;
