export const getIcon = iconName => {
  return `http://openweathermap.org/img/w/${iconName}.png`;
};

export const getC = (C) => {
  return parseInt(C)
}