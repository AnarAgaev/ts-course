// Mapping of types
type PCBrand = {
    name: string
    country: string
    created: Date
}

type Brands = 'Apple' | 'IBM' | 'DELL' | 'Lenovo' | 'HP' | 'Huawei'

type PCListRecord = {
    [KeyBrands in Brands]?: PCBrand  // or [KeyBrands in 'Apple' | 'IBM' | 'DELL' | 'Lenovo']?: PCBrand
}

const computers: PCListRecord = {
    Apple: {
        name: 'Apple Corp.',
        country: 'USA',
        created: new Date()
    }
};

function echoComputers(computers: PCListRecord) {
    console.log(computers.Apple?.country);
}

// Reusable mapping types
type PartOfWindow = {
    [Key in 'document' | 'navigation' | 'screen' | 'load']?: Window[Key]
}

const p: PartOfWindow = {
    document: window.document
}

export {}