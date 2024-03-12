import askUser from "./askUser.js";

const songPosition = askUser(`
LISTA DE CANCIONES:
1.Solo se vive una vez,
2.La macarena,
3.Paquito el chocolatero,
4.La barbacoa,
5.Sarandonga,
6.Follow the leader,
7.Mi gran noche,
8.Me colé en una fiesta,
9.Bamboléo
Selecciona un número:`);

const songs = [
  "Solo se vive una vez",
  "La macarena",
  "Paquito el chocolatero",
  "La barbacoa",
  "Sarandonga",
  "Follow the leader",
  "Mi gran noche",
  "Me colé en una fiesta",
  "Bamboléo",
];

if (typeof songs.at(Number(songPosition) - 1) === "undefined") {
  console.log(songs.at(Number(songPosition) - 1));
} else {
  console.log("Introduce un número de la lista por favor");
}
