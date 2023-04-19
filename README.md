# Tree UI

## Lexer

lexer grammar PredicateLexer;

PROPERTY
: ':'.+?':'
;

EQUALS
: '='
;

INT_LITERAL
: [0-9]+
;

WHITESPACE
: [ \t\p{White_Space}]+ -> skip
;

## Parser

parser grammar PredicateParser;

options { tokenVocab = PredicateLexer; }

predicateLine
: predicate EOF
;

predicate
: PROPERTY EQUALS INT_LITERAL
;
