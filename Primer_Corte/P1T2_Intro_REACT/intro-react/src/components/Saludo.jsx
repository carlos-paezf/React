import React, { useState } from "react";

const Saludo = () => {
    const [nombre, setNombre] = useState("");

    const saludar = () => {
        alert(`Hola ${nombre}`);
    };
    return (
        <>
            <input type="text" id="nomPer" onChange={(event) => setNombre(event.target.value)} placeholder="Escribe tu nombre aqui..." />
            <button id="btnSaludo" onClick={saludar}> Saludar </button>
            <br />
            <span>{nombre}</span>
        </>
    );
};

export default Saludo;
