export function trailDivision(num: number): [number[], number] {
    const t = performance.now()
    const primes: number[] = []
    if (num < 2) return [primes, performance.now() - t]
    for (let i = 2; i <= num; i++) {
        if (isPrime(i, primes)) {
            primes.push(i)
        }
    }
    return [primes, performance.now() - t]
}

function isPrime(num: number, primes: number[]): boolean {
    const sqRoot = Math.floor(Math.sqrt(num)) - 1
    for (let i = 0; i < sqRoot; i++) if (num % primes[i] === 0) return false
    return true
}
