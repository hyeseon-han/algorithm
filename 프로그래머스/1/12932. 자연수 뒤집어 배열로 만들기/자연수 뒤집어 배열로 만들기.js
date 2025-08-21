function solution(n) {
    return n.toString().split('').reverse().map(str => parseInt(str, 10));
}