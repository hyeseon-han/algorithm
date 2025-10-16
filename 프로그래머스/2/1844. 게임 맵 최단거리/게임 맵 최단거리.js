function solution(maps) {
    const n = maps.length; 
    const m = maps[0].length;

    // [x,y,dist] = [현재x위치,현재y위치,움직인거리]
    const queue = [[1, 1, 1]];
    
    while(queue.length > 0){
        const dx = [-1, 1, 0, 0];
        const dy = [0, 0, -1, 1];
      const [x, y, dist] = queue.shift();
        
        if(x === n && y === m) return dist;
            
        for(let i = 0; i < 4; i++){
            const nx = x + dx[i];
            const ny = y + dy[i];
            
            if(nx < 1 || ny < 1 || nx > n || ny > m) continue;
            
            if(maps[nx-1][ny-1] === 1){
                queue.push([nx,ny,dist+1]);
                maps[nx-1][ny-1] = 0;
            }
        }
    }
   
    return -1;
}