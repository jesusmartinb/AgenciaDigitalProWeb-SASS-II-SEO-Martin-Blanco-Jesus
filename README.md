# AgenciaDigitalProWeb-SASS-II-SEO-Martin-Blanco-Jesus
Trabajo del Curso de Desarrollo Web del Programa Carrera de Desarrollo Full Stack CoderHouse

Para la correcta compilación se utiliza el script: 
	"`sass --watch src/scss:assets/css`".

Compilación con: 
	"`npm run compilar:sass`".

Para la purga de CSS se utiliza el script: 
	"`purgecss --css assets/css/styles.css --content index.html pages/**/*.html assets/js/**/*.js --output assets/css/main.css --safelist webp no-webp`".

Purga de CSS con: 
"`npm run build:sass`".

Para la minificación de las imágenes de la carpeta "`src/img`" y la posterior conversion a formato webp y avif usar el comando "`npx gulp imagenes`".

Cambios introducidos para mejorar el SEO:

	1. Se establecen los siguientes meta keywords:
   		1. En index.html: Agencia Web,Web,Diseño web,Desarrollo Web,Optimización Web,Posicionamiento Web,Publicidad Web,Marketing Web.
		2. En agencia.html: Agencia Web,Web,Equipo,Talento,Trabajo,Sobre Nosotros,Historia,Compromiso.
   		3. En servicios.html: Agencia Web,Servicios Web,Diseño web,Desarrollo Web,Optimización Web,Posicionamiento Web,Publicidad Web,Marketing Web.
   		4. En proyectos.html: Agencia Web,Web,Portfolio,Proyectos,Clientes,Testimonios.
   		5. En planes.html: Agencia Web,Web,Planes Económicos,Precios.
   		6. En contacto.html: Agencia Web,Web,Contacto,Información,Teléfono,E-mail.
   		7. En mapa-sitio.html: Agencia Web,Web,Mapa del sitio.
	2. Se reescriben las etiquetas title con los siguientes títulos:
   		1. En index.html: ProWeb - Agencia Profesional Para La Web.
   		2. En agencia.html: ProWeb - Conozca A Fondo Nuestra Agencia.
   		3. En servicios.html: ProWeb - Servicios Para El Desarrollo De Páginas Web Atractivas, Creativas, Modernas.
   		4. En proyectos.html: ProWeb - Portfolio De Proyectos. Que Opinan Nuestros Clientes.
   		5. En planes.html: ProWeb - Planes Económicos Adaptados A Sus Necesidades.
   		6. En contacto.html: ProWeb - Contacte Con Nosotros. Se lo ponemos Fácil.
   		7. En mapa-sitio.html: ProWeb - Mapa del sitio.
	3. Se establecen las etiquetas meta description:
   		1. En index.html: Páginas web únicas y estrategias de marketing digital para liderar tu sector online.
   		2. En agencia.html: En Proweb te ofrecemos un servicio impecable basado en nuestro historial y las personas  talentosas que lo hacen posible.
   		3. En servicios.html: En Proweb encontrará todos los servicios necesarios para el perfecto funcionamiento de su web, diseño, desarrollo, optimización, posicionamiento, publicidad, marketing,...
   		4. En proyectos.html: Puede comprobar algunos de los proyectos de nuestro portfolio así como las opiniones de nuestros clientes.
   		5. En planes.html: Compruebe lo que incluyen nuestros diferentes planes así como el proceso de gestión que seguimos con nuestros clientes.
   		6. En contacto.html: En ProWeb facilitamos el contacto con nuestros clientes a todos los niveles.
   		7. En mapa-sitio.html: Fácil acceso a todas las páginas de nuestro sitio.
	4. Se aplica position fixed al logo y la barra de navegación en dispositivos superiores a 768px de ancho al objeto de mejorar la accesibilidad a los menus.
	5. Se crea un mapa del sitio al cual se enlaza desde el footer de todas las páginas.
	6. Se genera un archivo sitemap.xml.
	7. Se revisa el contenido de los atributos alt de las imágenes, así como el texto de los elementos <a>.
	8. Se minifica el tamaño de las imágenes y se convierten a formatos webp y avif, usandose un elemento picture que permite utilizar un fallback.

Url GitHub: https://github.com/jesusmartinb/AgenciaDigitalProWeb-SASS-II-SEO-Martin-Blanco-Jesus

Url GitHub Pages: https://jesusmartinb.github.io/AgenciaDigitalProWeb-SASS-II-SEO-Martin-Blanco-Jesus
