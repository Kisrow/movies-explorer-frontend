import { useCallback, useState } from 'react';

export function useFormValidation() {
  const [values, setValues] = useState({});
  const [errorMessage, setErrorMessage] = useState({});
  const [isValid, setValid] = useState(false);


  const formReset = useCallback(() => {
    setValues({});
    setErrorMessage({});
    setValid(false);
  }, [setValues, setErrorMessage, setValid]);

  function handleChange(e) {
    const input = e.target;
    const name = input.name;
    const value = input.value;
    setValues({...values, [name]: value});
    setErrorMessage({...errorMessage, [name]: input.validationMessage });
    setValid(input.closest('form').checkValidity());
  };
  return { values, errorMessage, isValid, formReset, handleChange};
}