function rentalCarCost(noDays) {
  var totalCost = noDays * 40;
  if (noDays >= 7){totalCost -= 50;}
  else if (noDays >= 3){ totalCost -= 20;}
  return totalCost;
}