import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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

export const theme = { Button, useStyles, Cursor };
export default theme;
