// EcmaScript 2015 (ES6): let and const keywords

// EcmaScript 2015 (ES6): let is the new var
var framework = 'Angular';
var framework = 'React';
console.log(framework);

let language = 'JavaScript!';
// let language = 'Ruby!'; // throws error
console.log(language);


// EcmaScript 2015 (ES6): const
const PI = 3.141593;
// PI = 3.0; //throws error
console.log(PI);

const jsFramework = {
  name: 'Angular'
};
jsFramework.name = 'React';

// error, cannot reassign object reference
/*
jsFramework = {
  name: 'Vue'
};
*/