import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const height = window.innerHeight;

const useStyles = makeStyles(() => ({
  loginBtn: {
    color: '#fff',
    width: '244px',
    background: '#5285EC'
  }
}));

const Cursor = styled.div`
  cursor: ${props => props.cursorStyle || 'pointer'};
  width: ${props => props.width};
  padding-left: ${props => props.pl};
  padding-top: ${props => props.pt};
  padding-right: ${props => props.pr};
  padding-bottom: ${props => props.pb};
`;

const LoginBox = styled.div`
  position: absolute;
  top: 30%;
  left: 40%;
  width: 296px;
  height: ${props => props.height};
  background: #fff;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 12px;
  opacity: 1
`;

const AppBackground = styled.div`
  background: #F4F4F6;
  width: 100%;
  height: ${height}${'px'};
`;

const Text = styled.p`
  letter-spacing: 0px;
  color: ${props => props.color};
  opacity: ${props => props.opacity};
  width: ${props => props.width};
  height: ${props => props.height};
  text-align: ${props => props.textAlign};
`;

const Box = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  padding-left: ${props => props.pl};
  padding-top: ${props => props.pt};
  padding-right: ${props => props.pr};
  padding-bottom: ${props => props.pb};
  margin-left: ${props => props.ml};
  margin-top: ${props => props.mt};
  margin-right: ${props => props.mr};
  margin-bottom: ${props => props.mb};
`;

const Flex = styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent};
  flex-direction: ${props => props.flexDirection};
  width: ${props => props.width};
  height: ${props => props.height};
  padding-left: ${props => props.pl};
  padding-top: ${props => props.pt};
  padding-right: ${props => props.pr};
  padding-bottom: ${props => props.pb};
  margin: ${props => props.m};
  margin-left: ${props => props.ml};
  margin-top: ${props => props.mt};
  margin-right: ${props => props.mr};
  margin-bottom: ${props => props.mb};
`;

export const theme = { 
  Button,
  useStyles, 
  Cursor, 
  LoginBox, 
  AppBackground ,
  Text,
  Box,
  Flex
};
export default theme;
