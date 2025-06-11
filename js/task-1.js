function slugify(text) {
    text = text.toLowerCase();
    let array = text.split(" ");
    return array.join("-");
}

console.log(slugify("Arrays for beginners"));
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript")); 
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));