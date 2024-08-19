export interface Card {
  id: number;
  src: string;
  date: number;
  time: number;
  commentCount: number;
  comments: CardComment[];
  title: string;
  description: string;
  text: string;
  tags: Tag[];
}

export interface CardComment {
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
