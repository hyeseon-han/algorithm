function solution(fees, records) {
    const map = new Map();
    for(let i = 0; i < records.length; i++){
        const [time, number, type] = records[i].split(' ');
        if(map.has(number)){
            const value = map.get(number);
            map.set(number, [...value, time]);
        }else{
            map.set(number, [time])
        }
    }
    
    function returnMin(str){
        const [hour, min] = str.split(':');
        return Number(hour) * 60 + Number(min);
    }
    
    const resultMap = new Map();
    
    for(let ele of map){
        const key = ele[0];
        const times = ele[1];
        
        let base = '';
        let sumTime = 0;
        
        for(let t = 0 ; t < times.length; t++){
            const time = times[t];
           
            if(base === ''){
                base = time;
                // 마지막 요소가 in인 경우 
                if(t === times.length -1){
                    const totalTime = returnMin('23:59') - returnMin(base); 
                    sumTime += totalTime;
                }
            }else{
                const totalTime = returnMin(time) - returnMin(base);
                sumTime += totalTime;
                base = '';
            }
        }
        resultMap.set(key, sumTime);
    }
    
    const sortedArr = ([...resultMap].sort((a, b) => a[0] - b[0]));
    for(let i = 0 ; i < sortedArr.length; i++){
        const sumTime = sortedArr[i][1];
        // 기본 시간 초과
        if(sumTime > fees[0]){
            sortedArr[i][1] = fees[1] + Math.ceil((sumTime-fees[0])/fees[2]) * fees[3];
        }else{
        // 기본 시간 이하
            sortedArr[i][1] = fees[1];
        }
    }
    
    return sortedArr.map(ele => ele[1]);
}