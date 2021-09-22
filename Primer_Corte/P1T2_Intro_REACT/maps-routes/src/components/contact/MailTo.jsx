import React from 'react'

const MailTo = () => {
    return (
        <div>
            <div className="mx-5">
                <h2>Deja un mensaje y nosotros te contactamos</h2>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Ingresa tu Email:</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Ingresa tu mensaje</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button className="btn btn-outline-dark">Enviar Mensaje</button>
            </div>
        </div>
    )
}

export default MailTo
