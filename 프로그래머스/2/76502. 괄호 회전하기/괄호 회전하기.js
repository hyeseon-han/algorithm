function solution(s) {
    function isValid(string){
        const stack = [];
        for(let char of string){
                if(char === '(' || char === '{' || char === '['){
                    stack.push(char);
                }else{
                    const last = stack.pop();
                    if((last !== '(' && char === ')')|| (last !== '{' && char === '}') || (last !== '[' && char === ']')){
                        return false;
                    }
                }
        }
        return stack.length === 0 ? true : false;
    }
    
    let count = 0;
    for(let i = 0; i < s.length; i++){
        const rotated = s.slice(i) + s.slice(0,i);
        if(isValid(rotated)){
            count ++;
        }
    }
    
    return count;
    
}