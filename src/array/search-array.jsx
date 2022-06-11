export default function searchArray(search, obj, defaultValue) {
  try {
    return (
      search.split(".").reduce((element, i) => element[i], obj) || defaultValue
    )
  } catch {
    return defaultValue
  }
}
