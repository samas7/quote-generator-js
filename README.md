# Onja Javascript Project 1 : Imagine a quote generator
# Author: Sam Lucas

This programme generates a list of mash-up quotes - by combining parts of other quotes. 
In the browser, users specify:
- the number of quotes they wish to generate
- the language of the quotes generated
Once the quotes are returned to them, they then can choose whether to run the programme again. 

I utilise three functions

generateQuote - which takes parts of quotes in an array and combines them, returning a string containing the quote

generateMultipleQuotes - which runs the above function as many times as required to generate multiple quotes. It returns an array, with quotes inside it 

recieveUserInput - this uses "prompt" to get any input form the user and includes error checking. 

Improvements: 
The main improvements to make would be in error checking. If uses click "cancel" at any time, the programme will continue to ask them for valid inputs (until the maximum of 5 entries after which a default value is assigned). 
