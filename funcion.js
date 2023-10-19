document.addEventListener("DOMContentLoaded", function () {
    const cifrarBoton = document.getElementById("cifrarBoton");
    const descifrarBoton = document.getElementById("descifrarBoton");
  
    cifrarBoton.addEventListener("click", function () {
      const mensajeEntrada = document.getElementById("mensajeEntrada").value;
      const numColumnas = parseInt(document.getElementById("numColumnas").value);
      const mensajeSalida = document.getElementById("mensajeSalida");
  
      const mensajeCifrado = escitalaCifrar(mensajeEntrada, numColumnas);
      mensajeSalida.value = mensajeCifrado;
    });
  
    descifrarBoton.addEventListener("click", function () {
      const mensajeEntrada = document.getElementById("mensajeEntrada").value;
      const numColumnas = parseInt(document.getElementById("numColumnas").value);
      const mensajeSalida = document.getElementById("mensajeSalida");
  
      const mensajeDescifrado = escitalaDescifrar(mensajeEntrada, numColumnas);
      mensajeSalida.value = mensajeDescifrado;
    });
  
    function escitalaCifrar(mensaje, numColumnas) {
      const numRows = Math.ceil(mensaje.length / numColumnas);
      const grid = new Array(numRows).fill(null).map(() => new Array(numColumnas).fill(" "));
  
      for (let i = 0; i < mensaje.length; i++) {
        const fila = Math.floor(i / numColumnas);
        const col = i % numColumnas;
        grid[fila][col] = mensaje[i];
      }
  
      let mensajeCifrado = "";
  
      for (let col = 0; col < numColumnas; col++) {
        for (let fila = 0; fila < numRows; fila++) {
          mensajeCifrado += grid[fila][col];
        }
      }
  
      return mensajeCifrado;
    }
  
    function escitalaDescifrar(mensaje, numColumnas) {
      const numRows = Math.ceil(mensaje.length / numColumnas);
      const grid = new Array(numRows).fill(null).map(() => new Array(numColumnas).fill(" "));
  
      let k = 0;
  
      for (let col = 0; col < numColumnas; col++) {
        for (let fila = 0; fila < numRows; fila++) {
          if (k < mensaje.length) {
            grid[fila][col] = mensaje[k++];
          }
        }
      }
  
      let mensajeDescifrado = "";
  
      for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numColumnas; j++) {
          if (grid[i][j] !== " ") {
            mensajeDescifrado += grid[i][j];
          }
        }
      }
  
      return mensajeDescifrado;
    }
  });
