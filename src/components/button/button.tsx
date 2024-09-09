import React from 'react';
import "../../styles/buttons.css"

interface IButtonProps {
    text: string;
    secondary?: boolean;
}

export default function Button({ text, secondary }: IButtonProps) {
    return (
        <button className={`btn ${secondary ? 'btn-secondary' : 'btn-primary'}`}>
            {text}
        </button>
    );
}