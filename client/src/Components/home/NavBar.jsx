import { Box, styled, Typography } from "@mui/material"
import { navData } from "../../constant/data.js"

const Component = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    padding: '8px 8px',
    marginLeft: '10%',
    marginRight: '10%',


    [theme.breakpoints.down('md')]: {
        flexWrap: 'nowrap',
        margin: '0'
    }
}));

const Container = styled(Typography)`
    font-weight: 500;
    text-align: center;
    font-family:inherit;
    padding: 12px 8px;
    font-size:14px;
`;

const Image = styled('img')({
    width: '64px',
    height: '64px'
})

const Text = styled(Typography)`
    font-size: 14px;
`;


const NavBar = () => {
    return (
        <Box style={{background:'#fff'}}>
            <Component>
                {
                    navData.map(data => (
                        <Container key={data.text}>
                            <Image src={data.url} alt="nav image" />
                            <Text>{data.text}</Text>
                        </Container>
                    ))
                }
            </Component>
        </Box>
    )
}

export default NavBar