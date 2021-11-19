import { AddTodo } from "../components/helper";

test("Should add todo to the list", () => {
  // Arrange
  const defaultTodo = [
    {
      id: 1,
      name: "one",
      isComplete: false,
    },
    {
      id: 2,
      name: "two",
      isComplete: false,
    },
    {
      id: 3,
      name: "three",
      isComplete: false,
    },
  ];

  const newTodo = {
    id: 4,
    name: "for",
    isComplete: false,
  };
  // Act
  const expected = [
    {
      id: 4,
      name: "for",
      isComplete: false,
    },
    {
      id: 1,
      name: "one",
      isComplete: false,
    },
    {
      id: 2,
      name: "two",
      isComplete: false,
    },
    {
      id: 3,
      name: "three",
      isComplete: false,
    },
  ];
  // Assert

  const result = AddTodo(defaultTodo, newTodo);
  expect(result).toEqual(expected);
});

test("should not mutate the existing todo array", () => {
  // Arrange
  const defaultTodo = [
    {
      id: 1,
      name: "one",
      isComplete: false,
    },
    {
      id: 2,
      name: "two",
      isComplete: false,
    },
  ];
  const newTodo = {
    id: 3,
    name: "three",
    isComplete: false,
  };
  const result = AddTodo(defaultTodo, newTodo);

  expect(result).not.toBe(defaultTodo);
  // Act
  // Assert
});
