import Carousel from "react-multi-carousel";
import { bannerData } from "../../constant/data";
import "react-multi-carousel/lib/styles.css";

import { styled } from '@mui/material';

const Image = styled('img')(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.down('md')]: {
    objectFit: 'cover',
    height: '180px',
  }
}));

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Banner = () => {
  return (
    <Carousel responsive={responsive}
      swipeable={false}
      draggable={false}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      transitionDuration={500}
      keyBoardControl={true}
      containerClass="carousel-container"
    >
      {
        bannerData.map(image => (
          <Image src={image.url} alt="carousel" key={image.url} />
        ))
      }
    </Carousel>

  )
}

export default Banner