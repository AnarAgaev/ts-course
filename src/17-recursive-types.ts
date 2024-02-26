type NestedNumbers = number | NestedNumbers[]

const numbers = [1, 2, [1, 2, [1, 2, 3]]]
numbers.push([1, [1, 2]])

// JSON
type JSONPrimitive = string | number | boolean | null
type JSONObject = { [k: string]: JSONValue }
type JSONArray = any[]
type JSONValue = JSONPrimitive | JSONObject | JSONArray


function isJSON(arg: JSONValue) {}

isJSON('hi')
isJSON(1)
isJSON({ a: [123], v: {x: 1} })
isJSON([1, { x: '' }])