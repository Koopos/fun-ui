import classNames from "classnames";
import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

    size?: 'small' | 'medium' | 'large';
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'danger' | 'ghost' | 'normal';
}

export function Button({ children, ...props }: ButtonProps) {

    const { size = 'medium', variant = 'primary', type = 'button' } = props;

    return (
        <button
            className={classNames('text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline', {
                'text-sm': size === 'small',
                'text-base': size === 'medium',
                'text-lg': size === 'large',
                'h-10': size === 'small',
                'h-12': size === 'medium',
                'h-14': size === 'large',
                'w-24': size === 'small',
                'w-32': size === 'medium',
                'bg-blue-500 hover:bg-blue-700': variant === 'primary',
                'bg-gray-500 hover:bg-gray-700': variant === 'normal',
                'cursor-pointer': true,
                'color-white': variant === 'primary' || variant === 'danger',
            })}

            {...props}
        >
            {children}
        </button>
    );
}