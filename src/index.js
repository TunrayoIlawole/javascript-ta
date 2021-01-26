// complete the function
function palindrom(str) {
  // code goes here
  str = str.toLowerCase();
  const spaceRegex = /\s/g;
  const charRegex = /[-'/`!#*$~@_%+=.,^&(){}[\]|;:"<>?\\]/g;

  // remove all white spaces before, after and in between the string
  str = str.replace(spaceRegex, '');
  // remove all special characters
  str = str.replace(charRegex, '');

  /* convert the string to an array,
  reverse the array using the array reverse method,
  convert the array back to a string.
  */
  const revStr = str.split('').reverse().join('');

  if (str === revStr) {
      return true;
  } else {
      return false;
  }
}

function solution(arg) {
  return palindrom(arg);
}

if (typeof require !== "undefined" && require.main === module) {
  if (process.argv.length <= 2) {
    throw Error("Require argument");
  }

  const arg = process.argv[2];
  console.log(solution(arg));
}

module.exports = { solution };
