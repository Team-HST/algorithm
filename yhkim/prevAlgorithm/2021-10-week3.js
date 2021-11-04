const MinHeap = require('./MinHeap');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
const minHeap = new MinHeap();
rl.on('line', function (line) {
  const input = Number(line);
  if (!count) {
    count = input;
  } else {
    minHeap.add(input);
    if (minHeap.getHeapSize() === count) {
      solution(minHeap);
    }
  }
}).on('close', function () {
  process.exit();
});

function solution(minHeap) {
  let result = 0;
  if (minHeap.getHeapSize() === 2) {
    result += minHeap.poll();
    result += minHeap.poll();
    console.log(result);
    return;
  }

  while (minHeap.getHeapSize()) {
    let sum = 0;
    sum += minHeap.poll();
    sum += minHeap.poll();
    result += sum;

    minHeap.add(sum);

    if (minHeap.getHeapSize() === 2) {
      result += minHeap.poll();
      result += minHeap.poll();
    }
  }

  console.log(result);
}
