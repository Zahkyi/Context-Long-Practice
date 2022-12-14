function bindToAnArg(func, arg) {
  // Your code here
  const answer = func.bind(func, arg)
  return answer
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = bindToAnArg;
