function isEmail(val) {
  return /[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[a-z]{2,4}/.test(val);
}

console.log(isEmail('saiful70.me@gmail.com'));