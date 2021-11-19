import { Add, Substract, Multiplication } from "../Math";

test("Return sum of two arguments", () => {
  // Arrange
  let a = 1;
  let b = 2;
  // Act
  let expected = 3;

  const result = Add(a, b);
  expect(result).toBe(expected);

  // Assert
});

test("Return substraction of a - b", () => {
  // Arrange

  let a = 1;
  let b = 2;
  // Act
  let expected = 1;

  const result = Substract(b, a);
  expect(result).toBe(expected);

  // Assert
});

test("Return multiplication of two arguments", () => {
  // Arrange

  let a = 2;
  let b = 2;
  // Act
  let expected = 4;

  const result = Multiplication(b, a);
  expect(result).toBe(expected);

  // Assert
});
