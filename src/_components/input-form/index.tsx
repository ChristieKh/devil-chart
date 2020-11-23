import React, { memo } from 'react';
import { FieldRenderProps } from 'react-final-form';

type PropsType = FieldRenderProps<string, HTMLInputElement>;

export const InputForm = memo(({input: {onChange, value, type}, label,id}: PropsType) => (
        <>
            <label htmlFor={id}>{label}</label>
            <input
                onChange={onChange}
                value={value}
                id={id}
                type={type}
            />
        </>
    )
);