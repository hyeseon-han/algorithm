function solution(begin, target, words) {
    if(!words.includes(target)) return 0;

    function isOneDiff(target, word){
        let count = 0;
        for(let i = 0; i < target.length; i++){
            if(target[i] !== word[i]) count++;
        }
        return count === 1;
    }
    
    const visited = new Array(words.length).fill(false);
    const queue = [[begin,0]];
    
    while(queue.length){
        const [current, count] = queue.shift();
        
        if(current === target){
            return count;
        }
        
        for(let i = 0; i < words.length; i++){
            if(isOneDiff(current, words[i]) && !visited[i]){
                visited[i] = true;
                queue.push([words[i], count+1]);
            }
        }
    }
}