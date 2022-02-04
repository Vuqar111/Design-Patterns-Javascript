// Basic Structure

// (function() {
// // Declare private vars and functions

// return {
// // Declare public var and functions
// }
// })();

// This is Standart module Pattern
const UICTrl = (function() {
    let text = 'Hello World';

    const changeText = function() {
        const element = document.querySelector('h1')
        element.textContent = text
    }

    return {
     callChangeText: function() {
         changeText()
         console.log(text)
     }
    }
})()

UICTrl.callChangeText();


