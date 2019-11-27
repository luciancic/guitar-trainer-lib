const {getRandomProgression, getRandomNote, getRandomKey, getRandomFret} = require('./index.js');

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

function uniquesFrom (randomFunction, loopCount = 1000) {
    let uniqueOutputs = [];
    for(let i = 0; i < loopCount; i++) {
        let unique = randomFunction();
        if ( !(uniqueOutputs.includes(unique)) ){
            uniqueOutputs.push(unique)
        }
    }
    return uniqueOutputs;
}


test('test getRandomProgression', () => {
    let results = uniquesFrom(getRandomProgression);
    const test = progressions.every(progression => results.includes(progression));
    expect(test).toBe(true);
})

test('test getRandomNote', () => {
    let results = uniquesFrom(getRandomNote);
    const test = notes.every(note => results.includes(note));
    expect(test).toBe(true);
})

test('test getRandomKey', () => {
    let results = uniquesFrom(getRandomKey);
    const test = keys.every(key => results.includes(key));
    expect(test).toBe(true);
})

test('test getRandomFret', () => {
    let results = uniquesFrom(getRandomFret);
    const test = results.length;
    expect(test).toBe(25);

    const test2 = results.every(value => (0 <= value) && (value < 25) && (typeof value === 'number'));
    expect(test2).toBe(true);
})

test('test getRandomFret with arg input', () => {
    let results = uniquesFrom(() => getRandomFret(20));
    const test = results.length;
    expect(test).toBe(21);

    const test2 = results.every(value => (0 <= value) && (value < 21) && (typeof value === 'number'));
    expect(test2).toBe(true);
})

test('test getRandomKey for no repetition', () => {
    let previousResult = getRandomKey();
    let test = true;
    
    for(let i = 0; i < 1000; i++) {
        let result = getRandomKey();
        
        console.log(i);

        if (result === previousResult) {
            test = false;
            break
        }
        previousResult = result;
    }
    expect(test).toBe(true);
})