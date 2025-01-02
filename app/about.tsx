// import { useEffect, useState } from "react";

// export default function About() {
// //   const [isClient, setIsClient] = useState(false);

// //   useEffect(() => {
// //     setIsClient(true);
// //   }, []);

// //   if (!isClient) return null; // No renderizar nada hasta que el cliente se cargue

//   const interests = ["Desarrollo web", "Backend", "Bases de datos", "Inteligencia Artificial"];
//   const technologies = ["Rust", "Next.js avanzado", "GraphQL", "Docker"];

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center p-6">
//       <h1 className="text-4xl font-bold text-center mb-4">Sobre mí</h1>
//       <p className="text-lg text-center mb-6">
//         Soy Luciana, estudiante de Ingeniería en Sistemas apasionada por la tecnología y el aprendizaje continuo.
//       </p>
//       <div className="w-full max-w-2xl">
//         <h2 className="text-2xl font-semibold mb-2">Mis intereses profesionales:</h2>
//         {/* <ul className="list-disc list-inside mb-6">
//           {interests.map((interest) => (
//             <li key={interest}>{interest}</li>
//           ))}
//         </ul> */}
//         <h2 className="text-2xl font-semibold mb-2">Tecnologías que quiero aprender:</h2>
//         {/* <ul className="list-disc list-inside">
//           {technologies.map((tech) => (
//             <li key={tech}>{tech}</li>
//           ))}
//         </ul> */}
//       </div>
//     </div>
//   );
// }
