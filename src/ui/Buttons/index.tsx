import { useState } from "react";


type Button = {
    title: string;
    type?: string;
    size?: string;
    color?: string;    
    state?: boolean;
    icon?:string;
    onClick?: () => void; 
};

type ButtonsProps = {
    mainButton: Button; 
};

const Buttons = ({ mainButton }: ButtonsProps) => {
    return (
        <>
            <button onClick={mainButton.onClick} className={`button ${mainButton.size ? mainButton.size: ''} ${mainButton.color ? mainButton.color: ''} ${mainButton.type ? mainButton.type: ''}`}>{mainButton.title}</button>
        </>
    )
}

export default Buttons;

