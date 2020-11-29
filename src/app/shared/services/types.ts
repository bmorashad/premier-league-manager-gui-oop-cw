type status = 0 | 1
export type response = {
	status: status,
	data: Object,
	errorMessage ?: string
}
