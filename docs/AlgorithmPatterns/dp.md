# 동적계획법 | Dynamic Programming

## 개념

큰 문제를 작은 문제들로 나누고 그 작은 문제의 정답을 저장해 두었다가 재사용하면서 전체 문제의 최적해를 구하는 방법이야.

## 사례

- [프로그래머스- 땅따먹기](https://github.com/hyeseon-han/algorithm/tree/main/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4/2/12913.%E2%80%85%EB%95%85%EB%94%B0%EB%A8%B9%EA%B8%B0)

- [정수 삼각형](https://github.com/hyeseon-han/algorithm/tree/main/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4/3/43105.%E2%80%85%EC%A0%95%EC%88%98%E2%80%85%EC%82%BC%EA%B0%81%ED%98%95)

- [등굣길](https://github.com/hyeseon-han/algorithm/tree/main/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4/3/42898.%E2%80%85%EB%93%B1%EA%B5%A3%EA%B8%B8) (상향식)

## 구현 방식

## 상향식(Bottom-Up)

- 반복문 사용
- DP 테이블을 처음부터 끝까지 채움
- 스택 오버플로우 걱정 없음

## 하향식(top-down)

특징:

- 재귀 사용
- 이미 계산한 값은 저장해서 재사용

dfs 로 풀었을때 케이스(시간복잡도 때문에 실패)

```js
function solution(triangle) {
  let maxCount = 0;

  function dfs(index, dept, sum) {
    if (dept === triangle.length) {
      maxCount = Math.max(sum, maxCount);
      return;
    }

    const current = triangle[dept][index];

    dfs(index, dept + 1, sum + current);
    dfs(index + 1, dept + 1, sum + current);
  }

  dfs(0, 0, 0);

  return maxCount;
}
```
