import React from 'react'

import Header from '../../components/estructura/Header'
import Jumbotron from '../../components/home/Jumbotron'
import MiniJumbotron from '../../components/home/MiniJumbotron'

const Home = () => {

    const handleConsole = () => {
        console.log("Acción al presionar el botón")
    }

    return (
        <div>
            <Header title={"Página de Inicio"} />

            <div className="container py-3">
                <Jumbotron
                    title={"Bienvenido a la Página de inicio"}
                    paragraph={"Aquí encontraras un ejemplo de lo que podría ser un ejemplo de una página de inicio algo seria, "
                        + "pero con una funcionalidad aún nada interesante"}
                    classComponent={"p-5 mb-4 bg-light rounded-3"} />

                <div className="row align-items-md-stretch">
                    <div className="col-md-6">
                        <MiniJumbotron
                            title={"Mini-Jumbotron con Botón"}
                            paragraph={"Básicamente este componente tiene la particularidad de que tiene un botón"}
                            classComponent={"h-100 p-5 text-white bg-dark rounded-3"}
                            withButton={true}
                            classButton={"btn btn-outline-light"}
                            titleButton={"Botón que imprime algo en consola"}
                            actionOnClick={handleConsole} />
                    </div>

                    <div className="col-md-6">
                        <MiniJumbotron
                            title={"Mini-Jumbotron con Link"}
                            paragraph={"Este componente a diferencia del otro, tiene es un Link que redirecciona a otra página de la aplicación"}
                            classComponent={"h-100 p-5 bg-light border rounded-3"}
                            withLink={true}
                            classButton={"btn btn-outline-secondary"}
                            titleLink={"Redirección a Autos"}
                            url={"/car"} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home
