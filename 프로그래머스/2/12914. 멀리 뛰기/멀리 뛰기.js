function solution(n) {
    let a = 1;
    let b = 1;
    const MOD = 1234567;
    for(let i = 2; i <= n; i++){
        const next = (a + b) % MOD;
        a = b;
        b = next;
    }
    
    return b;
}