var cyr_to_lat_zamanalif =
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
	"ғ" : "g", "Ғ" : "G",
	"җ" : "c", "Җ" : "C",
	"ҙ" : "th", "Ҙ" : "Th",
	"ҫ" : "th", "Ҫ" : "Th",
	"ү" : "ü", "Ү" : "Ü",
	"һ" : "h", "Һ" : "H"
};

var cyr_to_lat_rus_loc = 
{
	"а" : "a", "А" : "A",
	"б" : "b", "Б" : "B",
	"в" : "v", "В" : "V",
	"г" : "g", "Г" : "G",
	"д" : "d", "Д" : "D",
	"е" : "e", "Е" : "E",
	"ё" : "e", "Ё" : "E",
	"ж" : "zh", "Ж" : "Zh",
	"з" : "z", "З" : "Z",
	"и" : "i", "И" : "I",
	"й" : "i", "Й" : "I",
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
	"ц" : "ts", "Ц" : "Ts",
	"ч" : "ch", "Ч" : "Ch",
	"ш" : "sh", "Ш" : "Sh",
	"щ" : "shch", "Щ" : "Shch",
	"ъ" : '"', "Ъ" : '"',
	"ь" : "'", "Ь" : "'",
	"ы" : "y", "Ы" : "Y",
	"ю" : "iu", "Ю" : "Iu",
	"я" : "ia", "Я" : "Ia",
	"э" : "e", "Э" : "E"
}

var cyr_to_lat_rus_phon = 
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

function transliterate (inlang, outlang, text) {
	var substitutions;

	if ((inlang == "tt-Cyr" || inlang == "ba-Cyr")
		&& (outlang == "tt-Latn" || outlang == "ba-Latn" )) {
		substitutions = cyr_to_lat_zamanalif;
	} else return;

	for (var mapped in substitutions) {
		var mapto = substitutions[mapped];
		if(text.indexOf(mapped) != -1) {
			text = text.replace(mapped, mapto, "g");
		}
	}
	
	return text;
}
