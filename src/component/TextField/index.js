import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

const TextBox = styled(TextField)`
    & .MuiFilledInput-root {
        opacity: 1;
        height: 40px;
        width: 244px;
        margin-top: 10px;
        background: #EEF1F8;
        border-radius: 8px;
    }
`;
const Field = ({ 
    type, 
    label, 
    variant, 
    errorMsg, 
    isValidation,
    autoFocus,
    onChange, 
    props 
}) => {

    return (
        <TextBox
          error={!isValidation}
          type={type}
          label={label}
          variant={variant}
          onChange={onChange}
          autoFocus={autoFocus}
          helperText={errorMsg}
          InputProps={{disableUnderline: true}}
          inputProps={{
            autocomplete: 'new-password',
            form: {
              autocomplete: 'off',
            },
          }}
          {...props} />
    );
  };

// Field.muiName = 'Input';

Field.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func,
    variant: PropTypes.string,
    isValidation: PropTypes.bool
};

Field.defaultProps = {
    type: '',
    label: '',
    error: '',
    variant: 'filled',
    onChange: () => {},
    isValidation: false
};

export default Field;
