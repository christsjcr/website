export type Option = { title: string; allergies: string[] };
export type Meal = { mains: Option[]; dessert?: Option };
export type Weekday = { weekend: false; lunch: Meal; dinner: Meal };
export type Weekend = { weekend: true; dinner: Meal };
export type Day = Weekday | Weekend;
export type Menu = { start: Date; days: Day[] };
