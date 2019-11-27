# 🎸 guitar-trainer-lib 🎸

Generate random musical keys, notes, and progressions 🎵

## Get started
### Install
`yarn add guitar-trainer-lib`
or
`npm install guitar-trainer-lib`

### Use functions
```javascript
import {
  getRandomProgression,
  getRandomNote,
  getRandomKey
} from 'guitar-trainer-lib'

getRandomProgression() // 'I - V - IV'
getRandomNote() // 'E♭'
getRandomKey() // 'G♭'
```
### Possible Outputs
```
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
```
Write to us if you wish us to add more!
Happy playing! 🎸🎵
