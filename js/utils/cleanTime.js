export function cleanTime(time) {
  const min = ("0" + Math.round(time / 60)).slice(-2);
  const sec = ("0" + Math.round(time % 60)).slice(-2);
  return `${min} : ${sec}`;
}

