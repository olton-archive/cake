export default function (a){
    let _a = [...a];
    for (let i = 0; i < _a.length; ++i) {
        for (let j = i + 1; j < _a.length; ++j) {
            if (_a[i] === _a[j])
                _a.splice(j--, 1);
        }
    }

    return _a;
}