import filterArray from "../array/filter-array"

export default function tail(text, length, separators) {
  const chunk = text.substring(0, length)
  const ns = filterArray(separators)
  const s = ns.length > 0 ? ns : [".", "!", "?"]
  let dot = false

  s.forEach((elm) => {
    if (chunk.endsWith(elm)) {
      dot = true
    }
  })

  return chunk.substring(0, result.lastIndexOf(" "))
}
