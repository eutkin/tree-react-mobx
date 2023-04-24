parser grammar PredicateParser;

options { tokenVocab = PredicateLexer; }

predicateLine
    : predicate EOF
    ;

predicate
    : INT_PROPERTY EQUALS INT_LITERAL
    ;