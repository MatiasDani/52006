import  AnalizadorLexer  from './generated/AnalizadorLexer.js';
import  AnalizadorParser from './generated/AnalizadorParser.js';
import { CommonTokenStream } from 'antlr4';
import { CharStreams } from 'antlr4';
import readline from 'readline';
import fs from 'fs';
import CustomErrorListener from './CustomErrorListener.js';
import CustomVisitor from './CustomVisitor.js'; // Importa el CustomVisitor

// Función para ejecutar el análisis y la interpretación
async function main() {
    let input;

    try {
        input = fs.readFileSync('input.txt', 'utf8');
    } catch (err) {
        input = await leerCadena();
        console.log(input);
    }

    let inputStream = CharStreams.fromString(input);
    let lexer = new AnalizadorLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new AnalizadorParser(tokenStream);

    // Reemplazamos los listeners por uno personalizado
    const errorListener = new CustomErrorListener();
    parser.removeErrorListeners();
    parser.addErrorListener(errorListener);

    let tree = parser.program();

    // Mostrar errores usando el listener personalizado
    if (errorListener.hasErrors()) {
        console.error("\n❌ Se encontraron errores de sintaxis en la entrada.");
    } else {
        console.log("\n✅ Entrada válida.");
        const cadena_tree = tree.toStringTree(parser.ruleNames);
        console.log(`Árbol de derivación: ${cadena_tree}`);

        // Generamos el código JavaScript a partir del árbol de sintaxis
        const visitor = new CustomVisitor();
        const resultadoJS = visitor.visitProgram(tree);
        console.log("\nCódigo JavaScript generado:");
        console.log(resultadoJS);

        // Ejecutamos el código JavaScript generado
        try {
            eval(resultadoJS); // Evalúa y ejecuta el código generado
        } catch (error) {
            console.error("Error al ejecutar el código JS:", error);
        }
    }
}

function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question("Ingrese una cadena: ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

main().catch(console.error);
