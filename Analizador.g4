grammar Analizador; 

program : instruccion+ EOF;

instruccion : bucle
        | salida
        ;

bucle : MIENTRAS condicion LCURLY instruccion+ RCURLY ;

salida : IMPRIMIR LCURLY cadena RCURLY SEMI ;

condicion : VERDADERO 
        | FALSO
        ;

cadena : COMILLAS  caracter+ COMILLAS; 

caracter : ID
        | INT
        | S_COMILLAS
        | simbolo
        ;

simbolo : PUNTO
        | COMMA
        | EXCLAMACION 
        | PREGUNTA
        | DOBLE_PUNTO
        | SEMI
        | COMILLA 
        ;

//lexer

// Palabras clave
MIENTRAS     : 'mientras' ;
IMPRIMIR     : 'imprimir' ;
VERDADERO    : 'verdadero' ;
FALSO        : 'falso' ;

// Puntuación y símbolos
COMILLAS     : '""' ;
S_COMILLAS   : '" "' ;
PUNTO        : '.' ;
COMMA        : ',' ;
EXCLAMACION  : '!' ;
PREGUNTA     : '?' ;
DOBLE_PUNTO  : ':' ;
COMILLA      : '"' ;
SEMI         : ';' ;
LCURLY       : '{' ;
RCURLY       : '}' ;

// Tokens generales
INT          : [0-9]+ ;
ID           : [a-zA-Z_][a-zA-Z_0-9]* ;
WS           : [ \t\r\n]+ -> skip ;
