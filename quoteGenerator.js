/* This programme generates a list of mash-up quotes - by combining parts of other quotes. 
In the browser, users specify:
- the number of quotes they wish to generate
- the language of the quotes generated
Once the quotes are returned to them, they then can choose whether to run the programme again. 

Author: Sam Lucas
*/

const generateQuote = (parts) => {
    let quote = "";
    for(let i=0;i<=2;i++){
        quote += parts[Math.floor(Math.random()*(parts.length))] + " ";
    }
    return quote;
}

const generateMultipleQuotes = (numberOfQuotes, parts) => {
    const quoteList = [];
    for(let i=0; i<numberOfQuotes; i++){
        quoteList.push(generateQuote(parts));
    }
    return quoteList;
}

const recieveUserInput = (message, validValues) => {
    //Give users five tries to input a correct field
    for (let i=0; i<5;i++){
        let input = prompt(message);
        for(const value  of validValues){
        // Note that if the following line used strick it would not work since prompt passes a string
        if (input == value){ 
            return input;
        }
    }
    alert("That's not a valid input, please try again");
    }
    //If users don't input a valid input, lets give them the first default value
    return validValues[0];
}

// The main programme
const englishParts = ["anomosity","killed the","cat","water","floats your", "boat","what doesn't kill me","makes me","rock"];
const malagasyParts = ["Kanga","tsara","soratra","Akory","aby","anatiny","ny","dia","fahasalamana"];

let active = true;
while (active){   
    let numberOfQuotes = recieveUserInput("How many quotes would you like? Please enter an integer between 1 and 5",[1,2,3,4,5])
    let language = recieveUserInput("Which language? Please enter either \"English\" or \"Malagasy\"",["English","Malagasy"]);
    switch (language){
        case "Malagasy":
            console.log(generateMultipleQuotes(numberOfQuotes,malagasyParts));
            break;
        case "English":
            console.log(generateMultipleQuotes(numberOfQuotes,englishParts));
            break;
    }     
    //Note "no" is the first value of the array we passthrough so that "no" will be assigned by default if users fail to input correctly.  
    active = recieveUserInput("Would you like more quotes? Please answer \"yes\" or \"no\"",["no","yes"]) === "yes" ? true : false;
}