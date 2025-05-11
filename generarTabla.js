import antlr4 from 'antlr4';
import fs from 'fs';
import { CharStreams } from 'antlr4';
import AnalizadorLexer from './generated/AnalizadorLexer.js';

function generarTablaLexemasTokens(input) {
    const inputStream = CharStreams.fromString(input);
    const lexer = new AnalizadorLexer(inputStream);
    
    console.log("Tabla de Lexemas y Tokens:");
    console.log("--------------------------------------------------------");
    console.log("|     Lexema                 |     Token               |");
    console.log("--------------------------------------------------------");

    let token;
    while ((token = lexer.nextToken()).type !== antlr4.Token.EOF) {
        const tokenType = token.type;
        const lexema = token.text;
        const tokenName = AnalizadorLexer.symbolicNames[tokenType] || "UNKNOWN";

        // Imprimimos con padding para que se vea alineado
        const lexemaCol = lexema.padEnd(25);
        const tokenCol = tokenName.padEnd(20);
        console.log(`| ${lexemaCol} | ${tokenCol} |`);
    }

    console.log("--------------------------------------------------------");
}

function leerEntrada() {
    try {
        const contenido = fs.readFileSync('input.txt', 'utf8');
        generarTablaLexemasTokens(contenido);
    } catch (error) {
        console.error("No se pudo leer el archivo input.txt");
    }
}

leerEntrada();

