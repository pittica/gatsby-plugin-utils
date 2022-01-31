const categories = {
  text: ["txt"],
  picture: ["jpg", "jpeg", "bmp", "svg"],
  music: ["mp3", "wav", "m4a"],
  video: ["mp4", "m4v", "avi", "mpg", "mpeg"],
  zip: ["zip", "rar", "tgz", "7zip"],
  pdf: ["pdf"],
  word: ["doc", "docx", "rtf", "odt"],
  excel: ["xls", "xlsx", "xlsm"],
}

export default function fileCategory(extension) {
  const ext = extension.replace(/^\./, "").toLowerCase()
  let file = null

  Object.keys(categories).some((key) => {
    const category = categories[key]

    if (category.indexOf(ext) != -1) {
      file = key

      return true
    }
  })

  return file
}
