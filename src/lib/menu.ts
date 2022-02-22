export interface MenuItem {
    label?: string;
    title: string;
    id: string;
}

export interface MenuCategory {
    category: string;
    items: MenuItem[];
}