import React, { Component } from "react";
import {
  AboutContainer,
  Content,
  AboutImage,
  AboutBox,
  AboutTitle,
  ArrowIcon,
  AboutText,
  SkillsBox,
  SkillsTitle,
  SkillsText,
  Span,
  CTABox,
  CTAText,
  CTABtn,
  AboutExpand,
  SkillsExpand,
  ExpandTitle,
  ExpandText,
  StyledHr
} from "./AboutStyled";
import AboutModal from "./AboutModal/AboutModal";
import ProfileImage from "../../static/images/about/About-Image.jpg";
import arrowIcon from "../../static/icons/arrow-icon.svg";

import axios from "axios";

class About extends Component {
  state = {
    ExpandAbout: false,
    ExpandSkills: false
  };

  axiostest = () => {
    axios
      .get("http://localhost:3001/api/webportfolio")
      .then(res => console.log(res));
  };

  ExpandHandler = event => {
    switch (event.target.title) {
      case "About Box":
        this.setState(prevState => ({
          ExpandAbout: !this.state.ExpandAbout,
          ExpandSkills: false
        }));
        break;
      case "Skills Box":
        this.setState(prevState => ({
          ExpandAbout: false,
          ExpandSkills: !this.state.ExpandSkills
        }));
        break;
      default:
        this.setState(prevState => ({
          ExpandAbout: false,
          ExpandSkills: false
        }));
        break;
    }
  };

  render() {
    return (
      <AboutContainer id="About" onClick={event => this.ExpandHandler(event)}>
        <Content>
          <AboutImage
            src={ProfileImage}
            title="About Image"
            onClick={event => this.ExpandHandler(event)}
          />
          <AboutBox
            title="About Box"
            onClick={event => this.ExpandHandler(event)}
          >
            <AboutTitle
              title="About Box"
              onClick={event => this.ExpandHandler(event)}
            >
              <Span>#</Span>About Me
            </AboutTitle>
            <ArrowIcon
              src={arrowIcon}
              title="About Box"
              onClick={event => this.ExpandHandler(event)}
            />
            <AboutText>Click to Expand</AboutText>
          </AboutBox>
          <SkillsBox
            title="Skills Box"
            onClick={event => this.ExpandHandler(event)}
          >
            <SkillsTitle
              title="Skills Box"
              onClick={event => this.ExpandHandler(event)}
            >
              <Span>&lt;</Span>My Skills<Span>/&gt;</Span>
            </SkillsTitle>
            <ArrowIcon
              src={arrowIcon}
              title="Skills Box"
              onClick={event => this.ExpandHandler(event)}
            />
            <SkillsText
              title="Skills Box"
              onClick={event => this.ExpandHandler(event)}
            >
              Click to Expand
            </SkillsText>
          </SkillsBox>
          <CTABox>
            <CTAText>
              My Skills + Your Vision. <br /> Lets work together!
            </CTAText>
            <CTABtn
              onClick={() => Contact.scrollIntoView({ behavior: "smooth" })}
            >
              Contact Me
            </CTABtn>
          </CTABox>
          <AboutExpand show={this.state.ExpandAbout}>
            <ExpandTitle show={this.state.ExpandAbout}>Who am I?</ExpandTitle>
            <StyledHr show={this.state.ExpandAbout} />
            <ExpandText show={this.state.ExpandAbout}>
              My name is Andy and I currently live in Vancouver, Canada. I moved
              to Vancouver, B.C. when I was 6 years old with my siblings and
              mother. I've lived in Vancouver for over 20 years and consider
              this beautiful place as my home. <br />
              <br />I am a student at Kwantlen Polytechnic University studying a
              degree in Information Technology (With specialization in mobile
              and web applications). With this degree, I wish to have a
              fulfilling career within the tech industry.
            </ExpandText>
          </AboutExpand>
          <SkillsExpand show={this.state.ExpandSkills}>
            <ExpandTitle show={this.state.ExpandSkills}>
              What can I do?
            </ExpandTitle>
            <StyledHr
              style={{
                border: "1px solid #B5C6CB"
              }}
              show={this.state.ExpandSkills}
            />
            <ExpandText show={this.state.ExpandSkills}>
              My interest in web development started when I took a course at my
              university. From then on, I've learned a lot from online materials
              such as Udemy and tutorials on YouTube. <br />
              <br />I've worked with HTML, CSS, MongoDB, NodeJS (Express) and a
              very big fan of ReactJS. I mostly develop using ReactJS because of
              how versatile it is. I am continously learning new tips and tricks
              in achieving better code and better ways of tackling problems.{" "}
              <br />
              <br />I have also picked up web design to further grasp my
              understanding on how to create a better UI/UX experience for
              clients.
            </ExpandText>
          </SkillsExpand>
          <AboutModal title="Who am I?" expanded={this.state.ExpandAbout} left>
            <br />My name is Andy and I currently live in Vancouver, Canada. I
            moved to Vancouver, B.C. when I was 6 years old with my siblings and
            mother. I've lived in Vancouver for over 20 years and consider this
            beautiful place as my home. <br />
            <br />I am a student at Kwantlen Polytechnic University studying a
            degree in Information Technology (With specialization in mobile and
            web applications). With this degree, I wish to have a fulfilling
            career within the tech industry.
          </AboutModal>
          <AboutModal
            title="What can I do?"
            expanded={this.state.ExpandSkills}
            gold
          >
            <br />
            My interest in web development started when I took a course at my
            university. From then on, I've learned a lot from online materials
            such as Udemy and tutorials on YouTube. <br />
            <br />I've worked with HTML, CSS, MongoDB, NodeJS (Express) and a
            very big fan of ReactJS. I mostly develop using ReactJS because of
            how versatile it is.<br />
            <br />I am continously learning new tips and tricks in achieving
            better code and better ways of tackling problems. <br />
            <br />I have also picked up web design to further grasp my
            understanding on how to create a better UI/UX experience for
            clients.
          </AboutModal>
        </Content>
      </AboutContainer>
    );
  }
}

export default About;
