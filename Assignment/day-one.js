// // 1. Assign the message "Hello, World!" to a variable.
// let x = 'Hello, World!'
//
// // 2. Assign a different string to a different variable.
// let y = 'You are such a big place!'
//
// // 3. Assign a number to a variable.
// let z = 5
//
// // 4. Use string concatenation to display the number from #3 in a string.
// let message = "Listen to the Jackson "
// let number = "5"
// let result = message.concat(number)
// alert(result)
//
// // 5. Make an array of at least four of your favorite movies or books or bands.
//
// // const band = 'Maserati'
//
// let bands = ['Maserati', 'The Mercury Program', 'Mogwai', 'Mouse on the Keys']
//
// // 6. Make an object of information about yourself with at least four properties.
// let darren = { sex: 'male', height: 76, ethnicity: 'white', eyes: 'blue'}

// 7. Make an array of objects containing more information about your favorite movies, books or bands. The objects should have at least three properties.
let musicgenres = [
{genre: 'PostRock', singer: 'atypical', guitar: 'typical', bass: 'always', drums: 'always', keyssynth: 'typical', groupiegirls: 'atypical'},
{genre: 'ProgRock', singer: 'always', guitar: 'always', bass: 'always', drums: 'always', keyssynth: 'typical', groupiegirls: 'never'},
{genre: 'MathRock', singer: 'never', guitar: 'always', bass: 'always', drums: 'always', keysynth: 'atypical', groupiegirls: 'never'},
{genre: 'Instrumental', singer: 'never', guitar: 'typical', bass: 'always', drums: 'always', keysynth: 'sometimes', groupiegirls: 'atypical'},
{genre: 'SynthRock', singer: 'typical', guitar: 'atypical', bass: 'sometimes', drums: 'sometimes', keyssynth: 'always', groupiegirls: 'atypical'},
{genre: 'PunkRock', singer: 'always', guitar: 'always', bass: 'always', drums: 'always', keyssynth: 'never', groupiegirls: 'typical'},
{genre: 'ClassicRock', singer: 'always', guitar: 'always', bass: 'always', drums: 'always', keyssynth: 'typical', groupiegirls: 'always'}
]

// 8. Use `for` to loop through the answer from exercise #7 and print only one property from the object. i.e., given `{ title: "Gone with the Wind" }` you print "Gone with the Wind".

let stuff = musicgenres.length
for (var i = 0; i < stuff; i++) {
  console.log(musicgenres[2].genre)
}

// EPIFANY MOMENT------- Console returned "Mathrock" //
