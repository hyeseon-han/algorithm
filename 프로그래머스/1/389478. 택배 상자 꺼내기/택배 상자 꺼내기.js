function solution(n, w, num) {
    let answer = 0;
    let arr = [];
  for (let start = 1; start <= n; start += w) {
    const row = [];

    for (let j = 0; j < w; j++) {
      const value = start + j;
      if (value <= n) {
        row.push(value);
      } else {
        row.push(0); // 부족하면 0으로 채움
      }
    }
      if(Math.floor(start/w) % 2 ===1){
          row.reverse();
      }
    arr.push(row);
  }

    let outsideIdx = 0;
    let insideIdx = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
          if (arr[i][j] === num) {
                outsideIdx = i;
                insideIdx = j;
            }
        }
    }
    
    if(arr[arr.length-1][insideIdx] === 0){
        answer = arr.length - outsideIdx -1;
    }else{
        answer = arr.length - outsideIdx;
    }
    return answer;
}