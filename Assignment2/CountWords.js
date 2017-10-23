function countWords(str) {
    var count = 0;
    words = str.trim().split(/\s+/);
    for (i = 0; i < words.length; i++) {
        if (words[i] != "")
            count += 1;
    }
    return count;
}