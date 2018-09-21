export interface MenuDto {
  children: MenuDto[];
  permissions: string;
  name: string;
  checked: boolean;
  id: string;
  sort: string;
  parentId: string;
}

