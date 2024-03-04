// EXAMPLE 1 - Remove the last Comma from a String in JavaScript

const str = 'apple,banana,kiwi,';

const lastCommaRemoved = str.replace(/,*$/, '');
console.log(lastCommaRemoved); // 👉️ "apple,banana,kiwi"

// ------------------------------------------------------------------

// // EXAMPLE 2 - Remove the last comma from a string regardless if it's at the end

// function removeLastComma(str) {
//   const lastIndex = str.lastIndexOf(',');

//   if (lastIndex !== -1) {
//     return str.slice(0, lastIndex) + str.slice(lastIndex + 1);
//   }

//   return str;
// }

// console.log(removeLastComma('a,b,c')); // 👉️ a,bc
// console.log(removeLastComma('a,b,c,')); // 👉️ a,b,c
// console.log(removeLastComma('abc')); // 👉️ abc

// ------------------------------------------------------------------

// // EXAMPLE 3 - Remove the last Comma from a String using String.endsWith()

// const str = 'avocado,grapefruit,orange';
// const lastCommaRemoved = str.endsWith(',')
//   ? str.slice(0, -1)
//   : str;

// // 👇️ "avocado,grapefruit,orange"
// console.log(lastCommaRemoved);

// ------------------------------------------------------------------

// // EXAMPLE 4 - Remove the last Comma from a String using `lastIndexOf`

// const str = 'one,two,three,';

// const lastCommaRemoved =
//   str.lastIndexOf(',') === str.length - 1
//     ? str.slice(0, -1)
//     : str;

// console.log(lastCommaRemoved); // 👉️ "one,two,three"

// ------------------------------------------------------------------

// // EXAMPLE 5 - Remove the Leading and Trailing Comma from a String

// const str = ',bobby,hadz,com,';

// // ✅ Remove leading and trailing comma from a string
// const result = str.replace(/(^,)|(,$)/g, '');

// console.log(result); // 👉️ "bobby,hadz,com"

// ------------------------------------------------------------------

// // EXAMPLE 6 - Removing multiple leading and trailing commas from a string

// const str = ',,,bobby,hadz,com,,,';

// // ✅ Remove leading and trailing comma from a string
// const result = str.replace(/(^,+)|(,+$)/g, '');

// console.log(result); // 👉️ "bobby,hadz,com"

// ------------------------------------------------------------------

// // EXAMPLE 7 - Removing the leading and trailing comma from string using `startsWith`

// function removeLeadingTrailingComma(str) {
//   if (str.startsWith(',') && str.endsWith(',')) {
//     return str.slice(1, -1);
//   }

//   if (str.startsWith(',')) {
//     return str.slice(1);
//   }

//   if (str.endsWith(',')) {
//     return str.slice(0, -1);
//   }

//   return str;
// }

// // 👇️ "bobby,hadz,com"
// console.log(removeLeadingTrailingComma(',bobby,hadz,com,'));

// // 👇️ "bobby,hadz,com"
// console.log(removeLeadingTrailingComma('bobby,hadz,com,'));

// // 👇️ "bobby,hadz,com"
// console.log(removeLeadingTrailingComma(',bobby,hadz,com'));

// // 👇️ "bobby,hadz,com"
// console.log(removeLeadingTrailingComma('bobby,hadz,com'));
