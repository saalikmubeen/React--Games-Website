import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';


const ratingVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: {duration: 0.3, when: "beforeChildren", staggerChildren: 0.5} },
}

const starVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: [1.5, 1], transition: { type: "tween" } },
}

interface RatingProps {
    rating: number;
    color?: string;
}

const Rating: React.FC<RatingProps> = ({ rating, color }) => {

    return (
        <StyledRating variants={ratingVariants} initial="hidden" animate="visible">
            
            <motion.i
                variants={starVariants} 
                className={
                rating >= 1 ? "fas fa-star" : rating >= 0.5 ? "fas fa-star-half-alt" : "far fa-star" 
                }
                style={{color: color}}
            >    
            </motion.i>

            <motion.i
                 variants={starVariants}
                className={
                rating >= 2 ? "fas fa-star" : rating >= 1.5 ? "fas fa-star-half-alt" : "far fa-star" 
                }
                style={{color: color}}
            >    
            </motion.i>

            <motion.i
                 variants={starVariants}
                className={
                rating >= 3 ? "fas fa-star" : rating >= 2.5 ? "fas fa-star-half-alt" : "far fa-star" 
                }
                style={{color: color}}
            >    
            </motion.i>

            <motion.i
                 variants={starVariants}
                className={
                rating >= 4 ? "fas fa-star" : rating >= 3.5 ? "fas fa-star-half-alt" : "far fa-star" 
                }
                style={{color: color}}
            >    
            </motion.i>

            <motion.i
                 variants={starVariants}
                className={
                rating >= 5 ? "fas fa-star" : rating >= 4.5 ? "fas fa-star-half-alt" : "far fa-star" 
                }
                style={{ color: color }}
            >    
            </motion.i>

        </StyledRating>
    )
}

Rating.defaultProps = {
    color: '#f8e825'
}

const StyledRating = styled(motion.div)`
    display: inline-block;
    margin-top: 1rem;

    i{
        margin-right: 4px;
        font-size: 1.3rem;
    }
`


export default Rating;
