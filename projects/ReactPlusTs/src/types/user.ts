export type LocalGithubUser = {
    login: string
    avatar: string
    name: string
    company: string | null
    blog: string
    location: string
    bio: string | null
    twitter: string | null
    repos: number
    followers: number
    following: number
    created: string
}

export type GithubUser = {
    login: string
    id: number
    avatar_url: string
    name: string
    company: string | null
    blog: string
    location: string
    bio: string | null
    twitter_username: string | null
    public_repos: number
    followers: number
    following: number
    created_at: string
}

export type GithubError = {
    message: string
    documentation_url: string
    status: number
}