const animals = ['dog', 'cat', 'cow', 'horse', 'mouse']

// FOR loop
/*
for(let i = 0; i < animals.length; i++)
{
    console.log(animals[i].toUpperCase());
}
*/

// WHILE loop
/*
let i = 0

while(i < animals.length)
{
    console.log(animals[i].toUpperCase());
    i++;
}
*/

// FOREACH loop
/*
animals.forEach(el => {
    console.log(el.toUpperCase());
})
*/

// MAP loop
/*
const newAnimals = animals.map(el => {
    const animalUpperCase = el.toUpperCase()
    console.log(animalUpperCase)
    return animalUpperCase
})
*/

// DO WHILE loop
/*
let j = 0

do{
    console.log(animals[j].toUpperCase())
    j++;
}
while(j < animals.length)
*/

// FOR OF
/*
for(const el of animals)
{
    console.log(el.toUpperCase())
}
*/

for(const key in animals)
{
    console.log(animals[key].toUpperCase())
}