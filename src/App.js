import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import Chatbot from './components/Chatbot';
import arrow from './assets/white-arrow-png-41944.png'
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  /* height: 100vh; */
  top: 0;
  bottom: 0;
  background-image: linear-gradient(280deg, #ffa203, #f27202);
  /* background-color: black; */
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1em;
    align-items: center;
    justify-content: space-around;
    padding: .5rem 1rem;
    width: 60%;
    font-family: 'Indie Flower', cursive;
    font-size: 50px;
`;

const Arrow = styled.img`
  height: 50px;
`;

const StyledButton = styled.button`
  width: 20%;
  text-align: center;
  height: 30px;
`;

class App extends Component {

  state = {
    showModal: false
  }

  modalHandler = () => {
    this.setState({
        showModal: !this.state.showModal
    });
};

  render() {
    return (
      <StyledWrapper>
        <Header />
        
        {/* <Chatbot /> */}
        <StyledInfo>
          <div> Hi Liam, </div>
          <div> welcome to our semester school project. 
            Have you ever heard about modern slavery and how you can make the difference? </div>
            <div id='section-two'>Get ready to learn more? </div>
            <a href='#section-three'><Arrow src={arrow} alt="arrow"/></a>
            
            
         
          {/* <div><img alt='chain' src={image1}/></div> */}
        </StyledInfo>

        <StyledInfo>
          <div id='section-three'>
            Now we want to introduce you to a child from Pakistan. Meet Ravi! 
          </div>
          <div>Go ahead and ask him about his life.</div>
          {this.state.showModal ? (
                    <Chatbot modalHandler={this.modalHandler}/>
                ) : null}
          <StyledButton onClick={() => this.modalHandler()}>Open Chat</StyledButton>
        </StyledInfo>
        
      </StyledWrapper>
    )
  }
}


export default App;
