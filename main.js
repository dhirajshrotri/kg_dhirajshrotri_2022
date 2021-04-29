function convert(num) {
    let wordsArr = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", 
        "Seven", "Eight", "Nine"]

    let numString = num.toString()

    if(num < 0) throw new Error("Negative numbers are not supported")
    
    let output = ''
    for (digit of numString) {
        output += wordsArr[digit]
    }
    return output
}

console.log(convert(10))