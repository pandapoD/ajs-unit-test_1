import compareHealth from "../js/player";

test("Проверяем значение на отрезке больше 50", () => {
  expect(compareHealth({ name: "Маг", health: 90 })).toBe("healthy");
});
test("Проверяем значение на отрезке от 15 до 50", () => {
  expect(compareHealth({ name: "Маг", health: 35 })).toBe("wounded");
});
test("Проверяем значение на отрезке меньше 15", () => {
  expect(compareHealth({ name: "Маг", health: 10 })).toBe("critical");
});
test("Проверяем значение равное 15", () => {
  expect(compareHealth({ name: "Маг", health: 15 })).toBe("wounded");
});
test("Проверяем значение равное 50", () => {
  expect(compareHealth({ name: "Маг", health: 50 })).toBe("wounded");
});
