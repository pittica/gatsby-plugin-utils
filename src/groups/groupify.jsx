export default function groupify(slug, group) {
  const parts = []

  if (group) {
    parts.push(group)
  }

  parts.push(slug)

  return `/${parts.join("/")}`
}
