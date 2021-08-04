const quotient = (x: number, y: number): number => Math.floor(x / y)
const mod = (x: number, y: number): number => ((x % y) + y) % y

export { quotient, mod }
