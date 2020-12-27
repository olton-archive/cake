import {use} from "../index";

use({
    shuffle(){
        let a = this.value.split("")
        let i = this.value.length, t, r

        while (0 !== i) {
            r = Math.floor(Math.random() * i)
            i -= 1
            t = a[i]
            a[i] = a[r]
            a[r] = t
        }

        this.value = a.join("")

        return this
    }
});
