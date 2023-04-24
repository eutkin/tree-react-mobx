lexer grammar PredicateLexer;

PROPERTY
    : ':'.+?':'
    ;

EQUALS
    :'='
    ;

INT_LITERAL
    :[0-9]+
    ;

WHITESPACE
    : [ \t\p{White_Space}]+ -> skip
    ;

INT_PROPERTY
    : ':'.+?':' -> skip
    ;