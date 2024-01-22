import * as React from 'react';
import {LoginForm}  from '../components/Forms/Login/Form';
interface IAppProps {
}

const Login: React.FunctionComponent<IAppProps> = (props) => {
  return(
    <LoginForm/>
  ) ;
};

export default Login;
