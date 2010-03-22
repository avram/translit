var cyr_to_lat_yanalif1999 =
{	'parent' : null,
	'from' : {'lang' : ['tt', 'ba'], 'script' : 'Cyr'},
	'to' : {'script' : 'Latn', 'variant' : 'yanalif1999'},
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
	"ъ" : "'", "Ъ" : "'",
	"ь" : "'", "Ь" : "'",
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
/* 	Russian basic letters. This can be used for ru-Cyr.
	It can be augmented and/or overridden for other
	non-Russian languages in the Cyrillic script. */
/* Source: "ALA-LC Romanization Tables" (1997), pp. 138, 184 */
/* Note: ALA-LC 1997 stipulates some combining ligatures.
   These are frequently omitted in practice. */
var cyr_to_lat_rus_alalc97 = 
{	'parent' : null,
	'from' : {'lang' : 'ru', 'script' : 'Cyr'},
	'to' : {'script' : 'Latn', 'variant' : 'alalc97'},
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
	"ѣ" : "i︠︡e", "Ѣ" : "I︠︡E", 
	"ѧ" : "ę", "Ѧ" : "Ę",
	"ѳ" : "ḟ", "Ѳ" : "Ḟ",
	"ѵ" : "ẏ", "Ѵ" : "Ẏ"
	}
}

/* This is the ALA-LC 1997 standard romanization
  	http://www.loc.gov/catdir/cpso/roman.html */
/* 	Tatar Cyrillic. This can be used for tt-Cyr.
	This is based on the 1939 Cyrillic, but also includes
	the letters proposed in 1999 in preparation for 
	the abortive switch to a Latin script. */
/* Source: "ALA-LC Romanization Tables" (1997), p. 153 */
var cyr_to_lat_tt_alalc97 =
{	'parent' : cyr_to_lat_rus_alalc97,
	'from' : {'lang' : 'tt', 'script' : 'Cyr'},
	'to' : {'script' : 'Latn', 'variant' : 'alalc97'},
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
	// treatment of equivalent glyphs in Bashkir (ba-Cyr).
	"қ" : "q", "Қ" : "Q",
	"ґ" : "gh", "Ґ" : "Gh",
	// Transliteration follows the equivalent glyph in Karakalpak, Eskimo-Yuit
	"ў" : "w", "Ў" : "W"
	} 
}

/* This is the ALA-LC 1997 standard romanization
  	http://www.loc.gov/catdir/cpso/roman.html */
/* 	Bashkir Cyrillic. This can be used for ba-Cyr.
	This is based on the 1939 Cyrillic. */
/* Source: "ALA-LC Romanization Tables" (1997), p. 140 */
var cyr_to_lat_ba_alalc97 =
{	'parent' : cyr_to_lat_rus_alalc97,
	'from' : {'lang' : 'ba', 'script' : 'Cyr'},
	'to' : {'script' : 'Latn', 'variant' : 'alalc97'},
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

var cyr_to_lat_rus_phon = 
{	'parent' : null,
	'from' : {'lang' : 'ru', 'script' : 'Cyr'},
	'to' : {'script' : 'Latn', 'variant' : 'phonetic'},
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
	"ъ" : '"', "Ъ" : '"',
	"ь" : "'", "Ь" : "'",
	"ы" : "y", "Ы" : "Y",
	"ю" : "ju", "Ю" : "Ju",
	"я" : "ja", "Я" : "Ja",
	"э" : "e", "Э" : "E"
	}
}

function transliterate (inlang, outlang, text) {
	var substitutions;

	if ((inlang == "tt-Cyr" || inlang == "ba-Cyr")
		&& (outlang == "tt-Latn" || outlang == "ba-Latn" )) {
		substitutions = cyr_to_lat_yanalif1999["map"];
	} else return;

	for (var mapped in substitutions) {
		var mapto = substitutions[mapped];
		if(text.indexOf(mapped) != -1) {
			text = text.replace(mapped, mapto, "g");
		}
	}
	
	return text;
}
