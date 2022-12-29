const eliminarAcentos=(texto)=>texto.normalize("NFD").replace(/[\u0300-\u036f]/g,"");
const encriptar = () =>{
  const texto=eliminarAcentos(document.getElementById("texto").value.toLowerCase());
  const textoingresado = document.getElementById('texto').value;
  const nuevotexto = textoingresado.replaceAll('e','enter').replaceAll('i','imes').replaceAll('a','ai').replaceAll('o','ober').replaceAll('u','ufat')

  document.getElementById('retorna').innerHTML = nuevotexto;
  document.getElementById('retorna').style.display = "block";
  document.getElementById('copiar').style.display = "block";
  document.getElementById('imag').style.display = "none";
  document.getElementById('default').style.display = "none";
  document.getElementById('aviso').style.display = "none";

}

const copiar = () =>{
  const textocopiado = document.getElementById('retorna').textContent;
  navigator.clipboard.writeText(textocopiado);

}

const desencriptar = () =>{
  const textoingresado = document.getElementById('texto').value;
  const nuevotexto = textoingresado.replaceAll('enter','e').replaceAll('imes','i').replaceAll('ai','a').replaceAll('ober','o').replaceAll('ufat','u');
  document.getElementById('retorna').innerHTML = nuevotexto;
  document.getElementById('retorna').style.display = "block";
  document.getElementById('copiar').style.display = "block";
  document.getElementById('imag').style.display = "none";
  document.getElementById('default').style.display = "none";
  document.getElementById('mensaje').style.display = "none";
}
