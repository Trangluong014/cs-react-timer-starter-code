export const formatTime = (time) => {
  const getSeconds = time % 60;
  const minutes = (time - (time % 60)) / 60;
  const getMinutes = minutes % 60;
  const getHours = (minutes - (minutes % 60)) / 60;

  return `${getHours} : ${getMinutes} : ${getSeconds}`;
};
