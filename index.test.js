const {getRandomProgression, getRandomNote, getRandomKey} = require('./index.js');

const keys = [ 'A♭', 'A', 'B♭', 'B', 'C♭', 'C', 'C♯', 'D♭', 'D', 'E♭', 'E', 'F', 'F♯', 'G♭', 'G' ];

const notes = [ 'A♭', 'A', 'A♯', 'B♭', 'B', 'C♭', 'C', 'C♯', 'D♭', 'D', 'D♯', 'E♭', 'E', 'F', 'F♯', 'G♭', 'G', 'G#' ];

const progressions = [ 
    'I - IV - V', 
    'I - V - IV', 
    'IV - V - I', 
    'ii - V - I', 
    'ii - vi - V', 
    'ii - vi - IV - V' 
]

test('test getRandomProgression', () => {
    for(let i = 0; i < 1000; i++) {
        expect(progressions).toContain(getRandomProgression());
    }
})

test('test getRandomNote', () => {
    for(let i = 0; i < 1000; i++) {
        expect(notes).toContain(getRandomNote());
    }
})

test('test getRandomKey', () => {
    for(let i = 0; i < 1000; i++) {
        expect(keys).toContain(getRandomKey());
    }
})
