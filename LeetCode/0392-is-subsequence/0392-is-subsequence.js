/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    const arrayS = [...s];

    for(let i = 0; i < t.length; i++){
        const target = arrayS[0];
        const value = t[i];
        if(target === '') return;

        if(value === target) arrayS.shift();
    }

    return arrayS.length === 0 ? true : false;
};