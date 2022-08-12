module.exports = function check(str, bracketsConfig) {
  let getConfig = [];
  for (let i = 0; i < bracketsConfig.length; i++) {
    let joinArrayResult = [];
    joinArrayResult = bracketsConfig[i].join('');
    getConfig.push(joinArrayResult)
  }

  if (str.includes(getConfig)) {
    let openBracket = [];
    let closeBracket = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] == bracketsConfig[0][0]) {
        openBracket.push(str[i])
      } else {
        closeBracket.push(str[i])
      }
    }
  }
  
  return true;
}
