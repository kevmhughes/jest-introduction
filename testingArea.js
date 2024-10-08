const array = ["cat", "dog", "up", "rhythm", "education"]

const check = array.find(word =>
word.includes("a") && 
word.includes("e") && 
word.includes("i") && 
word.includes("o") && 
word.includes("u"))

console.log(check)