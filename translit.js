/*global cyr_to_lat_yanalif1999, cyr_to_lat_rus_alalc97, cyr_to_lat_tt_alalc97, cyr_to_lat_ba_alalc97, cyr_to_lat_rus_scholarly, cyr_to_lat_rus_iso9_1968, cyr_to_lat_iso9_1995, cyr_to_lat_rus_alalc97x, cyr_to_lat_tt_alalc97x, cyr_to_lat_ba_alalc97x, jahat_to_standard_tatar_cyr */
/*jslint plusplus: false */

// List of transliteration systems
var systems = [
	jahat_to_standard_tatar_cyr,
	cyr_to_lat_yanalif1999,
	cyr_to_lat_rus_alalc97,
	cyr_to_lat_tt_alalc97,
	cyr_to_lat_ba_alalc97,
	cyr_to_lat_rus_alalc97x,
	cyr_to_lat_tt_alalc97x,
	cyr_to_lat_ba_alalc97x,
	cyr_to_lat_rus_scholarly,
	cyr_to_lat_rus_iso9_1968,
	cyr_to_lat_iso9_1995
];

// Function to find systems that can handle language with given criteria
function lookup(criteria, direction, systems) {
	var LANGUAGE = 16, REGION = 1, SCRIPT = 32, VARIANT = 8, i;

	for (i = 0; i < systems.length; i++) {
		if (typeof systems[i].score === "undefined") {
			systems[i].score = 0;
		}
		// TODO The distinction between matching a substring of a language code or region
		// and matching an actual code or region is still not handled correctly here.
		if (criteria[direction].language && systems[i][direction].language &&
		    (systems[i][direction].language.indexOf(criteria[direction].language) !== -1)) {
			systems[i].score += LANGUAGE;
		}
		if (criteria[direction].region && systems[i][direction].region && 
		    (systems[i][direction].region.indexOf(criteria[direction].region) !== -1)) {
			systems[i].score += REGION;
		}
		if (criteria[direction].script && systems[i][direction].script && 
		    (systems[i][direction].script.indexOf(criteria[direction].script) !== -1)) {
			systems[i].score += SCRIPT;
		}
		if (criteria[direction].variant && systems[i][direction].variant && 
		    (systems[i][direction].variant === criteria[direction].variant)) {
			systems[i].score += VARIANT;
		}
		//print(direction + ": "+systems[i].name+" "+systems[i].score);
	}

	return systems.sort(function (a, b) {
		return a.score < b.score;
	});
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
function ietf_language_tag_parse(tag) {
	var	pieces = tag.split("-"),
		re_language = new RegExp("^[a-zA-Z]{2,8}$"),
		re_script = new RegExp("^[a-zA-Z]{4}$"),
		re_region = new RegExp("^([a-zA-Z]{2}|[0-9]{3})$"),
		re_variant = new RegExp("^([a-zA-Z0-9]{5,8}|[0-9][a-zA-Z0-9]{3})$"),
		out = {"language" : null, "script" : null, "region" : null, "variant" : null},
		chunk;

	if (re_language.exec(pieces[0])) {
		out.language = pieces.shift();
		for (chunk in pieces) {
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

function inherit(system) {
	var attr, parental_map;
	if (!system.parent) {
		return system.map;
	} else {
		//print("\tInherits from " + system.parent.name);
		parental_map = inherit(system.parent);
		for (attr in parental_map) {
			if (parental_map.hasOwnProperty(attr) && !system.map[attr]) {
				system.map[attr] = parental_map[attr];
			}
		}
	}
	return system.map;
}

function transliterate(inlang, outlang, text) {
	var	substitutions, criteria,
		mapped, mapto,
		inmatches, outmatches,
		i;

	if (typeof inlang === "string") {
		inlang = ietf_language_tag_parse(inlang);
	}
	if (typeof outlang === "string") {
		outlang = ietf_language_tag_parse(outlang);
	}

	// Reset system scores
	for (i = 0; i < systems.length; i++) {
		systems[i].score = 0;
	} 
	// Sort systems to be reproducible
	// This is not a very transparent sort
	systems.sort(function (a, b) {
		return a.name > b.name;
	});

	criteria = {'from' : inlang, 'to' : outlang};

	// We look for support for input, then output. The matches are ordered by total
	// score, in order of decreasing score!
	inmatches = lookup(criteria, "from", systems);
	outmatches = lookup(criteria, "to", inmatches);

	print("Inheritance for system: " + outmatches[0].name);
	substitutions = inherit(outmatches[0]);

	for (mapped in substitutions) {
		//print(mapped + " - " + text);
		if (substitutions.hasOwnProperty(mapped)) {
			var regex = new RegExp(mapped, "g");
			text = text.replace(regex, substitutions[mapped]);
		}
	}
	
	return text;
}
