function solution(schedules, timelogs, startday) {
    let answer = 0;
    function normalize60(n){
      const hi = Math.floor(n / 100); // 앞자리들(백의 자리 이상)
      const lo = n % 100;             // 끝 두 자리

      if (lo >= 60) {
        return (hi + 1) * 100 + (lo - 60);
      }
      return n;
    }
    
    for(let i = 0; i < timelogs.length; i++){
        let day = startday;
        let successCount = 0;
        for(let j = 0; j < timelogs[i].length; j ++){
            
            if(day === 6){
                day++;
                continue;
            }
            
            if(day === 7){
                day = 1;
                continue;
            }
            
            if(normalize60(schedules[i]+10) >= timelogs[i][j]){
                successCount++;
            }
            
            day++;
            
        }
        
        if(successCount === 5){
            answer ++;
        }
        
    }
    return answer;
}