// Given two playlists, where each dictionary contains information about a song, create a function that returns a list of songs that are in common in both playlists.
// Example input:
// List1 = [ {'song_id': 1, 'song_name': 'Tangled', 'status': 'active'}, {'song_id': 2, 'song_name': 'Sunday Morning', 'status': 'removed'}, {'song_id': 3, 'song_name': 'Not Coming Home', 'status': 'active'}, {'song_id': 4, 'song_name': 'She Will be Loved', 'status': 'active'}, {'song_id': 5, 'song_name': 'Beautiful Mistakes', 'status': 'removed'}, ]
// List2 = [ {'song_id': 1, 'song_name': 'Tangled', 'status': 'active'}, {'song_id': 2, 'song_name': 'Lovesick', 'status': 'active'}, {'song_id': 3, 'song_name': 'Seasons', 'status': 'active'}, {'song_id': 5, 'song_name': 'Beautiful Mistakes', 'status': 'removed'}, ]
// Output: [ {'song_id': 1, 'song_name': 'Tangled', 'status': 'active'} ]

let list1 = [
	{ song_id: 1, song_name: 'Tangled', status: 'active' },
	{ song_id: 2, song_name: 'Sunday Morning', status: 'removed' },
	{ song_id: 3, song_name: 'Not Coming Home', status: 'active' },
	{ song_id: 4, song_name: 'She Will be Loved', status: 'active' },
	{ song_id: 5, song_name: 'Beautiful Mistakes', status: 'removed' },
];
let list2 = [
	{ song_id: 1, song_name: 'Tangled', status: 'active' },
	{ song_id: 2, song_name: 'Lovesick', status: 'active' },
	{ song_id: 3, song_name: 'Seasons', status: 'active' },
	{ song_id: 5, song_name: 'Beautiful Mistakes', status: 'removed' },
];

function commonSongs(list1, list2) {
	let map = {};
	for (let song of list1) {
		map[song['song_name']] = true;
	}
	let result = list2.filter((song) => map[song['song_name']]);
	return result;
}
console.log(commonSongs(list1, list2));
