import React, { useState } from 'react';


const TravelForm = () => {
    const [coordinateX, setCoordinateX] = useState("")
    const [coordinateZ, setCoordinateZ] = useState("")
    const [showResult, setShowResult] = useState(true)

    const result = () =>{
        let resultX = parseInt(coordinateX) / 8
        let resultZ = parseInt(coordinateZ) / 8
        if (showResult && coordinateX !== "" && coordinateZ !== "") {
            return(
                <p className='description-1'>
                    Construye tu portal en el nether en las coordenadas: <br />
                    {`X: ${resultX} Z: ${resultZ}`}
                </p>
            )    
        }
    }


    return (
        <form className='form'>
            <div className="input-container">
                <label htmlFor="coordinate-x">Coordena X</label>
                <input value={coordinateX} onChange={e => setCoordinateX(e.target.value)} placeholder='Escribe la coordenada X del lugar al que quieres viajar' type="number" id='coordinate-x' />
            </div>

            <div className="input-container">
                <label htmlFor="coordinate-Z">Coordena Z</label>
                <input value={coordinateZ} onChange={e => setCoordinateZ(e.target.value)} placeholder='Escribe la coordenada Z del lugar al que quieres viajar' type="number" id='coordinate-Z' />
            </div> 


            {result()}
        </form>
    );
};

export default TravelForm;