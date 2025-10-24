function solution(board, moves) {
    let answer = 0;
    let basket = [];
    const reversed = [...board].reverse();
    const boardArr = reversed[0].map((_, colIdx) =>
        reversed.map(row => row[colIdx]).filter(item => item !== 0)
    );
    for(let i = 0; i < moves.length; i++){
        const position = moves[i];
        let last = boardArr[position-1].pop();
        if(!last){
            continue;
        }
        if(basket[basket.length -1] === last){
            basket.pop();
            answer += 2;
        }else{
            basket.push(last);
        }
    }
    return answer;
}