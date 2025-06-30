const marvelHeros =["thor","ironman","spiderman"];
const dc_heros=["Superman","flash","batman"];

// marvelHeros.push(dc_heros) // wrong method to concat to arrayes into one array
// console.log(marvelHeros);

// marvelHeros.concat(dc_heros) // wrong method to concat to arrayes into one array
// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);

let allHeroes = [...marvelHeros, ...dc_heros] /* this is called spread of multiple arrays.. this is the actual method
                                            to concatinate multiple arrayes*/ 
console.log(allHeroes);

const another_array = [1,2,3,[4,5],[6,7,[8,9,0]]]
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Tanmay"));
console.log(Array.from("Tanmay"))

console.log(Array.from({"name":"Tanmay"})); // interview type question

let score1 = 100, score2 = 200, score3 = 300;
console.log(Array.of(score1,score2,score3));


