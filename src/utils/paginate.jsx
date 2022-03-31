export function paginate(items, pageNumber, pageSize) {
	const start = (pageNumber - 1) * pageSize;
	const end = pageNumber * pageSize;
	return items.slice(start, end);
}
