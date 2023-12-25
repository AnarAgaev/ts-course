// Example on Interfases
interface ProductInterfase {
    price: number
    isNew: boolean
    title: string
    isSale?: boolean
}

interface VehicleInterfase {
    wheels: number
    year: Date
    brand: string
}

interface CarInterfase extends ProductInterfase, VehicleInterfase {
    type: string
    model: string
}

const asAsInterfase: CarInterfase = {
    brand: 'BMW',
    isNew: true,
    isSale: false,
    model: '3 series',
    price: 43000,
    title: 'xDrive',
    type: 'sedan',
    wheels: 4,
    year: new Date(2023, 17, 1)
}

// Example on Aliases
type ProductAlias = {
    price: number
    isNew: boolean
    isSale: boolean
    title: string
}

type VehicleAlias = {
    wheels: number
    year: Date
    brand: string
}

type CarAlias = ProductAlias & VehicleAlias & {
    type: string
    model: string
}

const asAsAlias: CarAlias = {
    brand: 'BMW',
    isNew: true,
    isSale: false,
    model: '3 series',
    price: 43000,
    title: 'xDrive',
    type: 'sedan',
    wheels: 4,
    year: new Date(2023, 17, 1)
}
