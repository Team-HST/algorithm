package e2021.e10

import java.util.*


/**
 * @author dlgusrb0808@gmail.com
 */
fun main() = with(Scanner(System.`in`)) {
    val N = nextInt()
    when (N) {
        1 -> {
            println(0)
        }
        2 -> {
            println(nextInt() + nextInt())
        }
        else -> {
            val heap = Heap(N)
            for (i in 0 until N) {
                heap.add(nextInt())
            }
            var sum = 0
            while (heap.size() > 1) {
                val addSum = heap.poll() + heap.poll()
                heap.add(addSum)
                sum += addSum
            }
            println(sum)
        }
    }
}

/**
 * Implementation Heap with Array
 */
class Heap(val size: Int): Iterator<Int> {
    private val heap = IntArray(size + 1)

    private var lastIndex = ROOT_INDEX

    companion object {
        const val ROOT_INDEX = 1
        const val EMPTY = Int.MIN_VALUE
        val parent = { index: Int -> index / 2 }
        val left = { index: Int -> index * 2 }
        val right = { index: Int -> index * 2 + 1 }
    }

    fun add(data: Int) {
        if (lastIndex > size) {
            error("Can not add element")
        }
        this.heap[this.lastIndex++] = data
        upHeapify(lastIndex - 1)
    }

    fun poll(): Int {
        if (!this.hasNext()) {
            return EMPTY
        }
        val value = this.heap[ROOT_INDEX]
        this.heap[ROOT_INDEX] = this.heap[--this.lastIndex]
        this.heap[this.lastIndex] = 0
        downHeapify(ROOT_INDEX)
        return value
    }

    fun size(): Int {
        return this.lastIndex - 1
    }

    override fun hasNext(): Boolean {
        return this.lastIndex != ROOT_INDEX
    }

    override fun next(): Int {
        return this.poll()
    }

    private fun upHeapify(index: Int) {
        if (index == 1) {
            return
        }
        val parentIndex = parent(index)
        if (this.heap[index] <= this.heap[parentIndex]) {
            swap(index, parentIndex)
            upHeapify(parentIndex)
        }
    }

    private fun downHeapify(index: Int) {
        val leftIndex = left(index)
        val rightIndex = right(index)
        val nextIndex = if (leftIndex > this.lastIndex - 1) {
            return
        } else if (rightIndex > this.lastIndex - 1) {
            leftIndex
        } else {
            if (this.heap[leftIndex] > this.heap[rightIndex]) { rightIndex } else { leftIndex }
        }

        if (this.heap[index] > this.heap[nextIndex]) {
            swap(index, nextIndex)
            downHeapify(nextIndex)
        }
    }

    private fun swap(index1: Int, index2: Int) {
        val temp = this.heap[index1]
        this.heap[index1] = this.heap[index2]
        this.heap[index2] = temp
    }

}




