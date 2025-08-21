function solution(today, terms, privacies) {
    let answer = [];
    const termsInfo = Object.fromEntries(
      terms.map(s => {
        const [k, v] = s.trim().split(/\s+/);
        return [k, Number(v)];
      })
    );
    
    function isPassDate(endDate,today){
        const [nowY, nowM, nowD] = today;
        const [endY,endM,endD] = endDate;
        if(nowY > endY){
            return true;
        }else if(nowY === endY && nowM > endM){
            return true;
        }else if(nowY === endY && nowM === endM && nowD >= endD){
            return true;
        }else{
            return false;
        }
    }
    
    for(let i = 0; i < privacies.length; i++){
        const [date, type] = privacies[i].split(' ');
        const month = termsInfo[type];
        const [y,m,d] = date.split('.');
        const todayArr = today.split('.');
        let addY  = Math.floor((Number(m)+month)  / 12);
        let addM = (Number(m)+month) % 12;
        if(addM === 0){
            addY -= 1;
            addM = 12;
        }
        const endDateArr = [Number(y)+addY, addM, Number(d)];
            if(isPassDate(endDateArr, [Number(todayArr[0]),Number(todayArr[1]),Number(todayArr[2])])){
                answer.push(i+1);
            }
        
    }
    return answer;
}