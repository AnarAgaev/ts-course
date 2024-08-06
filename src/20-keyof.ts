// Getting and saving Window properties and methods
type WindowProp = keyof Window

const myValue: WindowProp = "document"


// Getting and saving keys of some Interface
interface PC {
    brand: string
    year: number
}

type PCKeys = keyof PC // brand | year
const PCParamBrand: PCKeys = "brand"
// const PCParamBrand: PCKeys = "_brand" // Error


// Getting and saving keys of some Tuple
type CustomTupleKeys = keyof [string, number]
const CustomTuplePropOrder: CustomTupleKeys = "1" // valid values are 0 or 1 and other Array methods
const CustomTuplePropMethod: CustomTupleKeys = "fill" // It can use Array method fill as it's value
