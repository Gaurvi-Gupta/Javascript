const marvel_heros = ["thor", "Ironman", "Spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)

// const newarr = marvel_heros.concat(dc_heros)
// console.log(newarr)

const newallarr = [...marvel_heros, ...dc_heros]
// console.log(newallarr)

const num_arr = [1, 2, 3, [4, 5], 6, [6,7, [8]], 9]
const another_arr = num_arr.flat(Infinity)
// console.log(another_arr)

// console.log(Array.isArray("gaurvi"))
// console.log(Array.from("gaurvi"))
// console.log(Array.from({name: "gaurvi"})) // we have declare to take value from key or value

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3))