import React, { useState } from 'react';
import Theme from '../../theme';
import { required, maxLength } from '../../validation';
import Field from '../TextField';

const Login = () => {
    const classes = Theme.useStyles();
    const [isIdError, setIdError] = useState();
    const [isIdValue, setIdValue] = useState('');
    const [isNameValue, setNameValue] = useState('');
    const [isNameError, setNameError] = useState();
    const [isValidation, setValidation] = useState(false);

    const handleChangeAction = (e, value) => {
        const valueTxt = e?.target?.value;

        if(value === 'Id') {
            setIdValue(valueTxt);
            if (required(valueTxt)) {
                setIdError(required(valueTxt));
                setValidation(false);
            } else if (isIdValue?.length < 5) {
                setIdError(maxLength(5));
                setValidation(false);
            } else if (isNameValue?.length < 8) {
                setNameError(maxLength(8));
                setValidation(false);
            } else {
                setValidation(true);
            }
        }

        if(value === 'Password') {
            setNameValue(valueTxt);
            if (required(valueTxt)) {
                setNameError(required(valueTxt));
                setValidation(false);
            } else if (isIdValue?.length < 4) {
                setIdError(maxLength(4));
                setValidation(false);
            } else if (isNameValue?.length < 8) {
                setNameError(maxLength(8));
                setValidation(false);
            } else {
                console.log('validate');
                setValidation(true);
            }
        }
    };

    return (
        <>
            <Theme.LoginBox height={isValidation ? '249px' : '289px'}>
                <Theme.Box className="Box-class" ml="24px">
                    <Theme.Text
                        width="57px" 
                        height="24px"
                        textAlign="left" 
                        color="#537178" 
                        opacity={1}>
                        Login
                    </Theme.Text>
                    {console.log('isValidation..', isValidation)}
                    <Field 
                        label="Id"
                        autoFocus
                        isValidation
                        errorMsg={!isValidation ? isIdError : ''}
                        onChange={e => handleChangeAction(e, 'Id')} /><br />
                    <Field 
                        label="Password"
                        type="password"
                        isValidation
                        errorMsg={!isValidation ? isNameError : ''}
                        onChange={e => handleChangeAction(e, 'Password')} /><br /><br />
                    <Theme.Button 
                        variant="contained"
                        disabled={!isValidation}
                        className={classes.loginBtn}>
                        Login
                    </Theme.Button>
                </Theme.Box>
            </Theme.LoginBox>
        </>
    );
};

export default Login;
