function solution(m, n, puddles) {
    const mod = 1000000007;
    
    const dp = Array.from({length: m}, () => Array(n).fill(0));
    
    const puddlesSet = new Set(puddles.map(([x,y])=> `${x-1},${y-1}`));

    for(let x = 0; x < m; x++){
        for(let y = 0; y < n; y++){
            if(puddlesSet.has(`${x},${y}`)){
                dp[x][y] = 0;
                continue;
            }
            
            if(x===0 && y===0) {
                dp[0][0] = 1;
                continue;
            }
            if(x === 0){
                dp[x][y] = dp[x][y-1];
                continue;
            }
            if(y===0){
                dp[x][y] = dp[x-1][y];
                continue;
            }
            
            dp[x][y] = (dp[x][y-1]+dp[x-1][y]) % mod;
        }
    }
    
    return dp[m-1][n-1];
    
}