<template>
  <div>
    <BlogFilter :checkboxList="filterList" />
    <CardGrid :items="cardList" />
  </div>
</template>

<script setup lang="ts">
import BlogFilter from '@/components/BlogFilter.vue';
import CardGrid from '@/components/Grid.vue';
import type { Tag, Card } from '@/utils/blogInterface';

import cardImage1 from '@/assets/images/card1.png';
import cardImage2 from '@/assets/images/card2.png';
import cardImage3 from '@/assets/images/card3.png';
import avatar from '@/assets/images/avatar.png';

const filterList: Tag[] = [
  { name: 'city', placeholder: 'Город' },
  { name: 'nature', placeholder: 'Природа' },
  { name: 'people', placeholder: 'Люди' },
  { name: 'animals', placeholder: 'Животные' },
  { name: 'food', placeholder: 'Еда' },
  { name: 'beverages', placeholder: 'Напитки' },
  { name: 'architecture', placeholder: 'Архитектура' },
  { name: 'art', placeholder: 'Искусство' }
];

const cardList: Card[] = [
  {
    id: 0,
    src: cardImage1,
    date: 1712638640,
    time: 120,
    commentCount: 1,
    comments: [
      {
        src: avatar,
        name: 'Мира Гусева',
        text: 'Эти мгновения наполняют наши сердца радостью и любовью.',
        date: 1712638640
      }
    ],
    title: 'Вдохновение в каждом шаге',
    description: 'Наши путешественники находят вдохновение в каждом шаге своего пути.',
    text: 'Каждое утро, когда я просыпаюсь в палатке, окружённой лесом и горами, я чувствую, как природа наполняет меня энергией. Величественные вершины, покрытые зелёными лесами, напоминают мне о том, как важно сохранять связь с природой. Каждый шаг по тропе — это не просто движение вперёд, это путешествие внутрь себя, где я нахожу вдохновение и силу. В такие моменты я понимаю, что настоящая красота мира скрыта в его простоте и величии.',
    tags: [
      { name: 'nature', placeholder: 'Природа' },
      { name: 'people', placeholder: 'Люди' }
    ]
  },
  {
    id: 1,
    src: cardImage2,
    date: 1712379440,
    time: 180,
    commentCount: 3,
    comments: [
      {
        src: avatar,
        name: 'Мира Гусева',
        text: 'Эти мгновения наполняют наши сердца радостью и любовью.',
        date: 1712638640
      },
      {
        src: avatar,
        name: 'Мира Гусева',
        text: 'Эти мгновения наполняют наши сердца радостью и любовью.',
        date: 1712638640
      },
      {
        src: avatar,
        name: 'Мира Гусева',
        text: 'Эти мгновения наполняют наши сердца радостью и любовью.',
        date: 1712638640
      }
    ],
    title: 'Моменты тишины и покоя',
    description: 'В такие моменты наши фотографы ощущают гармонию и умиротворение.',
    text: 'В такие моменты наши фотографы ощущают гармонию и умиротворение.В такие моменты наши фотографы ощущают гармонию и умиротворение.',
    tags: [
      { name: 'nature', placeholder: 'Природа' },
      { name: 'animals', placeholder: 'Животные' }
    ]
  },
  {
    id: 2,
    src: cardImage3,
    date: 1712293040,
    time: 180,
    commentCount: 2,
    comments: [
      {
        src: avatar,
        name: 'Мира Гусева',
        text: 'Эти мгновения наполняют наши сердца радостью и любовью.',
        date: 1712638640
      },
      {
        src: avatar,
        name: 'Мира Гусева',
        text: 'Эти мгновения наполняют наши сердца радостью и любовью.',
        date: 1712638640
      }
    ],
    title: 'Цвета природы в наших руках',
    description: 'Наши художники выражают всю красоту окружающего мира через творчество.',
    text: 'Наши художники выражают всю красоту окружающего мира через творчество.Наши художники выражают всю красоту окружающего мира через творчество.',
    tags: [
      { name: 'nature', placeholder: 'Природа' },
      { name: 'art', placeholder: 'Искусство' }
    ]
  }
];
</script>

<style></style>
