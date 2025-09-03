function solution(video_len, pos, op_start, op_end, commands) {
    const videoLengSec = returnSecond(video_len);
    const opStartSec =  returnSecond(op_start);
    const opEndSec = returnSecond(op_end);
    
    function returnSecond(time){
        const [min, sec] = time.split(':');
        return Number(min) * 60 + Number(sec);
    }
    
    function isIncludOpening(currentSec){
        if(currentSec >= opStartSec && currentSec <= opEndSec){
            return true;
        }else{
            return false;
        }
    }
    
  
    
    let currentSec = returnSecond(pos);
    for(let i = 0; i < commands.length; i++){
        
        if(isIncludOpening(currentSec)){
            currentSec = opEndSec;
        }
        switch(commands[i]){
            case 'next':
                if(currentSec + 10 > videoLengSec){
                    currentSec = videoLengSec;
                }else{
                    currentSec += 10;
                }
                break;
            case 'prev':
                if(currentSec - 10 < 0){
                    currentSec = 0;
                }else{
                    currentSec -= 10;
                }
                break;
        }
        
        if(isIncludOpening(currentSec)){
            currentSec = opEndSec;
        }
    }
    
    let q = (Math.floor(currentSec / 60)).toString();
    let m = (currentSec % 60).toString();
    
    q = q.length < 2 ? '0'+ q : q;
    m = m.length < 2 ? '0'+ m : m;
    return q + ':' + m;
    
}