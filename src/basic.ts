
function add(n1: number, n2: number, showResult: boolean, phrase: string): number | undefined {
    // if  (typeof n1 !== "number" || typeof n2 !== "number") {
    //     throw new Error("Incorrect input !");
    // }

    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result)
    } else {
        return n1 + n2;
    }
}


const numbre1 = 5;
const number2 = 2.5;
const printResult = true;
const resultPhrase = 'Result is: ';

add(numbre1, number2, printResult, resultPhrase);


// let appId = 'abc';
// const button = document.querySelector('button')!;

// function clickHandler(message: string) {
//   // let userName = 'Max';
//   console.log('Clicked! ' + message);
// }
// // a comment
// if (button) {
//   button.addEventListener('click', clickHandler.bind(null, "You're welcome!"));
// }

// function add(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void {
//     throw new Error("Function not implemented.");
//   }
  
//   const hobbies = ['Sports', 'Cooking'];
//   const activeHobbies = ['Hiking'];
  
//   activeHobbies.push(...hobbies);
  
//   const person = {
//     name: 'Max',
//     age: 19
//   }
  
//   const addedNumbers = add(5,10, 2, 3, 7);
//   console.log(addedNumbers);
  
  
//   const [hobby1, hobby2, ...remainingHobbies] = hobbies;
  
//   console.log(hobbies, hobby1,hobby2);