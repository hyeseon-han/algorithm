function solution(n)
{
    let answer = 0;
    const string = n.toString();
    [...string].forEach(char => answer += Number(char));

    return answer;
}