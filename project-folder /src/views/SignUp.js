import React from 'react';
import { signup } from '../services/UsersAuth';
import Spinner from '../components/Spinner';
import styled from 'styled-components';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      loading: false,
      error: false,
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      loading: true,
    })
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }

    signup(newUser)
      .then(() => {
        this.setState({
          loading: false
        })
      })
      .then(() => {
        this.props.setLoggedIn(true);
        this.props.history.push('/dashboard');
      })
      .catch(err => {
        this.setState({
          email: '',
          password: '',
          name: '',
          loading: false,
          error: true,
        });
        console.log('boo!')
      })

  }

  render() {

    let error;
    if (this.state.error) {
      error = "Invalid Sign Up Details"
    } else {
      error = null;
    }

    if (this.state.loading) {
      return (
        <div>
          <SignUpStyled>
            <div className="sign-up ">
              <Spinner />
            </div>
          </SignUpStyled>
        </div>
      )
    } else {
      return (
        <div>
          <SignUpStyled >
            <div className="sign-up">
              <h3>Sign Up</h3>
              <p>To Tabless and never miss track of a tab!</p>
              <InputStyled>
                <input
                  onChange={this.handleChange}
                  type="text"
                  name="name"
                  value={this.state.name}
                  placeholder="First name"
                />
                <input
                  onChange={this.handleChange}
                  type="email"
                  name="email"
                  value={this.state.email}
                  placeholder="Email"
                />
                <input
                  onChange={this.handleChange}
                  type="password"
                  name="password"
                  value={this.state.password}
                  placeholder="Password"
                />
                <button className="button" type="button" onClick={this.handleSubmit}>
                  Sign Up Now
                        </button>
                <h6 style={{'color': 'red'}}>{error}</h6>
              </InputStyled>
            </div>
          </SignUpStyled>
        </div>
      )
    }
  }
}

export default SignUp;

const SignUpStyled = styled.form`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: scroll;
  background: #FFFFFF;
  width: 100%;
  color: #333;
  align-items: center;

  .sign-up{
    background: #EFEFEF;
    margin-top: 50px;
    padding: 3.5rem;
    width: 450px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    @media(max-width: 500px) {
      width: 100%;
      padding: 2.5rem;
      height: 100vh;
      margin: 0 auto;
      justify-content: space-evenly;
    }
    span {
      padding: 2rem 0;
      color: #333;
    }
    p{
      text-align: left;
      font-size: 1.6rem;
    }
    h3{
      /* margin: 3rem auto; */
      font-size: 2.4rem;
      font-family: Jaldi, sans-serif;
      text-align: left;
      font-weight: 700;
    }
    h6 {
      margin-top: 2rem;
    }
  }

  input {
    border: 1px solid #F9F9F9;
    background: #FFFFFF;
    border-radius: 3px;
    padding-left: 10px;
    margin: 10px 0;
    width: 100%;
    height: 48px;
    font-size: 1.6rem;
    color: #333;
    @media(max-width: 500px) {
      margin-top: 5px;
    }
    &::placeholder {
      color: #7a7a7a;
    }
  }

  .button {
    height: 48px;
    width: 100%;
    margin-top: 10px;
    font-size: 1.5rem;
    background: linear-gradient(135deg, #a4a3e9 0%,#7318f2 100%);
    border: 1px solid #EFEFEF;
    color: #FFFFFF;
    border-radius: 3px;
    &:hover {
      cursor: pointer;
      background: #FFFFFF;
      border: 1px solid #7318f2;
      color: #7318f2;
      transition: 0.3s ease-out;
    }
  }
`;

const InputStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;