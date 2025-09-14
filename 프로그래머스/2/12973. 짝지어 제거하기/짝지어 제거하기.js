function solution(s)
{
    const stack = [];
    for(let ele of s){
        if(stack.length > 0 && stack[stack.length-1] === ele){
            stack.pop();
        }else{
            stack.push(ele);
        }
    }

    return stack.length === 0 ? 1 : 0;
}