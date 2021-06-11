let string_text = "Given an arbitrary text document written in English, write a program that will generate a concordance, i.e. an alphabetical list of all word occurrences, labeled with word frequencies.\nBonus: label each word with the sentence numbers in which each occurrence appeared.";

//data cleansing - remove punctuations from string 
let final_string = string_text.replace(/[^A-Za-z0-9\s]/g,"").replace(/\s{2,}/g, " ");
console.log(final_string);
let split_sentence = final_string.split("\n");

let concordance_list = new Map();

/*
  data mapping - store in a map called concordance_list
  concordance_list (Type Map): 
  Key (Type String): Word
  Value (Type Object): {
    number_occurence (Type Number): n,
    sentence (Type Array): []
  }
*/
for(let split = 0; split < split_sentence.length; split++){
  let sentence = split_sentence[split].split(" ");
  let sentenceNum = split + 1;
  for(let i = 0; i < sentence.length; i++){
    if(concordance_list.has(sentence[i])){
      let obj = concordance_list.get(sentence[i]);
      obj.number_occurence += 1;
      let sentenceNumArr = obj.sentence;
      sentenceNumArr.push(sentenceNum);
      concordance_list.set(sentence[i], obj);
    } else {
      concordance_list.set(sentence[i], {number_occurence: 1, sentence: [sentenceNum]});
    }
  }
}

/*
  Sort the list by key alphabetically 
*/
var concordance_sorted = new Map([...concordance_list].sort((a,b) => String(a[0]).localeCompare(b[0])));
console.log(concordance_sorted);