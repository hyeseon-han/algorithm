function solution(s){
    const arrS = [...s];
    let closeCharCount = 0;
    let i = 0;
    while(i < s.length){
        const last = arrS.pop();
        switch (last){
            case '(':
                if(closeCharCount > 0){
                    closeCharCount --;
                    break;
                }else{
                    return false;
                }
            case ')':
                closeCharCount++;
                break;
        }
        
        i++;
    }
    
    
     return closeCharCount === 0;
    
}