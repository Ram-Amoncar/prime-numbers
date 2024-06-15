import { Heap } from 'heap-js'
import type { Comparator } from 'heap-js'

type Tuple = [number, number]
const keyComparator: Comparator<Tuple> = (a, b) => a[1] - b[1]

export function dijkstra(num: number): [number[], number] {
    const t = performance.now()
    const pool = new Heap(keyComparator)
    pool.init([[2, 4]])
    const primes: number[] = []
    for (let i = 2; i <= num; i++) {
        while (pool.get(0)[1] < i) {
            const top: Tuple | undefined = pool.pop()
            if (top !== undefined) {
                const [prime, multiple] = top
                pool.push([prime, multiple + prime])
            }
        }
        if (pool.get(0)[1] === i) {
            const top: Tuple | undefined = pool.pop()
            if (top !== undefined) {
                const [prime, multiple] = top
                pool.push([prime, multiple + prime])
            }
        } else {
            primes.push(i)
            pool.push([i, i * i])
        }
    }
    return [primes, performance.now() - t]
}
