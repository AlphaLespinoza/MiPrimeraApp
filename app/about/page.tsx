import { url } from "inspector";
import { useEffect, useState } from "react";

export default function About() {
  const interests = ["Desarrollo web", "Backend", "Bases de datos", "Odoo"];
  const technologies = ["Python", "Next.js", "SQL", "Java"];

  return (
    <div className="min-h-screen p-6 grid grid-rows-[auto,1fr] grid-cols-1">
      {/* Sección de "Sobre mí" */}
      <div className="text-center mb-8 row-span-1 col-span-1 p-16">
        <div className="object-cover" style={{backgroundImage: 'url("/img/about2.jpeg")'}}>
          <h1 className="text-4xl font-bold mb-[20px] text-center p-6">Sobre mí</h1>
          <p className="text-lg p-8">
            Estudiante de 4to semestre de Ingeniería en Sistemas en la Universidad para el Desarrollo y la Innovación
            (UDI). Me caracterizo por mi capacidad para integrarme y adaptarme a diversas situaciones, así como por mi
            entusiasmo por aprender y crecer profesionalmente. Estoy comprometida con el trabajo en equipo y la
            mejora continua. Confío en mis conocimientos adquiridos y en mis valores para aplicarlos efectivamente en
            cualquier área que se me asigne. Estoy entusiasmada para demostrar mi compromiso y habilidades en un
            entorno profesional.
          </p>
        </div>
      </div>
        

      {/* Sección de intereses y tecnologías */}
      <div className="grid grid-cols-2 gap-8 w-full max-w-4xl mx-auto">
        {/* Card izquierda: Intereses */}
        <div className="bg-gray-500 rounded-lg p-6 max-w-sm mx-[auto]">
          <h2 className="text-2xl font-semibold mb-4">Mis intereses profesionales:</h2>
          <ul className="list-disc list-inside space-y-2">
            {interests.map((interest) => (
              <li key={interest}>{interest}</li>
            ))}
          </ul>
        </div>

        {/* Card derecha: Tecnologías */}
        <div className="bg-gray-500 rounded-lg p-6 max-w-sm mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Tecnologías que quiero aprender:</h2>
          <ul className="list-disc list-inside space-y-2">
            {technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

