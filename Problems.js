function main() {
    problem1();
    //problem2();
    //problem3();
}
main();

//Write a JavaScript function that accepts a sentence of words all in lowercase,
//and returns every other word in all caps.
//Hint: see toUppercase()
function problem1(){
    var mixsent = "hi, how are you doing today?";
    var words = mixsent.split(" ");
    for (var i = 0; i < words[6]; i++) {
        if (i % 2 === 0) ;
        var cap = words[i];
    }
    console.log(cap.toUpperCase());


}

//Write a JavaScript function that accepts a word in all lowercase or in all uppercase, 
//and returns the word in the opposite case. 
// Hint: see toLowercase()
function problem2() {
    var double = "Welcome to the THUDERDOOME!!!";
    double.toLocaleLowerCase();
}

//Write a JavaScript function to get the first n element(s) of an array.
//Passing a parameter 'n' will return the first 'n' elements of the array.
// ex:
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],1));
function problem3() {


}