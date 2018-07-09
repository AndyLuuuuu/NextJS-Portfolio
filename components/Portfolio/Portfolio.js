import React, { Component } from "react";
import {
  PortfolioContainer,
  Content,
  WebPortfolio,
  Title,
  Subtitle,
  WebPortBack,
  ScrollInstruction
} from "./PortfolioStyled";
import WebPortfolioContent from "./PortfolioItems/Web Portfolio/WebPortfolio";
import ArrowIcon from "../../static/icons/arrow-icon.svg";

class Portfolio extends Component {
  state = {
    WebPortFlipped: false
  };

  onFlipHandler = event => {
    switch (event.target.title) {
      case "View Button":
        this.setState(prevState => ({
          WebPortFlipped: true
        }));
        break;
      case "Container":
        if (this.state.WebPortFlipped) {
          this.setState(prevState => ({
            WebPortFlipped: false
          }));
        }
        break;
      case "Close Button":
        this.setState(prevState => ({
          WebPortFlipped: false
        }));
        break;
      default:
        null;
        break;
    }
  };

  render() {
    return (
      <PortfolioContainer
        id="Portfolio"
        title="Container"
        onClick={event => this.onFlipHandler(event)}
      >
        <Content title="Container" onClick={event => this.onFlipHandler(event)}>
          <WebPortfolio flipped={this.state.WebPortFlipped}>
            <Title>Web Development</Title>
            <Subtitle>Portfolio</Subtitle>
            <ScrollInstruction
              title="View Button"
              onClick={event => this.onFlipHandler(event)}
            >
              Click to view
            </ScrollInstruction>
          </WebPortfolio>
          <WebPortBack flipped={this.state.WebPortFlipped}>
            <WebPortfolioContent
              WebPortfolioData={this.props.WebPortfolioData}
              CloseButton={event => this.onFlipHandler(event)}
              SelectedItem={() => {}}
            />
          </WebPortBack>
        </Content>
      </PortfolioContainer>
    );
  }
}

export default Portfolio;
