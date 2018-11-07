import React from 'react'
import styled from 'styled-components'

const FormWrapper = styled.div`
    margin-top: 3rem;
    position: relative;
    width: 400px;
    background-color: white;
    margin-left: auto;
    margin-right: auto;
    height: 400px;
    width: 600px;
    border: 1px solid black;
    box-shadow: 3px 4px 20px 3px;
    padding: 0;
`

const FieldContainer = styled.div`
    font-size: 1em;
    position: relative;
    width: 80%;
    margin: 1.7em auto; 

    input{
        width: 100%;
        border: none;
        border-bottom: 1px solid black;
    }

    input:focus{
    outline: none;
    border-bottom: 2px solid #003EAA;
    transition: 0.4s ease all;
    -moz-transition: 0.4s ease all;
    -webkit-transition: 0.4s ease all;
    }

    input:focus + label, textarea:focus + label{
    font-size: .8em;
    color: #595959;
    position: absolute;
    left: 0;
    top: -1.7em;
    transition: 0.4s ease all;
    -moz-transition: 0.4s ease all;
    -webkit-transition: 0.4s ease all;
    }

    input:valid + label, textarea:valid + label{
    font-size: .8em;
    color: #595959;
    position: absolute;
    left: 0;
    top: -1.7em;
    }

    label{
    color: #8c8c8c;
    position: absolute;
    left: 0;
    top: 0;
    }

    textarea{
    width: 100%
    }

    textarea:focus{
    outline: none;
    border: 2px solid #003EAA;  
    transition: 0.4s ease all;
    -moz-transition: 0.4s ease all;
    -webkit-transition: 0.4s ease all;
    }

    
    button {
        font-family: 'Lobster+Two', cursive;
        font-size: 1.3em;
        background-color: #003EAA;
        color: white;
        border: none;
        border-radius: 4px;
        position: absolute;
        right: 2px;
    }
`

const ContactForm = () => (
    <FormWrapper>
        <form name="contact" method="POST" data-netlify="true">
         <input type="hidden" name="form-name" value="contact" />
            <FieldContainer>
                <input type="text" name="name" id="name" required />
                <label for="name">Your Name</label>
            </FieldContainer>
            <FieldContainer>
                <input id="email" name="email" type="email" required />
                <label for="email">Email Address</label>
            </FieldContainer>
            <FieldContainer>
                <input id="phone" name="phone" type="tel" required />
                <label for="phone">Phone Number</label>
            </FieldContainer>
            <FieldContainer>
                <textarea id="request" name="request" rows="4" columns="50" required />
                <label for="request">Your Request</label>
            </FieldContainer>
            <FieldContainer>
                <button type="submit">Submit</button>
            </FieldContainer>
        </form>
    </FormWrapper>
)

export default ContactForm