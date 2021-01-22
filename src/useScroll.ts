import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';


export const useScroll = (threshold: number = 0.75) => {

    const [element, view] = useInView({ threshold: threshold });
    const controls = useAnimation();

    if (view) {
        controls.start("visible");
    } else {
        controls.start("hidden");
    }

    return {element, controls}

}