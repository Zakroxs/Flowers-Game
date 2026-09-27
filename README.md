# 🌸 Flowers

Un juego de preguntas para jugar con alguien. Una ruleta saca una pregunta, uno la lee y anota lo que responde el otro, y después cambian los papeles. Cuando se acaba la cita te queda todo anotado para leerlo juntos después.

Sirve para una cena, un viaje, una tarde sin plan… o para conocer mejor a esa persona que te gusta. Sin cuentas, sin registros, sin servidor: es una página web y ya.

**Demo:** <https://zakroxs.github.io/Flowers-Game/>

---

## Cómo se juega

**Un solo teléfono.** Pongan los dos nombres arriba. Quien tiene el turno toca *Girar ruleta*, lee la pregunta en voz alta y escribe lo que le responda el otro. Después toca *Listo* y les toca al revés. Al final abren *Recuerdos* y copian las respuestas o se las mandan por WhatsApp.

**Cada uno en su teléfono.** Toca el ícono 🌐. Uno crea la sala y le manda su código por WhatsApp; el otro pega el código, le devuelve el suyo y listo, quedan conectados solos. No hace falta cuenta, pero sí que los dos estén en línea al mismo tiempo.

Si la conexión falla, el juego lo dice y queda un botón **Reintentar** que no borra lo que ya escribieron.

### Si no se conectan: el TURN

Esto es lo que casi siempre hace fallar el modo online, así que conviene entenderlo.

Cuando los dos están en el mismo wifi, los navegadores se encuentran solos. Pero si cada uno está en una red distinta —datos móviles en ciudades diferentes— los dos están detrás de un NAT compartido y **no existe ruta directa**. En ese caso hace falta un TURN: un servidor que reenvía el tráfico entre los dos. Sin un TURN que funcione, conectar entre redes distintas es imposible.

El juego trae una lista de TURN públicos, pero **ninguno es confiable**: se caen, se saturan y el que venía de fábrica (OpenRelay) dejó de aceptar sus credenciales. Por eso hay dos cosas para probar:

1. **🔍 Probar conexión**, en la ventana 🌐. Ábrelo con datos móviles y tócalo: no hace falta la otra persona. Si dice "relay/TURN ✅" tu red puede conectarse con otra; si dice que no, tu red necesita un TURN y hay que pegarle uno.
2. **⚙️ Ajustes → Servidor TURN propio**. Pegás la URL, el usuario y la contraseña, y queda con prioridad sobre todo lo demás. Se guarda en ese dispositivo.

Para conseguir uno gratis, lo más fiable es levantar **coturn** en un VPS propio:

```bash
docker run -d --network=host --name coturn coturn/coturn \
  -n --log-file=stdout --fingerprint --lt-cred-mech \
  --realm=flowers.example.com --user=TU_USUARIO:TU_CLAVE \
  --no-cli --no-multicast-peers --min-port=49152 --max-port=49200
```

Y en el firewall abrir `3478/udp`, `3478/tcp` y el rango `49152-49200/udp` (el rango de relay es lo que más se olvida, y sin él el TURN autentica pero nunca reenvía nada). Después en Ajustes:

```
turn:TU_DOMINIO:3478
turn:TU_DOMINIO:3478?transport=tcp
```

Con eso el modo online funciona entre redes sin depender de nadie.

## Cómo se abre

No hay que instalar nada. Con doble clic en `index.html` ya funciona.

Si quieren probar el modo online en la misma red, conviene abrirlo con un servidor local:

```bash
python -m http.server 8000
```

Y entrar a <http://localhost:8000>. El modo online necesita que la página esté en HTTPS (o en `localhost`, que es el caso de arriba).

Para publicarlo en GitHub Pages: suben el repo y activan *Settings → Pages → Deploy from a branch → main / root*. No hace falta nada más.

## Las preguntas

Hay 150 preguntas en cinco categorías: rompehielos, romance, conexión profunda, dilemas y retos. Cada vez que sale una se apaga, así que dentro de una partida no se repite ninguna hasta que reinicien el mazo.

Cada 3 preguntas aparece un "momento especial": un mensaje con dos respuestas para elegir, para cerrar con algo bonito. Se puede apagar desde *Ajustes*.

Si quieren agregar las suyas, hay dos formas:

- **Sin tocar el código**: en ⚙️ Ajustes → *Añadir una pregunta propia*. Queda guardada en ese teléfono.
- **De verdad en el juego**: abren `assets/script.js`, buscan `BANCO DE PREGUNTAS` y agregan la pregunta al final de la categoría que quieran, entre comillas simples y con coma.

Para crear una categoría nueva hay que tocar dos lugares: la lista de preguntas y la línea del botón en `CATS` (con su nombre, ícono y color). El filtro aparece solo.

Un consejo: escriban las preguntas en segunda persona y en singular ("¿Qué te hace…?", "¿Qué te gustaría…?"), porque la lee una persona y responde la otra.

## Los archivos

```
index.html          la estructura y las ventanas
assets/style.css    colores, tamaños, animaciones
assets/script.js    las preguntas, el juego y la conexión online
```

En `script.js` está todo comentado por secciones numeradas, así que se puede tocar sin perderse: la 2 es el banco de preguntas, la 9 es el motor del juego y la 13 es el modo online.

## Privacidad

No hay analítica, ni cookies, ni servicios de terceros, salvo el TURN que se agregue (si usás uno propio, el tráfico pasa por ese servidor, aunque va cifrado de punta a punta). Las respuestas, los nombres y las partidas se guardan solo en el navegador, en ese dispositivo. En el modo online lo único que viaja es el estado de la partida, y va cifrado directo entre los dos teléfonos; si se cae la conexión, se borra.

## Limitaciones

El modo online depende de que haya un TURN disponible. Con los públicos puede fallar o tardar; con uno propio es confiable. También puede quedar trabado si alguien tiene VPN puesta, aunque eso avisa en pantalla. Si el modo online te marea, el de un solo teléfono funciona siempre y sin conexión.

## Licencia

No hay archivo de licencia todavía. Si lo publican, agreguen un `LICENSE` y lo mencionen aquí.
