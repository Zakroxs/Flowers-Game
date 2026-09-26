# 🌸 Flowers

Un juego de preguntas para jugar con alguien. Una ruleta saca una pregunta, uno la lee y anota lo que responde el otro, y después cambian los papeles. Cuando se acaba la cita te queda todo anotado para leerlo juntos después.

Sirve para una cena, un viaje, una tarde sin plan… o para conocer mejor a esa persona que te gusta. Sin cuentas, sin registros, sin servidor: es una página web y ya.

**Demo:** <https://zakroxs.github.io/Flowers-Game/>

---

## Cómo se juega

**Un solo teléfono.** Pongan los dos nombres arriba. Quien tiene el turno toca *Girar ruleta*, lee la pregunta en voz alta y escribe lo que le responda el otro. Después toca *Listo* y les toca al revés. Al final abren *Recuerdos* y copian las respuestas o se las mandan por WhatsApp.

**Cada uno en su teléfono.** Toca el ícono 🌐. Uno crea la sala y le manda su código por WhatsApp; el otro pega el código, le devuelve el suyo y listo, quedan conectados solos. No hace falta cuenta, pero sí que los dos estén en línea al mismo tiempo.

Si la conexión falla, el juego lo dice y pueden reintentarlo generando códigos nuevos.

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

No hay analítica, ni cookies, ni servicios de terceros. Las respuestas, los nombres y las partidas se guardan solo en el navegador, en ese dispositivo. En el modo online lo único que viaja es el estado de la partida, y va cifrado directo entre los dos teléfonos; si se cae la conexión, se borra.

## Limitaciones

El modo online a veces tarda unos segundos o falla si alguien tiene VPN puesta, o si la red es muy restrictiva. Cuando pasa, avisa en pantalla. Usa servidores públicos y gratuitos para ayudarse a conectar, así que pueden ir lentos o saturados: si falla mucho, la opción fácil es jugar en un solo teléfono.

## Licencia

No hay archivo de licencia todavía. Si lo publican, agreguen un `LICENSE` y lo mencionen aquí.
