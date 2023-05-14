import Banner from "./Banner.jsx"
import NavBar from "./NavBar.jsx"
import Slide from './Slide.jsx'
import { Box, styled } from '@mui/material';

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/productActions.js";
import MidSlide from "./MidSlide.jsx";

const Component = styled(Box)`
    padding : 8px 8px;
    background: #f1f3f6;
`;


const Home = () => {
  // useSelector fetch values from redux store. this state is from store
  const { products } = useSelector((state) => { return state.getProductsState });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());// calling getProducts api to get products from BACKEND AND STORE THEM IN REDUX STORE
  }, [dispatch])

  return (
    <>
      <NavBar />
      <Component>
        <Banner />
        <MidSlide products={products} title="Deal of the Day" timer={ true} />
        <Slide products={products} title="Discounts for You" timer={ false} />
        <Slide products={products} title="Suggesting Items" timer={ false} />
        <Slide products={products} title="Top Selection" timer={ false} />
        <Slide products={products} title="Recommended Items" timer={ false} />
        <Slide products={products} title="Trending Offers" timer={ false} />
        <Slide products={products} title="Season's top picks" timer={ false} />
        <Slide products={products} title="Top Deals on Accessories" timer={ false} />
      </Component>

    </>
  )
}

export default Home