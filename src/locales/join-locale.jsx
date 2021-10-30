export default function joinLocale({ language, culture }) {
  const value = []

  if (language) {
    value.push(language.toLowerCase())
  }

  if (culture) {
    value.push(culture.toUpperCase())
  }

  return value.join("_")
}
