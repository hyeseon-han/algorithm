function solution(routes) {
    let count = 0;
    let camera = -Infinity;    
    routes.sort((a,b) => a[1] - b[1]);
    
    for(let [start, end] of routes){
        if(start > camera){
            camera = end;
            count++;
        }
    }

    return count;
}