import styled from "styled-components";

export const FormContainer = styled.div`
  background-color: ${props => props.theme.black};
  grid-area: 1/2/3/3;
  padding: 1rem 5rem;
  transition: all 400ms ease-in-out;
  transform: rotateY(${props => (props.flipped ? "-180deg" : "0deg")})
    translateZ(${props => (props.flipped ? "1px" : "0deg")});
  box-shadow: 10px 10px 10px ${props => props.theme.shadow};
  display: flex;
  flex-flow: column;
  justify-content: center;
  backface-visibility: hidden;
  @media (max-width: 87rem) {
    padding: 1.5rem 3rem;
  }
  @media (max-width: 55rem) {
    background-color: initial;
    box-shadow: none;
    transform: none;
    height: fit-content;
  }
  @media (max-width: 37rem) {
    padding: 1.5rem 0;
  }
`;

export const FormContent = styled.div`
  display: flex;
  flex-flow: column;
  @media (max-width: 55rem) {
    width: 80%;
    margin: 0 auto;
    margin-bottom: 2rem;
  }
`;

export const FormTitle = styled.h1`
  color: ${props => props.theme.gold};
  text-align: center;
  font-weight: 300;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  @media (max-width: 68rem) {
    font-size: 2.3rem;
    font-weight: 300;
  }
  @media (max-width: 55rem) {
    color: ${props => props.theme.black};
    font-weight: 300;
    font-size: 3rem;
  }
  @media (max-width: 43rem) {
    font-size: 2.5rem;
  }
  @media (max-width: 31rem) {
    font-size: 2rem;
  }
  @media (max-height: 45rem) {
    font-size: 1.7rem;
  }
`;

export const FormLabel = styled.label`
  color: ${props => props.theme.darkGold};
  font-size: 1rem;
  margin-bottom: 0.5rem;
  @media (max-width: 55rem) and (max-height: 55rem) and (orientation: landscape) {
    font-size: 0rem;
  }
  @media (max-width: 55rem) and (max-height: 55rem) and (orientation: portrait) {
    font-size: 0rem;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  height: 2rem;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid grey;
  font-size: 1rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.white};
  &:active {
    outline: none;
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid ${props => props.theme.gold};
  }
  &::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    opacity: 0; /* Firefox */
  }

  &:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    opacity: 0;
  }

  &::-ms-input-placeholder {
    /* Microsoft Edge */
    opacity: 0;
  }
  @media (max-width: 55rem) {
    height: 3rem;
    border: 2px solid ${props => props.theme.darkGold};
    color: ${props => props.theme.black};
    &:focus {
      outline: none;
      border-bottom: 2px solid ${props => props.theme.darkGold};
    }
    &::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      opacity: 1; /* Firefox */
      padding-left: 0.5rem;
    }

    &:-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      opacity: 1;
    }

    &::-ms-input-placeholder {
      /* Microsoft Edge */
      opacity: 1;
    }
  }
  @media (max-width: 37rem) {
    width: 100%;
  }
`;

export const FormTextArea = styled.textarea`
  resize: none;
  height: 8rem;
  background-color: transparent;
  border: 2px solid grey;
  font-size: 1rem;
  color: ${props => props.theme.white};
  &:active {
    outline: none;
  }
  &:focus {
    outline: none;
    border: 2px solid ${props => props.theme.gold};
  }
  &::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    opacity: 0; /* Firefox */
    padding: 0.5rem 0 0 0.5rem;
  }

  &:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    opacity: 0;
  }

  &::-ms-input-placeholder {
    /* Microsoft Edge */
    opacity: 0;
  }
  @media (max-width: 55rem) {
    height: 15rem;
    border: 2px solid ${props => props.theme.darkGold};
    color: ${props => props.theme.black};
    &::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      opacity: 1; /* Firefox */
    }
    &:focus {
      outline: none;
      border: 2px solid ${props => props.theme.darkGold};
    }

    &:-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      opacity: 1;
    }

    &::-ms-input-placeholder {
      /* Microsoft Edge */
      opacity: 1;
    }
  }
  @media (max-height: 45rem) {
    margin: 0.5rem 0;
    height: 7rem;
  }
  @media (max-height: 37.5rem) {
    height: 4rem;
  }
`;

export const FormButton = styled.button`
  font-size: 1.1rem;
  font-weight: 700;
  width: fit-content;
  padding: 0.5rem 2rem;
  border: none;
  align-self: center;
  background-color: ${props => props.theme.gold};
  color: ${props => props.theme.black};
  transition: all 200ms ease-in-out;
  &:focus {
    outline: none;
  }
  @media (max-width: 55rem) {
    width: 100%;
  }
`;

export const FormErrorMessage = styled.p`
  color: #ef5d6c;
  font-size: 1.2rem;
  text-align: center;
  margin: 1rem 0;
  visibility: ${props => (props.validationError ? "visible" : "hidden")};
`;

export const FormCompletedBack = styled.div`
  grid-area: 1/2/3/3;
  background-color: white;
  @media (max-width: 55rem) {
    display: none;
  }
`;
