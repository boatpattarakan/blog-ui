export interface IBlog {
  id: string;
  attributes: IAttribute;
}

export interface IAttribute {
  title: string;
  description: string;
  detail: string;
}