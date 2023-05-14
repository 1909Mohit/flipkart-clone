import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Typography, Button, Divider, styled } from "@mui/material";
import Countdown from 'react-countdown';
import { Link } from "react-router-dom";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Component = styled(Box)`
  width:100%;
  margin-top: 10px;
  background: #fff;
`;
  
  const Deal = styled(Box)`
  padding: 10px  25px;
  display: flex;
`;

const Timer = styled(Box)`
    display:flex;
    margin-left:10px;
    align-items:center;
    color:#7f7f7f;
`;
const DealText = styled(Typography)`
    font-size:16px;
    font-weight:600;
    margin-right:25px;
    line-height:32px;
`;

const ViewAllButton = styled(Button)`
    margin-left : auto;
    background:#2874f0;
    border-radius:2px;
    font-size: 13px;
    font-weight:600;
`;
const Image = styled('img')({
    width: 'auto',
    height: '150px'
});

const Text = styled(Typography)`
    font-size : 13px;
 
`;

const Banner = ({ products, title, timer }) => {
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    const renderer = ({hours, minutes, seconds}) => {
        return <Box variant="span">{hours} : {minutes} : {seconds}</Box>;
    }
    return (
        <Component>
            <Deal>
                <DealText>{ title}</DealText>
                {
                    timer &&
                        <Timer>
                            <img src={timerURL} alt="timer" style={{ width: '24px', marginTop:'3px'}} />
                            <Countdown date={Date.now() + 5.04e+7} renderer={renderer} /> 
                        </Timer>
                }
                <ViewAllButton variant="contained" >View All</ViewAllButton>
            </Deal>
            <Divider/>
            <Carousel
                responsive={responsive}
                swipeable={false}
                draggable={false}
                keyBoardControl={true}
                centerMode={true}
            >
                {
                    products.map(product => 
                        <Link to={`/product/${product.id}`} style={{textDecoration:'none'}}>
                            <Box textAlign="center" style={{padding : '25px 15px'}}>
                                <Image src={product.url} alt="product" style={{width:'auto'}}/>
                                <Text style={{fontWeight: 600, color:'#212121'}} >{product.title.shortTitle}</Text>
                                <Text style={{ color:'green'}} >{product.discount}</Text>
                                <Text style={{color:'#212121', opacity : '.6'}} >{product.tagline}</Text>
                            </Box>
                        </Link>
                       
                    )
                }
            </Carousel>
        </Component>
    )
}

export default Banner