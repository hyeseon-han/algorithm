function solution(n) {
    let a = 1; let b = 1;
    for(let i = 0; i < n-2; i++){
        const next =  (a + b) % 1234567;
        a = b;
        b = next;
        
    }
    return b;
}