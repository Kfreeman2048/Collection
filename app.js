'use strict';
const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    };

    console.log('current class name: ' +className);
});

function vowelCheck(str) {
    let hasVowel = false;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let char of str) {
        if (vowels.includes(char)) {
            if (hasVowel === false) {
                hasVowel = true;
            };
        };
    };
    return hasVowel;
};

var inputField = document.getElementById("textInput");

inputField.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("submitButton").click();
        };
});