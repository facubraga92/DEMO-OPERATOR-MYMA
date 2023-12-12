import React from "react";
import Joyride from "react-joyride";

const JoyrideTutorial = ({ runTutorial }) => {
  const steps = [
    {
      target: ".joyride-step3",
      content: "Aquí podrás escanear el codigo QR y abrir tu MyMa Store😎.",
      styles: { beacon: { marginTop: "-30px" } },
    },
    {
      target: ".joyride-step1",
      content: "Inicio con Precios y Promociones exclusivas para vos!❤️.",
      styles: { beacon: { marginTop: "-28px" } },
    },
    {
      target: ".joyride-step2",
      content: "Aquí visualizaras tu historial de compras📊.",
      styles: { beacon: { marginTop: "-28px" } },
    },

    {
      target: ".joyride-step4",
      content: "Aquí podrás añadir tus tarjetas de crédito/débito💳.",
      styles: { beacon: { marginTop: "-28px" } },
    },
    {
      target: ".joyride-step5",
      content: "Éste es el botón para cerrar sesión.",
      styles: { beacon: { marginTop: "-30px" } },
    },
    {
      target: ".joyride-step6",
      content: "Aquí podrás ponerte en contacto con nosotros💪.",
      styles: { beacon: { marginTop: "-35px", marginLeft: "10px" } },
    },
  ];

  return (
    <Joyride
      steps={steps}
      run={runTutorial}
      continuous={true}
      showSkipButton={true}
      disableScrolling={true}
      // disableOverlay={true}
      // debug={true}
      locale={{
        back: "Atrás",
        close: "Cerrar",
        last: "Finalizar",
        next: "Siguiente",
        skip: "Saltar",
      }}
      styles={{
        options: {
          arrowColor: "#e3ffeb",
          // backgroundColor: "#e3ffeb",
          // overlayColor: "rgba(79, 26, 0, 0.4)",
          overlayColor: "rgba(0, 0, 0, 0.6)",
          primaryColor: "#663B73",
          textColor: "#B93C09",
          zIndex: 1000,
          beaconSize: 50,
        },
        spotlight: { borderRadius: 50, position: "absolute" },
      }}
    />
  );
};

export default JoyrideTutorial;
