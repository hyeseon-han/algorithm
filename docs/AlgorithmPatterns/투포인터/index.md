# 투포인터(Two Pointers)

## 개념

일차원 배열에 인덱스를 가리키는 두개의 포인터를 두고 값들을 비교하여 문제를 해결하는 알고리즘 패턴

## 예시

예를들어 낮은 수부터 정렬 되어있는 숫자 배열이 주어졌을때, 배열 안에 첫번째로 두 숫자의 합이 0이 되는 값 2개를 배열에 담아 리턴하라고 했을때.
흔히 다음과 같이 이중 for문을 이용하게 된다. (그랬을 때 시간 복잡도 `O(n^2)`)

```js
function getSumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }

  return false;
}
```

```js
// 포인터 2개를 각 p1, p2라고 하겠다.

// [-2, -1, 1, 2, 3]
//  p1
//                p2

// => p1과 p2의 합을 구한다. (-2 + 3 = 1)
// => 0인가? -> 해당 값 리턴
// => 0보다 작은가? -> p1을 한 칸 올린다.
// ✅ => 0보다 큰가? -> p2를 한 칸 내린다. (1 > 0)

// [-2, -1, 1, 2, 3]
//  p1
//            p2

// ✅ => 0인가? -> 해당 값 리턴
```

시간 복잡도 `O(n)`

```js
function getSumZero(arr) {
  let p1 = 0;
  let p2 = arr.length - 1; // p2는 주어진 배열의 맨 뒤에서 부터 시작.

  while (p1 !== p2) {
    // p1과 p2가 만나면 모든 값을 확인 했으니 반복문 종료.
    const result = arr[p1] + arr[p2];

    if (result === 0) {
      // 두 값의 합이 0이면 바로 리턴.
      return [arr[p1], arr[p2]];
    }

    if (result > 0) {
      // 0 보다 크면 p2를 한 칸 내림.
      p2--;
    } else {
      // 그게 아니면(0보다 작으면) p1을 한 칸 올림.
      p1++;
    }
  }

  return false;
}
```

> 참고
> https://velog.io/@onea/JS-%ED%88%AC-%ED%8F%AC%EC%9D%B8%ED%84%B0%EB%8B%A4%EC%A4%91-%ED%8F%AC%EC%9D%B8%ED%84%B0-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%ED%8C%A8%ED%84%B4
