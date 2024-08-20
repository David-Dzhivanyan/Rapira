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
}
