import colors from "./colors";

const colorsArray = [colors.dh, colors.gs, colors.sg, colors.sl];

const getRandomColor = () => {
  return colorsArray[Math.floor(Math.random() * colorsArray.length)];
};
const programMock = {
  day: "12-02-2022",
  selected: true,
  marked: true,
  selectedColor: getRandomColor(),
  discipline: "GS",
  hora: "09:00 - 12.00",
  lugar: "Base Alpha",
  notasEntrenador:
    "Haremos Gigante palo largo en nevada, traigan las protecciones, agua y cosas para comer",
};

export default programMock;
