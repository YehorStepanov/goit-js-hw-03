function makeArray(firstArray, secondArray, maxLength) {
    let array = [];

    if (firstArray.length <= maxLength) {
        for (const element of firstArray) {
            array.push(element);
        }
        maxLength -= firstArray.length;
    } else {
        for (let i = 0; i < maxLength; i++){
            array.push(firstArray[i])
        }
    }
    if (maxLength > 0) {
        for (let i = 0; i < maxLength; i++){
            array.push(secondArray[i])
        }
    }

    return array;
}
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));


