import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productActions.js";

import { Box, Typography, Grid, styled } from '@mui/material';
import ActionItems from "./ActionItems.jsx";
import ProductDetail from "./ProductDetail.jsx";


const Component = styled(Box)`
    background:#f2f2f2;
`;

const Container = styled(Grid)(({ theme }) => ({
    background: '#fff',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}));


const RightContainer = styled(Grid)`
    margin-top: 50px;
`;

const DetailView = () => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'

    const dispatch = useDispatch();
    const { id } = useParams();

    const { loading, product } = useSelector(state => state.getProductDetails);

    useEffect(() => {
        if (product && product.id !== id)
            dispatch(getProductDetails(id));
    }, [dispatch, id, product, loading]);


    return (
        <Component>
            {
                product && Object.keys(product).length &&
                    <Container container>
                        <Grid item lg={4} md={4} sm={8} xs={12} >
                            <ActionItems product={ product } />
                        </Grid>
                        <RightContainer item lg={8} md={8} sm={8} xs={12}>
                            <ProductDetail product={product} />
                        </RightContainer>
                    </Container>
            }
        </Component>
    )
}

export default DetailView