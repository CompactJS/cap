/**
 * Limits value to range from min to max.
 * If max is omitted min will be used as max, without a min range limit.
 * @value value to limit
 * @min minimum value
 * @max maximum value (optional)
 */
export function cap(value: number, min: number, max?: number): number {
	if (max === undefined) return Math.min(value, min);
	if (max < min) [min, max] = [max, min];
	return Math.min(Math.max(value, min), max);
}
