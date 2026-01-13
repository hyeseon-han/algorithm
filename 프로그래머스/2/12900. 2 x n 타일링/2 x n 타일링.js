function solution(n) {
    const mod = 1000000007;
    let a = 1;
    let b = 1;
    for(let i = 2; i <= n; i++){
        const next = (a + b) % mod;
        a = b;
        b = next;
    }
    
    return b;
}