// Generated from c:/Users/Usuario/Favorites/Facultad/2.Segundo a�o/13 Sintaxis y Sem�ntica de los Lenguajes .3re semestre/Proyecto analizador/Analizador/Analizador.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,18,115,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,1,0,1,0,1,0,1,0,1,0,
1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,
1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,5,1,5,1,5,1,5,
1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,12,1,12,1,13,1,13,
1,14,1,14,1,15,4,15,98,8,15,11,15,12,15,99,1,16,1,16,5,16,104,8,16,10,16,
12,16,107,9,16,1,17,4,17,110,8,17,11,17,12,17,111,1,17,1,17,0,0,18,1,1,3,
2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,31,
16,33,17,35,18,1,0,4,1,0,48,57,3,0,65,90,95,95,97,122,4,0,48,57,65,90,95,
95,97,122,3,0,9,10,13,13,32,32,117,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,
7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,
0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,
1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,1,37,1,0,0,0,3,46,1,0,0,0,
5,55,1,0,0,0,7,65,1,0,0,0,9,71,1,0,0,0,11,74,1,0,0,0,13,78,1,0,0,0,15,80,
1,0,0,0,17,82,1,0,0,0,19,84,1,0,0,0,21,86,1,0,0,0,23,88,1,0,0,0,25,90,1,
0,0,0,27,92,1,0,0,0,29,94,1,0,0,0,31,97,1,0,0,0,33,101,1,0,0,0,35,109,1,
0,0,0,37,38,5,109,0,0,38,39,5,105,0,0,39,40,5,101,0,0,40,41,5,110,0,0,41,
42,5,116,0,0,42,43,5,114,0,0,43,44,5,97,0,0,44,45,5,115,0,0,45,2,1,0,0,0,
46,47,5,105,0,0,47,48,5,109,0,0,48,49,5,112,0,0,49,50,5,114,0,0,50,51,5,
105,0,0,51,52,5,109,0,0,52,53,5,105,0,0,53,54,5,114,0,0,54,4,1,0,0,0,55,
56,5,118,0,0,56,57,5,101,0,0,57,58,5,114,0,0,58,59,5,100,0,0,59,60,5,97,
0,0,60,61,5,100,0,0,61,62,5,101,0,0,62,63,5,114,0,0,63,64,5,111,0,0,64,6,
1,0,0,0,65,66,5,102,0,0,66,67,5,97,0,0,67,68,5,108,0,0,68,69,5,115,0,0,69,
70,5,111,0,0,70,8,1,0,0,0,71,72,5,34,0,0,72,73,5,34,0,0,73,10,1,0,0,0,74,
75,5,34,0,0,75,76,5,32,0,0,76,77,5,34,0,0,77,12,1,0,0,0,78,79,5,46,0,0,79,
14,1,0,0,0,80,81,5,44,0,0,81,16,1,0,0,0,82,83,5,33,0,0,83,18,1,0,0,0,84,
85,5,63,0,0,85,20,1,0,0,0,86,87,5,58,0,0,87,22,1,0,0,0,88,89,5,34,0,0,89,
24,1,0,0,0,90,91,5,59,0,0,91,26,1,0,0,0,92,93,5,123,0,0,93,28,1,0,0,0,94,
95,5,125,0,0,95,30,1,0,0,0,96,98,7,0,0,0,97,96,1,0,0,0,98,99,1,0,0,0,99,
97,1,0,0,0,99,100,1,0,0,0,100,32,1,0,0,0,101,105,7,1,0,0,102,104,7,2,0,0,
103,102,1,0,0,0,104,107,1,0,0,0,105,103,1,0,0,0,105,106,1,0,0,0,106,34,1,
0,0,0,107,105,1,0,0,0,108,110,7,3,0,0,109,108,1,0,0,0,110,111,1,0,0,0,111,
109,1,0,0,0,111,112,1,0,0,0,112,113,1,0,0,0,113,114,6,17,0,0,114,36,1,0,
0,0,4,0,99,105,111,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class AnalizadorLexer extends antlr4.Lexer {

    static grammarFileName = "Analizador.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'mientras'", "'imprimir'", "'verdadero'", 
                         "'falso'", "'\"\"'", "'\" \"'", "'.'", "','", "'!'", 
                         "'?'", "':'", "'\"'", "';'", "'{'", "'}'" ];
	static symbolicNames = [ null, "MIENTRAS", "IMPRIMIR", "VERDADERO", "FALSO", 
                          "COMILLAS", "S_COMILLAS", "PUNTO", "COMMA", "EXCLAMACION", 
                          "PREGUNTA", "DOBLE_PUNTO", "COMILLA", "SEMI", 
                          "LCURLY", "RCURLY", "INT", "ID", "WS" ];
	static ruleNames = [ "MIENTRAS", "IMPRIMIR", "VERDADERO", "FALSO", "COMILLAS", 
                      "S_COMILLAS", "PUNTO", "COMMA", "EXCLAMACION", "PREGUNTA", 
                      "DOBLE_PUNTO", "COMILLA", "SEMI", "LCURLY", "RCURLY", 
                      "INT", "ID", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

AnalizadorLexer.EOF = antlr4.Token.EOF;
AnalizadorLexer.MIENTRAS = 1;
AnalizadorLexer.IMPRIMIR = 2;
AnalizadorLexer.VERDADERO = 3;
AnalizadorLexer.FALSO = 4;
AnalizadorLexer.COMILLAS = 5;
AnalizadorLexer.S_COMILLAS = 6;
AnalizadorLexer.PUNTO = 7;
AnalizadorLexer.COMMA = 8;
AnalizadorLexer.EXCLAMACION = 9;
AnalizadorLexer.PREGUNTA = 10;
AnalizadorLexer.DOBLE_PUNTO = 11;
AnalizadorLexer.COMILLA = 12;
AnalizadorLexer.SEMI = 13;
AnalizadorLexer.LCURLY = 14;
AnalizadorLexer.RCURLY = 15;
AnalizadorLexer.INT = 16;
AnalizadorLexer.ID = 17;
AnalizadorLexer.WS = 18;



