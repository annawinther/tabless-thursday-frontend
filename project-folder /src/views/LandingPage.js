import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Files from '../assets/files.svg';
import Notes from '../assets/notes.svg';
import Check from '../assets/check.svg';

export default function LandingPage() {
    return (
        <LandingPageWrapper>
            <Homestyled>
                <IntroStyled>
                    <h1>Tabless Thursday</h1>
                    <p>A super easy way to keep track of your open tabs and come back to where you left off. </p>
                    <p>Log in to see all your tabs or sign up to get started!</p>
                    <div className="cta-buttons">
                        <Link to='./login'>Log In</Link>
                        <Link to='./signup'>Sign Up</Link>
                    </div>
                </IntroStyled>

                <section className="how-it-works">
                <div className="service">
                    <img src={Files} alt="make todo of tabs"/>
                    <p>Collect all of your tabs and organise them </p>
                    </div>
                    <div className="service reverse">
                    <p>Take notes for each to-do list and write down why this tab was important </p>
                    <img src={Notes} alt="take notes"/>
                    </div>
                    <div className="service">
                    <img src={Check} alt="check off"/>
                    <p>Check off if you're finished with a tab and never forget why you wanted to save that tab!</p>
                    </div>
                </section>
                <section className="footer">
                    <span>© 2019 Tabless</span>
                    <div className="cta-icons">
                        <a href="https://www.instagram.com/"><i className="fab fa-instagram" /></a>
                        <a href="https://twitter.com/"><i className="fab fa-twitter" /></a>
                        <a href="https://en-gb.facebook.com/"><i className="fab fa-facebook-f" /></a>
                    </div>
                </section>
            </Homestyled>
        </LandingPageWrapper>
    )
}


const LandingPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  background: #FFFFFF;
`;

const Homestyled = styled.div`
  /* margin: 3rem 0; */
`;

const IntroStyled = styled.section`
    color: #333;
    text-align: center;
    width: 100%;
    margin: 0 auto;

    h1 {
        font-size: 4rem;
        padding: 2rem 0;
    }

    p {
        font-size: 1.5rem;
    }

    .cta-buttons {
        display: flex;
        /* width: 350px; */
        justify-content: space-evenly;
        margin: 4rem auto;
        a {
            text-decoration: none;
            align-self: center;
            padding: 1rem 1.5rem;
            width: 150px;
            font-size: 1.5rem;
            color: #7318f2;
            background: none;
            border-radius: 4px;
            border: 1px solid #7318f2;
            &:hover {
                color:white;
                background-image: linear-gradient(135deg,#a4a3e9 0%, #7318f2 100%);
                transition: 0.3s ease-out;
            }
            @media(max-width: 600px) {
            width: 100%;
            margin-bottom: 1.5rem;
            }
        }
    }
`;

