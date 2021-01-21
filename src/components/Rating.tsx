import React from 'react';
import styled from 'styled-components';

interface RatingProps {
    rating: number;
    color?: string;
}

const Rating: React.FC<RatingProps> = ({ rating, color }) => {

    return (
        <StyledRating>
            
            <i
                className={
                rating >= 1 ? "fas fa-star" : rating >= 0.5 ? "fas fa-star-half-alt" : "far fa-star" 
                }
                style={{color: color}}
            >    
            </i>

            <i
                className={
                rating >= 2 ? "fas fa-star" : rating >= 1.5 ? "fas fa-star-half-alt" : "far fa-star" 
                }
                style={{color: color}}
            >    
            </i>

            <i
                className={
                rating >= 3 ? "fas fa-star" : rating >= 2.5 ? "fas fa-star-half-alt" : "far fa-star" 
                }
                style={{color: color}}
            >    
            </i>

            <i
                className={
                rating >= 4 ? "fas fa-star" : rating >= 3.5 ? "fas fa-star-half-alt" : "far fa-star" 
                }
                style={{color: color}}
            >    
            </i>

            <i
                className={
                rating >= 5 ? "fas fa-star" : rating >= 4.5 ? "fas fa-star-half-alt" : "far fa-star" 
                }
                style={{ color: color }}
            >    
            </i>

        </StyledRating>
    )
}

Rating.defaultProps = {
    color: '#f8e825'
}

const StyledRating = styled.div`
    display: inline-block;
    margin-top: 1rem;

    i{
        margin-right: 4px;
        font-size: 1.3rem;
    }
`


export default Rating;
