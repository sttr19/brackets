module.exports = function check(str, bracketsConfig) {
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length;j++) {
      const config = bracketsConfig[j];
      if (str[i] === config[0] && str[i+1] === config[1]) {
        return check(
          str.split('').filter((elem,index)=> index !=i && index!=i+1).join(''), 
          bracketsConfig
        );
      }
    }
  }
  return str.length == 0;
}
