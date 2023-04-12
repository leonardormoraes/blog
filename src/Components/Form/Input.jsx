import React from 'react'

const Input = ({type, name, id, value, onChange, label, ...props}) => {
    return (
        <React.Fragment>
            {label && <label htmlFor={id}>{label}</label>}
            <input type={type} name={name} id={id} value={value} onChange={onChange} {...props} />
        </React.Fragment>
    )
}

export default Input