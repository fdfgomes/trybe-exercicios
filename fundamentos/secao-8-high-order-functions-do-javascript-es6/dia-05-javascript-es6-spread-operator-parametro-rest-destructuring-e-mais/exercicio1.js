const rectangleArea = (width, height) => width * height;

const calculateAreas = (rectanglesArr) => {
  let response = [];
  rectanglesArr.forEach((rectangle) => {
    response.push(rectangleArea(...rectangle));
  });
  return response;
};

module.exports = calculateAreas;
