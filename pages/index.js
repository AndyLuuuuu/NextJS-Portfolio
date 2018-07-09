import React from "react";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Portfolio from "../components/Portfolio/Portfolio";
import PortfolioMobile from "../components/Portfolio/PortfolioMobile";
import Contact from "../components/Contact/Contact";
import { ThemeProvider, injectGlobal } from "styled-components";
import Theme from "../components/Theme/Theme";
import axios from "axios";

injectGlobal`
* {
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
    box-sizing: border-box;
    
}
  body {
    overflow-x: hidden;
  }
`;

const index = props => {
  return (
    <ThemeProvider theme={Theme}>
      <React.Fragment>
        <Header />
        <Home />
        <About />
        <Portfolio WebPortfolioData={props.WebPortfolioData} />
        <PortfolioMobile WebPortfolioData={props.WebPortfolioData} />
        <Contact />
      </React.Fragment>
    </ThemeProvider>
  );
};

index.getInitialProps = async function() {
  const res = await axios.get(
    "https://andyluuuuu-portfolio.herokuapp.com/api/webportfolio"
  );
  return {
    WebPortfolioData: res.data
  };
};

export default index;
