export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  console.log(subtract.caller);
  console.log(subtract.arguments);
  const zzz = "zzz";
  return a - b;
}
