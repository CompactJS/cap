export const cap = (value, min, max) => {
	if (max === undefined) return Math.min(value, min);
	if (max < min) [min, max] = [max, min];
	return Math.min(Math.max(value, min), max);
};
