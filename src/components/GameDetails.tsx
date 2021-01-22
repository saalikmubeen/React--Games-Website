import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTypedSelector } from '../reducers';
import Rating from './Rating';

// images
import playStation from "../images/playstation.svg";
import steam from "../images/steam.svg";
import xbox from "../images/xbox.svg";
import nintendo from "../images/nintendo.svg";
import apple from "../images/apple.svg";
import gamepad from "../images/gamepad.svg";



const fadeVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.75, staggerChildren: 0.5, when: "beforeChildren" } }
}


const platformVariants = {
    hidden: { opacity: 0, y: -400 },
    visible: { opacity: 1, y: 0 }
}


const getPlatform = (platform: string) => {
    switch (platform) {
        case "PlayStation 4":
            return playStation;
        case "Xbox One":
            return xbox;
        case "PC":
            return steam;
        case "Nintendo Switch":
            return nintendo;
        case "iOS":
            return apple;
        default:
            return gamepad;
    }
};
  

interface GameDetailsProps {
    pathId: string
}


const GameDetails: React.FC<GameDetailsProps> = (props): JSX.Element => {
    const history = useHistory();


    const { name, isLoading, released, description_raw, background_image, rating, platforms, screenshots } = useTypedSelector((state) => state.gameDetails);


    const handleClick = () => {
        history.push("/");
    }

    return (
        <>
        {!isLoading && 
            <Shadow className="shadow" >

                <Exit onClick={handleClick}>&times;</Exit>
                <Details layoutId={props.pathId}>
                
                    <Stats>
                    
                        <div>
                            <motion.h3 layoutId={`title ${props.pathId}`}>{name}</motion.h3>
                            <motion.h4 layoutId={`released ${props.pathId}`}>{released}</motion.h4>
                            <Rating rating={rating} />
                            <span>({rating})</span>
                        </div>
                    
                        <Platforms>
                            <h3>Platforms</h3>
                            <motion.div variants={fadeVariants} initial="hidden" animate="visible">
                                {platforms.map((platform) => (
                                    <motion.img src={getPlatform(platform.platform.name)} alt={platform.platform.name} key={platform.platform.id} variants={platformVariants} />
                                ))}
                            </motion.div>
                        </Platforms>
                    
                    </Stats>
                
                    <Media>
                        <motion.img src={background_image} alt={background_image} layoutId={ `image ${props.pathId}`}/>
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


const Shadow = styled(motion.div)`
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

const Exit = styled.span`
    position: fixed;
    top: 0;
    right: 2rem;
    font-size: 6rem;
    cursor: pointer;
    color: #b3e6f5;
    

`

const Details = styled(motion.div)`
    width: 80%;
    background: white;
    border-radius: 1rem;
    position: absolute;
    left: 10%;
    padding: 2rem 7rem;
    z-index: 10;

    img{ 
        width: 100%;
    }
`

const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;

    div span {
        margin-left: 5px;
    }
`

const Platforms = styled(motion.div)`
    text-align: center;

    div{
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        img {
            margin-left: 3rem;
        }
    }
`

const Media = styled(motion.div)`
    margin-top: 5rem;

    img{
        width: 100%;    
    }
`

const Gallery = styled(motion.div)`
    img{
        margin: 5rem 0;
    }
`

const Description = styled(motion.div)`
     margin: 5rem 0rem;
`

export default GameDetails;
