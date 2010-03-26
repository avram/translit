/* Ad hoc Yanalif 1999-style system */
var cyr_to_lat_yanalif1999 =
{	'name' : "Yanalif 1999",
	'parent' : null,
	'from' : {'language' : ['tt', 'ba'], 'script' : 'Cyrl'},
	'to' : {'language' : ['tt', 'ba'], 'script' : 'Latn', 'variant' : 'yanalif1999'},
	'map' :
	{
	"а" : "a", "А" : "A",
	"б" : "b", "Б" : "B",
	"в" : "v", "В" : "V",
	"г" : "g", "Г" : "G",
	"д" : "d", "Д" : "D",
	"е" : "e", "Е" : "E",
	"ё" : "e", "Ё" : "E",
	"ж" : "j", "Ж" : "J",
	"з" : "z", "З" : "Z",
	"и" : "i", "И" : "İ",
	"й" : "y", "Й" : "Y",
	"к" : "k", "К" : "K",
	"л" : "l", "Л" : "L",
	"м" : "m", "М" : "M",
	"н" : "n", "Н" : "N",
	"о" : "o", "О" : "O",
	"п" : "p", "П" : "P",
	"р" : "r", "Р" : "R",
	"с" : "s", "С" : "S",
	"т" : "t", "Т" : "T",
	"у" : "u", "У" : "U",
	"ф" : "f", "Ф" : "F",
	"х" : "x", "Х" : "X",
	"ц" : "ts", "Ц" : "Ts",
	"ч" : "ç", "Ч" : "Ç",
	"ш" : "ş", "Ш" : "Ş",
	"щ" : "şç", "Щ" : "Şç",
	// Note that the next two are often replaced by similar-looking
	// characters in common usage.
	"ъ" : 'ʺ', "Ъ" : 'ʺ',	// U+02BA MODIFIER LETTER DOUBLE PRIME
				// Note: ALA-LC stipulates that word-final "ъ"
				// be dropped.
	"ь" : 'ʹ', "Ь" : 'ʹ', 	// U+02B9 MODIFER LETTER PRIME
	"ы" : "ı", "Ы" : "I",
	"ю" : "yu", "Ю" : "Yu",
	"я" : "ya", "Я" : "Ya",
	"э" : "e", "Э" : "E",
	"ә" : "ä", "Ә" : "Ä",
	"ө" : "ö", "Ө" : "Ö",
	"ң" : "n̄", "Ң" : "N̄",
	"ҡ" : "q", "Ҡ" : "Q",
	"ғ" : "ğ", "Ғ" : "Ğ",
	"җ" : "c", "Җ" : "C",
	"ҙ" : "đ", "Ҙ" : "Đ",
	"ҫ" : "ѣ", "Ҫ" : "Ѣ",
	"ү" : "ü", "Ү" : "Ü",
	"һ" : "h", "Һ" : "H",
	"қ" : "q", "Қ" : "Q",
	"ґ" : "ğ", "Ґ" : "Ğ"
	}
};

/* This is the ALA-LC 1997 standard romanization
  	http://www.loc.gov/catdir/cpso/roman.html */
/* 	Russian basic letters. This can be used for ru-Cyrl.
	It can be augmented and/or overridden for other
	non-Russian languages in the Cyrillic script. */
/* Source: "ALA-LC Romanization Tables" (1997), pp. 138, 184 */
/* Note: ALA-LC 1997 stipulates some combining ligatures.
   These are frequently omitted in practice. */
var cyr_to_lat_rus_alalc97 = 
{	'name' : "ALA-LC 1997, Russian",
	'parent' : null,
	'from' : {'language' : 'ru', 'script' : 'Cyrl'},
	'to' : {'language' : 'ru', 'script' : 'Latn', 'variant' : 'alalc97'},
	'map' :
	{
	"а" : "a", "А" : "A",
	"б" : "b", "Б" : "B",
	"в" : "v", "В" : "V",
	"г" : "g", "Г" : "G",
	"д" : "d", "Д" : "D",
	"е" : "e", "Е" : "E",
	"ё" : "ë", "Ё" : "Ë", 	// Commonly written without diaeresis
	"ж" : "zh", "Ж" : "Zh",
	"з" : "z", "З" : "Z",
	"и" : "i", "И" : "I",
	"й" : "ĭ", "Й" : "Ĭ",	// Commonly replaced by "i / I"
	"к" : "k", "К" : "K",
	"л" : "l", "Л" : "L",
	"м" : "m", "М" : "M",
	"н" : "n", "Н" : "N",
	"о" : "o", "О" : "O",
	"п" : "p", "П" : "P",
	"р" : "r", "Р" : "R",
	"с" : "s", "С" : "S",
	"т" : "t", "Т" : "T",
	"у" : "u", "У" : "U",
	"ф" : "f", "Ф" : "F",
	"х" : "kh", "Х" : "Kh",
	"ц" : "t︠︡s", "Ц" : "T︠︡S",
	"ч" : "ch", "Ч" : "Ch",
	"ш" : "sh", "Ш" : "Sh",
	"щ" : "shch", "Щ" : "Shch",
	// Note that the next two are often replaced by similar-looking
	// characters in common usage.
	"ъ" : 'ʺ', "Ъ" : 'ʺ',	// U+02BA MODIFIER LETTER DOUBLE PRIME
				// Note: ALA-LC stipulates that word-final "ъ"
				// be dropped.
	"ь" : 'ʹ', "Ь" : 'ʹ', 	// U+02B9 MODIFER LETTER PRIME
	"ы" : "y", "Ы" : "Y",
	"ю" : "i︠︡u", "Ю" : "I︠︡U",	
	"я" : "i︠︡a", "Я" : "I︠︡A",	
	"э" : "ė", "Э" : "Ė",	// Commonly written without dot
	// The following are obsolete letters
	"і" : "ī", "І" : "Ī",
	"ѣ" : "i︠︡e", "Ѣ" : "I︠︡E", 
	"ѧ" : "ę", "Ѧ" : "Ę",
	"ѳ" : "ḟ", "Ѳ" : "Ḟ",
	"ѵ" : "ẏ", "Ѵ" : "Ẏ"
	}
}

/* This is the ALA-LC 1997 romanization, _simplified_
  	http://www.loc.gov/catdir/cpso/roman.html */
/* 	Russian basic letters. The details of this non-standard, but
	commonly-used romanization are at:
		http://intranet.library.arizona.edu/users/brewerm/sil/lib/major.html */
/* Source: "ALA-LC Romanization Tables" (1997), pp. 138, 184
	with modification as above */
var cyr_to_lat_rus_alalc97x = 
{	'name' : "ALA-LC 1997 (simplified), Russian",
	'parent' : cyr_to_lat_rus_alalc97,
	'from' : {'language' : 'ru', 'script' : 'Cyrl'},
	'to' : {'language' : 'ru', 'script' : 'Latn', 'variant' : 'alalc97x'},
	'map' :
	{
	"й" : "i", "Й" : "I",
	"ц" : "ts", "Ц" : "TS",
	"ю" : "iu", "Ю" : "IU",	
	"я" : "ia", "Я" : "IA",	
	"э" : "e", "Э" : "E",
	// The following are obsolete letters
	"і" : "i", "І" : "I",
	"ѣ" : "ie", "Ѣ" : "IE", 
	"ѧ" : "e", "Ѧ" : "E",
	"ѳ" : "f", "Ѳ" : "F",
	"ѵ" : "y", "Ѵ" : "Y"
	}
}

/* This is the ALA-LC 1997 standard romanization
  	http://www.loc.gov/catdir/cpso/roman.html */
/* 	Tatar Cyrillic. This can be used for tt-Cyrl.
	This is based on the 1939 Cyrillic, but also includes
	the letters proposed in 1999 in preparation for 
	the abortive switch to a Latin script. */
/* Source: "ALA-LC Romanization Tables" (1997), p. 153 */
var cyr_to_lat_tt_alalc97 =
{	'name' : "ALA-LC 1997, Tatar",
	'parent' : cyr_to_lat_rus_alalc97,
	'from' : {'language' : 'tt', 'script' : 'Cyrl'},
	'to' : {'language' : 'tt', 'script' : 'Latn', 'variant' : 'alalc97'},
	'map' :
	{
	"ә" : "ă", "Ә" : "Ă",
	"ө" : "ȯ", "Ө" : "Ȯ",
	"ң" : "n︠︡g", "Ң" : "N︠︡G",
	"җ" : "j", "Җ" : "J",
	"ү" : "u̇", "Ү" : "U̇",
	"һ" : "ḣ", "Һ" : "Ḣ",	// ALA-LC appears to stipulate U+0358 COMBINING DOT ABOVE RIGHT for "ḣ",
				// but that seems to cause problems and is not combined correctly. We use
				// U+0307 DOT ABOVE in uppercase and lowercase here.
	// The following were proposed in 1999. They are not
	// documented in ALA-LC 1997. Transliteration follows ALA-LC 1997's
	// treatment of equivalent glyphs in Bashkir (ba-Cyrl).
	"қ" : "q", "Қ" : "Q",
	"ґ" : "gh", "Ґ" : "Gh",
	// Transliteration follows the equivalent glyph in Karakalpak, Eskimo-Yuit
	"ў" : "w", "Ў" : "W"
	} 
}

/* This is the ALA-LC 1997 romanization, _simplified_
  	http://www.loc.gov/catdir/cpso/roman.html */
/* 	Tatar Cyrillic. This can be used for tt-Cyrl.
	This is based on the 1939 Cyrillic, but also includes
	the letters proposed in 1999 in preparation for 
	the abortive switch to a Latin script. */
/* Note: In order to maintain the basic vowel contrasts,
	only the ligature on NG is removed here. Vowels'
	diacriticals remain. */
/* Source: "ALA-LC Romanization Tables" (1997), p. 153,
	modified as noted */
var cyr_to_lat_tt_alalc97x =
{	'name' : "ALA-LC 1997 (simple), Tatar",
	'parent' : cyr_to_lat_rus_alalc97x,
	'from' : {'language' : 'tt', 'script' : 'Cyrl'},
	'to' : {'language' : 'tt', 'script' : 'Latn', 'variant' : 'alalc97x'},
	'map' :
	{
	"ә" : "ă", "Ә" : "Ă",
	"ө" : "ȯ", "Ө" : "Ȯ",
	"ң" : "ng", "Ң" : "NG",
	"җ" : "j", "Җ" : "J",
	"ү" : "u̇", "Ү" : "U̇",
	"һ" : "ḣ", "Һ" : "Ḣ",	// ALA-LC appears to stipulate U+0358 COMBINING DOT ABOVE RIGHT for "ḣ",
				// but that seems to cause problems and is not combined correctly. We use
				// U+0307 DOT ABOVE in uppercase and lowercase here.
	// The following were proposed in 1999. They are not
	// documented in ALA-LC 1997. Transliteration follows ALA-LC 1997's
	// treatment of equivalent glyphs in Bashkir (ba-Cyrl).
	"қ" : "q", "Қ" : "Q",
	"ґ" : "gh", "Ґ" : "Gh",
	// Transliteration follows the equivalent glyph in Karakalpak, Eskimo-Yuit
	"ў" : "w", "Ў" : "W"
	} 
}

/* This is the ALA-LC 1997 standard romanization
  	http://www.loc.gov/catdir/cpso/roman.html */
/* 	Bashkir Cyrillic. This can be used for ba-Cyrl.
	This is based on the 1939 Cyrillic. */
/* Source: "ALA-LC Romanization Tables" (1997), p. 140 */
var cyr_to_lat_ba_alalc97 =
{	'name' : "ALA-LC 1997, Bashkir",
	'parent' : cyr_to_lat_rus_alalc97,
	'from' : {'language' : 'ba', 'script' : 'Cyrl'},
	'to' : {'language' : 'ba', 'script' : 'Latn', 'variant' : 'alalc97'},
	'map' :
	{
	"ә" : "ă", "Ә" : "Ă",
	"ө" : "ȯ", "Ө" : "Ȯ",
	"ң" : "n︠︡g", "Ң" : "N︠︡G",
	"ү" : "u̇", "Ү" : "U̇",
	"һ" : "ḣ", "Һ" : "Ḣ",	// ALA-LC appears to stipulate U+0358 COMBINING DOT ABOVE RIGHT for "ḣ",
				// but that seems to cause problems and is not combined correctly. We use
				// U+0307 DOT ABOVE in uppercase and lowercase here.
	"ҡ" : "q", "Ҡ" : "Q",
	"ғ" : "g︠︡h", "Ғ" : "G︠︡H",
	"ҙ" : "t︠︡h", "Ҙ" : "T︠︡H",
	"ҫ" : "th", "Ҫ" : "Th"
	} 
}

/* This is the ALA-LC 1997 romanization, _simplified_
  	http://www.loc.gov/catdir/cpso/roman.html */
/* 	Bashkir Cyrillic. This can be used for ba-Cyrl.
	This is based on the 1939 Cyrillic. */
/* Note: In order to maintain the basic vowel contrasts,
	only the ligature on NG is removed here. Vowels'
	diacriticals remain. */
/* Source: "ALA-LC Romanization Tables" (1997), p. 140,
	modified as noted */
var cyr_to_lat_ba_alalc97x =
{	'name' : "ALA-LC 1997, Bashkir",
	'parent' : cyr_to_lat_rus_alalc97x,
	'from' : {'language' : 'ba', 'script' : 'Cyrl'},
	'to' : {'language' : 'ba', 'script' : 'Latn', 'variant' : 'alalc97x'},
	'map' :
	{
	"ә" : "ă", "Ә" : "Ă",
	"ө" : "ȯ", "Ө" : "Ȯ",
	"ң" : "ng", "Ң" : "NG",
	"ү" : "u̇", "Ү" : "U̇",
	"һ" : "ḣ", "Һ" : "Ḣ",	// ALA-LC appears to stipulate U+0358 COMBINING DOT ABOVE RIGHT for "ḣ",
				// but that seems to cause problems and is not combined correctly. We use
				// U+0307 DOT ABOVE in uppercase and lowercase here.
	"ҡ" : "q", "Ҡ" : "Q",
	"ғ" : "gh", "Ғ" : "GH",
	"ҙ" : "th", "Ҙ" : "TH",	// Note the loss of good contrast
	"ҫ" : "th", "Ҫ" : "Th"
	} 
}

/* This is the Scholarly System, for Russian 
  	http://en.wikipedia.org/wiki/Scientific_transliteration */
/* This is closely related to ISO/R 9:1968. */
/* Source: "Scientific transliteration", Wikipedia. */
var cyr_to_lat_rus_scholarly = 
{	'name' : "International Scholarly System",
	'parent' : null,
	'from' : {'language' : 'ru', 'script' : 'Cyrl'},
	'to' : {'language' : 'ru', 'script' : 'Latn', 'variant' : 'scholarly'},
	'map' : 
	{
	"а" : "a", "А" : "A",
	"б" : "b", "Б" : "B",
	"в" : "v", "В" : "V",
	"г" : "g", "Г" : "G",
	"д" : "d", "Д" : "D",
	"е" : "e", "Е" : "E",
	"ё" : "e", "Ё" : "E",
	"ж" : "ž", "Ж" : "Ž",
	"з" : "z", "З" : "Z",
	"и" : "i", "И" : "I",
	"й" : "j", "Й" : "J",
	"к" : "k", "К" : "K",
	"л" : "l", "Л" : "L",
	"м" : "m", "М" : "M",
	"н" : "n", "Н" : "N",
	"о" : "o", "О" : "O",
	"п" : "p", "П" : "P",
	"р" : "r", "Р" : "R",
	"с" : "s", "С" : "S",
	"т" : "t", "Т" : "T",
	"у" : "u", "У" : "U",
	"ф" : "f", "Ф" : "F",
	"х" : "x", "Х" : "X",
	"ц" : "c", "Ц" : "C",
	"ч" : "č", "Ч" : "Č",
	"ш" : "š", "Ш" : "Š",
	"щ" : "šč", "Щ" : "Šč",
	// Note that the next two are often replaced by similar-looking
	// characters in common usage.
	"ъ" : 'ʺ', "Ъ" : 'ʺ',	// U+02BA MODIFIER LETTER DOUBLE PRIME
	"ь" : 'ʹ', "Ь" : 'ʹ', 	// U+02B9 MODIFER LETTER PRIME
	"ы" : "y", "Ы" : "Y",
	"ю" : "ju", "Ю" : "Ju",
	"я" : "ja", "Я" : "Ja",
	"э" : "è", "Э" : "È",
	// The following are obsolete letters
	"i" : "i", "I" : "I",
	"ѣ" : "ě", "Ѣ" : "Č", 
	"ѳ" : "f", "Ѳ" : "F",
	"ѵ" : "i", "Ѵ" : "I"
	}
}

/* This is ISO/R 9:1968, for Russian 
  	http://en.wikipedia.org/wiki/ISO/R_9:1968 */
/* Source: "ISO 9", Wikipedia. */
var cyr_to_lat_rus_iso9_1968 = 
{	'name' : "ISO/R 9:1968",
	'parent' : cyr_to_lat_rus_scholarly,
	'from' : {'language' : 'ru', 'script' : 'Cyrl'},
	'to' : {'language' : 'ru', 'script' : 'Latn', 'variant' : 'iso9_1968'},
	'map' : 
	{
	"э" : "ė", "Э" : "Ė",
	"х" : "h", "Х" : "H",	// Note: "ch" also occurs
	// The following are obsolete letters
	"і" : "ī", "І" : "Ī"
	}
}

/* This is ISO 9:1995 
  	http://en.wikipedia.org/wiki/ISO_9 */
/* TODO Make reverse table-- ISO 9:1995 is designed to be reversible */
/* Source: "ISO 9", Wikipedia. */
var cyr_to_lat_iso9_1995 = 
{	'name' : "ISO 9:1995",
	'parent' : null,
	// TODO complete language list
	'from' : {'language' : ['ru','tt'], 'script' : 'Cyrl'},
	'to' : {'language' : ['ru', 'tt'], 'script' : 'Latn', 'variant' : 'iso9_1995'},
	'map' : 
	{
"а" : "a", "А" : "A",	// 
"ӓ" : "ä", "Ӓ" : "Ä",	// 00C4 	00E4 	a diaeresis
"ӓ̄" : "ạ̈", "Ӓ̄" : "Ạ̈",	// 00C4+0323 	00E4+0323 	a diaeresis and dot below
"ӑ" : "ă", "Ӑ" : "Ă",	// 0102 	0103 	a breve
"а̄" : "ā", "А̄" : "Ā",	// 0100 	0101 	a macron
"ӕ" : "æ", "Ӕ" : "Æ",	// 00C6 	00E6 	ae ligature
"а́" : "á", "А́" : "Á",	// 00C1 	00E1 	a acute
"а̊" : "å", "А̊" : "Å",	// 00C5 	00E5 	a ring
"б" : "b", "Б" : "B",	// 
"в" : "v", "В" : "V",	// 
"г" : "g", "Г" : "G",	// 
"ѓ" : "ǵ", "Ѓ" : "Ǵ",	// 01F4 	01F5 	g acute
"ғ" : "ġ", "Ғ" : "Ġ",	// 0120 	0121 	g dot
"ҕ" : "ğ", "Ҕ" : "Ğ",	// 011E 	011F 	g breve
"һ" : "ḥ", "Һ" : "Ḥ",	// 1E24 	1E25 	h dot
"д" : "d", "Д" : "D",	// 
"ђ" : "đ", "Ђ" : "Đ",	// 0110 	0111 	d macron
"е" : "e", "Е" : "E",	// 
"ӗ" : "ĕ", "Ӗ" : "Ĕ",	// 0114 	0115 	e breve
"ё" : "ë", "Ё" : "Ë",	// 00CB 	00EB 	e diaeresis
"є" : "ê", "Є" : "Ê",	// 00CA 	00EA 	e circumflex
"ж" : "ž", "Ж" : "Ž",	// 017D 	017E 	z caron
"җ" : "ž̧", "Җ" : "Ž̧",	// 017D+0327 	017E+0327 	z caron and cedilla
"ӝ" : "z̄", "Ӝ" : "Z̄",	// Z+0304 	z+0304 	z macron
"ӂ" : "z̆", "Ӂ" : "Z̆",	// Z+0306 	z+0306 	z breve
"з" : "z", "З" : "Z",	// 
"ӟ" : "z̈", "Ӟ" : "Z̈",	// Z+0308 	z+0308 	z diaeresis
"ӡ" : "ź", "Ӡ" : "Ź",	// 0179 	017A 	z acute
"ѕ" : "ẑ", "Ѕ" : "Ẑ",	// 1E90 	1E91 	z circumflex
"и" : "i", "И" : "I",	// 
"ӣ" : "ī", "Ӣ" : "Ī",	// 012A 	012B 	i macron
"и́" : "í", "И́" : "Í",	// 00CD 	00ED 	i acute
"ӥ" : "î", "Ӥ" : "Î",	// 00CE 	00EE 	i circumflex
"й" : "j", "Й" : "J",	// 
"і" : "ì", "І" : "Ì",	// 00CC 	00EC 	i grave
"ї" : "ï", "Ї" : "Ï",	// 00CF 	00EF 	i diaeresis
"і̄" : "ǐ", "І̄" : "Ǐ",	// 01CF (012C) 	01D0 (012D) 	i caron (or breve)
"ј" : "ǰ", "Ј" : "J̌",	// J+030C 	01F0 	j caron
"ј̵" : "j́", "Ј̵" : "J́",	// J+0301 	j+0301 	j acute
"к" : "k", "К" : "K",	// 
"ӄ" : "ḳ", "Ӄ" : "Ḳ",	// 1E32 	1E33 	k dot below
"ҝ" : "k̂", "Ҝ" : "K̂",	// K+0302 	k+0302 	k circumflex
"ҡ" : "ǩ", "Ҡ" : "Ǩ",	// 01E8 	01E9 	k caron
"ҟ" : "k̄", "Ҟ" : "K̄",	// K+0304 	k+0304 	k macron
"қ" : "ķ", "Қ" : "Ķ",	// 0136 	0137 	k cedilla
"к̨" : "k̀", "К̨" : "K̀",	// K+0300 	k+0300 	k grave
"ԛ" : "q", "Ԛ" : "Q",	// 
"л" : "l", "Л" : "L",	// 
"љ" : "l̂", "Љ" : "L̂",	// L+0302 	l+0302 	l circumflex
"Л́" : "ĺ", "Л́" : "Ĺ",	// 0139 	013A 	l acute // XXX This may be broken-- is the input correct?
"ӆ" : "ļ", "Ӆ" : "Ļ",	// 013B 	013C 	l cedilla
"м" : "m", "М" : "M",	// 
"н" : "n", "Н" : "N",	// 
"њ" : "n̂", "Њ" : "N̂",	// N+0302 	n+0302 	n circumflex
"ң" : "ņ", "Ң" : "Ņ",	// 0145 	0146 	n cedilla
"ӊ" : "ṇ", "Ӊ" : "Ṇ",	// 1E46 	1E47 	n dot below
"ҥ" : "ṅ", "Ҥ" : "Ṅ",	// 1E44 	1E45 	n dot
"ԋ" : "ǹ", "Ԋ" : "Ǹ",	// 01F8 	01F9 	n grave
"ӈ" : "ń", "Ӈ" : "Ń",	// 0143 	0144 	n acute
//"Ň" : "0", "	" : "ň", 	n caron 	// XXX BROKEN. CHECK ISO 9
"н̄" : "n̄", "Н̄" : "N̄",	// N+0304 	n+0304 	n macron
"о" : "o", "О" : "O",	// 
"ӧ" : "ö", "Ӧ" : "Ö",	// 00D6 	00F6 	o diaeresis
"ө" : "ô", "Ө" : "Ô",	// 00D4 	00F4 	o circumflex
"ӫ" : "ő", "Ӫ" : "Ő",	// 0150 	0151 	o double acute
"ӫ̄" : "ọ̈", "Ӫ̄" : "Ọ̈",	// 00D6+0323 	00F6+0323 	o diaeresis and dot below
"ҩ" : "ò", "Ҩ" : "Ò",	// 00D2 	00F2 	o grave
"о́" : "ó", "О́" : "Ó",	// 00D3 	00F3 	o acute
"о̄" : "ō", "О̄" : "Ō",	// 014C 	014D 	o macron
"œ" : "œ", "Œ" : "Œ",	// 0152 	0153 	oe ligature
"п" : "p", "П" : "P",	// 
"ҧ" : "ṕ", "Ҧ" : "Ṕ",	// 1E54 	1E55 	p acute
"р" : "r", "Р" : "R",	// 
"с" : "s", "С" : "S",	// 
"ҫ" : "ş", "Ҫ" : "Ş",	// 015E 	015F 	s cedilla
"с̀" : "s̀", "С̀" : "S̀",	// S+0300 	s+0300 	s grave
"т" : "t", "Т" : "T",	// 
"ћ" : "ć", "Ћ" : "Ć",	// 0106 	0107 	c acute
"ԏ" : "t̀", "Ԏ" : "T̀",	// T+0300 	t+0300 	t grave
"т̌" : "ť", "Т̌" : "Ť",	// 0164 	0165 	t caron
"ҭ" : "ţ", "Ҭ" : "Ţ",	// 0162 	0163 	t cedilla
"ќ" : "ḱ", "Ќ" : "Ḱ",	// 1E30 	1E31 	k acute
"у" : "u", "У" : "U",	// 
"ӱ" : "ü", "Ӱ" : "Ü",	// 00DC 	00FC 	u diaeresis
"ӯ" : "ū", "Ӯ" : "Ū",	// 016A 	016B 	u macron
"ў" : "ŭ", "Ў" : "Ŭ",	// 016C 	016D 	u breve
"ӳ" : "ű", "Ӳ" : "Ű",	// 0170 	0171 	u double acute
"у́" : "ú", "У́" : "Ú",	// 00DA 	00FA 	u acute
"ӱ̄" : "ụ̈", "Ӱ̄" : "Ụ̈",	// 00DC+0323 	00FC+0323 	u diaeresis and dot below
"ү" : "ù", "Ү" : "Ù",	// 00D9 	00F9 	u grave
"ұ" : "u̇", "Ұ" : "U̇",	// U+0307 	u+0307 	u dot
"ӯ̈" : "ụ̄", "Ӯ̈" : "Ụ̄",	// 016A+0323 	016B+0323 	u macron and dot below
"ԝ" : "w", "Ԝ" : "W",	// 
"ф" : "f", "Ф" : "F",	// 
"х" : "h", "Х" : "H",	// 
"ҳ" : "ḩ", "Ҳ" : "Ḩ",	// 1E28 	1E29 	h cedilla
"ц" : "c", "Ц" : "C",	// 
"ҵ" : "c̄", "Ҵ" : "C̄",	// C+0304 	c+0304 	c macron
"џ" : "d̂", "Џ" : "D̂",	// D+0302 	d+0302 	d circumflex
"ч" : "č", "Ч" : "Č",	// 010C 	010D 	c caron
"ҷ" : "ç", "Ҷ" : "Ç",	// 00C7 	00E7 	c cedilla
"ӌ" : "c̣", "Ӌ" : "C̣",	// C+0323 	c+0323 	c dot below
"ӵ" : "c̈", "Ӵ" : "C̈",	// C+0308 	c+0308 	c diaeresis
"ҹ" : "ĉ", "Ҹ" : "Ĉ",	// 0108 	0109 	c circumflex
"ч̀" : "c̀", "Ч̀" : "C̀",	// C+0300 	c+0300 	c grave
"ҽ" : "c̆", "Ҽ" : "C̆",	// C+0306 	c+0306 	c breve
"ҿ" : "ç̆", "Ҿ" : "Ç̆",	// 00C7+0306 	00E7+0306 	c cedilla and breve
"ш" : "š", "Ш" : "Š",	// 0160 	0161 	s caron
"щ" : "ŝ", "Щ" : "Ŝ",	// 015C 	015D 	s circumflex
"ъ" : "ʺ", "Ъ" : "ʺ",	// 02BA 	double prime
"ы" : "y", "Ы" : "Y",	// 
"ӹ" : "ÿ", "Ӹ" : "Ÿ",	// 0178 	00FF 	y diaeresis
"ы̄" : "ȳ", "Ы̄" : "Ȳ",	// 0232 	0233 	y macron
"ь" : "ʹ", "Ь" : "ʹ",	// 02B9 	prime
"э" : "è", "Э" : "È",	// 00C8 	00E8 	e grave
"ә" : "a̋", "Ә" : "A̋",	// A+030B 	a+030B 	a double acute
"ӛ" : "à", "Ӛ" : "À",	// 00C0 	00E0 	a grave
"ю" : "û", "Ю" : "Û",	// 00DB 	00FB 	u circumflex
"ю̄" : "ů", "Ю̄" : "Ů",	// 016E 	016F 	u ring
"я" : "â", "Я" : "Â",	// 00C2 	00E2 	a circumflex
"ґ" : "g̀", "Ґ" : "G̀",	// G+0300 	g+0300 	g grave
"ѣ" : "ě", "Ѣ" : "Ě",	// 011A 	011B 	e caron
"ѫ" : "ǎ", "Ѫ" : "Ǎ",	// 01CD 	01CE 	a caron
"ѳ" : "f̀", "Ѳ" : "F̀",	// F+0300 	f+0300 	f grave
"ѵ" : "ỳ", "Ѵ" : "Ỳ"	// 1EF2 	1EF3 	y grave
	}
}

/* Azerbaijani Cyrillic to Latin
  	per UNGEGN Working Group on Romanization Systems */
/* Source:
REPORT ON THE CURRENT STATUS OF UNITED NATIONS ROMANIZATION SYSTEMS FOR GEOGRAPHICAL NAMES
Compiled by the UNGEGN Working Group on Romanization Systems
Version 2.2, January 2003
	http://www.eki.ee/wgrs/rom2_az.htm */
/* Note: This does not cover all the Cyrillic letters, and the source seems a little
   suspect. */
var cyr_to_lat_az_1991 =
{	'name' : "Azerbaijani Cyrillic->Latin 1991",
	'parent' : null,
	'from' : {'language' : 'az', 'script' : 'Cyrl'},
	'to' : {'language' : 'az', 'script' : 'Latn', 'variant' : 'az1991'},
	'map' :
	{
	"А" : "A", "а" : "a",
	"Б" : "B", "б" : "b",
	"В" : "V", "в" : "v",
	"Г" : "G", "г" : "g",
	"Ғ" : "Ğ", "ғ" : "ğ",
	"Д" : "D", "д" : "d",
	"Е" : "E", "е" : "e",
	"Ә" : "Ə", "ә" : "ə",
	"Ж" : "J", "ж" : "j",
	"З" : "Z", "з" : "z",
	"И" : "İ", "и" : "i",
	"Ы" : "I", "ы" : "ı",
	"Ј" : "Y", "ј" : "y",
	"К" : "K", "к" : "k",
	"Ҝ" : "G", "ҝ" : "g",
	"Л" : "L", "л" : "l",
	"М" : "M", "м" : "m",
	"Н" : "N", "н" : "n",
	"О" : "O", "о" : "o",
	"Ө" : "Ö", "ө" : "ö",
	"П" : "P", "п" : "p",
	"Р" : "R", "р" : "r",
	"С" : "S", "с" : "s",
	"Т" : "T", "т" : "t",
	"У" : "U", "у" : "u",
	"Ү" : "Ü", "ү" : "ü",
	"Ф" : "F", "ф" : "f",
	"Х" : "X", "х" : "x",
	"Һ" : "H", "һ" : "h",
	"Ч" : "Ç", "ч" : "ç",
	"Ҹ" : "C", "ҹ" : "c",
	"Ш" : "Ş", "ш" : "ş",
	"’" : "’", "’" : "’"
	}
}
