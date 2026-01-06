/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {

    let write = 0;
    let count = 1;
    for(let read = 1; read <= chars.length; read++){
        if(read === chars.length || chars[read] !== chars[read-1]){
            chars[write] = chars[read-1];
            write ++;

            if(count > 1){
                for(let c = 0; c < count.toString().length; c++){
                    chars[write] = count.toString()[c];
                    write++;
                }
            }
            count = 1;
        }else{
            count ++;
        }
    }

    return write;

};