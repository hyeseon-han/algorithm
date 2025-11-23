# GCD(Greatest Common Divisor) 최대공약수

유클리드 호제법

```js
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
```

즉 b가 0이 될때 a가 gcd 원리 <br/>

# LCM(Least Common Multiple) 최소공배수

```js
const lcm = (a, b) => (a * b) / gcd(a, b);
```
