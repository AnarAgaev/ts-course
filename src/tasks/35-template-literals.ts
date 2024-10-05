type Style = 'none' | 'dotted' | 'dashed' | 'solid'
type Color = 'Red' | 'Green' | 'Blue' | 'White'

type BorderStyle = `${Style} ${Uncapitalize<Color>}`

let borderStyle: BorderStyle = 'dashed green'

export {}