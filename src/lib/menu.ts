export interface MenuItem {
    label?: string;
    title: string;
    id: string;
}

export interface MenuCategory {
    category: string;
    items: MenuItem[];
}

export interface RoleItem extends MenuItem {
    name: string;
    description: string;
}

export interface RoleCategory extends MenuCategory {
    items: RoleItem[];
}
