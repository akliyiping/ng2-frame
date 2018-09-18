export interface ApiRoot<T> {
	status: number;
	data: T[];
	message?: any;
}