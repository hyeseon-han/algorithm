function solution(s) {
    let answer = '';
    const arr = s.split(' ');
   
    for(let i = 0; i < arr.length; i++){
        const n = arr.length;
        const ele = arr[i];
        answer += ele.charAt(0).toUpperCase() + ele.slice(1).toLowerCase() + (i < n-1 ? ' ':'');
    }
    
    return answer;
}