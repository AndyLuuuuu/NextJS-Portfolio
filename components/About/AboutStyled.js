import styled from "styled-components";

export const AboutContainer = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.white};
  @media (max-width: 25rem) {
    padding: 2rem 0;
  }
`;

export const Content = styled.div`
  width: 80%;
  height: 100%;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 40% 40% 1fr;
  margin: 0 auto;
  @media (max-width: 81rem) {
    grid-template-rows: 1fr 35% 35% 1fr;
    width: 95%;
  }

  @media (max-width: 68rem) {
    grid-template-rows: 1fr 30% 30% 1fr;
  }

  @media (max-width: 62.5rem) {
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
  }
`;

export const AboutImage = styled.img`
  grid-area: 2/1/4/3;
  justify-self: stretch;
  align-self: stretch;
  @media (max-width: 62.5rem) {
    height: auto;
    width: 50%;
    margin: 0 auto;
  }
  @media (max-width: 44rem) {
    width: 70%;
  }
  @media (max-height: 44rem) {
    width: 50%;
  }
  @media (max-height: 30rem) {
    width: 40%;
  }
  @media (max-height: 25rem) {
    width: 30%;
  }
`;

export const AboutBox = styled.div`
  grid-column: 3;
  grid-row: 2;
  background-color: ${props => props.theme.blue};
  display: flex;
  flex-flow: column;
  align-content: center;
  text-align: center;
  justify-content: space-between;
  padding: 1rem;
  transition: all 150ms ease-in-out;
  &:hover {
    transform: scale(1.05);
    box-shadow: 3px 3px 5px #a9a9a9;
  }
  @media (max-width: 62.5rem) {
    width: 50%;
    height: 7rem;
    margin-top: 1rem;
    position: relative;
    justify-content: center;
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
  @media (max-width: 44rem) {
    width: 70%;
    height: 5rem;
  }
  @media (max-height: 44rem) {
    width: 50%;
    height: 3rem;
  }
  @media (max-height: 30rem) {
    width: 40%;
  }
  @media (max-height: 25rem) {
    width: 30%;
  }
`;

export const AboutTitle = styled.h2`
  color: ${props => props.theme.black};
  font-size: 2.5rem;
  white-space: nowrap;
  @media (max-width: 95rem) {
    font-size: 2rem;
  }
  @media (max-width: 81rem) {
    font-size: 1.7rem;
  }
  @media (max-width: 62.5rem) {
    font-size: 2rem;
    font-weight: 300;
    margin: 0 auto;
  }
  @media (max-width: 44rem) {
    font-size: 1.7rem;
  }
  @media (max-height: 44rem) {
    font-size: 1.2rem;
  }
`;

export const ArrowIcon = styled.img`
  height: 2rem;
  width: 2rem;
  transform: rotate(180deg);
  position: absolute;
  right: 10%;
  @media (min-width: 62.6rem) {
    display: none;
  }
  @media (max-width: 31rem) {
    height: 1.5rem;
    width: auto;
  }
  @media (max-height: 44rem) {
    height: 1.2rem;
    width: auto;
  }
`;

export const AboutText = styled.p`
  color: ${props => props.theme.black};
  @media (max-width: 81rem) {
    font-size: 0.8rem;
  }
  @media (max-width: 62.5rem) {
    display: none;
  }
`;

export const SkillsBox = AboutBox.extend`
  grid-area: 2/4/2/5;
  background-color: ${props => props.theme.gold};
`;

export const SkillsTitle = AboutTitle.extend``;

export const SkillsText = AboutText.extend``;

export const Span = styled.span`
  color: ${props => props.theme.red};
  @media (max-width: 62.6rem) {
    display: none;
  }
`;

export const CTABox = styled.div`
  grid-area: 3/3/4/5;
  background-color: ${props => props.theme.black};
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (max-width: 62.5rem) {
    display: none;
  }
`;

export const CTAText = styled.p`
  color: ${props => props.theme.white};
  font-size: 3rem;
  @media (max-width: 95rem) {
    font-size: 2.5rem;
  }
  @media (max-width: 81rem) {
    font-size: 2rem;
  }
`;

export const CTABtn = styled.a`
  border: 2px solid ${props => props.theme.gold};
  color: ${props => props.theme.white};
  border-radius: 10px;
  text-transform: uppercase;
  font-size: 1.3rem;
  width: 15rem;
  padding: 1rem;
  margin: 0rem auto;
  margin-top: 2rem;
  transition: all 100ms ease-in-out;
  &:hover {
    background-color: ${props => props.theme.gold};
    color: ${props => props.theme.black};
    font-weight: 700;
  }
  @media (max-width: 81rem) {
    padding: 0.8rem 2rem;
  }
`;

export const AboutExpand = styled.div`
  grid-area: 2/3/4/5;
  transition: all 250ms ease-in-out;
  transform-origin: top left;
  transform: ${props => (props.show ? "scale(1,1)" : "scale(0,0)")};
  opacity: ${props => (props.show ? 1 : 0)};
  background-color: ${props => props.theme.blue};
  display: flex;
  flex-flow: column;
  justify-content: center;
  padding: 5rem 5rem;
  overflow-y: auto;
  @media (max-width: 81rem) {
    padding: 1rem;
  }
  @media (max-width: 62.5rem) {
    display: none;
  }
`;

export const SkillsExpand = AboutExpand.extend`
  transform-origin: top right;
  background-color: ${props => props.theme.gold};
`;

export const ExpandTitle = AboutTitle.extend`
  transition: opacity 800ms ease-in-out;
  opacity: ${props => (props.show ? 1 : 0)};
  @media (max-width: 95rem) {
    font-size: 1.5rem;
  }
`;

export const StyledHr = styled.hr`
  border: 1px solid ${props => props.theme.gold};
  transition: width 800ms ease-in-out;
  width: ${props => (props.show ? "50%" : 0)};
  margin: 0.5rem 0;
`;

export const ExpandText = AboutText.extend`
  margin-top: 0.5rem;
  font-size: 1.5rem;
  transition: opacity 1000ms ease-in-out;
  opacity: ${props => (props.show ? 1 : 0)};
  @media (max-width: 95rem) {
    font-size: 1.2rem;
  }
`;
