const campo_texto = document.querySelector("#ingreseElTexto");
const campo_mensaje = document.querySelector("#message");

function btnEncriptar(){
    if(!validarTexto()) {
        const textoEncriptado = encriptar(textArea.value)
        mensaje.value = textoEncriptado
        mensaje.style.backgroundImage = "none"
        textArea.value = "";
        copia.style.display = "block"
    
    }
}


const matriz_code = [
  ['e', "enter"],
  ['i', "imes"],
  ['a', "ai"],
  ['o', "over"],
  ['u', "ufat"],
];

function btnEncriptar() {
  const texto = encriptar(campo_texto.value);
  campo_mensaje.value = texto;
}

function encriptar(fraseEncriptada) {
  for (let i = 0; i < matriz_code.length; i++) {
    if (fraseEncriptada.includes(matriz_code[i][0])) {
      fraseEncriptada = fraseEncriptada.replaceAll(
        matriz_code[i][0],
        matriz_code[i][1]
      )
    }
  }
  return fraseEncriptada;
}

function btnDesencriptar() {
  const textoDesencriptado = desencriptar(campo_texto.value);
  campo_mensaje.value = textoDesencriptado;
}

function desencriptar(fraseDesencriptada) {
  for (let i = 0; i < matriz_code.length; i++) {
    if (fraseDesencriptada.includes(matriz_code[i][1])) {
      fraseDesencriptada = fraseDesencriptada.replaceAll(
        matriz_code[i][1],
        matriz_code[i][0]
      )
    }
  }
  return fraseDesencriptada; // Devolver el texto desencriptado
}

const copia = document.querySelector("#copiar");
copia.style.display = "none"

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
}
