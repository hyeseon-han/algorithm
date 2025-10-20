function solution(dirs) {
    const visited = new Set();
    let x = 0;
    let y = 0;
    for(const dir of dirs){
        let nx = x;
        let ny = y;
        if(dir === 'U') ny++;
        if(dir === 'D') ny--;
        if(dir === 'R') nx++;
        if(dir === 'L') nx--;
        if(nx < -5 || nx > 5 || ny < -5 || ny > 5) continue;
        visited.add(`${nx}${ny}->${x}${y}`);
        visited.add(`${x}${y}->${nx}${ny}`);
        
        x = nx;
        y = ny;
    }
  
    return visited.size/2;
}