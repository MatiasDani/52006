// Generated from c:/Users/Usuario/Favorites/Facultad/2.Segundo año/13 Sintaxis y Semántica de los Lenguajes .3re semestre/Proyecto analizador/Analizador/Analizador.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import AnalizadorListener from './AnalizadorListener.js';
import AnalizadorVisitor from './AnalizadorVisitor.js';

const serializedATN = [4,1,18,62,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,4,0,18,8,0,11,0,12,0,19,1,0,1,0,1,1,1,1,3,1,
26,8,1,1,2,1,2,1,2,1,2,4,2,32,8,2,11,2,12,2,33,1,2,1,2,1,3,1,3,1,3,1,3,1,
3,1,3,1,4,1,4,1,5,1,5,4,5,48,8,5,11,5,12,5,49,1,5,1,5,1,6,1,6,1,6,1,6,3,
6,58,8,6,1,7,1,7,1,7,0,0,8,0,2,4,6,8,10,12,14,0,2,1,0,3,4,1,0,7,13,60,0,
17,1,0,0,0,2,25,1,0,0,0,4,27,1,0,0,0,6,37,1,0,0,0,8,43,1,0,0,0,10,45,1,0,
0,0,12,57,1,0,0,0,14,59,1,0,0,0,16,18,3,2,1,0,17,16,1,0,0,0,18,19,1,0,0,
0,19,17,1,0,0,0,19,20,1,0,0,0,20,21,1,0,0,0,21,22,5,0,0,1,22,1,1,0,0,0,23,
26,3,4,2,0,24,26,3,6,3,0,25,23,1,0,0,0,25,24,1,0,0,0,26,3,1,0,0,0,27,28,
5,1,0,0,28,29,3,8,4,0,29,31,5,14,0,0,30,32,3,2,1,0,31,30,1,0,0,0,32,33,1,
0,0,0,33,31,1,0,0,0,33,34,1,0,0,0,34,35,1,0,0,0,35,36,5,15,0,0,36,5,1,0,
0,0,37,38,5,2,0,0,38,39,5,14,0,0,39,40,3,10,5,0,40,41,5,15,0,0,41,42,5,13,
0,0,42,7,1,0,0,0,43,44,7,0,0,0,44,9,1,0,0,0,45,47,5,5,0,0,46,48,3,12,6,0,
47,46,1,0,0,0,48,49,1,0,0,0,49,47,1,0,0,0,49,50,1,0,0,0,50,51,1,0,0,0,51,
52,5,5,0,0,52,11,1,0,0,0,53,58,5,17,0,0,54,58,5,16,0,0,55,58,5,6,0,0,56,
58,3,14,7,0,57,53,1,0,0,0,57,54,1,0,0,0,57,55,1,0,0,0,57,56,1,0,0,0,58,13,
1,0,0,0,59,60,7,1,0,0,60,15,1,0,0,0,5,19,25,33,49,57];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class AnalizadorParser extends antlr4.Parser {

    static grammarFileName = "Analizador.g4";
    static literalNames = [ null, "'mientras'", "'imprimir'", "'verdadero'", 
                            "'falso'", "'\"\"'", "'\" \"'", "'.'", "','", 
                            "'!'", "'?'", "':'", "'\"'", "';'", "'{'", "'}'" ];
    static symbolicNames = [ null, "MIENTRAS", "IMPRIMIR", "VERDADERO", 
                             "FALSO", "COMILLAS", "S_COMILLAS", "PUNTO", 
                             "COMMA", "EXCLAMACION", "PREGUNTA", "DOBLE_PUNTO", 
                             "COMILLA", "SEMI", "LCURLY", "RCURLY", "INT", 
                             "ID", "WS" ];
    static ruleNames = [ "program", "instruccion", "bucle", "salida", "condicion", 
                         "cadena", "caracter", "simbolo" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = AnalizadorParser.ruleNames;
        this.literalNames = AnalizadorParser.literalNames;
        this.symbolicNames = AnalizadorParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, AnalizadorParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 16;
	            this.instruccion();
	            this.state = 19; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1 || _la===2);
	        this.state = 21;
	        this.match(AnalizadorParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, AnalizadorParser.RULE_instruccion);
	    try {
	        this.state = 25;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 23;
	            this.bucle();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 24;
	            this.salida();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bucle() {
	    let localctx = new BucleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, AnalizadorParser.RULE_bucle);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27;
	        this.match(AnalizadorParser.MIENTRAS);
	        this.state = 28;
	        this.condicion();
	        this.state = 29;
	        this.match(AnalizadorParser.LCURLY);
	        this.state = 31; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 30;
	            this.instruccion();
	            this.state = 33; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1 || _la===2);
	        this.state = 35;
	        this.match(AnalizadorParser.RCURLY);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, AnalizadorParser.RULE_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this.match(AnalizadorParser.IMPRIMIR);
	        this.state = 38;
	        this.match(AnalizadorParser.LCURLY);
	        this.state = 39;
	        this.cadena();
	        this.state = 40;
	        this.match(AnalizadorParser.RCURLY);
	        this.state = 41;
	        this.match(AnalizadorParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, AnalizadorParser.RULE_condicion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        _la = this._input.LA(1);
	        if(!(_la===3 || _la===4)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, AnalizadorParser.RULE_cadena);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this.match(AnalizadorParser.COMILLAS);
	        this.state = 47; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 46;
	            this.caracter();
	            this.state = 49; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 212928) !== 0));
	        this.state = 51;
	        this.match(AnalizadorParser.COMILLAS);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	caracter() {
	    let localctx = new CaracterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, AnalizadorParser.RULE_caracter);
	    try {
	        this.state = 57;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 17:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 53;
	            this.match(AnalizadorParser.ID);
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 54;
	            this.match(AnalizadorParser.INT);
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 55;
	            this.match(AnalizadorParser.S_COMILLAS);
	            break;
	        case 7:
	        case 8:
	        case 9:
	        case 10:
	        case 11:
	        case 12:
	        case 13:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 56;
	            this.simbolo();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	simbolo() {
	    let localctx = new SimboloContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, AnalizadorParser.RULE_simbolo);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 16256) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

AnalizadorParser.EOF = antlr4.Token.EOF;
AnalizadorParser.MIENTRAS = 1;
AnalizadorParser.IMPRIMIR = 2;
AnalizadorParser.VERDADERO = 3;
AnalizadorParser.FALSO = 4;
AnalizadorParser.COMILLAS = 5;
AnalizadorParser.S_COMILLAS = 6;
AnalizadorParser.PUNTO = 7;
AnalizadorParser.COMMA = 8;
AnalizadorParser.EXCLAMACION = 9;
AnalizadorParser.PREGUNTA = 10;
AnalizadorParser.DOBLE_PUNTO = 11;
AnalizadorParser.COMILLA = 12;
AnalizadorParser.SEMI = 13;
AnalizadorParser.LCURLY = 14;
AnalizadorParser.RCURLY = 15;
AnalizadorParser.INT = 16;
AnalizadorParser.ID = 17;
AnalizadorParser.WS = 18;

AnalizadorParser.RULE_program = 0;
AnalizadorParser.RULE_instruccion = 1;
AnalizadorParser.RULE_bucle = 2;
AnalizadorParser.RULE_salida = 3;
AnalizadorParser.RULE_condicion = 4;
AnalizadorParser.RULE_cadena = 5;
AnalizadorParser.RULE_caracter = 6;
AnalizadorParser.RULE_simbolo = 7;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_program;
    }

	EOF() {
	    return this.getToken(AnalizadorParser.EOF, 0);
	};

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitProgram(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_instruccion;
    }

	bucle() {
	    return this.getTypedRuleContext(BucleContext,0);
	};

	salida() {
	    return this.getTypedRuleContext(SalidaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BucleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_bucle;
    }

	MIENTRAS() {
	    return this.getToken(AnalizadorParser.MIENTRAS, 0);
	};

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	LCURLY() {
	    return this.getToken(AnalizadorParser.LCURLY, 0);
	};

	RCURLY() {
	    return this.getToken(AnalizadorParser.RCURLY, 0);
	};

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterBucle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitBucle(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitBucle(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_salida;
    }

	IMPRIMIR() {
	    return this.getToken(AnalizadorParser.IMPRIMIR, 0);
	};

	LCURLY() {
	    return this.getToken(AnalizadorParser.LCURLY, 0);
	};

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	RCURLY() {
	    return this.getToken(AnalizadorParser.RCURLY, 0);
	};

	SEMI() {
	    return this.getToken(AnalizadorParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterSalida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitSalida(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitSalida(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_condicion;
    }

	VERDADERO() {
	    return this.getToken(AnalizadorParser.VERDADERO, 0);
	};

	FALSO() {
	    return this.getToken(AnalizadorParser.FALSO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterCondicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitCondicion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitCondicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_cadena;
    }

	COMILLAS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AnalizadorParser.COMILLAS);
	    } else {
	        return this.getToken(AnalizadorParser.COMILLAS, i);
	    }
	};


	caracter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CaracterContext);
	    } else {
	        return this.getTypedRuleContext(CaracterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitCadena(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitCadena(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CaracterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_caracter;
    }

	ID() {
	    return this.getToken(AnalizadorParser.ID, 0);
	};

	INT() {
	    return this.getToken(AnalizadorParser.INT, 0);
	};

	S_COMILLAS() {
	    return this.getToken(AnalizadorParser.S_COMILLAS, 0);
	};

	simbolo() {
	    return this.getTypedRuleContext(SimboloContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterCaracter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitCaracter(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitCaracter(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SimboloContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_simbolo;
    }

	PUNTO() {
	    return this.getToken(AnalizadorParser.PUNTO, 0);
	};

	COMMA() {
	    return this.getToken(AnalizadorParser.COMMA, 0);
	};

	EXCLAMACION() {
	    return this.getToken(AnalizadorParser.EXCLAMACION, 0);
	};

	PREGUNTA() {
	    return this.getToken(AnalizadorParser.PREGUNTA, 0);
	};

	DOBLE_PUNTO() {
	    return this.getToken(AnalizadorParser.DOBLE_PUNTO, 0);
	};

	SEMI() {
	    return this.getToken(AnalizadorParser.SEMI, 0);
	};

	COMILLA() {
	    return this.getToken(AnalizadorParser.COMILLA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterSimbolo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitSimbolo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitSimbolo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




AnalizadorParser.ProgramContext = ProgramContext; 
AnalizadorParser.InstruccionContext = InstruccionContext; 
AnalizadorParser.BucleContext = BucleContext; 
AnalizadorParser.SalidaContext = SalidaContext; 
AnalizadorParser.CondicionContext = CondicionContext; 
AnalizadorParser.CadenaContext = CadenaContext; 
AnalizadorParser.CaracterContext = CaracterContext; 
AnalizadorParser.SimboloContext = SimboloContext; 
