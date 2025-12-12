function solution(babbling) {
    var answer = 0;
    const words = ["aya", "ye", "woo", "ma"];
    for(let i  = 0; i < babbling.length; i++){
        let ele = babbling[i];
        for(let j = 0; j < words.length; j++){
            while(ele.includes(words[j])){
                if(ele.includes(words[j].repeat(2))){
                    break;
                }
                ele = ele.replace(words[j], ' ');
            }
        }
        ele = ele.trim();
        if(ele.length === 0){
            answer ++;
        }
    }
    return answer;
}