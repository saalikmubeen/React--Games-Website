import React from 'react';
import styled from 'styled-components';
import { useTypedSelector } from '../reducers';

const GameDetails = (): JSX.Element => {

    const { name, isLoading, released, description_raw, background_image, rating, platforms, screenshots } = useTypedSelector((state) => state.gameDetails);
    return (
        <>
        {!isLoading && 
            <Shadow>

                <Details>
                
                    <Stats>
                    
                        <div className="rating">
                            <h3>{name}</h3>
                            <h5>{released}</h5>
                            <p>Rating: {rating}</p>
                        </div>
                    
                        <Platforms>
                            <h3>Platforms</h3>
                            <div>
                                {platforms.map((platform) => (
                                    // <img alt={platform.platform.name} key={platform.platform.id} src={platform.platform.image_background} />
                                    <h3 key={platform.platform.id}>{platform.platform.name}</h3>
                                ))}
                            </div>
                        </Platforms>
                    
                    </Stats>
                
                    <Media>
                        <img src={background_image} alt={background_image} />
                    </Media>
                
                    <Description>
                        <p>{description_raw}</p>
                    </Description>
                
                    <Gallery>
                        {screenshots.map((screenshot) => (
                            <img src={screenshot.image} key={screenshot.id} alt={screenshot.image} />
                        ))}
                    </Gallery>
                
                </Details>

            </Shadow>
            }
        </>    
    )
}


const Shadow = styled.div`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    min-height: 100vh;
    overflow-y: scroll;
    z-index: 5;
    background: rgba(0, 0, 0, 0.5);

    &::-webkit-scrollbar {
        width: 0.5rem;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #ff7676;
    } 

    &::-webkit-scrollbar-track {
        background: white;
    }
`

const Details = styled.div`
    width: 80%;
    background: white;
    border-radius: 1rem;
    position: absolute;
    left: 10%;
    padding: 2rem 7rem;

    img{ 
        width: 100%;
    }
`

const Stats = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Platforms = styled.div`
    text-align: center;

    div{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
`

const Media = styled.div`
    margin-top: 5rem;

    img{
        width: 100%;    
    }
`

const Gallery = styled.div`
    img{
        margin: 5rem 0;
    }
`

const Description = styled.div`
     margin: 5rem 0rem;
`

export default GameDetails;
