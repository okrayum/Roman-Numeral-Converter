// select elements
const input = document.getElementById("input");
const form = document.querySelector("form");
const result = document.getElementById("result");

// build state objects
const state = {
    input: ""
}

const handleChange = (e) => {
    let { name, value } = e.target;
    state[name] = value;
}

// add eventListener for input
input.addEventListener("input", handleChange);

const handleSubmit = (e) => {
    e.preventDefault();
    convertToRoman(state.input);
}

form.addEventListener("submit", handleSubmit);

const convertToRoman = (num) => {
    // roman/numeral key:values
    const LookupTable = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10, 
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }

    let romanNums = "";

    for (const key in LookupTable) {
        const numberValue = LookupTable[key];

        while (numberValue <= num) {

            num -= numberValue;
            romanNums += key;
        } //end while loop
    } //end for loop

    
    input.value = "";
    result.innerHTML = `${romanNums}`;
    
}
