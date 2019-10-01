import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NoData from '../assets/no_data.svg';
import styled from 'styled-components';


function Dashboard(props) {
    const [tasks, setTasks] = useState([]);

    const toggleAddTabModal = () => {
        props.toggleAddTabModal('flex');
    };
    
    const deleteTab = (id) => {

        const user = JSON.parse(window.localStorage.getItem('user'));
        const { token } = user;

        axios({ method: 'DELETE', url: `https://tabless-backend.herokuapp.com/tabs/tab/${id}`, headers: {authorization: token} })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })  
    }

    useEffect(() => {
        if (window.localStorage.getItem('user')) {
            const user = JSON.parse(window.localStorage.getItem('user'));
            const { token } = user;

            axios.get('https://tabless-backend.herokuapp.com/tabs/tab', {
                headers: {
                    authorization: token
                }
            }).then(res => {
                setTasks(res.data)
            })
                .catch(err => {
                    console.log({ err })
                })
        }
    })
    if (tasks.length) {

        return (
            <StyledDash>
                <StyledDiv>
                    <h1>Dashboard</h1>
                    <button onClick={toggleAddTabModal} className="btn-add">Add a new tab here to save it for later!</button>
                </StyledDiv>
                <h3>Here are your saved tabs:</h3>
                <StyledTabs>
                {tasks.map(x => {
                    return (
                        <StyledCard key={x.id}>
                            <h3>{x.title}</h3>
                            <h5><a className="link" target="_blank" href={x.url}>{x.url}</a></h5>
                            <h6><strong>Your notes: </strong>{x.notes}</h6>
                            <button onClick={() => deleteTab(x.id)}className="btn">Delete</button>
                        </StyledCard>
                    )
                })}
                </StyledTabs>
            </StyledDash>
        )
    } else {
        return (
            <StyledNowt>
                <h1>Dashboard</h1>
                <h3>No tabs are saved yet...:(</h3>
                <img src={NoData} alt="no data saved"/>
                <button onClick={toggleAddTabModal} className="btn btn-one">Click Here To Get Started!</button>
            </StyledNowt>
        )
    }

}

export default Dashboard;


const StyledDash = styled.div`
    background-color: #f5f7fa;
    display: flex;
    flex-direction: column;
    text-align: center;
    min-height: 100vh;
    width: 100%;
    padding-top: 1.5rem;
    @media(max-width: 600px) {
        flex-direction: column;
        margin: 0;
        padding: 2.5rem;
    }
    h1 {
        text-align: left;
        margin: 0 1.5rem;
    }
    h3 {
        font-weight: bold;
    }

    .btn-add {
        align-content: right;
        &:hover {
            background-color: #efefef;
            transform: scale(1.1);
            transition: width 2s;

        }
    }
`;

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 2rem 2rem 0;
`;

const StyledCard = styled.div`
    border: 1px solid black;
    background-image: linear-gradient(200deg, #f5f7fa 0%, #c3cfe2 100%);
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    width: 50rem;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    margin: 2rem;
    align-items: center;
    @media(max-width: 800px) {
        width: 100%;
        height: auto;
        flex-wrap: nowrap;
        flex-direction: column;
        margin: 1rem 0;
    }

     

    h3 {
        color: #7318f2;
        font-weight: bold;
        margin-top: 2rem;
    }

    h5 {
        margin-top: 2rem;
        width: 80%;
        text-align: center;
        .link {
            color: black;
        }
    }
    h6 {
        margin-top: 2rem;
    }
    .btn {
        text-align: center;
        width: 20%;
        margin: 0 auto;
        margin-top: 3rem;
        &:hover {
            transform: scale(1.1);
       }
    }

`;

const StyledNowt = styled.div`
    /* max-height: 50rem; */
    min-height: 100vh;
    width: 100%;
    padding-top: 1.5rem;
    background-color: #f5f7fa;
    display: flex;
    flex-direction: column;
    text-align: center;
    /* justify-content: space-between; */

    h1 {
        text-align: left;
        margin: 0 1.5rem;
    }
    
    .btn-one {
        width: 50%;
        margin: 0 auto;
        margin-bottom: 1rem;
        font-size: 2rem;
        font-weight: bold;
    }

    img {
      width: 40%;
      margin: 0 auto;
      @media(max-width: 800px) {
      width: 80%;
      padding-bottom: 4rem;
      margin: 0 auto;
      }
    }
`;

const StyledTabs = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    align-self: center;
    text-align: center;
`;