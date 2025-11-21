# 동적계획법 | Dynamic Programming

## 개념

## 사용하는 경우

## 구현 방식

- 반복문(bottom-up / top-down)
- 재귀 + memo

## 상향식

## 하향식

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
