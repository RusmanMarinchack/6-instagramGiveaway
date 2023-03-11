const fs = require('fs')

let allFiles = []

let files = fs.readdirSync('./files')

for(let i=0; i<files.length; i++) {
    allFiles.push(fs.readFileSync(`./files/out${i}.txt`, 'utf-8').split('\n'))
}

function uniqueValues() {
    let allNames = []   
    let uniqueNames = []

    allFiles.forEach(item => {
        item.forEach(e => {
            allNames.push(e)
        })
    })
    

    allNames.sort().filter((item, index, arr) => {
        if(arr[index + 1] !== item && arr[index - 1] !== item) uniqueNames.push(item)
    })

    return uniqueNames
}

// Виводимо інформацію з першої функції.

const start = new Date().getSeconds()
console.log(`${uniqueValues().length} унікальних імен.`)
const end = new Date().getSeconds()

console.log(`Функція шукала ${end - start} секунд(и).\n`)
// =====


function existInAllFiles(array, length) {
    let count = []
    let namesRepeated = []


    array.forEach(item => {
        return item.sort().filter((item, index, arr) => {
            if(item !== arr[index - 1]) {
                namesRepeated.push(item)
            }
        })
    })

    namesRepeated.forEach((item) => {
        if(count[item] === undefined) {
            count[item] = 1
        } else {
            count[item]++
        }
    })

    count = Object.entries(count)

    count = count.sort().filter(item => {
        if(item[1] === length) {
            return item
        }
    })
    
    return count
}

// Виводимо інформацію з другої функції.

let startExistInAllFiles = new Date().getSeconds()
console.log(`${existInAllFiles(allFiles, allFiles.length).length} кількість імен зустрічаються у всіх файлах.`)
let endExistInAllFiles = new Date().getSeconds()

console.log(`Функція шукала ${endExistInAllFiles - startExistInAllFiles} секунд(и).\n`)
// =====

// Виводимо інформацію з третьої функції.
let startExistInAtleastTen = new Date().getSeconds()
console.log(`${existInAllFiles(allFiles, 10).length} кількість імен зустрічаються у десятьох файлах.`)
let endExistInAtleastTen = new Date().getSeconds()

console.log(`Функція шукала ${endExistInAtleastTen - startExistInAtleastTen} секунд(и).\n`)