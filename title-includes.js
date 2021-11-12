// Given a list of words (indicator_list) and a list of songs, write a function that returns all songs in which the title contains at least one of these words.
// indicator_list = ['THEME', 'CREDITS', 'SCORE', 'MAIN TITLES', ‘FEAT’]
// Example Input: titles = [ {"id": 1,"title": "CHE CAZZO RIDI FEAT TEDUA"}, {"id": 2,"title": "MOTHERS DAY MONOLOGUE UNDERSCORE"}, {"id": 3,"title": "THE LAST STAND (FEAT TEDUA)"}, {"id": 4,"title": "CRAZY HOLIDAYS"} ]
// Output: [ {"id": 1,"title": "CHE CAZZO RIDI FEAT TEDUA"}, {"id": 2,"title": "MOTHERS DAY MONOLOGUE UNDERSCORE"}, {"id": 3,"title": "THE LAST STAND (FEAT TEDUA)"} ]

let indicator_list = ['THEME', 'CREDITS', 'SCORE', 'MAIN TITLES', 'FEAT'];
let titles = [
	{ id: 1, title: 'CHE CAZZO RIDI FEAT TEDUA' },
	{ id: 2, title: 'MOTHERS DAY MONOLOGUE UNDERSCORE' },
	{ id: 3, title: 'THE LAST STAND (FEAT TEDUA)' },
	{ id: 4, title: 'CRAZY HOLIDAYS' },
];

function matchedTitles(indicator_list, titles) {
	let result = [];
	for (let song in titles) {
		let match = false;
		for (let word in indicator_list) {
			if (word.includes(song['title'])) {
				match = true;
			}
			if (match) {
				result.push(song);
			}
		}
	}

	return result;
}
console.log(matchedTitles(indicator_list, titles));
