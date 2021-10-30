export default function rgbToHex({ r, g, b }, float) {
  const red = float ? r * 255 : r
  const green = float ? g * 255 : g
  const blue = float ? b * 255 : b

  return `#"${((1 << 24) + (red << 16) + (green << 8) + blue)
    .toString(16)
    .slice(1)}`
}
