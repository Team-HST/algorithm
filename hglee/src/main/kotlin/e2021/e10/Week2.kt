package e2021.e10

import java.util.*

/**
 * @author dlgusrb0808@gmail.com
 */
fun main() = with(Scanner(System.`in`)) {
    val n = nextInt()
    val queue = PriorityQueue<Int>()
    for (i in 0 until n) {
        queue.add(nextInt())
    }
    var sum = 0
    while (queue.size > 1) {
        val addSum = queue.poll() + queue.poll()
        queue.add(addSum)
        sum += addSum
    }
    println(sum)
}
