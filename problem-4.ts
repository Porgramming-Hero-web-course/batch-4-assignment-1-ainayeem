{
  type Circle = {
    shape: "circle";
    radius: number;
  };
  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };

  function calculateShapeArea(shape: Circle | Rectangle): number {
    if ("radius" in shape) {
      return parseFloat((Math.PI * shape.radius * shape.radius).toFixed(2));
    } else {
      return parseFloat((shape.height * shape.width).toFixed(2));
    }
  }

  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
  console.log(circleArea);

  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });
  console.log(rectangleArea);
}
