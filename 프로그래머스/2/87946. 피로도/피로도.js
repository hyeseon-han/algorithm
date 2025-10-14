function solution(k, dungeons) {
    let maxCount = 0;
    
    const visited = Array(dungeons.length).fill(false);
    
    function dfs(remainK, count){
        maxCount = Math.max(maxCount, count);
        for(let i = 0; i < dungeons.length; i++){
            const [need, cost] = dungeons[i];
            if(!visited[i] && remainK >= need){
                visited[i] = true;
                dfs(remainK-cost, count+1);
                visited[i] = false;
            }
        }
    }
    
    dfs(k,0);
    return maxCount;
}