function solution(n, works) {
    let answer = 0;
    works.sort((a,b) => b-a);
    
    while(n > 0){
        works[0] --;
        n--;
        
        let i = 0;
        while(i < works.length-1 && works[i] < works[i+1]){
            [works[i], works[i+1]] = [works[i+1], works[i]];
            i++;
        }
        
        if(works[0] === 0){
            break;
        }
    }

    works.forEach(ele => answer+= ele*ele);
    
    return answer; 
}