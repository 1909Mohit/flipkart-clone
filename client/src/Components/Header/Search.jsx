

import { InputBase ,Box, styled, List, ListItem} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/productActions';
import { Link } from 'react-router-dom';


const SearchContainer = styled(Box)`
    background:#fff;
    width: 38%;
    height:36;
    border-radius:2px;
    margin-left:12px;
    display: flex;
`;

const InputSearchBase = styled(InputBase)`
    width:100%;
    padding-left:16px;
    font-size:unset;
    border-radius: 2px;
    height:36px;
`;

const SearchIconWrapper = styled(Box)`
    color: blue;
    padding: 4px 12px 0px 8px;
    dislpay:flex;
    
`;

const ListWrapper = styled(List)`
    position: absolute;
    background: #fff;
    color: #000;
    margin-top: 38px;
    border-radius: 2px;
`;

const Search = () => {
    const [text, setText] = useState('');
    const { products } = useSelector(state => state.getProductsState);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const getText = (text) => {
        setText(text);
    }
    return (
        <SearchContainer>
            <InputSearchBase
                placeholder='Search for products, brands and more'  
                onChange={(e) => getText(e.target.value)}
                value={text}
            />
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            {
                text &&
                <ListWrapper>
                        {
                            products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                                <ListItem>
                                    <Link
                                        to={`product/${product.id}`}
                                        onClick={() => setText('')}
                                        style={{textDecoration:'none', color:'inherit'}}
                                    >
                                        {product.title.longTitle}
                                    </Link>
                                </ListItem>
                            ))
                        }
                </ListWrapper>
            }
        </SearchContainer>
  )
}

export default Search