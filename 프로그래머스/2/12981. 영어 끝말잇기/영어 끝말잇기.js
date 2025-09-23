function solution(n, words) {
    const stack = [];
   for(let i = 0; i < words.length; i++){
       const word = words[i];
       
       // 기존 사람 찾기 
       if(stack.includes(word)){
          return [i%n +1, Math.floor(i/n) +1];
       }
       
       // 단어 규칙 확인
       if(i > 0){
           const prev = words[i-1];
           if(word[0] !== prev[prev.length-1]){
               return [i%n +1, Math.floor(i/n)+1];
           }
       }
       
       stack.push(word);
       
   }

    return [0,0];
}