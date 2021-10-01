package e2021.e10

import java.util.*

fun main(args: Array<String>) = with(Scanner(System.`in`)) {
    val n = nextInt()
    val k = nextInt()
    if (n == k) {
        println(0)
        return
    }
    val diff = mutableListOf<Int>()
    var first = nextInt()
    var prev = first
    for (i in 1 until n) {
        val now = nextInt();
        diff.add(now - prev)
        prev = now
    }
    if (k == 1) {
        println(prev - first)
        return
    }
    diff.sort()
    var sum = 0
    for (i in 0 until n - k) {
        sum += diff[i]
    }
    println(sum)
}