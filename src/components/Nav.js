import { useState } from "react";
//Styling and Animation
import styled from 'styled-components';
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
import { fadeIn } from "../animations";

//Rdux and Routes
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";


const Nav = () => {
    const dispatch = useDispatch();
    const [textInput, setTextInput] = useState("");

    const inputHandler = (e) => {
        setTextInput(e.target.value);
    };
    const submitSearch = (e) => {
        e.preventDefault()
        dispatch(fetchSearch(textInput))
        setTextInput("")
    };

    const clearSearched = () => {
        dispatch({ type: "CLEAR_SEARCHED" });
    }
    return (
        <StyledNav variants={fadeIn} initial="hidden" animate="show">
            <Logo onClick={clearSearched}>
                <img src={logo} alt="logo" />
                <h1>Ignite</h1>
            </Logo>
            <form className="search">
                <input value={textInput} onChange={inputHandler} type="text" />
                <button onClick={submitSearch} type="submit">Search</button>
            </form>
        </StyledNav>

    );
}

const StyledNav = styled(motion.nav)`
padding: 3rem 5rem;
text-align: center;
input{
    width: 30%;
    font-size: 1.5rem;
    padding: 0.6rem;
    border: none;
    margin-top: 1rem;
    box-shadow:0px 0px 30px rgba(0,0,0,0.2);
}
button{
    margin-left:1rem;
  width: 250px;
  height: 47px;
  line-height: 47px;
  font-weight: bold;
  text-decoration: none;
  background: #333;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: 3px solid #333;
  outline:none;
  cursor: pointer;
  transition: all .35s;

  &:hover{
    
  border: 3px solid #2ecc71;
  background: transparent;
  color: #2ecc71;
  }
}
`;

const Logo = styled(motion.div)`
display:flex;
justify-content: center;
padding: 1rem;
cursor: pointer;
img{
    width:2rem;
    height:2rem;
}

`;

export default Nav;