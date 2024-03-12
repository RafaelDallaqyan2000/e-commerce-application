import './customButton.css';
import React from "react";

type ButtonType = {
    title: string;
    onClick: () => void;
    className?: string;
    rest?: any;
    style?: any;
}
export function CustomButton({
    title,
    onClick,
    className,
    rest,
    style,
}: ButtonType) {
    return (
        <div>
            <button
                onClick={onClick}
                {...rest}
                style={{...style}}
                className={`button-82-pushable ${className}`}
                role="button"
            >
                <span className="button-82-shadow"></span>
                <span className="button-82-edge"></span>
                <span className="button-82-front text">
                  {title}
                </span>
            </button>

        </div>
    )
}
