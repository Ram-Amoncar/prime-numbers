import { trailDivision } from './trial_division'
import { sieveOfEratosthenes } from './sieve_of_eratosthenes'
import { dijkstra } from './dijkstra'

const primesTill = 1_000_000

const td = trailDivision(primesTill)
const soe = sieveOfEratosthenes(primesTill)
const dij = dijkstra(primesTill)

console.log('Trial Division:       ', td[0].length, 'found!', '|', 'time:', td[1], 'ms')
console.log('Sieve Of Eratosthenes:', soe[0].length, 'found!', '|', 'time:', soe[1], 'ms')
console.log("Dijkstra's Approach:  ", dij[0].length, 'found!', '|', 'time:', dij[1], 'ms')
