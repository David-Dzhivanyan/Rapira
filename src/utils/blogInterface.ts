export interface Card {
  id: number;
  src: string;
  date: number;
  time: number;
  comments: CardComment[];
  title: string;
  description: string;
  text: string;
  tags: Tag[];
}

export interface CardComment {
  id: number;
  src: string;
  name: string;
  text: string;
  date: number;
}

export interface Tag {
  name: string;
  placeholder: string;
}

export interface CheckboxItem {
  name: string;
  placeholder: string;
}
