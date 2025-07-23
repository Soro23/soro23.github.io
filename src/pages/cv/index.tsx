import Author from '@/config/author';
import colors, { ColorType } from '@/config/colors';
import { Box, Heading, Text, Flex, Image, List, ListIcon, ListItem, Avatar, HStack, UnorderedList, useMediaQuery  } from '@chakra-ui/react';
import { ReactElement, JSXElementConstructor, ReactNode, PromiseLikeOfReactNode, Key, useEffect } from 'react';
import { css } from '@emotion/react';

// Estilos CSS para impresión
const printStyles = `
  @media print {
    /* Ocultar todos los elementos excepto el div con el id cv-to-print */
    body * {
      display: none;
    }

    #cv-to-print, #cv-to-print * {
      display: block !important;
    }
  }
`;

const CVPage = () => {
    const getColor = (tag: string) => {
        const sanitizeTag = tag.toLowerCase().replace(/[^a-z]/g, '') as ColorType;
        return colors?.[sanitizeTag] || colors.default;
    }
    function chunkArray(array: any[], size: number) {
        const chunkedArray = [];
        for (let i = 0; i < array.length; i += size) {
            chunkedArray.push(array.slice(i, i + size));
        }
        return chunkedArray;
    }
    // Filtrar las tecnologías que tengan isStarred en true
    const starredTechnologies = Author.technologies.filter(tech => tech.isStarred);
    // En tu componente
    const chunkedTechnologies = chunkArray(starredTechnologies, 3);

    const printCV = () => {
        const head = document.head;
        const cvToPrint = document.getElementById('cv-to-print');
        if (cvToPrint) {
            const newStyle = document.createElement('style');
            newStyle.setAttribute("id", "custom-style-to-print");
            head.appendChild(newStyle);
            newStyle.innerHTML = 'body {font-family: Arial, sans-serif;padding: 50px;background:white;}';
            const headContent = head.innerHTML;
            const content = cvToPrint.innerHTML;
            const printWindow = window.open('', '_blank');
            if (printWindow) {
                printWindow.document.write(`
                <html>
                    ${headContent}
                  <body>
                    ${content}
                  </body>
                </html>
              `);
                printWindow.document.close();
                printWindow.print();
                printWindow.close();
            }

            // @ts-ignore: Object is possibly 'null'.
            newStyle.parentNode.removeChild(newStyle);
        }
    };
    const [isSmallScreen] = useMediaQuery("(max-width: 768px)");

    return (
        <Box zIndex={1} position={'relative'} color={'gray.800'} display={isSmallScreen ? 'none' : 'block'}>
            <Flex mb={4}>
                {/* Primera fila */}
                <Box mb={4} className='section' flex="1" pr={8}>
                    <Image src={Author.avatar} alt={Author.name} borderRadius={'10px'} />
                </Box>
                <Box flex="2">
                    <Heading as="h1" mb={2} fontSize={40} color={'gray.800'} onClick={printCV} cursor={'pointer'}>{Author.name}</Heading>
                    <Text mb={2} fontSize={24} color={'gray.500'}>{Author.cvrole}</Text>
                    <Text fontSize={16}>{Author.cvdescription}</Text>
                </Box>
            </Flex>
            <Flex mb={4}>
                {/* Segunda fila */}
                <Box mb={4} className='section' flex="1" pr={8}>

                    <Text mb={2} fontSize={24} color={'gray.500'} pos={'relative'}
                        _before={{
                            content: `""`,
                            position: "absolute",
                            width: "80%",
                            height: "1px",
                            bottom: 0,
                            right: 0,
                            bg: "gray.500",
                            opacity: "0.2",
                        }}>Información de Contacto</Text>
                    <List gap={3}>
                        {Author.links.map((contact, contactIndex) => (
                            (!contact.hidden &&
                                <ListItem key={contactIndex} display={'flex'} alignItems={'center'}>
                                    <ListIcon as={contact.icon} />
                                    <Text>{contact.label}</Text >
                                </ListItem>
                            )
                        ))}
                    </List>
                </Box>
                <Box flex="1">
                    <HStack border={'1px solid black'} borderRadius={'10px'} p={4}>
                        <Image src='/qr-code.png' alt="https://soro23.github.io" fallbackSrc='https://via.placeholder.com/150' boxSize="100px" objectFit="cover" aspectRatio={'1'} />
                        <Text>Este código QR redirige a mi pagina web personal alojada en GitHub.</Text>
                    </HStack>
                </Box>
            </Flex>
            {/* Tercera sección: Experiencia */}
            <Box my={4} className='section'>
                <Text mb={2} fontSize={24} color={'gray.500'} pos={'relative'}
                    _before={{
                        content: `""`,
                        position: "absolute",
                        width: "80%",
                        height: "1px",
                        bottom: 0,
                        right: 0,
                        bg: "gray.500",
                        opacity: "0.2",
                    }}>Experiencia Laboral</Text>  
                <Box mb={2}>
                    <Text fontWeight="bold">Preico Jurídicos (marzo 2024 - Actualidad)</Text>
                    <Text>Desarrollé un CRM interno para gestionar clientes y procedimientos legales en un despacho de abogados.</Text>
                    <Text>Creé una API segura para permitir la extracción de datos desde fuera y la creación remota de nuevos clientes.</Text>
                    <Text>Construí una WebApp para gestionar visualmente los patrocinadores de un equipo de Moto2, incluyendo su colocación en la moto, el casco, el mono y el camión.</Text>
                    <Text>Implementé automatizaciones en el software de pagos y facturación para agilizar los flujos de trabajo internos.</Text>
                </Box>
                <Box mb={2}>
                    <Text fontWeight="bold">CDO SupeinNihonto (enero 2021 - marzo 2025)</Text>
                    <Text>He gestionado la transición de la empresa desde depender de productos digitales de terceros hacia desarrollar internamente una plataforma propia de armas y armaduras japonesas.</Text>
                    <Text>He guiado la estrategia digital desde la conceptualización hasta la implementación. Esta iniciativa ha consolidado nuestra posición como líderes en el mercado, generando un aumento significativo en la demanda y la fidelidad de los clientes.</Text>
                </Box>
                <Box mb={2}>
                    <Text fontWeight="bold">Interdigital (julio 2019 - febrero 2024)</Text>
                    <Text>He trabajado sobretodo con ecommerce en especifico para Magentos, para ellos he desarrollado varios módulos Magento para sincronizar datos con ERPs como Microsoft Dynamics 365, Sage, etc. También he añadido y modificado funcionalidades tanto en el frontend como en el backend. He realizado una auditoría de seguridad en el sitio web para identificar posibles vulnerabilidades y he implementado medidas de protección. Además, he creado una API para facilitar la integración de datos entre el sitio web y aplicaciones externas.</Text>
                </Box>
                <Box mb={2}>
                    <Text fontWeight="bold">Ebuga (Marzo 12 - Septiembre 14)</Text>
                    <Text>He participado en la implementación de un sistema de gestión de inventario en tiempo real para la concesionaria de automóviles en línea, asegurando que el sitio web refleje niveles de stock y disponibilidad precisos. He optimizado las consultas a la base de datos para mejorar el rendimiento del sitio web de ventas de automóviles en línea. Además, he creado una API para facilitar la sincronización de datos entre el frontend del sitio web y el backend de la oficina, garantizando consistencia en todas las plataformas.</Text>
                </Box>
                <Box>
                    <Text fontWeight="bold">INRETI (Octubre 11 - Septiembre 12)</Text>
                    <Text>He colaborado con ingenieros de hardware para implementar un protocolo de comunicación en tiempo real entre la aplicación de spinning y el dispositivo conectado, permitiendo interacción fluida durante clases virtuales. También he desarrollado una función de mapeo de rutas virtuales dentro de la aplicación, que permite a los usuarios visualizar su progreso en rutas simuladas con cambios de elevación, ajustes de resistencia y variaciones de velocidad.</Text>
                </Box>
            </Box>
            {/* Cuarta sección: Stack */}
            <Box my={4} className='section'>
                <Text mb={2} fontSize={24} color={'gray.500'} pos={'relative'}
                    _before={{
                        content: `""`,
                        position: "absolute",
                        width: "80%",
                        height: "1px",
                        bottom: 0,
                        right: 0,
                        bg: "gray.500",
                        opacity: "0.2",
                    }}>Stack</Text>
                {chunkedTechnologies.map((row, rowIndex) => (
                    <List key={rowIndex} display="flex" flexDirection="row" justifyContent="space-between" mb={3}>
                        {row.map((tech: { icon: any; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | PromiseLikeOfReactNode | null | undefined; }, techIndex: Key | null | undefined) => (
                            <ListItem key={techIndex} flex={1} display={'flex'}>
                                <ListIcon as={tech.icon} color={getColor(tech.name as ColorType)} />
                                <Text>{tech.name}</Text>
                            </ListItem>
                        ))}
                    </List>
                ))}
            </Box>
            {/* Quinta sección: Formación Académica */}
            <Box my={4} className='section'>
                <Text mb={2} fontSize={24} color={'gray.500'} pos={'relative'}
                    _before={{
                        content: `""`,
                        position: "absolute",
                        width: "80%",
                        height: "1px",
                        bottom: 0,
                        right: 0,
                        bg: "gray.500",
                        opacity: "0.2",
                    }}>Formación Académica</Text>
                <Box mb={2}>
                    <Text fontWeight="bold">DevOps Bootcamp (Netmind) 2018 - 2019</Text>
                    <Text>Desarrollo Front-End con Angular, Diseño de Bases de Datos NoSQL con MongoDB, Desarrollo de APIs RESTful con Express.js, e Implementación de Servidores con Node.js. Exploré los fundamentos de Angular, MongoDB, Express.js y Node.js, adquiriendo las habilidades para construir interfaces interactivas y desarrollar servicios web escalables.</Text>
                </Box>
                <Box mb={2}>
                    <Text fontWeight="bold">Grado Superior ADAI (Escola Pia Santa Anna) 2009-2012</Text>
                    <Text>Participé en el proyecto de la creación de una aplicación para gestionar una tienda de ropa. Esta app se conectaba al TPV y tenía una página web para verificar el stock. Durante este proyecto, aprendí y apliqué los principios SOLID para garantizar la calidad y la escalabilidad del código. Esta experiencia me proporcionó una base sólida en el desarrollo de aplicaciones y habilidades prácticas relevantes para mi futura carrera en el campo de la informática y el desarrollo de software.</Text>
                </Box>
                <Box mb={2}>
                    <Text fontWeight="bold">Grado Medio Sistemas Microinformáticos y Redes (Escola Pia Santa Anna) 2009-2007</Text>
                    <Text>Me ha proporcionado una formación integral en informática, abarcando temas como sistemas operativos, redes de computadoras, mantenimiento de equipos, seguridad informática y programación básica. He participado en proyectos prácticos, como la configuración de redes domésticas, la implementación de servidores web locales y el desarrollo de aplicaciones simples.</Text>
                </Box>
            </Box>
            <Text sx={{ pageBreakAfter: 'always' }}>&nbsp;</Text>
            <Text sx={{ pageBreakBefore: 'always' }}>&nbsp;</Text>
            {/* Sexta sección: Competencias */}
            <Box my={4} className='section'>
                <Text mb={2} fontSize={24} color={'gray.500'} pos={'relative'}
                    _before={{
                        content: `""`,
                        position: "absolute",
                        width: "80%",
                        height: "1px",
                        bottom: 0,
                        right: 0,
                        bg: "gray.500",
                        opacity: "0.2",
                    }}>Competencias</Text>
                <UnorderedList>
                    <ListItem>
                        <Text fontWeight="bold" as={'span'}>S (Responsabilidad Única):</Text>
                        <Text as={'span'} > Resolución de problemas con un enfoque claro y definido.</Text>
                    </ListItem>
                    <ListItem>
                        <Text fontWeight="bold" as={'span'}>O (Abierto/Cerrado):</Text>
                        <Text as={'span'}> Pensamiento analítico para diseñar sistemas que puedan extenderse sin modificar el código existente.</Text>
                    </ListItem>
                    <ListItem>
                        <Text fontWeight="bold" as={'span'}>L (Sustitución de Liskov):</Text>
                        <Text as={'span'}>Habilidades de comunicación para garantizar que los módulos y clases puedan ser intercambiados sin afectar la funcionalidad del programa.</Text>
                    </ListItem>
                    <ListItem>
                        <Text fontWeight="bold" as={'span'}>I (Segregación de Interfaces):</Text>
                        <Text as={'span'}>Trabajo en equipo para dividir tareas de manera eficiente y minimizar la interdependencia entre los componentes del sistema.</Text>
                    </ListItem>
                    <ListItem>
                        <Text fontWeight="bold" as={'span'}>D (Inversión de Dependencias):</Text>
                        <Text as={'span'}>Adaptabilidad y flexibilidad para cambiar las implementaciones de manera fácil y sin causar efectos no deseados en otras partes del sistema.</Text>
                    </ListItem>

                </UnorderedList>
            </Box>
            {/* <style jsx global>{printStyles}</style> */}
        </Box>
    );
};

export default CVPage;
