# Concordance
A program that will generate a concordance, i.e. an alphabetical list of all word occurrences, labeled with word frequencies and the sentence numbers in which each occurence appeared. 

# How to run the code
In the terminal/command prompt
1.) Install Node.js.
2.) Go to the file path where the file is located at.
3.) Run `node index.js` 

# Example
Arbitrary text: Given an arbitrary text document written in English, write a program that will generate a concordance, i.e. an alphabetical list of all word occurrences, labeled with word frequencies.\nBonus: label each word with the sentence numbers in which each occurrence appeared.

Result: 
Map {
  'a' => { number_occurence: 2, sentence: [ 1, 1 ] },
  'all' => { number_occurence: 1, sentence: [ 1 ] },
  'alphabetical' => { number_occurence: 1, sentence: [ 1 ] },
  'an' => { number_occurence: 2, sentence: [ 1, 1 ] },
  'appeared' => { number_occurence: 1, sentence: [ 2 ] },
  'arbitrary' => { number_occurence: 1, sentence: [ 1 ] },
  'Bonus' => { number_occurence: 1, sentence: [ 2 ] },
  'concordance' => { number_occurence: 1, sentence: [ 1 ] },
  'document' => { number_occurence: 1, sentence: [ 1 ] },
  'each' => { number_occurence: 2, sentence: [ 2, 2 ] },
  'English' => { number_occurence: 1, sentence: [ 1 ] },
  'frequencies' => { number_occurence: 1, sentence: [ 1 ] },
  'generate' => { number_occurence: 1, sentence: [ 1 ] },
  'Given' => { number_occurence: 1, sentence: [ 1 ] },
  'ie' => { number_occurence: 1, sentence: [ 1 ] },
  'in' => { number_occurence: 2, sentence: [ 1, 2 ] },
  'label' => { number_occurence: 1, sentence: [ 2 ] },
  'labeled' => { number_occurence: 1, sentence: [ 1 ] },
  'list' => { number_occurence: 1, sentence: [ 1 ] },
  'numbers' => { number_occurence: 1, sentence: [ 2 ] },
  'occurrence' => { number_occurence: 1, sentence: [ 2 ] },
  'occurrences' => { number_occurence: 1, sentence: [ 1 ] },
  'of' => { number_occurence: 1, sentence: [ 1 ] },
  'program' => { number_occurence: 1, sentence: [ 1 ] },
  'sentence' => { number_occurence: 1, sentence: [ 2 ] },
  'text' => { number_occurence: 1, sentence: [ 1 ] },
  'that' => { number_occurence: 1, sentence: [ 1 ] },
  'the' => { number_occurence: 1, sentence: [ 2 ] },
  'which' => { number_occurence: 1, sentence: [ 2 ] },
  'will' => { number_occurence: 1, sentence: [ 1 ] },
  'with' => { number_occurence: 2, sentence: [ 1, 2 ] },
  'word' => { number_occurence: 3, sentence: [ 1, 1, 2 ] },
  'write' => { number_occurence: 1, sentence: [ 1 ] },
  'written' => { number_occurence: 1, sentence: [ 1 ] }
}
