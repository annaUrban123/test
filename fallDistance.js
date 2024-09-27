export function calculateFallDistance(time) {
    const g = 9.8
    return 0.5 * g * Math.pow(time, 2)
}