let nextPostId = 0

export const addPost = (text) => {
	return {
		type: 'ADD_POST',
		id: nextPostId++,
		text
	}
}