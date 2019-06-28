let score = 0
const WORDS_TO_TYPE = ['becode', 'ecriture', 'test']
let wordToType = WORDS_TO_TYPE[score].toUpperCase();
let letterTypied = "";
let goodKeyPressedCount = 0;

// Create the div where the word to type is display
function addDiv(newContentParam, currentDivIdParam) {
	let newDiv = document.createElement("div");
    newDiv.classList.add("word-to-type");
    
	let newContent = document.createTextNode(newContentParam);
	newDiv.appendChild(newContent);
    
    
    let currentDiv = document.getElementById(currentDivIdParam);
	document.body.insertBefore(newDiv, currentDiv);
}

addDiv(wordToType, "main-div");
// Store the Div of the word to type
let letterToChangeColor = document.querySelector(".word-to-type");

// Capture key pressed
document.addEventListener("keydown", function(e) {
	// Disable the default usage of the key (shortcut)
	e.preventDefault();

	// Store the last key typied with the keyboard
	letterTypied = String.fromCharCode(e.keyCode);
	console.log(letterTypied);

	// VERIFY which key is pressed
	if (goodKeyPressedCount < wordToType.length) {
		// If the you pressed the good key, add 1 to goodKeyPressedCount, else reset it
		if (letterTypied === wordToType[goodKeyPressedCount]) {
			// Change de color of the good letter typed
			letterToChangeColor.innerHTML = letterToChangeColor.innerHTML.replace(
				wordToType[goodKeyPressedCount],
				`<span style="color: white;"> ${
					wordToType[goodKeyPressedCount]
				} </span>`
			)

			goodKeyPressedCount++;
            console.log("COUNT: " + goodKeyPressedCount);
        
        // FAIL CONDITION:
		} else {
			goodKeyPressedCount = 0;
			console.log("COUNT: " + goodKeyPressedCount);
			letterToChangeColor.innerHTML = wordToType
			console.log(letterToChangeColor);
		}
	}

	// WIN CONDITION
	if (goodKeyPressedCount === wordToType.length) {
        // Update score and display it:
        score++
        document.getElementById('score').innerHTML = `Score: ${score}`

        // Reset key count:
        goodKeyPressedCount = 0

        // Define the new word to type and display it:
        wordToType = WORDS_TO_TYPE[score].toUpperCase()
        letterToChangeColor.innerHTML = wordToType
        
        console.log("GG !");
	}
});
