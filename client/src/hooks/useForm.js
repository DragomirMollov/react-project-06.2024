/* eslint-disable style/indent */
import { useEffect, useState } from 'react';

export function useForm(initialValues, submitCallback, refreshInitialValues = false) {
    const [values, setValues] = useState(initialValues);

    if (refreshInitialValues) {
        useEffect(() => {
            setValues(initialValues || {});
        }, [initialValues]);
    };

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        submitCallback(values);

        setValues(initialValues);
    };

    return {
        values,
        changeHandler,
        submitHandler,
    };
};
