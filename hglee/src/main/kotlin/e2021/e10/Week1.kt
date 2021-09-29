package e2021.e10

import java.util.*

fun main(args: Array<String>) = with(Scanner(System.`in`)) {
    val n = nextInt()
    val k = nextInt()
    val list = mutableListOf<Int>()
    for (i in 0 until n) {
        list.add(nextInt())
    }
    val diff = mutableListOf<Int>()
    var prev = list[0]
    for (i in 1..list.lastIndex) {
        val now = list[i]
        diff.add(now - prev)
        prev = now
    }
    println(diff.sorted().subList(0, n - k).sum())
}