// cases
// Letter not N, S, E, O
// Letter capitalized vs not capitalized

const catchPokemons = (sequence) => {
  if (typeof sequence !== "string") return "the sequence is not valid";

  const arrayOfCoordinates = [{ x: 0, y: 0 }];

  let currentXPosition = 0;
  let currentYPosition = 0;

  let pokemonsCaught = 1;

  const sequenceCapitalized = sequence.toUpperCase();

  for (let i = 0; i < sequenceCapitalized.length; i++) {
    switch (sequenceCapitalized[i]) {
      case "N":
        currentYPosition += 1;
        break;
      case "E":
        currentXPosition += 1;
        break;
      case "S":
        currentYPosition -= 1;
        break;
      case "O":
        currentXPosition -= 1;
        break;
      default:
        return "the sequence is not valid";
    }

    //check if Ash has been on that square before
    const locationRepeats = arrayOfCoordinates.some(
      (item) => item.x === currentXPosition && item.y === currentYPosition,
    );

    //Add the location to the locations if Ash hadn't been there before
    if (!locationRepeats) {
      arrayOfCoordinates.push({ x: currentXPosition, y: currentYPosition });
      pokemonsCaught += 1;
    }
  }
  return pokemonsCaught;
};

module.exports = catchPokemons;
