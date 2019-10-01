import React from 'react';
import styled from 'styled-components';
import Spinner from '../components/Spinner';
import { login } from '../services/UsersAuth';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false,
      error: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      loading: true
    })

    const user = {
      email: this.state.email,
      password: this.state.password
    }

    login(user)
      .then(() => {
        this.setState({
          loading: false
        })
      })
      .then(() => {
        this.props.setLoggedIn(true);
        this.props.history.push('/dashboard');
      })
      .catch(() => {
        this.setState({
          email: '',
          password: '',
          loading: false,
          error: true,
        });
        console.log('boo!')
      })

  }


  render() {

    let error;
    if (this.state.error) {
      error = "Invalid Login Details"
    } else {
      error = null;
    }

    if (this.state.loading) {
      return (
        <div>
          <LoginWrapperStyled>
            <div className="log-in">
              <Spinner />
            </div>
          </LoginWrapperStyled>
        </div>
      )
    } else {
      return (
        <div>
          <LoginWrapperStyled>
            <div className="log-in">
              <h3>Log In</h3>
              <p></p>
              <InputStyled>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  required
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <button className="button" type="button" onClick={this.handleSubmit} >
                  Log in
                </button>
                <h6 style={{ 'color': 'red' }}>{error}</h6>
              </InputStyled>
            </div>
          </LoginWrapperStyled>
        </div>
      )
    }
  }
}

export default Login;

const LoginWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #FFFFFF;
  width: 100%;
  color: #333;
  align-items: center;

  
  .log-in{
    background: #EFEFEF;
    margin-top: 50px;
    padding: 3.5rem;
    height: 500px;
    width: 450px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    @media (max-width: 500px){
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
      font-size: 1.6rem;
      text-align: left;
    }
    h3{
      font-size: 2.4rem;
      font-family: Jaldi, sans-serif;
      text-align: left;
      font-weight: 700;
    }
  }
  h6 {
    margin-top: 2rem;
  }
  
  input {
    border: 1px solid #F9F9F9;
    background: #FFFFFF;
    border-radius: 3px;
    padding-left: 10px;
    margin:10px 0;
    width: 100%;
    height: 48px;
    font-size: 1.6rem;
    color: #333;
    @media(max-width: 500px) {
      margin-top: 5px;
      border: none;
    }
    &::placeholder {
      color: #7a7a7a;
    }
  }

  .button {
    height: 48px;
    width: 100%;
    font-size: 1.5rem;
    background-image: linear-gradient(135deg,#a4a3e9 0%, #7318f2 100%);
    border: 1px solid #EFEFEF;
    color: #FFFFFF;
    border-radius: 3px;
    &:hover{
      border: 1px solid #7318f2;
      color: #7318f2;
      background: #FFFFFF;
      cursor: pointer;
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
