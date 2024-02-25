/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO

    const wordTable = {};

    for (let i = 0; i < this.words.length; i++) {

      let toChain = this.words[i + 1] ? this.words[i + 1] : null;

      if (!wordTable[this.words[i]]) {

        wordTable[this.words[i]] = [toChain];

      } else {

        if (!wordTable[this.words[i]].includes(toChain)) {

          wordTable[this.words[i]].push(toChain);
        }
      }
    }

    return wordTable;
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO

    let idx = Math.floor(Math.random() * this.words.length);
    let wordToAdd = this.words[idx];
    let returText = wordToAdd;

    while (true) {

      numWords--;

      idx = Math.floor(Math.random() * this.makeChains()[wordToAdd].length);

      let wordArr = this.makeChains()[wordToAdd][idx];

      if (!wordArr || numWords === 0) {
        break;
      }

      returText += ` ${wordArr}`;

      wordToAdd = wordArr;
    }

    return returText;
  }
}


module.exports = { MarkovMachine }