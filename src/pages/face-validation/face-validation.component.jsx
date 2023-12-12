import { Grid, styled } from '@mui/material';
import CustomizedButtons from '../../components/custom-button/custom-button.component';
import ContainerScreen from '../../styled-components/container-screen';
import Webcam from 'react-webcam';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });
    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        // Add event listener
        window.addEventListener('resize', handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}
const ButtonsContainer = styled('div')`
    position: fixed;
    bottom: 0;
    text-align: center;
    padding-bottom: 10px;
    max-width: 600px;
`;

const FaceValidation = () => {
    const webcamRef = useRef(null);
    const takePhoto = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        // Add to the create user data into the State.
        console.log(imageSrc);
    }, [webcamRef]);

    const size = useWindowSize();

    const videoConstraints = {
        facingMode: 'user',
    };

    return (
        <ContainerScreen>
            <Grid container>
                <Grid item xs={12} sx={{ position: 'relative' }}>
                    <Webcam
                        audio={false}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        videoConstraints={videoConstraints}
                        height={size.height}
                        width={size.width}
                        style={{ objectFit: 'cover', maxWidth: '600px' }}
                    />
                    <ButtonsContainer>
                        <CustomizedButtons
                            label={'Sacar foto'}
                            handleClick={takePhoto}
                        />
                        <Link to="/payment" style={{ textDecoration: 'none' }}>
                            <CustomizedButtons
                                variant="outlined"
                                label={'Omitir'}
                            />
                        </Link>
                    </ButtonsContainer>
                </Grid>
            </Grid>
        </ContainerScreen>
    );
};

export default FaceValidation;
