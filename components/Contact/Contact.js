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

class Contact extends Component {
  state = {
    Name: "",
    Email: "",
    PhoneNumber: "",
    Message: "",
    FormComplete: false
  };

  onSubmitHandler = event => {
    event.preventDefault();
    this.setState({ FormComplete: !this.state.FormComplete });
  };

  onCloseButtonHandler = event => {
    this.setState({
      Name: "",
      Email: "",
      PhoneNumber: "",
      Message: "",
      FormComplete: false
    });
  };

  onInputChangeHandler = event => {
    switch (event.currentTarget.name) {
      case "name":
        event.persist();
        this.setState(prevState => ({ Name: event.target.value }));
        console.log(this.state);
        break;
      case "email":
        event.persist();
        this.setState(prevState => ({ Email: event.target.value }));
        console.log(this.state);
        break;
      case "number":
        event.persist();
        this.setState(prevState => ({ PhoneNumber: event.target.value }));
        console.log(this.state);
        break;
      case "message":
        event.persist();
        this.setState(prevState => ({ Message: event.target.value }));
        console.log(this.state);
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
            flipped={this.state.FormComplete}
          />
          <FormCompletedBack flipped={this.state.FormComplete}>
            <FormCompletedTextContainer>
              <FormCompletedTitle>Hurray!</FormCompletedTitle>
              <FormCompletedText>
                Thank you for contacting me!<br />I will get back to you as soon
                as I can!
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
