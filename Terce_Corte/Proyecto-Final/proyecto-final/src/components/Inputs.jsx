import React from 'react'

export const InputField = ({ label, value, onChange, type = 'text', min='0', max='0', placeholder = ' ', disabled = false, readOnly = 'false' }) => {
    return (
        <div className="form-floating">
            <input type={type} className="form-control input my-3 textfield" id={value} name={value} value={value} onChange={onChange} min={min} max={max} placeholder={placeholder} disabled={disabled} readOnly={readOnly} />
            <label className="placeholder">{label}</label>
        </div>
    )
}

export const TextAreaField = ({ label, value, onChange }) => {
    return (
        <div className="form-floating">
            <textarea type="textarea" className="form-control input my-3 textfield textarea" id={value} name={value} value={value} onChange={onChange} placeholder=" " />
            <label className="placeholder">{label}</label>
        </div>
    )
}
