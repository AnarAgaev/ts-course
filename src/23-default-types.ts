interface DefObj {
    [key: string]: unknown
}

type DefTypeObj = {
    [key: string]: unknown
}

type DefUnion = 'ok' | 'error'

export async function request <T = DefUnion> (url: string): Promise<T> {
    const response = await fetch(url)
    return await response.json()
}

const defData = request('http://expample.com')
console.log(defData)


interface Post {
    id: number
    title: string
    author: string
    likes: number
}
const data = request<Post[]>('http://example.com')
console.log(data)
