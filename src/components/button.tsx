import React from 'react';
import Spinner from './spinner';
import { cn } from '../lib/utils';

interface ButtonProps {
    label: string;
    onClick: () => void;
    backgroundColor?: string;
    textColor?: string;
    width?: string;
    padding?: string;
    borderRadius?: string;
    className?: string;
    loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    backgroundColor = 'bg-[#25C26E]',
    textColor = 'text-white',
    width = 'w-full',
    padding = 'py-2 px-4',
    borderRadius = 'rounded-[8px]',
    className = '',
    loading = false,
}) => {
    return (
        <button
            onClick={onClick}
            className={cn(
                backgroundColor,
                textColor,
                padding,
                borderRadius,
                width,
                'cursor-pointer',
                'outline-none',
                className,
                loading && 'cursor-wait',
                'w-full'
            )}
            disabled={loading}
        >
            {loading ? (
                <div className="flex justify-center items-center">
                    <Spinner />
                </div>
            ) : (
                <p className="font-medium">
                    {label}
                </p>
            )}
        </button>

    );
};

export default Button;

