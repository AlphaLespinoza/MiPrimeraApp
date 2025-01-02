
"use client"; // Habilitar interactividad del lado del cliente
import React, { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="grid grid-cols-2 gap-8 items-center max-w-5xl w-full">
        {/* Columna izquierda: Texto y botón */}
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-4xl font-bold mb-8">
            Bienvenido a mi primera app con Next.js 15
          </h1>
          <p className="text-lg mb-6">
            Hola, soy Luciana soy estudiante de 4to semestre de Ingeniería en Sistemas en la Universidad para el Desarrollo y la Innovación (UDI) y estoy entusiasmada por aprender y crecer profesionalmente.
          </p>
          <button
            onClick={() => setMessage("¡Gracias por visitar mi página!")}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-blue-600"
          >
            Haz clic aquí
          </button>
          {message && <p className="mt-4 text-lg">{message}</p>}
        </div>

        {/* Columna derecha: Foto */}
        <div className="flex items-center justify-center">
          <img
            src="/img/Luciana.jpeg"
            alt="Foto de Luciana"
            className="w-100 h-100 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

