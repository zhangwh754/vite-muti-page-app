import fs from 'fs'
import path from 'path'

// 你的入口文件夹路径
const inputFolder = path.resolve(process.cwd(), './src/pages')

// 递归获取所有 HTML 文件路径
const getAllHtmlFiles = folderPath => {
  let htmlFiles = []
  const files = fs.readdirSync(folderPath)
  files.forEach(file => {
    const filePath = path.join(folderPath, file)
    const fileStat = fs.statSync(filePath)
    if (fileStat.isDirectory()) {
      // 如果是文件夹，则递归获取文件夹内的 HTML 文件
      htmlFiles = htmlFiles.concat(getAllHtmlFiles(filePath))
    } else if (path.extname(file) === '.html') {
      // 如果是 HTML 文件，则将其路径添加到数组中
      htmlFiles.push(filePath)
    }
  })
  return htmlFiles
}

// 生成 Rollup 的 input 配置
const getInputModule = () => {
  const htmlFiles = getAllHtmlFiles(inputFolder)
  const input = {}
  htmlFiles.forEach(filePath => {
    const relativePath = path.relative(inputFolder, filePath)

    const name = relativePath.replace(/\\/g, '_').split('.html')[0]

    input[name] = filePath
  })
  return input
}

export default getInputModule
