load("translit-systems.js");
load("translit.js");

var test = 0;

function assertEqual(a, b) {
	if (a === b) {
		//print("\t" + a + "\n\t" + b);
		print("Pass (" + (test++) + ")");
		return true;
	} else {
		print("\t" + a + "\n\t" + b);
		print("Fail (" + (test++) + ")");
		return false;
	}
}

// Assertions

/* Basic transliteration */
assertEqual(transliterate("tt-Cyrl", {"script" : "Latn", "variant" : "iso9_1995"}, "Бүген Лос Анжелес татарлары Нәүрез бәйрәмен билгеләде. Татарның иң шәп егетләре Ирек Гали белән Эмиль Мөбәрәкшин башлап йөреп оештырган бу чарага үзбәкләр дә кушылды."), "Bùgen Los Anželes tatarlary Na̋ùrez ba̋jra̋men bilgela̋de. Tatarnyņ iņ ša̋p egetla̋re Irek Gali bela̋n Èmilʹ Môba̋ra̋kšin bašlap jôrep oeštyrgan bu čaraga ùzba̋kla̋r da̋ kušyldy.");
assertEqual(transliterate("ru", "ru-Latn-alalc97x", "Введение в урало-алтайское языкознание"), "Vvedenie v uralo-altaiskoe iazykoznanie");

/* Tag parsing */
assertEqual(
		transliterate("ru-RU-Cyrl", "ru-Latn", "Сработает ли это? Тут была Юлия, купила хлеб."),
		transliterate({"language" : "ru", "region" : "RU", "script" : "Cyrl"},
				{"script" : "Latn", "language" : "ru"},
				"Сработает ли это? Тут была Юлия, купила хлеб."));
