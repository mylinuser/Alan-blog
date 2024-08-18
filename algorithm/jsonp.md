# jsonp

```js
const jsonp = (url, data, callback) => {
    let fn = 'cb' + Math.random().toString().replace('.', '')
    window[fn] = callback
    let query = ''
    for (let key in data) {
        query += key + '=' + data[key] + '&'
    }
    const script = document.createElement('script')
    script.src = url +'?' + query + 'callback=' + fn
    script.onload = () => {
        document.body.removeChild(script)
    }
    document.body.appendChild(script)
}

jsonp('http://127.0.0.1:8888/getWeather', {}, (res) => {
    console.log(res);
})
```