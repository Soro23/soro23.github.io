import { useState, useEffect } from 'react';
import useLocalStorage from "../useLocalStorage";

export default function useDarkMode() {
  const localStorageCache = useLocalStorage('darkMode');
  const [darkMode, setDarkMode] = useState<boolean>(false); // Cambiado el tipo a boolean

  useEffect(() => {
    // Función para obtener el modo oscuro del almacenamiento local
    const getDarkModeFromLocalStorage = () => {
      let mode = localStorageCache.get();

      // Usa el modo predeterminado si no está configurado por el usuario
      if (mode === null || mode === undefined) {
        mode = process.env.NEXT_PUBLIC_DARK_MODE === "true"; // Convertir a booleano
      }

      return mode;
    };

    // Obtener el modo oscuro del almacenamiento local y establecer el estado inicial
    setDarkMode(getDarkModeFromLocalStorage());

    // Aplicar el tema oscuro al cargar el componente
    toggleDocumentDarkMode(getDarkModeFromLocalStorage());
  }, [localStorageCache]); // Agregado localStorageCache como dependencia de useEffect

  const toggleDocumentDarkMode = (mode: boolean) => {
    if (mode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleDarkMode = () => {
    const newMode = !darkMode; // Cambiar entre modo oscuro y claro
    toggleDocumentDarkMode(newMode);
    setDarkMode(newMode);
    localStorageCache.set(newMode);
  };

  return {
    setMode: handleDarkMode,
    isDarkMode: darkMode,
  };
}
