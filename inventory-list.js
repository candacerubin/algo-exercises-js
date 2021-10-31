function inventoryList() {
	let items = [];

	const add = (name) => {
		// Check if item already exists
		const names = items.filter((item) => item.name === name);

		if (names.length === 0) {
			// Add the item to list
			items.push({ name: name });
		}
	};

	const remove = (name) => {
		// Remove item from the list
		items = items.filter((item) => item.name !== name);
	};

	const getList = () => {
		// Return full list
		return items;
	};

	// Return all methods.
	return { add, remove, getList };
}
