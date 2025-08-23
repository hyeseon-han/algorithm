function solution(bandage, health, attacks) {
    const attackMap = new Map(attacks);
    const lastTime = attacks[attacks.length - 1][0];
    
    let hp = health;
    let keepingT = 0;
    const [t, x, y] = bandage;
    
    for(let i = 1; i <= lastTime; i++){
       if (attackMap.has(i)) { // 공격 시간
            keepingT = 0;
            hp -= attackMap.get(i);
            if (hp <= 0) return -1;
        } else { // 회복 시간
            hp = Math.min(health, hp + x);
            keepingT++;
            if (keepingT === t) {
                hp = Math.min(health, hp + y);
                keepingT = 0;
            }
        }
    }
    
    return hp;
}