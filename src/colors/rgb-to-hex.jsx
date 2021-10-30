export default function rgbToHex({ r, g, b }, isFloat) {
  return `#"${(
    (1 << 24) +
    (trimChannel(r, isFloat) << 16) +
    (trimChannel(g, isFloat) << 8) +
    trimChannel(b, isFloat)
  )
    .toString(16)
    .slice(1)}`
}

function trimChannel(value, isFloat) {
  return Math.ceil(Math.min(isFloat ? value * 255 : value, 255))
}
