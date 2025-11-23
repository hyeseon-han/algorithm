function solution(numbers) {
    const answer = new Array(numbers.length).fill(-1);
    const stack = [];
    for(let i = 0; i < numbers.length; i++){
        const num = numbers[i];
        while(stack.length > 0 && numbers[stack[stack.length-1]] < num){
            answer[stack[stack.length-1]] = num;
            stack.pop();
        }
        stack.push(i);
    }
    
    return answer;

}