let myName = 'Ian'
let myAge = 29

function logA() {
  console.log(myName);
}

export { logA }
export default function () {
  console.log(myAge);
}