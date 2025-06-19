import classNames from "classnames";
import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

    size?: 'small' | 'medium' | 'large';
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'danger' | 'ghost' | 'normal';
}

export function Button({ children, ...props }: ButtonProps) {

    const { size = 'medium', variant = 'normal', type = 'button' } = props;

    return (
        <button
            className={classNames('text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline', {
                'text-sm': size === 'small',
                'text-base': size === 'medium',
                'text-lg': size === 'large',
                'h-10': size === 'small',
                'h-12': size === 'medium',
                'h-14': size === 'large',
                'px-2': size === 'small',
                'px-6': size === 'medium',
                'px-8': size === 'large',
                'bg-blue-500 hover:bg-blue-700': variant === 'primary',
                'bg-gray-500 hover:bg-gray-700': variant === 'normal',
                'bg-red-500 hover:bg-red-700': variant === 'danger',
                'cursor-pointer': true,
                'text-white': variant === 'primary' || variant === 'danger',
            })}

            {...props}
        >
            {children}
        </button>
    );
}