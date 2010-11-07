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
		print("[31mFail (" + (test++) + ")[0m");
		return false;
	}
}

// Assertions

/* Basic transliteration */
print("[1mBasic transliteration[0m");
assertEqual(transliterate("tt-Cyrl", {"script" : "Latn", "variant" : "iso9_1995"}, "Бүген Лос Анжелес татарлары Нәүрез бәйрәмен билгеләде. Татарның иң шәп егетләре Ирек Гали белән Эмиль Мөбәрәкшин башлап йөреп оештырган бу чарага үзбәкләр дә кушылды."), "Bùgen Los Anželes tatarlary Na̋ùrez ba̋jra̋men bilgela̋de. Tatarnyņ iņ ša̋p egetla̋re Irek Gali bela̋n Èmilʹ Môba̋ra̋kšin bašlap jôrep oeštyrgan bu čaraga ùzba̋kla̋r da̋ kušyldy.");
assertEqual(transliterate("ru", "ru-Latn-alalc97x", "Введение в урало-алтайское языкознание"), "Vvedenie v uralo-altaiskoe iazykoznanie");
assertEqual(transliterate("ru", "ru-Latn-alalc97", "Сказанія князя Курбскаго"), "Skazanīi︠︡a kni︠︡azi︠︡a Kurbskago");
assertEqual(transliterate("ru", "ru-iso9_1995", "This is a letter that is represented by a d with a macron: ђ"), "This is a letter that is represented by a d with a macron: đ");
// Digraph input
assertEqual(transliterate("ru", "ru-iso9_1995", "л’афлаф! Л’аф = лаф?"), "ĺaflaf! Ĺaf = laf?");
assertEqual(transliterate("ru", "ru-alalc97x", "Коммерсантъ -- это моя любимая газета! Кто не любитъ? Не знаю. Мне какъ-то все равно. Он читает, она то нетъ. Объелся груш."), "Kommersant -- eto moia liubimaia gazeta! Kto ne liubit? Ne znaiu. Mne kak-to vse ravno. On chitaet, ona to net. Obʺelsia grush.");
// More...
assertEqual(transliterate("tt-Cyrl", "tt-Latn-yan1999", "Бүген күренекле"),"Bügen kürenekle");

/* Tag parsing */
print("[1mTag parsing[0m");
assertEqual(
		transliterate("ru-RU-Cyrl", "ru-Latn", "Сработает ли это? Тут была Юлия, купила хлеб."),
		transliterate({"language" : "ru", "region" : "RU", "script" : "Cyrl"},
				{"script" : "Latn", "language" : "ru"},
				"Сработает ли это? Тут была Юлия, купила хлеб."));
