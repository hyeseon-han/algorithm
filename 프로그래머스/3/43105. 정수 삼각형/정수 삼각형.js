function solution(triangle) {
    const n = triangle.length;
    const memo = Array.from({length: n},(_,i) => Array(triangle[i].length).fill(-1));
    
    function dfs(level, index){
        if(level === n-1) return triangle[level][index];
        if(memo[level][index] !== -1) return memo[level][index];
        
        const left = dfs(level+1, index);
        const right = dfs(level+1, index+1);
        
        memo[level][index] = triangle[level][index] + Math.max(left, right);
        
        return memo[level][index]
    }
    
    return dfs(0,0);
}