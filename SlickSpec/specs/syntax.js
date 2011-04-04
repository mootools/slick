var TAGS = 'normal UPCASE escaped\\,character ǝpoɔıun'.split(' ');

var IDS = "normal escaped\\,character ǝpoɔıun with-dash with_underscore number123 silly\\:id\\:\\:with\\:colons".split(' ');

var CLASSES = "normal escaped\\,character ǝpoɔıun 瀡 with-dash with_underscore number123 MiXeDcAsE".split(' ');

var ATTRIB_OPERATORS = '= != *= ^= $= ~= |='.split(' ');

var ATTRIB_KEYS = '\
normal,\
 spaced,\
spaced ,\
escaped\\]character,\
ǝpoɔıun,\
with-dash,\
with_underscore,\
number123,\
'.split(',');

var ATTRIB_VALUES = '\
normal,\
ǝpoɔıun,\
"double quote",\
\'single quote\',\
"double\\"escaped",\
\'single\\\'escaped\',\
 spaced,\
spaced ,\
 "spaced",\
 \'spaced\',\
"spaced" ,\
\'spaced\' ,\
parens(),\
curly{},\
"quoted parens()",\
"quoted curly{}",\
"quoted square[]",\
'.split(',');
// TODO: add "square[]" to ATTRIB_VALUES for prototype support

var PSEUDO_KEYS = 'normal escaped\\,character ǝpoɔıun with-dash with_underscore'.split(' ');

var PSEUDO_VALUES = 'normal,ǝpoɔıun, spaced,"double quote",\'single quote\',"double\\"escaped",\'single\\\'escaped\',curly{},square[],"quoted parens()","quoted curly{}","quoted square[]"'.split(',');;

var COMBINATORS = (" >+~" + "`!@$%^&={}\\;</").split('');
