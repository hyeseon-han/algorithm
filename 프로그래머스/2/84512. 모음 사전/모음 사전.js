function solution(word) {
    const char = ['A','E','I','O','U'];
    const dictionary = []; 
    function dfs(str){
        if(str.length > 5) return;
        if(str.length > 0) dictionary.push(str);
        
        for(let i = 0; i < char.length; i++){
            dfs(str + char[i]);
        }
    }
    
    dfs('');
    
    return dictionary.indexOf(word) + 1;
}