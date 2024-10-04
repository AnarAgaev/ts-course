interface DataModel {
    id: string

    title: string

    elements: {

        header: {
            title: string
            description: string
            links: string[]
        }

        body: [
            {
                section: string
                title: string
                content: {}
            }
        ]

        footer: {
            description: string
            links: string[]
        }
    }
}

// We can get some type by index form any Oject type
type TypeFromObjectByIdx = DataModel['elements']['footer'] // TypeFromObjectByIdx = { description: string, links: string[] }


// We, also, can get type form Array by index
type someTuple = [number, string, boolean, ...string[]]
const someTupleEx = [33, 'string', true, 'string']
type TypeFromArrayByIdx = someTuple[0] // TypeFromArrayByIdx = number


// Getting Array values huck
const sizes = ['small', 'medium', 'large'] as const
type TypeUnionByArrayValues = typeof sizes[number] // TypeUnionByArrayValues = 'small' | 'medium' | 'large'






























export {}