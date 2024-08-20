export function formatDate(unixDate: number): string {
  const date = new Date(unixDate * 1000);
  const day = date.getDate();
  const monthNames = [
    'Янв',
    'Фев',
    'Мар',
    'Апр',
    'Май',
    'Июн',
    'Июл',
    'Авг',
    'Сен',
    'Окт',
    'Ноя',
    'Дек'
  ];
  const month = monthNames[date.getMonth()];

  return `${day} ${month}`;
}

export function formatComment(commentCount: number): string {
  let answer: string = commentCount.toString();
  switch (true) {
    case commentCount === 1:
      answer += ' комментарий';
      break;
    case commentCount > 1 && commentCount < 5:
      answer += ' комментария';
      break;
    default:
      answer += ' комментариев';
  }

  return answer;
}

export function setPageScroll(lock: boolean) {
  document.body.classList.toggle('lock', lock);
  // if (lock) {
  //   const scrollY = window.scrollY;
  //   document.body.style.position = 'fixed';
  //   document.body.style.top = `-${scrollY}px`;
  //   document.body.style.width = '100%';
  // } else {
  //   const scrollY = Math.abs(parseInt(document.body.style.top || '0', 10));
  //   document.body.style.position = '';
  //   document.body.style.top = '';
  //   window.scrollTo(0, scrollY);
  // }
}
