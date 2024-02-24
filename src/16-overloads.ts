function sum(a: string, b: string): string
function sum(a: number, b: number): number
function sum(a: any, b: any): string | number {
    return a + b
}
sum(1, 1)

type asyncCb = (res: number) => number

function asyncSum(a: number, b: number ): Promise<number>
function asyncSum(a: number, b: number, cb: asyncCb): number
function asyncSum(a: number, b: number, cb?: asyncCb): any {
    const result = a + b

    if (cb) {
        return cb(result)
    }

    return Promise.resolve(result)
}

asyncSum(1, 2)