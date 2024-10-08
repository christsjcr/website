import type { MenuCategory, MenuItem } from "./menu";


export interface RoleItem extends MenuItem {
    name: string;
    pronouns?: string;
    description: string;
}

export interface RoleCategory extends MenuCategory {
    items: RoleItem[];
}

export interface ResourceItem {
    title: string;
    url: string;
    info?: string[];
}

export interface ResourceCategory {
    title: string;
    items: ResourceItem[];
}

export interface ResourcePage {
    title: string;
    sections: ResourceCategory[];
}
