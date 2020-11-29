type status = 0 | 1
export type Response = {
	status: status,
	data ?: any,
	errorMessage ?: string
}
