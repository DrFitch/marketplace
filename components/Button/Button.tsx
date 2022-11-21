import React from 'react'

type ButtonProps = {
    btnName?: string;
    btnText?: string;
}

const Button = ({ btnName, btnText }: ButtonProps) => {
    return (
        <div>Button</div>
    )
}

export default Button