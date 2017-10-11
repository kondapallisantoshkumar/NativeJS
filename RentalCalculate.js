

function rentalCarCost(noDays) {
  // Your solution here
  
  if(noDays>=3&&noDays<7){
  return (noDays*40)-20;
  }
  
  else if(noDays>=7){
  return (noDays*40)-50;
  }
  
  else{
  return noDays*40;}
}

