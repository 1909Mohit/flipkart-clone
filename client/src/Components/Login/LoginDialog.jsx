import { Dialog, TextField, Typography, Box, styled, Button, } from "@mui/material";
import { useState, useContext } from "react";

import { authenticateSignup, authenticateLogin } from '../../service/api.js';

import { DataContext } from "../../context/DataProvider.js";

const Component = styled(Box)`
  display: flex;
  height: 72vh;
  width: 43vw;
`;

const Image = styled(Box)`
  background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
  height: 100;
  width: 30%;
  padding: 45px 35px;
  & > p, & > h5 {
    font-weight: 600;
    color: #fff;
  }
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;
  overflow: auto;
  & > div, & > button, & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-tranform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;

const RequestOTP = styled(Button)`
  text-tranform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;

const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
`;

const Error = styled(Typography)`
  font-size:10px;
  color:#ff6161;
  line-height:0;
  margin-Top:10px;
  font-weight:600;
`;

const CreateAccount = styled(Typography)`
  font-size: 14px;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  cursor: pointer;
`;

const accountInitialValues = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here!",
    subHeading: "Sign up with your mobile number to get started",
  },
};

const signupInitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

const loginInitialValues = {
  username: "",
  password: ""
};

const LoginDialog = ({ open, setOpen }) => {
  const [account, setAccount] = useState(accountInitialValues.login);
  const [signup, setSignup] = useState(signupInitialValues);
  const [login, setLogin] = useState(loginInitialValues);
  const [error, setError] = useState(false);

  const { setUserAccount } = useContext(DataContext);

  const toggleAccount = () => {
    setAccount(accountInitialValues.signup);
  };

  const handleClose = () => {
    setOpen(false);
    setAccount(accountInitialValues.login);
    setError(false);
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
    // console.log(signup);
  };

  const signupUser = async () => {
    let response = await authenticateSignup(signup);
    if (!response) return;
    handleClose();
    setUserAccount(signup.firstname);
  };

  const OnValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const loginUser = async () => {
    let response = await authenticateLogin(login);
    if (response.status === 200) {
      handleClose();
      setUserAccount(response.data.data.firstname);
    } else {
      setError(true);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: "unset", maxHeight: "unset" } }} >
      {
        account.view === "login" ? (
          <Component>
            <Image>
              <Typography variant="h5">{account.heading}</Typography>
              <Typography style={{ marginTop: 20 }}>
                {account.subHeading}
              </Typography>
            </Image>
            <Wrapper>
              <TextField variant="standard" onChange={(e) => { OnValueChange(e) }} name="username" label="Enter Username" />
              
              {error && <Error>Please enter valid username or password</Error>}
              
              <TextField variant="standard" onChange={(e) => { OnValueChange(e) }} name="password" label="Enter Password" />
              <Text>
                By continuing, you agree to Flipkart's Terms of Use and Privary
                Policy
              </Text>
              <LoginButton onClick={()=> {loginUser()}}>Login</LoginButton>
              <Typography style={{ textAlign: "center" }}>OR</Typography>
              <RequestOTP>Request OTP</RequestOTP>
              <CreateAccount onClick={() => toggleAccount()}>
                New to Flipkart? Create an account
              </CreateAccount>
            </Wrapper>
          </Component>
        )
          :
          (
            <Component>
              <Image>
                <Typography variant="h5">{account.heading}</Typography>
                <Typography style={{ marginTop: 20 }}>
                  {account.subHeading}
                </Typography>
              </Image>
              <Wrapper>
                <TextField variant="standard" onChange={(e) => onInputChange(e)} name="firstname" label="Enter Firstname" />
                <TextField variant="standard" onChange={(e) => onInputChange(e)} name="lastname" label="Enter Lastname" />
                <TextField variant="standard" onChange={(e) => onInputChange(e)} name="username" label="Enter Username" />
                <TextField variant="standard" onChange={(e) => onInputChange(e)} name="email" label="Enter Email" />
                <TextField variant="standard" onChange={(e) => onInputChange(e)} name="password" label="Enter Password" />
                <TextField variant="standard" onChange={(e) => onInputChange(e)} name="phone" label="Enter Phone" />
                <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
              </Wrapper>
            </Component>
          )}
    </Dialog>
  );
};

export default LoginDialog;