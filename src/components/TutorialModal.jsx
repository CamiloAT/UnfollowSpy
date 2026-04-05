import React, { useState } from 'react';

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#ig-gradient-close)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <defs>
      <linearGradient id="ig-gradient-close" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop stopColor="#f09433" offset="0%" />
        <stop stopColor="#e6683c" offset="25%" />
        <stop stopColor="#dc2743" offset="50%" />
        <stop stopColor="#cc2366" offset="75%" />
        <stop stopColor="#bc1888" offset="100%" />
      </linearGradient>
    </defs>
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const TUTORIAL_STEPS = [
  {
    image: null,
    text: <>Bienvenido a <strong style={{color: '#bc1888', textDecoration: 'none', fontWeight: 'bold'}}>UnfollowSpy</strong>. A continuación se explicará detalladamente cómo conseguir y descargar los archivos exactos para el análisis. <strong style={{color: '#bc1888', textDecoration: 'none', fontWeight: 'bold'}}>Si tú ya los tienes</strong>, puedes saltar este tutorial usando el enlace de abajo.</>
  },
  {
    image: null,
    text: <>Lo primero que harás es ingresar a <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{color: '#bc1888', textDecoration: 'none', fontWeight: 'bold'}}>www.instagram.com</a> y loguearte en tu cuenta de Instagram desde tu computadora.</>
  },
  {
    image: "tutorial_step_1",
    text: <>En la pantalla principal, dirígete a la parte inferior izquierda y haz clic en las tres rayas horizontales donde dice <strong style={{color: '#bc1888', textDecoration: 'none', fontWeight: 'bold'}}>'Más'</strong>.</>
  },
  {
    image: "tutorial_step_2",
    text: <>Luego de darle al botón de más, haz clic en donde dice <strong style={{color: '#bc1888', textDecoration: 'none', fontWeight: 'bold'}}>'Configuración'</strong>, indicado con el icono de un engranaje.</>
  },
  {
    image: "tutorial_step_3",
    text: <>Ahora, en la parte superior del menú izquierdo, haz clic en el <strong style={{color: '#bc1888', textDecoration: 'none', fontWeight: 'bold'}}>'Centro de cuentas'</strong> de Meta.</>
  },
  {
    image: "tutorial_step_4",
    text: <>Dentro del Centro de cuentas, busca y selecciona el apartado de <strong style={{color: '#bc1888', textDecoration: 'none', fontWeight: 'bold'}}>'Tu información y permisos'</strong>.</>
  },
  {
    image: "tutorial_step_5",
    text: <>Dentro de ese apartado, haz click en la opción de <strong style={{color: '#bc1888', textDecoration: 'none', fontWeight: 'bold'}}>'Exportar tu información'</strong> para continuar.</>
  },
  {
    image: "tutorial_step_6",
    text: <>Se abrirá una ventana emergente. Allí, haz clic en la opción <strong style={{color: '#bc1888', textDecoration: 'none', fontWeight: 'bold'}}>'Crear exportación'</strong>.</>
  },
  {
    image: "tutorial_step_7",
    text: <>Aparecerá la selección de perfiles. Es muy importante que marques ÚNICAMENTE el perfil de la cuenta de Instagram a la que le quieres realizar el proceso.</>
  },
  {
    image: "tutorial_step_8",
    text: <>En la siguiente ventana, deberás elegir el destino de la exportación. Selecciona <strong style={{color: '#bc1888', textDecoration: 'none', fontWeight: 'bold'}}>'Descargar en el dispositivo'</strong>.</>
  },
  {
    image: "tutorial_step_9",
    text: <>Llegarás al apartado para confirmar la exportación. Aquí deberemos hacer algunos ajustes clave. Primero, selecciona <strong style={{color: '#bc1888', textDecoration: 'none', fontWeight: 'bold'}}>'Personaliza información'</strong> en lugar de descargar absolutamente todo.</>
  },
  {
    image: "tutorial_step_10",
    text: <>Entre todos los apartados que hay, desplázate hasta encontrar la sección <strong style={{color: '#bc1888', textDecoration: 'none', fontWeight: 'bold'}}>'Conexiones'</strong> y marca SÓLO la opción que dice <strong style={{color: '#bc1888', textDecoration: 'none', fontWeight: 'bold'}}>'Seguidores y seguidos'</strong>. Luego dale a guardar.</>
  },
  {
    image: "tutorial_step_11",
    text: <>Ahora de vuelta en la pantalla de revisión, haz clic en donde dice <strong style={{color: '#bc1888', textDecoration: 'none', fontWeight: 'bold'}}>'Rango de fechas'</strong>.</>
  },
  {
    image: "tutorial_step_12",
    text: <>Selecciona la opción <strong style={{color: '#bc1888', textDecoration: 'none', fontWeight: 'bold'}}>'Todo el tiempo'</strong>. Esto es necesario puesto que queremos ver la trazabilidad completa a lo largo de todo el tiempo que la cuenta ha estado creada. Luego dale a guardar.</>
  },
  {
    image: "tutorial_step_13",
    text: <>Luego, haz clic en la opción <strong style={{color: '#bc1888', textDecoration: 'none', fontWeight: 'bold'}}>'Formato'</strong>.</>
  },
  {
    image: "tutorial_step_14",
    text: <>¡MUY IMPORTANTE! Selecciona el formato <strong style={{color: '#bc1888', textDecoration: 'none', fontWeight: 'bold'}}>'JSON'</strong>. De no hacerse este paso en formato JSON, no se va a poder realizar el proceso.</>
  },
  {
    image: "tutorial_step_15",
    text: <>Una vez configurado todo correctamente, haz clic en el botón <strong style={{color: '#bc1888', textDecoration: 'none', fontWeight: 'bold'}}>'Iniciar exportación'</strong>.</>
  },
  {
    image: "tutorial_step_16",
    text: <>Es posible que te pida repetir la contraseña de tu cuenta por razones de seguridad. Escríbela y haz click en <strong style={{color: '#bc1888', textDecoration: 'none', fontWeight: 'bold'}}>'Continuar'</strong>.</>
  },
  {
    image: "tutorial_step_17",
    text: <>Aparecerá una confirmación de que la información está siendo preparada para exportar, y llegará una notificación a tu correo en cuanto esté lista.</>
  },
  {
    image: "tutorial_step_18",
    text: <>Casi al instante llegará un correo diciendo que la solicitud de descarga de información está en proceso. <strong style={{color: '#bc1888', textDecoration: 'none', fontWeight: 'bold'}}>OJO: LA INFORMACIÓN NO ESTÁ LISTA AÚN</strong>, esta solo es la confirmación de que se está procesando.</>
  },
  {
    image: "tutorial_step_19",
    text: <>Luego, después de un lapso aproximado de 2 a 10 minutos, llegará otro correo diciendo que la información ya está lista. Ahí aparecerá un enlace para ir a <strong style={{color: '#bc1888', textDecoration: 'none', fontWeight: 'bold'}}>'exportar la información'</strong>, donde tendras que hacer click.</>
  },
  {
    image: "tutorial_step_20",
    text: <>Este enlace te redirigirá al mismo panel en Instagram, pero con la diferencia de que ahora aparecerá el botón de <strong style={{color: '#bc1888', textDecoration: 'none', fontWeight: 'bold'}}>'Descargar'</strong> disponible, hazle click ahi.</>
  },
  {
    image: "tutorial_step_21",
    text: <>Luego, nuevamente, haz click en <strong style={{color: '#bc1888', textDecoration: 'none', fontWeight: 'bold'}}>'Descargar'</strong>. Guarda el contenido; se bajará un archivo comprimido <strong style={{color: '#bc1888', textDecoration: 'none', fontWeight: 'bold'}}>.ZIP</strong>. Deberás descomprimirlo. Al hacerlo, encontrarás una carpeta llamada <strong style={{color: '#bc1888', textDecoration: 'none', fontWeight: 'bold'}}>'connections'</strong>, y dentro de ella otra llamada <strong style={{color: '#bc1888', textDecoration: 'none', fontWeight: 'bold'}}>'followers_and_following'</strong>.</>
  },
  {
    image: "tutorial_step_22",
    text: <><strong style={{color: '#bc1888', textDecoration: 'none', fontWeight: 'bold'}}>'¡LISTO!'</strong> Ahí adentro encontrarás exactamente los archivos <strong style={{color: '#bc1888', textDecoration: 'none', fontWeight: 'bold'}}>'followers_1.json'</strong> y <strong style={{color: '#bc1888', textDecoration: 'none', fontWeight: 'bold'}}>'following.json'</strong> que debes cargar en nuestra plataforma. El resto de archivos no tendrán relevancia.</>
  }
];

export const TutorialModal = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < TUTORIAL_STEPS.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      onClose(); // Auto close on finish
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const currentData = TUTORIAL_STEPS[currentStep];

  // Helper function to resolve dynamic image path
  const getImageUrl = (imageName) => {
    if (!imageName) return null;
    return new URL(`../assets/${imageName}.png`, import.meta.url).href;
  };

  const imageSrc = getImageUrl(currentData.image);

  return (
    <div className="tutorial-overlay">
      <div className="tutorial-modal">
        <button className="tutorial-close" onClick={onClose} aria-label="Cerrar tutorial">
          <CloseIcon />
        </button>

        {/* Dynamic Image Container */}
        <div className="tutorial-image-container">
          {imageSrc ? (
            <img src={imageSrc} alt={`Paso ${currentStep}`} className="tutorial-image" />
          ) : (
             <div className="tutorial-placeholder-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#bc1888' }}>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
             </div>
          )}
        </div>

        <div className="tutorial-content">
          <p className="tutorial-text">{currentData.text}</p>
          
          <div className="tutorial-dots">
             {TUTORIAL_STEPS.map((_, i) => (
                <div 
                  key={i} 
                  className={`tutorial-dot ${i === currentStep ? 'active' : ''}`} 
                  onClick={() => setCurrentStep(i)}
                  title={`Ir al paso ${i + 1}`}
                />
             ))}
          </div>

          <div className="tutorial-controls">
            <button 
              className="tutorial-btn tutorial-btn-secondary" 
              onClick={handlePrev} 
              disabled={currentStep === 0}
            >
              Anterior
            </button>
            <button 
              className="tutorial-btn tutorial-btn-primary" 
              onClick={handleNext}
            >
              {currentStep === TUTORIAL_STEPS.length - 1 ? 'Finalizar' : 'Siguiente'}
            </button>
          </div>

          {currentStep === 0 && (
            <button className="tutorial-skip" onClick={onClose}>
              Ya los tengo... Saltar Tutorial
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
