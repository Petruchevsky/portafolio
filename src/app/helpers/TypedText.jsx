import Typed from "typed.js";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

function TypedText({ strings }) {
  const typedEl = useRef(null);
  const typedInstance = useRef(null);
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger cuando el 10% del elemento es visible
    triggerOnce: false, // Ejecutar solo una vez
  });

  useEffect(() => {
    if (inView) {
      // Inicializar Typed.js cuando el elemento esté en el viewport
      typedInstance.current = new Typed(typedEl.current, {
        strings: strings,
        typeSpeed: 30,
        backSpeed: 20,
        loop: false,
        cursorChar: "",
        startDelay: 300,
      });
    } else {
      // Destruir la instancia de Typed.js cuando el elemento sale del viewport
      if (typedInstance.current) {
        typedInstance.current.destroy();
        typedInstance.current = null;
      }
    }

    return () => {
      // Destruir la instancia de Typed.js cuando el componente se desmonte
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
  }, [inView, strings]);

  return (
    <div ref={ref}>
      <span ref={typedEl} />
    </div>
  );
}

export default dynamic(() => Promise.resolve(TypedText), { ssr: false });