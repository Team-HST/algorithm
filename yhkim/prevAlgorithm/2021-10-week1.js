const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let personCnt = 0;
let groupCnt = 0;
let personHeights = [];

rl.on('line', function (line) {
  if (!personCnt && !groupCnt) {
    const cnts = line.split(' ').map(Number);
    personCnt = cnts[0];
    groupCnt = cnts[1];
  } else {
    personHeights = line.split(' ').map(Number);
    solution(personCnt, groupCnt, personHeights);
  }
}).on('close', function () {
  process.exit();
});

function solution(personCnt, groupCnt, personHeights) {
  // 인접한 학생의 키 차이
  const diffPersonHeights = [];

  // 학생 키 차이 배열 생성
  for (let i = 0; i < personHeights.length - 1; i++) {
    diffPersonHeights.push(personHeights[i + 1] - personHeights[i]);
  }

  // 학생 키 오름차순 sort
  diffPersonHeights.sort();

  let result = 0;
  // 최소 키 차이 그룹 값 체크
  for (let i = 0; i < personCnt - groupCnt; i++) {
    result += diffPersonHeights[i];
  }
  console.log(result);
}
