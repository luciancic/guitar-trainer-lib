# 🎸 guitar-trainer-lib 🎸

Generate random musical keys, notes, and progressions 🎵

## Get started

### Install

`yarn add guitar-trainer-lib` or `npm install guitar-trainer-lib`

### Use functions
```javascript
import {
  getRandomProgression,
  getRandomNote,
  getRandomKey,
  getRandomFret
} from 'guitar-trainer-lib'

getRandomProgression() // 'I - V - IV'
getRandomNote() // 'E♭'
getRandomKey() // 'G♭'
getRandomFret() // 18 (Default 24 fret max)
getRandomFret(21) // 12 (Add arg to set max)
```

### Possible Outputs

```
keys          = [ 'A♭', 'A', 'B♭', 'B', 'C♭', 'C', 'C♯', 'D♭', 'D', 'E♭', 'E', 'F', 'F♯', 'G♭', 'G' ]
notes         = [ 'A♭', 'A', 'A♯', 'B♭', 'B', 'C♭', 'C', 'C♯', 'D♭', 'D', 'D♯', 'E♭', 'E', 'F', 'F♯', 'G♭', 'G', 'G#' ]
progressions  = [ 
                  'I - IV - V', 
                  'I - V - IV', 
                  'IV - V - I', 
                  'ii - V - I', 
                  'ii - vi - V', 
                  'ii - vi - IV - V' 
                ]
```

Write to us if you wish us to add more!
Happy playing! 🎸🎵
