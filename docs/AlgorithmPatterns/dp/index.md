# 동적계획법 | Dynamic Programming

## 개념

- 특정 알고리즘이 아니라 문제 해결 방식을 의미
- 크게는 메모이제이션과 타뷸레이션 방식

## 사례

- [프로그래머스- 땅따먹기](https://github.com/hyeseon-han/algorithm/tree/main/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4/2/12913.%E2%80%85%EB%95%85%EB%94%B0%EB%A8%B9%EA%B8%B0)

- [정수 삼각형](https://github.com/hyeseon-han/algorithm/tree/main/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4/3/43105.%E2%80%85%EC%A0%95%EC%88%98%E2%80%85%EC%82%BC%EA%B0%81%ED%98%95)

- [등굣길](https://github.com/hyeseon-han/algorithm/tree/main/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4/3/42898.%E2%80%85%EB%93%B1%EA%B5%A3%EA%B8%B8) (상향식)

- [2 x n 타일링](https://github.com/hyeseon-han/algorithm/tree/main/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4/2/12900.%E2%80%852%E2%80%85x%E2%80%85n%E2%80%85%ED%83%80%EC%9D%BC%EB%A7%81) (피보나치)

- [멀리뛰기](https://github.com/hyeseon-han/algorithm/tree/main/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4/2/12914.%E2%80%85%EB%A9%80%EB%A6%AC%E2%80%85%EB%9B%B0%EA%B8%B0)

## 구현 방식

### 타뷸레이션(Tabulation)

- 상향식(Bottom-Up)
- 필요한 값들을 미리 계산해두는 것

### 메모이제이션(Memoization)

- 하향식(top-down)
- 재귀 사용
- 이미 계산한 값은 저장해서 재사용

![alt text](dp1.png)
백트래킹을 이용한 피보나치 수열 구현은 중복된 연산이 너무 많다.

따라서 이미 해결한 문제는 기록해주자 (=메모이제이션)
![alt text](dp2.png)

> 출처
> https://lazyhysong.tistory.com/entry/JS-%EB%8F%99%EC%A0%81-%EA%B3%84%ED%9A%8D%EB%B2%95-Dynamic-Programming
