import React, { Component } from "react";
import {
  PortfolioContainer,
  Content,
  WebPortfolio,
  Title,
  Subtitle,
  ViewMoreButton
} from "./PortfolioMobileStyled";
import PortfolioModal from "./PortfolioModal/PortfolioModal";
import WebPortfolioContent from "./PortfolioItems/Web Portfolio/WebPortfolio";

class PortfolioMobile extends Component {
  state = {
    numberOfItems: 2,
    endOfList: false,
    selectedItem: {
      WebPortfolioGithub: "",
      WebPortfolioText: "",
      WebPortfolioTitle: "",
      WebPortfolioURL: "",
      _id: ""
    },
    showModal: false
  };

  componentDidMount() {
    if (this.state.numberOfItems === this.props.WebPortfolioData.length) {
      this.setState(prevState => ({ endOfList: true }));
    }
  }

  viewMoreHandler = () => {
    if (this.state.endOfList) {
      this.setState(prevState => ({ numberOfItems: 2, endOfList: false }));
    } else if (
      this.props.WebPortfolioData.length - this.state.numberOfItems <
      2
    ) {
      this.setState(prevState => ({
        numberOfItems: (prevState.numberOfItems = this.props.WebPortfolioData.length),
        endOfList: true
      }));
    } else if (
      this.props.WebPortfolioData.length - this.state.numberOfItems ===
      2
    ) {
      this.setState(prevState => ({
        numberOfItems: (prevState.numberOfItems += 2),
        endOfList: true
      }));
    } else {
      this.setState(prevState => ({
        numberOfItems: (prevState.numberOfItems += 2)
      }));
    }
  };

  onSelectItemHandler = event => {
    this.props.WebPortfolioData.map(item => {
      if (item.ProjectImageURL === event.target.src) {
        this.setState({
          selectedItem: item,
          showModal: true
        });
      }
    });
  };

  closeModalHandler = () => {
    this.setState({
      selectedItem: {
        ProjectImageURL: "",
        ProjectTitle: "",
        ProjectText: "",
        ProjectLink: "",
        ProjectGithub: "",
        _id: ""
      },
      showModal: false
    });
  };
  render() {
    return (
      <PortfolioContainer id="MobilePortfolio">
        <Content>
          <WebPortfolio>
            <Title>Web Development</Title>
            <Subtitle>Portfolio</Subtitle>
          </WebPortfolio>
          <WebPortfolioContent
            WebPortfolioData={this.props.WebPortfolioData}
            AmountOfItems={this.state.numberOfItems}
            SelectedItem={event => this.onSelectItemHandler(event)}
            ModalItem={this.state.selectedItem}
            ShowModal={this.state.showModal}
          />
          <ViewMoreButton
            onClick={() => {
              this.viewMoreHandler();
            }}
          >
            {this.state.endOfList ? "Show Less" : "Show More"}
          </ViewMoreButton>
        </Content>
        <PortfolioModal
          ModalItem={this.state.selectedItem}
          ShowModal={this.state.showModal}
          closeModal={this.closeModalHandler}
        />
      </PortfolioContainer>
    );
  }
}

export default PortfolioMobile;
