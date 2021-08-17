module.exports.categorify = (data) => {
  const categories = []

  data.forEach(({ id, name, slug }) => {
    categories[id] = {
      name,
      slug,
    }
  })

  return categories
}
