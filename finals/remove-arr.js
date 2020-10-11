const conv = (a) => {
    console.log(a);
    if (typeof(a) == 'number') {
        return [a]
    }
    if (a.length == 0) return []

    let first = conv(a[0])
    let other = conv(a.slice(1))
    console.log([...first,...other])
    return [...first, ...other]
}
const arr = [1, 3, [5, 6], 0, [3]];

console.log(conv(arr));