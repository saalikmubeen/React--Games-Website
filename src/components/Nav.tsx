import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.svg';

const Nav = (): JSX.Element => {
    return (
        <StyledNav>
            
            <Logo>
                <img src={logo} alt="logo"/>
                <h1>Ignite</h1>
            </Logo>

            <Search>
                <input type="text" placeholder="search...." />
                <button>Search</button>
            </Search>

        </StyledNav>
    )
}


const StyledNav = styled.nav`
     padding: 3rem 5rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;


const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 1rem;
    padding: 1rem;
    cursor: pointer;
    img {
        height: 2rem;
        width: 2rem;
    }
`

const Search = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
        width: 60%;
        border: none;
        outline: none;
        border-bottom: 4px solid #ff7676;
        font-size: 1.5rem;
        padding: 1rem;
        margin-top: 1rem;
        box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);

    }

    button {
        border: none;
        margin-top: 1rem;
        font-size: 1.5rem;
        padding: 0.5rem 2rem;
        cursor: pointer;
        background: #ff7676;
        color: white;
        outline: none;
    }
`


export default Nav
