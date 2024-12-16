export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  console.log(subtract.caller);
  console.log(subtract.arguments);
  return a - b;
}
