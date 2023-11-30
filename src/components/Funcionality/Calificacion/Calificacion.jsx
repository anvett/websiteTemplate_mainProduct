import React, {useState} from 'react'

export default function Calificacion() {

    const [calificacion, setCalificacion] = useState(null);

  return (
    <div>
      {[1, 2, 3, 4, 5].map((numero) => (
        <button key={numero} onClick={() => setCalificacion(numero)}>
          {numero <= calificacion ? '★' : '☆'}
        </button>
      ))}
      <p>Calificación seleccionada: {calificacion}</p>
    </div>
  )
}
