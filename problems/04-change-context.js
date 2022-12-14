function changeContext(func, obj) {
  const answer = func.call(obj)
  return answer
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = changeContext;
