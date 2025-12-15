function solution(skill, skill_trees) {
    let answer = 0;
    function isPass(str){
        const copy = [...skill];
        for(let i = 0; i < str.length; i++){
            const ele = str[i];
            if(copy.includes(ele) && ele !== copy[0]){
                return false;
            }
            
            if(copy.includes(ele) && ele === copy[0]){
                copy.shift();
            }
        }
        return true;
    }
    
    for(let i = 0; i < skill_trees.length; i++){
        if(isPass(skill_trees[i])){
            answer ++;
        }
    }
    return answer;
}