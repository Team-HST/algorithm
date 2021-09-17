function solution(numbers) {
  let length = numbers.length - 1;

  // 조합 계산
  console.log(factorial(length) / (factorial(length - 3) * factorial(3)));
}

function factorial(n) {
  if (n > 0) {
    return n * factorial(n - 1);
  }
  return 1;
}

solution("12345");
