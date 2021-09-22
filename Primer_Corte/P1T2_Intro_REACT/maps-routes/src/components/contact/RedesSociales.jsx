import React from 'react'
import RedSocial from './RedSocial'

const RedesSociales = () => {
    return (
        <div className="text-light text-center mt-5 py-3" style={{backgroundColor: "#000000"}}>
            <div className="m-5">
                <h2>Siguenos en nuestras redes sociales</h2>
                <div className="row mt-5">
                    <div className="col-md-4">
                        <RedSocial nombre={"Facebook"} logo={"bi bi-facebook text-primary"} url={"facebook.com/PaginaFalsa"} />
                    </div>
                    <div className="col-md-4">
                        <RedSocial nombre={"Instagram"} logo={"bi bi-instagram text-light"} url={"instagram.com/PaginaFalsa"} />
                    </div>
                    <div className="col-md-4">
                        <RedSocial nombre={"YouTube"} logo={"bi bi-youtube text-danger"} url={"youtube.com/PaginaFalsa"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RedesSociales
