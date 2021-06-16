import React from 'react';
import Theme from '../../theme';

const Login = () => {
    const classes = Theme.useStyles();
    return (
        <>
            <h1>Login</h1>
            <Theme.Button variant="contained" className={classes.loginBtn}>
                Hello App
            </Theme.Button>
        </>
    );
};

export default Login;