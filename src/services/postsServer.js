export default  class PostsServer {
    constructor() {
        this._Server = 'http://192.168.88.65:3008/'
    }
 
    async getResource(url,body) {
        const res = await fetch(this._Server+url,body);
        if (!res.ok) {
          throw new Error(`Could not fetch ${url}` +
            `, reseived ${res.status}`)
        }
        return await res.json()
    }
 
    async getPosts() {
        const posts = await this.getResource('posts')
        return posts
    }
    
    async getpost(id) {
        const post = await this.getResource(`posts/${id}`,)
        return post
    }
    
    async postPost(post) {
        const body= {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json'
            }
 
        }
        const res=await this.getResource('posts/',body)
        return res;
    }
    async deletePost(id) {
        const body={
            method: 'DELETE', 
            headers: { 
                'Content-type': 'application/json'
            } 
        }
        const res = await this.getResource(`posts/${id}`,body);
        return res
    }
 }


