
import PostsServer from './postsServer';

describe('Testing PostsServer', () => {
   const server=new PostsServer();
   let data=[],
   newData=[];
   it('PostsServer corect get data',async()=>{
      expect(await server.getPosts()).toBeArray();
 })
 it('PostsServer corect post data',async()=>{
     data = await server.getPosts();
     await server.postPost({"important": false, "label": "Test"});
     newData = await server.getPosts();
   expect(newData).toBeArrayOfSize(data.length+1);
})
it('PostsServer corect delete data',async()=>{
   await server.deletePost(newData.length);
   newData = await server.getPosts();
 expect(newData.toString()).toBe(data.toString());
})
 
});

