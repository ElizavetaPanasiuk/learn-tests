const sum = (a, b) => {
  return a + b;
}

test('2 + 3 equals 5', () => {
  expect(sum(2, 3)).toEqual(5);
});
