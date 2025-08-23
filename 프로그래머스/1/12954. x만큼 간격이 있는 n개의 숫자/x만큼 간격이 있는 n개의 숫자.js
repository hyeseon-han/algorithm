function solution(x, n) {
    let answer = [x];
    let i = 1;
    while(i < n){
        answer.push(answer[answer.length-1] + x);
        i++;
    }
    return answer;
}