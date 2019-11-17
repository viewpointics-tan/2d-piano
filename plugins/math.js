export { quotient, mod }

function quotient(x, y) {
  return Math.floor(x / y)
}
function mod(x, y) {
  return x - quotient(x, y) * y
}
