function telephoneCheck(str) {
  // algorithm variables
  let validNum; // whether provided phone number is valid
  let numArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] // array of valid numbersr
  let firstNumIndex = str.search(/\d/); // at what index is the first valid 
  // counter variables
  let totalNumbers = 0; // total # of numbers in string
  let dashCounter = 0; // total number of - in string
  let parCounter = 0; // total number of ( or ) in string

  // loop through provided string to build counter variables
  for (let char = 0; char < str.length; char++) {
    for (let i = 0; i < numArray.length; i++) {
      if (str[char] === numArray[i]) {
        totalNumbers++; // update total # of numbers in string
      }
    }
    if (str[char] === '-') {
      dashCounter++; // update total # of - in string
    }
    if (str[char] === '(' || str[char] === ')') {
      parCounter++; // update total # of ( or ) in string
    }
  }

  // check to see if string has the right # of numbers
  if (totalNumbers === 10 || totalNumbers === 11) {
    // if there is a country code, make sure it is 1 of US
    if (totalNumbers === 11 && str[firstNumIndex] === '1') {
      validNum = true;
    }
    else if (totalNumbers === 10) {
      validNum = true;
    }
    else {
      validNum = false;
    }
  }
  else {
    validNum = false;
  }

  // check for edge cases of extra information
  if (str[0] === '-') {
    validNum = false; // if first char is a dash, invalid phone #
  }
  if (str[str.length - 1] === '(' || str[str.length - 1] === ')') {
    validNum = false; // if first char is a ( or ), invalid phone #
  }
  if (dashCounter > 2) {
    validNum = false; // if number has more than 2 -, invalid phone #
  }
  if (parCounter > 2 || parCounter === 1) {
    validNum = false; // if number has more than 2 ( or ), invalid phone #
  }

  return validNum;
}

// algorithm test cases
telephoneCheck("(6054756961)")
telephoneCheck("555-555-5555");
telephoneCheck("(555) 555-5555")
telephoneCheck("(555)555-5555");
telephoneCheck("1(555)555-5555");
telephoneCheck("1 456 789 4444");
telephoneCheck("123**&!!asdf#");
telephoneCheck("27576227382")
telephoneCheck("2(757)622-7382");
telephoneCheck("(555)5(55?)-5555");
telephoneCheck("11 555-555-5555");
