export default function shuffle(s){
    let a = s.split("")
    let i = s.length, t, r

    while (0 !== i) {
        r = Math.floor(Math.random() * i)
        i -= 1
        t = a[i]
        a[i] = a[r]
        a[r] = t
    }

    return a.join("")
}
