function rentalCarCost(noDays) {
    // Your solution here
    var result = 0;
    var carcost = noDays * 40;
    if (noDays >= 3 && noDays < 7) {

        result = carcost - 20;

    } else if (noDays >= 7) {
        result = carcost - 50;
    } else {
        result = carcost;
    }
    return result;
}
