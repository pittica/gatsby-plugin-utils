export default function commalify(objects) {
  const parts = []

  objects.forEach((element) => {
    parts.push(element.name)
  })

  return parts.join(", ")
}
