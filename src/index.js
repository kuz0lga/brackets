module.exports = function check(str, bracketsConfig) {
  let stack = [];
  
  for( let i = 0; i < str.length; i++) {
    let element = str[i];
    let topElement = stack[stack.length - 1];
    
    for( let j = 0; j < bracketsConfig.length; j++) {
      let open = bracketsConfig[j];

      if(open.includes(element)) {
        if (element == open[1]) { 
          (topElement == open[0] ? stack.pop() : stack.push(element)) 
        }
          else {
          stack.push(element);
        }
      }
    }    
  };

  return stack.length === 0;
}
