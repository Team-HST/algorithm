// min heap 구현
class Heap {
  constructor() {
    this.heap = [];
  }

  // 왼쪽 자식 노드 인덱스
  getLeftChildIndex = (parentIndex) => parentIndex * 2 + 1;
  // 오른쪽 자식 노드 인덱스
  getRightChildIndex = (parentIndex) => parentIndex * 2 + 2;
  // 부모 노드 인덱스
  getParentIndex = (childIndex) => Math.floor((childIndex - 1) / 2);

  // 우선순위 높은 노드 조회
  peek = () => this.heap[0];

  // 노드 삭제 후 반환
  poll = () => {
    const heapSize = this.heap.length;
    if (heapSize === 0) {
      return null;
    } else if (heapSize === 1) {
      const node = this.heap[0];
      this.heap = [];
      return node;
    } else {
      return this.#heapfiyDown();
    }
  };

  // 노드 추가
  // 우선순위가 값이 아닐 때는 따로 objcet로 선언
  add = (value) => {
    this.heap.push(value);
    this.#heapifyUp();
  };

  // heap 모든 노드 제거
  clear = () => {
    const heapSize = this.heap.length;
    this.heap = [];
    return heapSize === 0 ? false : true;
  };

  getHeap = () => {
    return this.heap;
  };

  // get heap size
  getHeapSize = () => {
    return this.heap.length;
  };

  // add heapify작업
  #heapifyUp = () => {
    if (this.heap < 1) {
      return false;
    }
    let index = this.heap.length - 1;
    const lastNode = this.heap[index];

    while (index > 0) {
      // 부모 노드 인덱스
      const parentIndex = this.getParentIndex(index);

      if (this.heap[parentIndex] > lastNode) {
        // 부모 노드가 더 작을 경우 부모노드로 이동
        this.heap[index] = this.heap[parentIndex];
        index = parentIndex;
      } else break;
    }

    this.heap[index] = lastNode;
    return true;
  };

  #heapfiyDown = () => {
    // 마지막 노드 부모 노드 변경
    const removeNode = this.heap[0];
    const rootNode = this.heap.pop();
    this.heap[0] = rootNode;
    let index = 0;
    const heapSize = this.heap.length;

    // 자식 노드가 있을 때 까지 진행
    while (this.getRightChildIndex(index) <= heapSize) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);

      // 왼쪽 오른쪽 중에 작은 것 자식노드 인덱스
      const changeChildNodeIndex =
        rightChildIndex && this.heap[leftChildIndex] < this.heap[rightChildIndex]
          ? rightChildIndex
          : leftChildIndex;

      if (this.heap[changeChildNodeIndex] < rootNode) {
        this.heap[index] = this.heap[changeChildNodeIndex];
        index = changeChildNodeIndex;
      } else break;
    }

    this.heap[index] = rootNode;
    return removeNode;
  };
}

module.exports = Heap;
