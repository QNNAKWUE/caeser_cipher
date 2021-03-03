function caesar(word, shift) {
    if (shift == 0) {
       return word;
     }
    const wordTest = word.split('');
       console.log(wordTest);

    const rex = /^[A-Z]+$/i;

    for(let i=0; i <wordTest.length; i++){
        if(rex.test(wordTest[i])){
            let totn_string = wordTest[i].charCodeAt();
            let sec_string = totn_string+shift;
            wordTest[i] = String.fromCharCode(sec_string);
            //console.log(sec_string);
        }
    }
    return wordTest.join(' ')
}


console.log(caesar("What a string!", 5));