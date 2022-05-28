export default function filterArray(value) {
  if (Array.isArray(value)) {
    return value
  } else {
    return typeof value === "undefined" ? [] : [value]
  }
}
