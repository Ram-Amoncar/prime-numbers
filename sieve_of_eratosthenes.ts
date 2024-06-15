export function sieveOfEratosthenes(num: number): [number[], number] {
    const t = performance.now()
    const booleanPrimes: boolean[] = Array(num).fill(true).fill(false, undefined, 1)
    const primes: number[] = []
    const sqRoot = Math.floor(Math.sqrt(num))
    for (let i = 0; i < booleanPrimes.length; i++) {
        if (booleanPrimes[i]) {
            primes.push(i + 1)
            if (i <= sqRoot) setMultipleFalse(i + 1, booleanPrimes)
        }
    }
    return [primes, performance.now() - t]
}

function setMultipleFalse(num: number, boolArr: boolean[]): void {
    for (let i = num * 2 - 1; i < boolArr.length; i += num) {
        boolArr[i] = false
    }
}
