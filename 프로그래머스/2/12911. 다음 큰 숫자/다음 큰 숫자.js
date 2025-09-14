function solution(n) {
    const binaryN = n.toString(2);
    const binaryNOneLength = binaryN.split('1').length;
    
    for(let i = 1; i <= 1000000-n; i++){
        const bianryNext = (n+i).toString(2);
        const bianryNextOneLenth = bianryNext.split('1').length;
        if(binaryNOneLength === bianryNextOneLenth){
            return n + i;
        }
    }
}