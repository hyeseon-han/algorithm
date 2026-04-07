function solution(sequence, k) {
    let sum = 0;
    let firstIndex = 0;
    let i = 0;
    let answer = [0, sequence.length - 1]; 
    
    while(i < sequence.length){
        const ele = sequence[i];
        const vitualSum = sum + ele;
        
        if(vitualSum < k){
            sum += ele;
            i++;
            continue;
        }
        
        if(vitualSum > k){
            if(i === firstIndex){
                i ++;
                firstIndex ++;
            }else{
                sum -= sequence[firstIndex];
                firstIndex ++;
            }
            continue;
        }
        
        if(vitualSum === k){
            if((i - firstIndex) < (answer[1] - answer[0])){
                answer = [firstIndex, i];
            }
            
            sum -= sequence[firstIndex];
            firstIndex ++;
        }
    }
    
    return answer;
}