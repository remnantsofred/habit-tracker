export function breakDownSeconds(seconds:number) {
  const weeks = Math.floor(seconds / 604800);
  const days = Math.floor((seconds % 604800) / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secondsLeft = seconds % 60;

  return {
    weeks,
    days,
    hours,
    minutes,
    secondsLeft,
  };
}