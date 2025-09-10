function solution(brown, yellow) {
    // yellow 가로, 세로 길이
    let x = 1;
    let y = 1;
    
    for(let i = 1; i <= yellow; i++){
        y = i;
        x = (brown - 4)/2 - i;
        
        if(x * y === yellow){
            return [x+2, y+2];
        }
    }
}