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
  return progressions[randUpTo(progressions.length)]
}

function getRandomNote() {
  return notes[randUpTo(notes.length)]
}

function getRandomKey() {
  return keys[randUpTo(keys.length)]
}

function randUpTo(max) {
  return Math.floor(Math.random() * max)
}

module.exports = {getRandomProgression, getRandomNote, getRandomKey}
