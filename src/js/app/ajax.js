module.exports.ajax = function (url) {}
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            if (xhr.status >=200 && xhr.status <=300 || xhr.status === 304) {
                resolve(xhr.responseText)
            } else {
                reject(new Error('找不到url地址'))
            }
        }
        xhr.open('get', url, true);
        xhr.send(null)
    })
}