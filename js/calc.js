function calcularRaiz() {
    const numero = document.getElementById('numero').value;
    const raiz = Math.sqrt(numero); 
    
 
    document.getElementById('resultado').textContent = 
        `La raíz cuadrada de ${numero} es ${raiz}`;
    }