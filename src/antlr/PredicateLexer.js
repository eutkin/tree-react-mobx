// Generated from PredicateLexer.g4 by ANTLR 4.12.0
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,4,31,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,1,0,
1,0,4,0,12,8,0,11,0,12,0,13,1,0,1,0,1,1,1,1,1,2,4,2,21,8,2,11,2,12,2,22,
1,3,4,3,26,8,3,11,3,12,3,27,1,3,1,3,1,13,0,4,1,1,3,2,5,3,7,4,1,0,2,1,0,48,
57,10,0,9,13,32,32,133,133,160,160,5760,5760,8192,8202,8232,8233,8239,8239,
8287,8287,12288,12288,33,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,
1,9,1,0,0,0,3,17,1,0,0,0,5,20,1,0,0,0,7,25,1,0,0,0,9,11,5,58,0,0,10,12,9,
0,0,0,11,10,1,0,0,0,12,13,1,0,0,0,13,14,1,0,0,0,13,11,1,0,0,0,14,15,1,0,
0,0,15,16,5,58,0,0,16,2,1,0,0,0,17,18,5,61,0,0,18,4,1,0,0,0,19,21,7,0,0,
0,20,19,1,0,0,0,21,22,1,0,0,0,22,20,1,0,0,0,22,23,1,0,0,0,23,6,1,0,0,0,24,
26,7,1,0,0,25,24,1,0,0,0,26,27,1,0,0,0,27,25,1,0,0,0,27,28,1,0,0,0,28,29,
1,0,0,0,29,30,6,3,0,0,30,8,1,0,0,0,4,0,13,22,27,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class PredicateLexer extends antlr4.Lexer {

    static grammarFileName = "PredicateLexer.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, null, "'='" ];
	static symbolicNames = [ null, "PROPERTY", "EQUALS", "INT_LITERAL", "WHITESPACE" ];
	static ruleNames = [ "PROPERTY", "EQUALS", "INT_LITERAL", "WHITESPACE" ];

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



