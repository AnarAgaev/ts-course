/* УСЛОВНЫЕ ТИПЫ (conditional - условный)
 *
 * SomeType extends OtherType ? TrueType : FalseType;
*/

const x = 10
const isXPositive = x >= 0 ? 'yes' : 'no'

interface StringRecord {
    [key: string]: string
}

interface DateRecord {
    [key: string]: Date
}

type CustomRecord<T extends string | Date> = T extends string ? StringRecord : DateRecord

/* Так как в дженерик CustomRecord уточнили переменную T как строку,
    то в значениях свойств могут быть только строки
*/
const customObject: CustomRecord<string> = {
    id: 'some id value'
}

export {} // for blocking views of variables