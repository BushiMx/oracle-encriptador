function validar(e){
    /*Valida que solo se tecleen letras minusculas*/
    key = e.keyCode || e.wich;
    teclado = String.fromCharCode(key);
    letras = " abcdefghijklmnopqrstuvwxyz";
    especiales = "8-13-32-37-38-46-164"
    teclado_especial = false;

    for(var i in especiales){
        if(key==especiales[i]){
            teclado_especial=true;
            break;
        }
    }

    if(letras.indexOf(teclado)== -1 && !teclado_especial){
        alert("Ingresa solo letras minusculas");
        return false;
    }
}

function encriptar() {
    /*Oculta la imagen de la encriptacion*/
    document.getElementById("imagen").style.display = "none";
    
    /*Activa el boton copiar*/
    document.getElementById('btn-copiar').style.display = 'block'
    
    /*Obtiene el texto a variable*/
    mensaje = document.getElementById("texto").value
    
    /*Encriptar mensaje*/
    cifrado = mensaje.replaceAll('e', "enter")
        .replaceAll('i', 'imes')
        .replaceAll('a', 'ai')
        .replaceAll('o', 'ober')
        .replaceAll('u', 'ufat');

        document.getElementById("aviso").innerHTML = cifrado;
    
    /*Escribir si es encriptado o desencriptado*/
    y="Mensaje Encriptado"
    document.getElementById("tipo-texto").innerHTML = y;
}

function desencriptar() {
    /*Oculta la imagen de la encriptacion*/
    document.getElementById("imagen").style.display = "none";
    
    /*Activa el boton copiar*/
    document.getElementById('btn-copiar').style.display = 'block'
    
    /*Desencriptar mensaje*/
    cifrado = mensaje.replaceAll('enter', "e")
        .replaceAll('imes', 'i')
        .replaceAll('ai', 'a')
        .replaceAll('ober', 'o')
        .replaceAll('ufat', 'u');

        document.getElementById("aviso").innerHTML = cifrado;
                
    /*Escribir si es encriptado o desencriptado*/
    y="Mensaje Desencriptado"
    document.getElementById("tipo-texto").innerHTML = y;
}

function copiar(){
    var contenido = document.querySelector("#aviso").innerHTML;
    const textArea = document.createElement('textarea');
    textArea.textContent = contenido;
    document.body.append(textArea);       
    textArea.select();       
    document.execCommand("copy");       
    textArea.remove() 
    alert("El mensaje encriptado ha sido copiado")
}


<!-- Code injected by live-server -->

// <![CDATA[  <-- For SVG support
if ('WebSocket' in window) {
(function () {
    function refreshCSS() {
        var sheets = [].slice.call(document.getElementsByTagName("link"));
        var head = document.getElementsByTagName("head")[0];
        for (var i = 0; i < sheets.length; ++i) {
            var elem = sheets[i];
            var parent = elem.parentElement || head;
            parent.removeChild(elem);
            var rel = elem.rel;
            if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
                var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
                elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
            }
            parent.appendChild(elem);
        }
    }
    var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
    var address = protocol + window.location.host + window.location.pathname + '/ws';
    var socket = new WebSocket(address);
    socket.onmessage = function (msg) {
        if (msg.data == 'reload') window.location.reload();
        else if (msg.data == 'refreshcss') refreshCSS();
    };
    if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
        console.log('Live reload enabled.');
        sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
    }
})();
}
else {
console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
}
// ]]>
