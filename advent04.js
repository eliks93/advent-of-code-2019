const range = [236491, 713787]

const cycle = array => {
  let initial = array[0]
  let end = array[1]
  let count = 0;

  while(initial <= end) {
    let manipulate = initial.toString()
    if(manipulate.charAt(0) <= manipulate.charAt(1) && manipulate.charAt(1) <= manipulate.charAt(2) && manipulate.charAt(2) <= manipulate.charAt(3) && manipulate.charAt(3) <= manipulate.charAt(4) && manipulate.charAt(4) <= manipulate.charAt(5)) {
      if(manipulate.charAt(0) === manipulate.charAt(1) || manipulate.charAt(1) === manipulate.charAt(2) || manipulate.charAt(2) === manipulate.charAt(3) || manipulate.charAt(3) === manipulate.charAt(4) || manipulate.charAt(4) === manipulate.charAt(5)){
        if(noGroups(manipulate)) {
          count++
        }
          
      }
    }
    initial++
  } 
  return count
}


const noGroups = string => {
  let count=0;
  
  
  if(string.charAt(0) === string.charAt(1) && string.charAt(0) !== string.charAt(2)) {
    return true
  }  
  if (string.charAt(1) === string.charAt(2) && string.charAt(1) !== string.charAt(3) && string.charAt(0) !== string.charAt(2)) {
    return true
  }  
  if(string.charAt(2) === string.charAt(3) && string.charAt(2) !== string.charAt(4) && string.charAt(1) !== string.charAt(3)) {
    return true
  } 
  if(string.charAt(4) === string.charAt(5) && string.charAt(3) !== string.charAt(4) && string.charAt(5) !== string.charAt(3)) {
    return true
  } 
  if(string.charAt(3) === string.charAt(4) && string.charAt(3) !== string.charAt(2) && string.charAt(3) !== string.charAt(5)) {
    return true
  }

  return false
  
}
 
console.log(cycle(range))