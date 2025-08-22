function solution(park, routes) {
    let answer = [];
    let coord = [];
    
    // 시작 값 찾기 
    for(let y = 0; y < park.length; y++){
        const xArr = [...park[y]];
        coord.push(xArr);
        for(let x =0; x < xArr.length; x++){
            if(xArr[x] === 'S'){
                answer = [y,x];
            }
        }
    }
    
    for(let i = 0; i < routes.length; i++){
        const [op, nStr] = routes[i].split(' ');
        const n = Number(nStr);
        let [y,x] = [...answer];
        let valid = true;
        
        for(let step = 0; step < n; step++){
            if(op === 'N') y--;
            if(op === 'S') y++;
            if(op === 'W') x--;
            if(op === 'E') x++;
            
            if(y < 0 || y >= coord.length || x >= coord[0].length || x < 0){
                valid = false;
                break;
            }
            
            // (위 조건문에서)런타임에러 발생 방지
            if(coord[y][x] === "X"){
                valid = false;
                break;
            }
        }
        
        if(valid){
            answer = [y,x];
        }
    }
    
    return answer;
}