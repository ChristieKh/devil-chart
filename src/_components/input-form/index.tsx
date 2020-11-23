import React, { memo } from 'react';
import { FieldRenderProps } from 'react-final-form';

type Props = FieldRenderProps<string, HTMLInputElement>;

export const InputForm = memo(({ input: { onChange, value }, id, label }: Props) => (
    <>
        <label htmlFor={id}>{label}</label>
        <input
            onChange={onChange}
            value={value}
            id={id}
        />
    </>
));