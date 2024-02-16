import Image from "next/image";
import styles from "./page.module.css";
import LeftColumn from "../../components/LeftColumn";
import { Inter } from "next/font/google";
import Portfolio from "../../components/Portfolio";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <div className={`${styles.container}`}>
      <div className="w-full  sm:w-64 sm:fixed sm:top-0 sm:left-0 md:w-80 overflow-y-auto overflow-x-hidden border-b m-0 p-0 border-gray-300 bg-gradient-to-b from-zinc-200  backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200  lg:dark:bg-zinc-800/30">
        <LeftColumn inter={inter} />
      </div>
      <main className="flex min-h-screen flex-col  justify-between sm:ml-64 md:ml-80">
        <div>
          <h2 className={`mb-3 text-2xl font-semibold`}>Experiencia</h2>
          <div className="mb-5">
            <Image
              src="/Logo_01.png"
              alt="Logo Afectus"
              className="dark:invert"
              width={150}
              height={24}
              priority
            />
          </div>
          <div className="flex justify-between">
            <p className={`mb-3  font-semibold`}>Desarrollador</p>
            <p className={`text-sm opacity-65`}>Abril 2022 - Mayo 2023</p>
          </div>
          <div className="flex flex-col sm:justify-between lg:flex-row">
            <div className={`lg:max-w-[50%]`}>
              <p className={`text-sm opacity-70 mb-3`}>
                Lideré la transición de Afectus de una empresa de gestión de posts en redes sociales a un innovador en la automatización de comunicaciones y publicidad en WhatsApp.  
              </p>
              <p className={`mb-3  font-semibold`}>
                Logros
              </p>
              <ul className={`${styles.ul} `}>
                <li className={`${styles.li} text-sm opacity-65`}>Lideré exitosamente el desarrollo integral de la plataforma Afectus durante un año, orquestando la transformación de una empresa especializada en administración de publicaciones en redes sociales en una entidad líder en la automatización de procesos de comunicación y la generación de campañas publicitarias y atención al cliente a través de WhatsApp. Esta metamorfosis permitió expandir la empresa a tres países distintos.</li>
                <li className={`${styles.li} text-sm opacity-65`}>Desarrollé una interfaz de arrastrar y soltar nodos utilizando librerías como Reactflow para la creación de flujos personalizados. Esta solución posibilitó la generación y almacenamiento de flujos, lo que permitió un análisis exhaustivo de las interacciones de los usuarios, identificando patrones de abandono y progresión en las etapas del flujo.</li>
                <li className={`${styles.li} text-sm opacity-65`}>Facilité la comunicación masiva mediante la exitosa implementación de una interfaz que permitía la carga de archivos de Excel y el envío de mensajes personalizados en masa, lo que agilizó el alcance a más de 1000 personas con un solo clic.</li>
                <li className={`${styles.li} text-sm opacity-65`}>Concluí con éxito la integración de la plataforma con la empresa Serban, empleando sus API para establecer un sistema de firma de contratos con firma.</li>
              </ul>
            </div>
            <div className={`mb-5 `}>
              <video controls>
                <source src="/chatAfectus.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
          </div>
        </div>
        {/* portfolio */ }
        <div className="mt-10">
          <p className={`mb-3 text-2xl font-semibold`}>Portafolio</p>
          <Portfolio/>
        </div>
        {/* education */ }
        <div>
          <h2 className={`mb-3 text-2xl font-semibold`}>Educación</h2>
          <div className="flex justify-between">
            <p className={`mb-3  font-semibold`}>Universidad Surcolombiana</p>
            <p className={`text-sm opacity-70 mb-3`}>En proceso de grado</p>
          </div>
          <p className={`text-sm opacity-70 mb-3`}>
            Administracion de empresas  
          </p>
        </div>
        <div className="mt-10">
          <h2 className={`mb-3 text-2xl font-semibold`}>Educación complementaria</h2>
          <div className="mt-6">
            <p className={`font-semibold`}>Platzi</p>
            <p className={`text-sm opacity-70 mb-3`}>
            Curso frontend
          </p>
          </div>
          
          <div>
            <p className={` font-semibold`}>Platzi</p>
            <p className={`text-sm opacity-70 mb-3`}>
              Curso de análisis de negocios para ciencia de datos
            </p>
          </div>
          
          <div>
            <p className={`font-semibold`}>Platzi</p>
            <p className={`text-sm opacity-70 mb-3`}>
              Curso básico de seguridad informática para empresas
            </p>
          </div>
        </div>
      </main>
    </div>
  
    
  );
}
