import AnalizadorVisitor from './generated/AnalizadorVisitor.js';
// Asegúrate de importar correctamente el visitor base

export default class CustomVisitor extends AnalizadorVisitor {
    // Método para traducir el programa
    visitProgram(ctx) {
        let resultado = "";
        // Visitamos cada instrucción en el programa
        ctx.instruccion().forEach(instruccion => {
            resultado += this.visit(instruccion) + "\n";  // Visita cada instrucción
        });
        return resultado;
    }

    // Método para traducir las instrucciones de tipo 'bucle'
    visitBucle(ctx) {
        const condicion = this.visit(ctx.condicion());  // Traducimos la condición
        let instrucciones = "";
        // Visitamos las instrucciones dentro del bucle
        ctx.instruccion().forEach(instruccion => {
            instrucciones += this.visit(instruccion);
        });

        return `while (${condicion}) {\n${instrucciones}\n}`;  // Convertimos el bucle a código JS
    }

    // Método para traducir las instrucciones de tipo 'salida' (print)
    visitSalida(ctx) {
        const cadena = this.visit(ctx.cadena());  // Visitamos la cadena a imprimir
        return `console.log(${cadena});`;  // Generamos el código JS
    }

    // Método para traducir las condiciones
    visitCondicion(ctx) {
        if (ctx.VERDADERO()) {
            return "true";  // Si la condición es 'verdadero', retornamos 'true' en JS
        }
        if (ctx.FALSO()) {
            return "false";  // Si la condición es 'falso', retornamos 'false' en JS
        }
        return "";  // Si no hay condición, retornamos una cadena vacía
    }

    // Método para traducir cadenas
    visitCadena(ctx) {
        let cadena = "";
        // Visitamos cada carácter en la cadena
        ctx.caracter().forEach(caracter => {
            cadena += this.visit(caracter);  // Visitamos cada carácter
        });
        return `"${cadena}"`;  // Retornamos la cadena en formato JS
    }

    // Método para traducir los caracteres dentro de la cadena
    visitCaracter(ctx) {
        if (ctx.ID()) {
            return ctx.ID().getText();  // Si es un ID, retornamos el nombre
        }
        if (ctx.INT()) {
            return ctx.INT().getText();  // Si es un número, lo retornamos tal cual
        }
        if (ctx.S_COMILLAS()) {
            return `"`;  // Si es una comilla simple, lo traducimos a comillas dobles en JS
        }
        if (ctx.simbolo()) {
            return this.visit(ctx.simbolo());  // Si es un símbolo, lo traducimos
        }
        return "";  // Por defecto, retornamos una cadena vacía
    }

    // Método para traducir símbolos
    visitSimbolo(ctx) {
        if (ctx.PUNTO()) {
            return ".";  // Traduce el punto a punto en JS
        }
        if (ctx.COMMA()) {
            return ",";  // Traduce la coma a coma en JS
        }
        if (ctx.EXCLAMACION()) {
            return "!";  // Traduce el signo de exclamación
        }
        if (ctx.PREGUNTA()) {
            return "?";  // Traduce la pregunta
        }
        if (ctx.DOBLE_PUNTO()) {
            return ":";  // Traduce los dos puntos
        }
        if (ctx.SEMI()) {
            return ";";  // Traduce el punto y coma
        }
        if (ctx.COMILLAS()) {
            return '"';  // Traduce comillas dobles
        }
        return "";  // Si no hay símbolo, retornamos una cadena vacía
    }
}
