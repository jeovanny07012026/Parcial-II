// Interface: describe cómo es una reservación
interface Reservacion {
  id: number;
  cliente: string;
  personas: number;
  zona: string;
}

//FUNCIONES

// Función 1: atiende la primera reservación de la lista
function atender_primera_reservacion(
  lista: Reservacion[],
): Reservacion | undefined {
  const atendida: Reservacion | undefined = lista.shift();

  if (atendida === undefined) {
    console.log("No hay reservaciones pendientes para atender.");
    return undefined;
  }

  console.log(
    `Atendiendo a ${atendida.cliente}, personas: ${atendida.personas}`,
  );
  return atendida;
}

// Función 2: busca una reservación por su id y muestra el resultado
function buscar_por_id(lista: Reservacion[], id_buscado: number): void {
  const encontrada: Reservacion | undefined = lista.find(
    (reservacion: Reservacion) => reservacion.id === id_buscado,
  );

  if (encontrada === undefined) {
    console.log(`No existe una reservación con id ${id_buscado}.`);
  } else {
    console.log(
      `Id ${id_buscado}: ${encontrada.cliente}, ${encontrada.personas} personas, zona ${encontrada.zona}.`,
    );
  }
}

// Función 3: devuelve las reservaciones de Terraza con 5 o más personas
function consultar_terraza_grande(lista: Reservacion[]): Reservacion[] {
  const resultado: Reservacion[] = lista.filter(
    (reservacion: Reservacion) =>
      reservacion.zona === "Terraza" && reservacion.personas >= 5,
  );
  return resultado;
}

//PROGRAMA PRINCIPAL

// 1. Organiza los datos: arreglo tipado con 4 reservaciones iniciales
const lista_reservaciones: Reservacion[] = [
  { id: 1, cliente: "Ana Martínez", personas: 2, zona: "Interior" },
  { id: 2, cliente: "Luis Hernández", personas: 6, zona: "Terraza" },
  { id: 3, cliente: "Carmen Flores", personas: 5, zona: "Interior" },
  { id: 4, cliente: "Jorge Rivas", personas: 3, zona: "Terraza" },
];

// 2. Registra nuevas reservaciones
const nueva_normal: Reservacion = {
  id: 5,
  cliente: "Sofía Mendoza",
  personas: 4,
  zona: "Terraza",
};
lista_reservaciones.push(nueva_normal);

// Agrego una reservación prioritaria al inicio con unshift()
const nueva_prioritaria: Reservacion = {
  id: 6,
  cliente: "Roberto Peña",
  personas: 2,
  zona: "Interior",
};
lista_reservaciones.unshift(nueva_prioritaria);

// Muestro la lista antes de atender para revisar el orden
console.log("Lista antes de atender:");
console.log(lista_reservaciones);

// 3. Atiende una reservación
// Llamo a la función: retira la primera y guardo lo que devuelve
const reservacion_atendida: Reservacion | undefined =
  atender_primera_reservacion(lista_reservaciones);
console.log("Reservación atendida:", reservacion_atendida);

console.log("Lista después de atender:");
console.log(lista_reservaciones);

// 4. Busca y consulta
// Primera prueba: un id que sí existe
buscar_por_id(lista_reservaciones, 2);
buscar_por_id(lista_reservaciones, 6);

// Antes de filtrar, guardo cuántas reservaciones hay
const cantidad_antes_filtrar: number = lista_reservaciones.length;

// Llamo a la función de filtro
const terraza_grande: Reservacion[] =
  consultar_terraza_grande(lista_reservaciones);

// Después de filtrar, vuelvo a contar
const cantidad_despues_filtrar: number = lista_reservaciones.length;

// Muestro el resultado del filtro o un mensaje si está vacío
if (terraza_grande.length === 0) {
  console.log("No hay reservaciones de terraza con 5 o más personas.");
} else {
  console.log("Terraza con 5 o más personas:");
  console.log(terraza_grande);
}

// 5. Pruebo la función con un arreglo vacío
const lista_vacia: Reservacion[] = [];
atender_primera_reservacion(lista_vacia);

// 6. Estado final
console.log("--- ESTADO FINAL ---");
console.log("Reservaciones pendientes:");
console.log(lista_reservaciones);
console.log(`Cantidad pendientes (length): ${lista_reservaciones.length}`);
console.log(`Coincidencias del filtro: ${terraza_grande.length}`);
console.log(
  `Antes de filtrar: ${cantidad_antes_filtrar} | Después de filtrar: ${cantidad_despues_filtrar}`,
);
