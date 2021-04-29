function convert(num) {
    let wordsArr = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", 
        "Seven", "Eight", "Nine"]

    let numString = num.toString()

    if(num < 0) throw new Error("Negative numbers are not supported")
    
    let numbersIntoString = ''
    for (digit of numString) {
        numbersIntoString += wordsArr[digit]
    }
    return numbersIntoString
}

let output = ''
process.argv.slice(2).forEach(number =>  output += convert(number) + ',')
console.log(output.slice(0, -1))