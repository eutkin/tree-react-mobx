// Generated from ./grammar/PredicateParser.g4 by ANTLR 4.12.0
// jshint ignore: start
import antlr4 from 'antlr4';
import PredicateParserListener from './PredicateParserListener.js';
const serializedATN = [4,1,5,12,2,0,7,0,2,1,7,1,1,0,1,0,1,0,1,1,1,1,1,1,
1,1,1,1,0,0,2,0,2,0,0,9,0,4,1,0,0,0,2,7,1,0,0,0,4,5,3,2,1,0,5,6,5,0,0,1,
6,1,1,0,0,0,7,8,5,5,0,0,8,9,5,2,0,0,9,10,5,3,0,0,10,3,1,0,0,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class PredicateParser extends antlr4.Parser {

    static grammarFileName = "PredicateParser.g4";
    static literalNames = [ null, null, "'='" ];
    static symbolicNames = [ null, "PROPERTY", "EQUALS", "INT_LITERAL", 
                             "WHITESPACE", "INT_PROPERTY" ];
    static ruleNames = [ "predicateLine", "predicate" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = PredicateParser.ruleNames;
        this.literalNames = PredicateParser.literalNames;
        this.symbolicNames = PredicateParser.symbolicNames;
    }



	predicateLine() {
	    let localctx = new PredicateLineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, PredicateParser.RULE_predicateLine);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 4;
	        this.predicate();
	        this.state = 5;
	        this.match(PredicateParser.EOF);
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



	predicate() {
	    let localctx = new PredicateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, PredicateParser.RULE_predicate);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 7;
	        this.match(PredicateParser.INT_PROPERTY);
	        this.state = 8;
	        this.match(PredicateParser.EQUALS);
	        this.state = 9;
	        this.match(PredicateParser.INT_LITERAL);
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

PredicateParser.EOF = antlr4.Token.EOF;
PredicateParser.PROPERTY = 1;
PredicateParser.EQUALS = 2;
PredicateParser.INT_LITERAL = 3;
PredicateParser.WHITESPACE = 4;
PredicateParser.INT_PROPERTY = 5;

PredicateParser.RULE_predicateLine = 0;
PredicateParser.RULE_predicate = 1;

class PredicateLineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PredicateParser.RULE_predicateLine;
    }

	predicate() {
	    return this.getTypedRuleContext(PredicateContext,0);
	};

	EOF() {
	    return this.getToken(PredicateParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PredicateParserListener ) {
	        listener.enterPredicateLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PredicateParserListener ) {
	        listener.exitPredicateLine(this);
		}
	}


}



class PredicateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PredicateParser.RULE_predicate;
    }

	INT_PROPERTY() {
	    return this.getToken(PredicateParser.INT_PROPERTY, 0);
	};

	EQUALS() {
	    return this.getToken(PredicateParser.EQUALS, 0);
	};

	INT_LITERAL() {
	    return this.getToken(PredicateParser.INT_LITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PredicateParserListener ) {
	        listener.enterPredicate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PredicateParserListener ) {
	        listener.exitPredicate(this);
		}
	}


}




PredicateParser.PredicateLineContext = PredicateLineContext; 
PredicateParser.PredicateContext = PredicateContext; 
