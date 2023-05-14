
import { Box, styled } from "@mui/material";
import Slide from './Slide.jsx';

const Component = styled(Box)`
    display:flex;
    width: 100%;
`;

const LeftComponent = styled(Box)(({ theme }) => ({
    width:'85%',
    padding: '0px',
    margin: '0',
    objectFit: 'cover',
    [theme.breakpoints.down('md')]: {
        width:'100%'
    }
}));

const RightComponent = styled(Box)(({ theme }) => ({
    background:'#fff',
    padding: '5px',
    margin: '10px 0px 0px 10px',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
        display:'none'
    }
}));


const MidSlide = ({ products, timer, title }) => {
    const adURL = 'https://rukminim1.flixcart.com/fk-p-flap/464/708/image/85bb9fd2d409c731.jpg?q=50';
    
    return (
        <Component>
            <LeftComponent>
                <Slide products={products} title={title} timer={timer} />
            </LeftComponent>
            <RightComponent>
                <Box>
                    <img src={adURL} alt="ad url" style={{width:'208.4px', height:'320.05px'}} />
                </Box>
            </RightComponent>
        </Component>
    )
}

export default MidSlide