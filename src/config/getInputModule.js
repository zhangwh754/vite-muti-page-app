import fs from 'fs'
import path from 'path'

// 你的入口文件夹路径
const inputFolder = path.resolve(process.cwd(), './src/pages')

// 读取文件夹中的文件夹列表
const entryFolders = fs.readdirSync(inputFolder)

// 生成 Rollup 的 input 配置
const getInputModule = () => {
  return entryFolders.reduce((input, folder) => {
    const folderPath = path.join(inputFolder, folder)

    // 确保是文件夹
    if (fs.lstatSync(folderPath).isDirectory()) {
      const indexPath = path.join(folderPath, 'index.html')
      if (fs.existsSync(indexPath)) {
        const name = path.basename(folder)
        // eslint-disable-next-line no-param-reassign
        input[name] = indexPath
      }
    }
    return input
  }, {})
}

export default getInputModule
