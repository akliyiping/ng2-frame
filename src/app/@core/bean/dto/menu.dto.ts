export interface Children {
	children?: any;
	permissions: string;
	name: string;
	checked: boolean;
	id: string;
	sort: string;
	parentId: string;
}

export interface MenuDto {
	children: Children[];
	permissions: string;
	name: string;
	checked: boolean;
	id: string;
	sort: string;
	parentId: string;
}

