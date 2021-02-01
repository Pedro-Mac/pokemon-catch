const { expect } = require("@jest/globals");
const catchPokemons = require("./index");

test("2 pokemons caught", () => {
  expect(catchPokemons("N")).toBe(2);
});

test("2 pokemons caught", () => {
  expect(
    catchPokemons("NSNSNSNSNSNSNSNSNSNSNSNSNSNSNSNSNSNSNSNSNSNSNSNSNSNS"),
  ).toBe(2);
});

test("4 pokemons caught", () => {
  expect(catchPokemons("NESO")).toBe(4);
});

test("4 pokemons caught", () => {
  expect(catchPokemons("nESo")).toBe(4);
});

test("8 pokemons caught", () => {
  expect(catchPokemons("SSEENNOO")).toBe(8);
});

test("24 pokemons caught", () => {
  expect(catchPokemons("SSEEEEEEENNOSSONNOSSONNOSSONNO")).toBe(24);
});

test("10 pokemons caught", () => {
  expect(catchPokemons("SNSNSNEOESOEENOSSEENSNOOO")).toBe(10);
});

test("6 pokemons caught", () => {
  expect(catchPokemons("SENESONOSENESONO")).toBe(6);
});

test("sequence error", () => {
  expect(catchPokemons("NatO")).toBe("the sequence is not valid");
});

test("sequence not string", () => {
  expect(catchPokemons(25)).toBe("the sequence is not valid");
});
