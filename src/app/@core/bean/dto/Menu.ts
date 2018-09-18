export interface Children {
	children?: any;
	permissions: string;
	name: string;
	checked: boolean;
	id: string;
	sort: string;
	parentId: string;
}

export interface Menu {
	children: Children[];
	permissions: string;
	name: string;
	checked: boolean;
	id: string;
	sort: string;
	parentId: string;
}

