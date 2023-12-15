export type MusicItem = { id: string, duration: string, description: string, title: string, attachment_url:string, image?:string };
export type MusicCollectionItem = {id:string, title:string, items:{items:MusicItem[]}, description?: string, };


export type tab =  "books" | "photos"  | "videos" | "albums" 
