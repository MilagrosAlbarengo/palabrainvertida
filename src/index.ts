let palabrainvertida: string = "perro";
let inverso: string = "";
for (let i: number = palabrainvertida.length - 1; i >= 0; i--) {
  inverso += palabrainvertida[i];
}
console.log(inverso);
