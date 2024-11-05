import React from 'react';
import "../../styles/buttons.css"

interface IButtonProps {
    text: string;
    secondary?: boolean;
    func: () => void; // Specify the type as a function returning void
}

export default function Button({ text, secondary, func }: IButtonProps) {
    return (
        <button className={`btn ${secondary ? 'btn-secondary' : 'btn-primary'}`} onClick={func}>
            {text}
        </button>
    );
}
