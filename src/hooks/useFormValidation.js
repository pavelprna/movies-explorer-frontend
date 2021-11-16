import { useState, useCallback } from 'react';

export function useFormValidation(inputValues) {
  const [values, setValues] = useState(inputValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    const input = e.target;
    const { name, value } = input;

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: input.validationMessage });

    console.log(input.closest('.form').checkValidity())
    setIsValid(input.closest('form').checkValidity());
  };

  const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
    setValues(newValues);
    setErrors(newErrors);
    setIsValid(newIsValid);
  }, [setValues, setErrors, setIsValid]);

  return { values, errors, isValid, handleChange, resetForm, setValues, setIsValid };
}
