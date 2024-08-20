<template>
  <div>
    <BlogFilter :checkboxList="filterCheckboxList" @update:filters="filter" />
    <div class="container mx-auto bg-white rounded-xl p-3 m-3 md:p-4 lg:p-7">
      <Grid v-if="filteredCards.length">
        <Card
          v-for="item in filteredCards"
          :key="item.id"
          :="item"
          class="mx-auto md:mx-0"
          @click="() => showModal(item)"
        />
      </Grid>
      <div v-else class="flex flex-col items-center gap-1.5 text-gray-300">
        <IconSearchList />
        <div class="text-gray-500 text-sm">Поиск не дал результатов</div>
        <div class="text-xs max-w-72 text-center">
          Повторите поиск или используйте фильтр для структуризации контента
        </div>
      </div>
    </div>
  </div>
  <CardModal :isShow="isShowModal" :="currentModal" @close="modalClose" />
</template>

<script setup lang="ts">
import BlogFilter from '@/components/BlogFilter.vue';
import Grid from '@/components/Grid.vue';
import type { Tag, Card as CardInterface, Filter } from '@/utils/blogInterface';
import CardModal from '@/components/CardModal.vue';
import Card from '@/components/Card.vue';

import cardImage1 from '@/assets/images/card1.png';
import cardImage2 from '@/assets/images/card2.png';
import cardImage3 from '@/assets/images/card3.png';
import cardImage4 from '@/assets/images/card4.png';
import cardImage5 from '@/assets/images/card5.png';
import cardImage6 from '@/assets/images/card6.png';
import avatar from '@/assets/images/avatar.png';
import { computed, ref } from 'vue';
import { setPageScroll } from '@/utils';
import IconSearchList from '@/components/icons/IconSearchList.vue';

const filterCheckboxList: Tag[] = [
  { name: 'city', placeholder: 'Город' },
  { name: 'nature', placeholder: 'Природа' },
  { name: 'people', placeholder: 'Люди' },
  { name: 'animals', placeholder: 'Животные' },
  { name: 'food', placeholder: 'Еда' },
  { name: 'beverages', placeholder: 'Напитки' },
  { name: 'architecture', placeholder: 'Архитектура' },
  { name: 'art', placeholder: 'Искусство' }
];

const cardList: CardInterface[] = [
  {
    id: 0,
    src: cardImage1,
    date: 1712638640,
    time: 120,
    comments: [
      {
        id: 1,
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
    comments: [
      {
        id: 1,
        src: avatar,
        name: 'Мира Гусева',
        text: 'Эти мгновения наполняют наши сердца радостью и любовью.',
        date: 1712638640
      },
      {
        id: 2,
        src: avatar,
        name: 'Мира Гусева',
        text: 'Эти мгновения наполняют наши сердца радостью и любовью.',
        date: 1712638640
      },
      {
        id: 3,
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
    comments: [
      {
        id: 1,
        src: avatar,
        name: 'Мира Гусева',
        text: 'Эти мгновения наполняют наши сердца радостью и любовью.',
        date: 1712638640
      },
      {
        id: 2,
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
  },
  {
    id: 3,
    src: cardImage4,
    date: 1712247696,
    time: 900,
    comments: [
      {
        id: 1,
        src: avatar,
        name: 'Мира Гусева',
        text: 'Эти мгновения наполняют наши сердца радостью и любовью.',
        date: 1712638640
      },
      {
        id: 2,
        src: avatar,
        name: 'Мира Гусева',
        text: 'Эти мгновения наполняют наши сердца радостью и любовью.',
        date: 1712638640
      },
      {
        id: 3,
        src: avatar,
        name: 'Мира Гусева',
        text: 'Эти мгновения наполняют наши сердца радостью и любовью.',
        date: 1712638640
      },
      {
        id: 4,
        src: avatar,
        name: 'Мира Гусева',
        text: 'Эти мгновения наполняют наши сердца радостью и любовью.',
        date: 1712638640
      },
      {
        id: 5,
        src: avatar,
        name: 'Мира Гусева',
        text: 'Эти мгновения наполняют наши сердца радостью и любовью.',
        date: 1712638640
      }
    ],
    title: 'Семейные узы в дикой природе',
    description: 'Наблюдая за этими сценами, наши фотографы чувствуют тепло и единство.',
    text: 'В такие моменты наши фотографы ощущают гармонию и умиротворение.В такие моменты наши фотографы ощущают гармонию и умиротворение.',
    tags: [
      { name: 'nature', placeholder: 'Природа' },
      { name: 'animals', placeholder: 'Животные' }
    ]
  },
  {
    id: 4,
    src: cardImage5,
    date: 1712161296,
    time: 120,
    comments: [
      {
        id: 1,
        src: avatar,
        name: 'Мира Гусева',
        text: 'Эти мгновения наполняют наши сердца радостью и любовью.',
        date: 1712638640
      },
      {
        id: 2,
        src: avatar,
        name: 'Мира Гусева',
        text: 'Эти мгновения наполняют наши сердца радостью и любовью.',
        date: 1712638640
      }
    ],
    title: 'Гармония городских и природных пейзажей ',
    description:
      'Этот вид напоминает нам о том, как природа и город могут сосуществовать в гармонии.',
    text: 'Наши художники выражают всю красоту окружающего мира через творчество.Наши художники выражают всю красоту окружающего мира через творчество.',
    tags: [
      { name: 'nature', placeholder: 'Природа' },
      { name: 'art', placeholder: 'Искусство' }
    ]
  },
  {
    id: 5,
    src: cardImage6,
    date: 1711988496,
    time: 240,
    comments: [],
    title: 'Моменты, которые остаются в сердце ',
    description: 'Эти мгновения наполняют наши сердца радостью и любовью.',
    text: 'Каждое утро, когда я просыпаюсь в палатке, окружённой лесом и горами, я чувствую, как природа наполняет меня энергией. Величественные вершины, покрытые зелёными лесами, напоминают мне о том, как важно сохранять связь с природой. Каждый шаг по тропе — это не просто движение вперёд, это путешествие внутрь себя, где я нахожу вдохновение и силу. В такие моменты я понимаю, что настоящая красота мира скрыта в его простоте и величии.',
    tags: [
      { name: 'nature', placeholder: 'Природа' },
      { name: 'people', placeholder: 'Люди' },
      { name: 'animals', placeholder: 'Животные' }
    ]
  }
];

const isShowModal = ref(false);
const currentModal = ref({});
const currentFilter = ref<Filter>({ searchText: '', tags: [] });

const filteredCards = computed(() => {
  return cardList.filter((card) => {
    return (
      card.title.toLowerCase().includes(currentFilter.value.searchText.toLowerCase()) &&
      currentFilter.value.tags.every((tag) => {
        return card.tags.find((item) => item.name === tag.name);
      })
    );
  });
});

const filter = (obj: Filter) => {
  currentFilter.value = obj;
};

const showModal = (e: CardInterface) => {
  isShowModal.value = true;
  currentModal.value = e;
  setPageScroll(true);
};

const modalClose = () => {
  isShowModal.value = false;
  setPageScroll(false);
};
</script>

<style></style>
