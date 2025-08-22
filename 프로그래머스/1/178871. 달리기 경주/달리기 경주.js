function solution(players, callings) {
    let answer = [...players];
    
    const lineMap = {};
    players.forEach((p,i) => lineMap[p] = i);
   
    for(let i = 0; i < callings.length; i++){
        const idx = lineMap[callings[i]];
        // swap
        [answer[idx-1], answer[idx]] = [answer[idx], answer[idx-1]];
        // 순서 정의 map 수정
        lineMap[callings[i]] = idx-1;
        lineMap[answer[idx]] = idx;
    }
    return answer;
}