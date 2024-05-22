const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

// an array of strings that can be used to generate a random word
const WORDS = [
  'strawberry',
  'orange',
  'apple',
  'banana',
  'pineapple',
  'kiwi',
  'peach',
  'pecan',
  'eggplant',
  'durian',
  'peanut',
  'chocolate',
];


// For now, we'll hardcode the word that the user has to guess
// You can change this to choose a random word from WORDS once you
// finish this lab but we hard code it so we know what the word is
// and can tell if things look correct for this word

// const randomIndex = Math.floor(Math.random() * (WORDS.length));
// const word = WORDS[index];
// const word = 'hello'
// Loop over the letters in `word` and create divs.
// The divs should be appended to the section with id="word-container".
//
// Use the following template string to create each div:
// `<div class="letter-box ${letter}"></div>`
//
function createDivsForChars(word) {
  for(const letter of word) {
    document.querySelector('#word-container').insertAdjacentHTML(
      'beforeend',
      `<div class="letter-box ${letter}"></div>`)
    }
  }

  function generateLetterButtons() {
    for(const letter of ALPHABET) {
      document.querySelector('#letter-buttons').insertAdjacentHTML(
        'beforeend',
        `<button>${letter}</button>`)
      }
    }

    // Set the `disabled` property of `buttonEl` to true.
    //
    // `buttonEl` is an `HTMLElement` object.
    // setAttribute() method MDN: By setting the value of the disabled attribute to the empty string (""),
    // we are setting disabled to true, which results in the button being disabled.
    function disableLetterButton(buttonEl) {
      buttonEl.setAttribute('disabled', "");
    }

    //document.querySelector("#letter-buttons").addEventListener('click', event => {
      //const disable = document.getElementById("#letter-buttons")
      //})

      // This is a helper function we will use in the future
      // It should return `true` if `letter` is in the word
      // For now, you should test it out to make sure it works
      function isLetterInWord(letter) {
        return word.includes(letter)
      }

      //let isLetterInWord = letter => word.includes(letter)

      // This function is called to start the game.
      // a variable to keep track of how many wrong guesses were made
      // a variable to keep track of how many correct guesses were made
      function startGame() {
        let numWrong = 0;
        let correctGuesses = 0;
        const word = WORDS[Math.floor(Math.random() * (WORDS.length))];
        createDivsForChars(word);
        generateLetterButtons()
      }

      // in the next lab, you will be adding functionality to handle when
  // someone clicks on a letter

startGame(); // Call startGame() when the page loads. //<- everything needed to initialize app goes in this
