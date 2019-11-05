import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import Chatbot from './components/Chatbot';
import arrow from './assets/white-arrow-png-41944.png'
import styled from 'styled-components';
import map from './assets/pakistan-2.gif';
import chain from './assets/supply_chain.png';
import smile1 from './assets/smiley-happy.png';
import smile2 from './assets/smiley-sad.png';
import reduce from './assets/reduce.png';
import lamp from './assets/lamp.png';
import recycle from './assets/recycle.png';
import swap from './assets/swap.png';

const StyledWrapper = styled.div`
  width: 100%;
  /* height: 100vh; */
  top: 0;
  bottom: 0;
  background-image: linear-gradient(280deg, #ffcc54, #f27202);
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
    text-align: center;
`;

const Arrow = styled.img`
  height: 50px;
  margin-top: 0.5em;
`;

const Faces = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-around;
`;

const StyledButton = styled.button`
  width: 100px;
  text-align: center;
  height: 40px;
  border-radius: 10px;
  margin: 1em;
  cursor: pointer;
  color: orange;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1em;
  align-items: center;
`;


const Map = styled.img`
  height: 300px;
  margin-right: 1em;
`;

const Facts = styled.div`
  font-size: 40px;
`;


const Smile = styled.div`
  margin: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ChainImg = styled.img`
  width: 100%;
  margin: 1em;
`;

const Solutions = styled.div`
  display: flex;
  flex-direction: column;
  
  margin-top: 1em;
`;

const Point = styled.div`
  display: flex;
  padding: 0.3em;
`;

const Icons = styled.img`
  width: 80px; 
  margin-right: 0.5em;
`;

// const Text = styled.div`
//   width: 600px;
// `;

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
          <div> 
            Have you ever heard about modern slavery and how you can make a difference? </div>
          <div> Get ready to learn more? </div>
          <a href='#section-two'><Arrow src={arrow} alt="arrow" /></a>

          {/* <div><img alt='chain' src={image1}/></div> */}
        </StyledInfo>

        <StyledInfo>
          <div id='section-two'> Our project will now take you to Pakistan in South Asia. Have you heard of this country before?</div>
          <Info>
          <Map src={map}  alt="pakistan" />
          <Facts>
          <ol>
            <li>189 million people live in Pakistan</li>
              <li>1,68% of the popluation live in slavery</li>
              <li>That's 3,186,000 people</li>
            </ol>
          </Facts>
          </Info>
          <a href='#section-three'><Arrow src={arrow} alt="arrow" /></a>
        </StyledInfo>
        <StyledInfo>
          <div id='section-three'>
            Now we want to introduce you to a child from Pakistan. Meet Ravi!
          </div>
          <Faces>
            <Smile><img src={smile1} alt='smile1'/>
            <div>Liam</div>
            </Smile>
            
            <Smile>
            <img src={smile2} alt='smile2'/>
            <div>Ravi</div>
            </Smile>
          </Faces>
          
            <div>Why is Ravi so sad? Go ahead and ask him about his life.</div> 
          
          {/* {this.state.showModal ? (
            <Chatbot modalHandler={this.modalHandler} />
          ) : null} */}
          <Chatbot />
          {/* <StyledButton onClick={() => this.modalHandler()}>Open Chat</StyledButton> */}
          <a href='#section-four'><Arrow src={arrow} alt="arrow" /></a>
            </StyledInfo>
          <StyledInfo>

          <div id='section-four'>It's sad, isn't it, to know that there are many children like Ravi? The good news is that you can do something to help them!
          First, you need to answer a couple of questions: </div>
          <Facts>
            <ol>
              <li>Do you wear jeans?</li>
              <li>Do you have leather shoes?</li>
              <li>Do you like lollipops?</li>
            </ol>
          </Facts>
          <a href='#section-five'><Arrow src={arrow} alt="arrow" /></a>
        </StyledInfo>
        <StyledInfo>
          <div id='section-five'>
            If your answers were "YES", there is a high chance that these products or materials for these products were produced in Pakistan.
          </div>
          {/* <div>Some of them - by children like Ravi.</div>
          <div>So you may be connected to Ravi through a supply chain without even knowing it!</div> */}
          <ChainImg src={chain} alt='supply-chain'/>
          <a href='#section-six'><Arrow src={arrow} alt="arrow" /></a>
        </StyledInfo>

        <StyledInfo>
          <div id='section-six'>And now good news!</div>
          <div>This is what you can do to help children like Ravi to lead a better life.</div>
        <Solutions>
          <Point><Icons src={reduce} alt='reduce'/> <div>Buy less</div></Point>
          <Point><Icons src={lamp} alt='be-aware'/> <div>Choose shops carefully</div></Point>
          <Point><Icons src={recycle} alt='recycle'/> <div> Recycle</div></Point>
          <Point><Icons src={swap} alt='swap'/> <div>Swap clothes with friends</div></Point>
          </Solutions>
        </StyledInfo>


      </StyledWrapper>
    )
  }
}


export default App;
