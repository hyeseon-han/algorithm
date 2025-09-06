function solution(friends, gifts) {
    var answer = 0;
    const n = friends.length;
     // 1. 이름 → 인덱스 매핑
    const idxMap = {};
    friends.forEach((name, i) => {
      idxMap[name] = i;
    });

    // 2. 주고받은 기록 저장 (2차원 배열)
    const giftHistory = Array.from({ length: n }, () => Array(n).fill(0));
    
    gifts.forEach(gift => {
        const [from, to] = gift.split(' ');
        const fromIdx = idxMap[from];
        const toIdx = idxMap[to];
        giftHistory[fromIdx][toIdx] += 1;
    })
    
    // 3. 선물 지수 계산
    const giftIndex = Array(n).fill(0);
    for(let i = 0; i < n; i++){
        let give = 0;
        let receive = 0;
        for(let j = 0; j < n; j ++){
            give += giftHistory[i][j];
            receive += giftHistory[j][i];
        }
        giftIndex[i] = give - receive;
    }
    
     // 4. 다음 달 선물 개수 계산
    const nextGifts = Array(n).fill(0);
      for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
          const ij = giftHistory[i][j];
          const ji = giftHistory[j][i];

          if (ij > ji) {
            nextGifts[i]++; // i가 더 많이 줬으면 j에게서 선물 받음
          } else if (ij < ji) {
            nextGifts[j]++;
          } else {
            // 같다면 → 선물 지수 비교
            if (giftIndex[i] > giftIndex[j]) {
              nextGifts[i]++;
            } else if (giftIndex[i] < giftIndex[j]) {
              nextGifts[j]++;
            }
            // 선물 지수도 같으면 아무 일도 안 함
          }
        }
      }

  // 5. 최댓값 반환
  return Math.max(...nextGifts);

}