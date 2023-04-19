// Generated from PredicateLexer.g4 by ANTLR 4.12.0
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,5,38,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,
7,4,1,0,1,0,4,0,14,8,0,11,0,12,0,15,1,0,1,0,1,1,1,1,1,2,4,2,23,8,2,11,2,
12,2,24,1,3,4,3,28,8,3,11,3,12,3,29,1,3,1,3,1,4,4,4,35,8,4,11,4,12,4,36,
2,15,36,0,5,1,1,3,2,5,3,7,4,9,5,1,0,2,1,0,48,57,10,0,9,13,32,32,133,133,
160,160,5760,5760,8192,8202,8232,8233,8239,8239,8287,8287,12288,12288,41,
0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,1,11,1,0,0,0,
3,19,1,0,0,0,5,22,1,0,0,0,7,27,1,0,0,0,9,34,1,0,0,0,11,13,5,58,0,0,12,14,
9,0,0,0,13,12,1,0,0,0,14,15,1,0,0,0,15,16,1,0,0,0,15,13,1,0,0,0,16,17,1,
0,0,0,17,18,5,58,0,0,18,2,1,0,0,0,19,20,5,61,0,0,20,4,1,0,0,0,21,23,7,0,
0,0,22,21,1,0,0,0,23,24,1,0,0,0,24,22,1,0,0,0,24,25,1,0,0,0,25,6,1,0,0,0,
26,28,7,1,0,0,27,26,1,0,0,0,28,29,1,0,0,0,29,27,1,0,0,0,29,30,1,0,0,0,30,
31,1,0,0,0,31,32,6,3,0,0,32,8,1,0,0,0,33,35,9,0,0,0,34,33,1,0,0,0,35,36,
1,0,0,0,36,37,1,0,0,0,36,34,1,0,0,0,37,10,1,0,0,0,5,0,15,24,29,36,1,6,0,
0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class PredicateLexer extends antlr4.Lexer {

    static grammarFileName = "PredicateLexer.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, null, "'='" ];
	static symbolicNames = [ null, "PROPERTY", "EQUALS", "INT_LITERAL", "WHITESPACE", 
                          "OTHER" ];
	static ruleNames = [ "PROPERTY", "EQUALS", "INT_LITERAL", "WHITESPACE", 
                      "OTHER" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

PredicateLexer.EOF = antlr4.Token.EOF;
PredicateLexer.PROPERTY = 1;
PredicateLexer.EQUALS = 2;
PredicateLexer.INT_LITERAL = 3;
PredicateLexer.WHITESPACE = 4;
PredicateLexer.OTHER = 5;



