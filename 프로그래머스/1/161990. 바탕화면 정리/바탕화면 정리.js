function solution(wallpaper) {
    let minY = -1;
    let minX = -1;
    let maxY = -1;
    let maxX = -1;
    for(let i = 0; i < wallpaper.length; i++){
        for(let j = 0; j < wallpaper[0].length; j++){
            if(wallpaper[i][j] === '#'){
                if(maxY < i){
                    maxY = i;
                }
                if(minY === -1 || minY > i){
                    minY = i;
                }
                if(minX === -1 ||minX > j){
                    minX = j;
                }
                if(maxX < j){
                    maxX = j;
                }
            }
        }
    }
    
    return [minY, minX, maxY +1, maxX +1];
    
}