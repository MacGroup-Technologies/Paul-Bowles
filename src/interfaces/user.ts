export interface auth {
  username: string
  password: string
}

export interface register {
  email: string
  password: string
}

export interface tab {
  media: "books" | "photos"  | "videos" | "albums"
}