onmessage= function(e) {
    if (isNaN (num)) {
        postMessage ("Error: No es un número válido.")
    }else {
        const millas=(num*0.621371);
        postMessage(millas);
    }
};