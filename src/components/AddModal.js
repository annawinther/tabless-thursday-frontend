import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

function AddTabModal(props) {
    const initialValues = {
        title: "",
        url: "",
        notes: ""
    };

    const [inputValues, setInputValues] = useState(initialValues);

    const changeHandler = (e) => {
        setInputValues({ ...inputValues, [e.target.name]: e.target.value })
    }

    const submit = (e) => {
        e.preventDefault()

        const user = JSON.parse(window.localStorage.getItem('user'));
        const { token } = user;

        console.log(token)


        axios({ method: 'POST', url: 'https://tabless-backend.herokuapp.com/tabs/tab', headers: {authorization: token}, data: { url: inputValues.url, title: inputValues.title, notes: inputValues.notes } })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                debugger
                console.log(err)
            }) 


         return (
            setInputValues(initialValues)
         )    
    }

    const toggleAddTabModal = () => {
        props.toggleAddTabModal('none');
    };

    return (
        <BackgroundDiv style={{ 'display': `${props.visible}` }}>
            <Modal>
                <XDiv onClick={toggleAddTabModal}>x</XDiv>
                <h3>Save A New Link</h3>
                <form>
                    <input type='text' placeholder='Title' name='title' required value={inputValues.title} onChange={changeHandler} />
                    <input type='text' placeholder='URL' name='url' required value={inputValues.url} onChange={changeHandler} />
                    <textarea placeholder='Notes' name='notes' value={inputValues.notes} onChange={changeHandler} />
                    <button onClick={submit}>Add</button>
                </form>
            </Modal>
        </BackgroundDiv>
    )
}

const BackgroundDiv = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.3);
    position: absolute;
    z-index: 99;
    justify-content: center;
    align-items: center;
`

const Modal = styled.div`
    position: relative; 
    width: 50vw;
    height: 60vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
        margin-top: 3rem;

    }

    form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 70%;
    width: 85%;

    }
`

const XDiv = styled.div`
    position: absolute;
    width: 2rem;
    top: 0;
    left: 0;
    color: black;
    font-size: 2rem;
    margin-left: 1rem;
    margin-top: 0.3rem;
    cursor: pointer;
`

export default AddTabModal;
