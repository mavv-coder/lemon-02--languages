console.log("************** PRACTICE 15 *********************");
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * PLAYERS ORDER *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * En una gran cantidad de juegos el sistema de turnos es sencillo, una vez el jugador
 * actual ha consumido su turno, pasa al final de la cola y le toca al siguiente. Dada una
 * lista inicial de jugadores, implementa una función que devuelva la nueva lista de
 * jugadores, en el orden correcto, después de X turnos.
 * Aunque se puede resolver con el operador `%`, intenta idear una solución usando
 * spread/rest y destructuring.
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
const getPlayersOrder = (players: string[], turns: number) => {
  let n: number = turns;
  while (n > 3) {
    n -= 4;
  }
  console.log(n);
  console.log(turns % 4);
};

const newOrderIn2Turns = getPlayersOrder(["Ana", "Juan", "Pablo", "Lucia"], 21);
console.log(newOrderIn2Turns); // ["Pablo", "Lucia", "Ana", "Juan"]
