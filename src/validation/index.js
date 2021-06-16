export const required = value => {
    return value?.length > 0 ? undefined : 'This field is required';
  };
  
  export const maxLength = max => value => {
    if (value?.length > 0 && value.length > max) {
      return `Please enter valid id or number`;
    }
    return undefined;
  };
  