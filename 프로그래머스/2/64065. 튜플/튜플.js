function solution(s) {
    let answer = [];
    const arr = s.slice(2,-2).split('},{').map(str => str.split(',').map(ele => Number(ele)));
    
    arr.sort((a,b) => a.length - b.length);
    
    for(let eleArr of arr){
        for(let num of eleArr){
            if(!answer.includes(num)){
                answer.push(num);
            }
        }
    }
    return answer;
}