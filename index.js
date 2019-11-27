const keys = [ 'A♭', 'A', 'B♭', 'B', 'C♭', 'C', 'C♯', 'D♭', 'D', 'E♭', 'E', 'F', 'F♯', 'G♭', 'G' ]

const notes = [ 'A♭', 'A', 'A♯', 'B♭', 'B', 'C♭', 'C', 'C♯', 'D♭', 'D', 'D♯', 'E♭', 'E', 'F', 'F♯', 'G♭', 'G', 'G#' ]

const progressions = [ 
    'I - IV - V', 
    'I - V - IV', 
    'IV - V - I', 
    'ii - V - I', 
    'ii - vi - V', 
    'ii - vi - IV - V' 
]

function getRandomProgression() {
  const index = randUpTo(progressions.length)
  return progressions[index];
}

function getRandomNote() {
  const index = randUpTo(notes.length);
  return notes[index];
}

function getRandomKey() {
  const index = randUpTo(keys.length);
  return keys[index];
}

function getRandomFret(max = 24) {
  return randUpTo(max + 1);
}

// Returns an integer between 0 and max (exluding max)
function randFactory() {
  let previous;
  return function randTo(max) {
    let newValue = Math.floor(Math.random() * max);
    if (newValue === previous) {
      return randTo(max);
    }
    previous = newValue;
    return newValue;
  }
}

const randUpTo = randFactory();

module.exports = {getRandomProgression, getRandomNote, getRandomKey, getRandomFret}
