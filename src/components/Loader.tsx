import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';


const LoaderVariants = {
    initial: { transition: { staggerChildren: 0.2 } },
    final: { transition: { staggerChildren: 0.2 } }
}



const CircleVariants = {
    initial: { y: 15, transition: {duration: 0.5, yoyo: Infinity} },
    final: { y: -15, transition: { duration: 0.5, yoyo: Infinity } }
}



const Loader = (): JSX.Element => {
    return (
        <StyledLoader variants={LoaderVariants} initial="initial" animate="final">
            <Circle variants={CircleVariants}></Circle>
            <Circle variants={CircleVariants}></Circle>
            <Circle variants={CircleVariants}></Circle>
        </StyledLoader>
    )
}


const StyledLoader = styled(motion.div)`
    margin: 5rem auto;
    width: 5rem;
    height: 2rem;
    display: flex;
    justify-content: space-around
`


const Circle = styled(motion.div)`
    height: 1rem;
    width: 1rem;
    background-color: black;
    border-radius: 50%;

`


export default Loader;
