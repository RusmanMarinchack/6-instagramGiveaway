const fs = require('fs')

let out0 = fs.readFileSync('./files/out0.txt', 'utf-8').split('\n')
let out1 = fs.readFileSync('./files/out1.txt', 'utf-8').split('\n')
let out2 = fs.readFileSync('./files/out2.txt', 'utf-8').split('\n')
let out3 = fs.readFileSync('./files/out3.txt', 'utf-8').split('\n')
let out4 = fs.readFileSync('./files/out4.txt', 'utf-8').split('\n')
let out5 = fs.readFileSync('./files/out5.txt', 'utf-8').split('\n')
let out6 = fs.readFileSync('./files/out6.txt', 'utf-8').split('\n')
let out7 = fs.readFileSync('./files/out7.txt', 'utf-8').split('\n')
let out8 = fs.readFileSync('./files/out8.txt', 'utf-8').split('\n')
let out9 = fs.readFileSync('./files/out9.txt', 'utf-8').split('\n')
let out10 = fs.readFileSync('./files/out10.txt', 'utf-8').split('\n')
let out11 = fs.readFileSync('./files/out11.txt', 'utf-8').split('\n')
let out12 = fs.readFileSync('./files/out12.txt', 'utf-8').split('\n')
let out13 = fs.readFileSync('./files/out13.txt', 'utf-8').split('\n')
let out14 = fs.readFileSync('./files/out14.txt', 'utf-8').split('\n')
let out15 = fs.readFileSync('./files/out15.txt', 'utf-8').split('\n')
let out16 = fs.readFileSync('./files/out16.txt', 'utf-8').split('\n')
let out17 = fs.readFileSync('./files/out17.txt', 'utf-8').split('\n')
let out18 = fs.readFileSync('./files/out18.txt', 'utf-8').split('\n')
let out19 = fs.readFileSync('./files/out19.txt', 'utf-8').split('\n')

let allFiles = [out0, out1, out2, out3, out4, out5, out6, out7, out8, out9, out10, out11, out12, out13, out14, out15, out16, out17, out18, out19]

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