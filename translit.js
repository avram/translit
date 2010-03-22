var cyr_to_lat_yanalif1999 =
{	'name' : "Yanalif 1999",
	'parent' : null,
	'from' : {'language' : ['tt', 'ba'], 'script' : 'Cyrl'},
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
/* 	Tatar Cyrillic. This can be used for tt-Cyrl.
	This is based on the 1939 Cyrillic, but also includes
	the letters proposed in 1999 in preparation for 
	the abortive switch to a Latin script. */
/* Source: "ALA-LC Romanization Tables" (1997), p. 153 */
var cyr_to_lat_tt_alalc97 =
{	'name' : "ALA-LC 1997, Tatar",
	'parent' : cyr_to_lat_rus_alalc97,
	'from' : {'language' : 'tt', 'script' : 'Cyrl'},
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
{	'name' : "Russian linguistics-style",
	'parent' : null,
	'from' : {'language' : 'ru', 'script' : 'Cyrl'},
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

// List of transliteration systems
var systems = [
	cyr_to_lat_yanalif1999,
	cyr_to_lat_rus_alalc97,
	cyr_to_lat_tt_alalc97,
	cyr_to_lat_ba_alalc97,
	cyr_to_lat_rus_phon
];

// TODO Function to generate lookup tables for input and output languages
function generate_lookup_tables (systems) {
}

// Function to find systems that can handle language with given criteria
function lookup (criteria, direction, systems) {
	var languagematch = 32;
	var regionmatch = 16;
	var scriptmatch = 8;
	var variantmatch = 1;

	for (var i in systems) {
		if (criteria[direction].language &&
		    (systems[i][direction].language.indexOf(criteria[direction].language) != -1)) {
			systems[i]["score"] += languagematch;
		}
		if (criteria[direction].region &&
		    (systems[i][direction].region.indexOf(criteria[direction].region) != -1)) {
			systems[i]["score"] += regionmatch;
		}
		if (criteria[direction].script &&
		    (systems[i][direction].script.indexOf(criteria[direction].script) != -1)) {
			systems[i]["score"] += scriptmatch;
		}
		if (criteria[direction].variant &&
		    (systems[i][direction].variant.indexOf(criteria[direction].variant) != -1)) {
			systems[i]["score"] += variantmatch;
		}
	}

	systems.sort(function (a, b) {
		a["score"] > b["score"];
	});

	// we reject matches that don't match language and script
	//return systems.filter(function(a) {(a["score"] & 40 == 40)};
	return systems;
}

/* Function based on parse_IETF_language_tag, in the tau package
   for R.
	tau/R/language.R

http://cran.r-project.org/web/packages/tau/
Package: tau
Version: 0.0-7
Date: 2010-02-17
Title: Text Analysis Utilities
Description: Utilities for text analysis
Author: Christian Buchta, Kurt Hornik, Ingo Feinerer, David Meyer
Maintainer: Kurt Hornik <Kurt.Hornik@R-project.org>
License: GPL-2
Encoding: UTF-8
Packaged: 2010-02-19 06:57:06 UTC; hornik
Repository: CRAN
Date/Publication: 2010-02-19 07:04:02
   
    ## No support for grandfathered tags for now.
    ## Hence, assume the form is
    ##   language [-script] [-region] [-variant]
    ## where
    ##   language       2*3ALPHA        ISO 639 (shortest)
    ##                  4ALPHA          reserved for future use
    ##                  5*8ALPHA        registered language subtag
    ##   script         4ALPHA          ISO 15924
    ##   region         2ALPHA          ISO 3166
    ##                  3DIGIT          UN M.49
    ##   variant        5*8alphanum     registered variants
    ##                  DIGIT 3alphanum
 */
function ietf_language_tag_parse (tag) {
	var pieces = tag.split("-");
    
	var re_language = new RegExp("^[a-zA-Z]{2,8}$");
	var re_script = new RegExp("^[a-zA-Z]{4}$");
	var re_region = new RegExp("^([a-zA-Z]{2}|[0-9]{3})$");
	var re_variant = new RegExp("^([a-zA-Z0-9]{5,8}|[0-9][a-zA-Z0-9]{3})$");

	var out = {"language" : null, "script" : null, "region" : null, "variant" : null};

	if (re_language.exec(pieces[0])) {
		out.language = pieces.shift();
		for (var chunk in pieces) {
			if (re_script.exec(pieces[chunk])) {
				out.script = pieces[chunk];
			} else if (re_region.exec(pieces[chunk])) {
				out.region = pieces[chunk];
			} else if (re_variant.exec(pieces[chunk])) {
				out.variant = pieces[chunk];
			}
		}
	}
	return out;
}

function inherit (system) {
	print ("Inheritance for system: "+system.name);
	if (!system["parent"]) return system["map"];
	else {	var parental_map = inherit(system["parent"]);
		for (attr in parental_map) {
			if (!system["map"][attr]) {
				system["map"][attr] = parental_map[attr];
			}
		}
	}
	return system["map"];
}

function transliterate (inlang, outlang, text) {
	var substitutions;

	inlang = ietf_language_tag_parse(inlang);

	var criteria = {'from' : inlang, 'to' : outlang};
	
	inmatches = lookup(criteria, "from", systems);
	outmatches = lookup(criteria, "from", inmatches);

	substitutions = inherit(outmatches[0]);

	for (var mapped in substitutions) {
		var mapto = substitutions[mapped];
		if(text.indexOf(mapped) != -1) {
			text = text.replace(mapped, mapto, "g");
		}
	}
	
	return text;
}

print(transliterate ("tt-Cyrl", {"script" : "Latn"}, "Бүген Лос Анжелес татарлары Нәүрез бәйрәмен билгеләде. Татарның иң шәп егетләре Ирек Гали белән Эмиль Мөбәрәкшин башлап йөреп оештырган бу чарага үзбәкләр дә кушылды."));
