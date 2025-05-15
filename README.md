
# 📘 Proyecto Analizador Sintáctico 

Este proyecto fue realizado por Matias Daniel Ibañez de la comisión 2K1 , legajo: 52006

Este proyecto es un analizador léxico y sintáctico desarrollado en JavaScript usando **ANTLR4**. Permite interpretar un lenguaje personalizado con instrucciones como `imprimir` y bucles `mientras`.

---

## ⚙️ Requisitos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- Node.js
- ANTLR4 
- Java


### ▶️ ¿Cómo ejecutar el analizador?

1. Abre una terminal en la carpeta del proyecto.
-Arriba a la izquierda, hacé clic en: ... -> Terminal -> New Terminal.(Imagenes/image.png)
-Tambien podes abrir la terminal con CTRL + ñ

-Se abrirá una terminal en la parte inferior de VS Code .

<img width="729" alt="image" src="https://github.com/user-attachments/assets/978c0ba9-e387-4b86-9570-31132f655235" />


2. Asegúrate de tener el archivo de entrada listo,dicho archivo puede ser uno de los cuatro que hay en la carpeta de 'Ejemplos', por ejemplo el archivo correcto2.txt que contiene:

mientras falso {
imprimir{""Primero""};
imprimir{""Segundo?""};
}

3. Guarda ese contenido en `input.txt`. (copia y pega)

4. Ejecutar el analizador:
-Para ver el arbol se tiene que apretar la tecla F5 o apretar el boton 'Debug ANTLR4 grammar' que se encuentra en la parte izquiera , es un sinbolo de play con un bichito , ingrese y le aparecera en la parte de arriba dicho boton 'Debug ANTLR4 grammar'.

comando : node index.js

-Tambien puedes ingresar en la terminal y escribir el comando node index.js, lo que muestra el comando node index.js es lo siguiente:


-1. Si el programa encuentra errores de sintaxis, los mostrará algo como:

![image](https://github.com/user-attachments/assets/09eda943-dd66-41e2-95cc-80388705bd73)

Si no hay errores, mostrará :

![image](https://github.com/user-attachments/assets/a8896b9d-bb2a-4c77-bc4d-e6249a1c9bd4)


-2. Muestra un arbol de derivación pero no en diagrama , sino que lo mostrara en texto.

<img width="704" alt="image" src="https://github.com/user-attachments/assets/381bcc4a-082e-46eb-89c4-1f3bb284057a" />

-3. Este comando (node index.js) tambien traducira el código fuente al lenguaje JavaScript y posterior mente lo mostrara en pantalla como intérprete básico.

![image](https://github.com/user-attachments/assets/9d4c71fe-d54a-40a0-a279-360807bf27ac)


5. Para ver la tabla de lexemas y tokens , debera ingresar en la terminal:

node generarTabla.js

![image](https://github.com/user-attachments/assets/5390e749-34fe-4932-a89b-354f03963a71)






