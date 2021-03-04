import React, {Component,useEffect} from 'react';
import PostHeader from '../postHeader';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import './PostMain.css';
import PostStatusServer from '../postStatusServer'
import PostsServer from '../../services/postsServer';
import TelegrammSendMessage from '../../services/telegramBot'

export default class PostMain extends Component {
    constructor(props) {
        super(props);
        this.server = new PostsServer();
        this.state = {
            data : [],
            term: '',
            filter: 'all',
            serverOn:'ServerON'
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
        this.maxId = 4;
    }
   componentDidMount(){
    this.getdata();
    this.checkServer = setInterval(async()=>{
     const data = await this.server.getPosts();
     data?this.setState({serverOn:'ServerON'}):this.setState({serverOn:'ServerOFF'})
    },2000)
   }
   componentWillUnmount(){
       clearInterval(this.checkServer);
   }
//    async checkServer(){
//         this.getdata()
//     const  checkServer= setInterval(async()=>{
//         try{
//         if(window.location.href.substr(-6)==='/posts'){
//             const server=await this.server.getPosts()
//         if(server){
//           this.getdata();
//         if(window.location.href.substr(-6)==='/posts')
//    this.setState({serverOn:'ServerON'})}
//     }
//    else clearInterval(checkServer);
//      }catch(e){if(window.location.href.substr(-6)==='/posts')
//      TelegrammSendMessage('warning! Server is not available')
//         this.setState({serverOn:'ServerOFF'})}
     
//     },1000)
//   }  
  getdata()
 {
  this.server.getPosts()
  .then((data)=>{
      this.setState({data:data}) 
  })
 }
  async  deleteItem(id) {
       await this.server.deletePost(id);
        this.getdata();
    }

   async addItem(body) {
        if(body){
        const newItem = {
            label: body,
            important: false,
        }
        TelegrammSendMessage(body);
      await this.server.postPost(newItem)
      }
       this.getdata()
    }

    onToggleImportant(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, important: !old.important};

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return {
                data: newArr
            }
        }); 
    }

    onToggleLiked(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, like: !old.like};

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return {
                data: newArr
            }
        }); 
    }

    searchPost(items, term) {
        if (term.length === 0) {
            return items
        }

        return items.filter((item) => {
            return item.label.indexOf(term) > -1
        });
    }

    filterPost(items, filter) {
        
        if (filter === 'like') {
            return items.filter(item => item.like)
        } else {
            return items
        }
    }

    onUpdateSearch(term) {
        this.setState({term})
    }
    
    onFilterSelect(filter){
        this.setState({filter})
    }

    render() {
        const {data, term, filter,serverOn} = this.state;
        
        const liked = data.filter((item) => item.like).length;
        const allPosts = data.length;
        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);
        return (
            <div className="PostMain">
                <PostStatusServer serverOn={serverOn} />
                <PostHeader liked={liked} allPosts={allPosts}/>
                <div className="search-panel d-flex">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}/>
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}/>
                </div>
                <PostList 
                posts={visiblePosts}
                onDelete={this.deleteItem}
                onToggleImportant={this.onToggleImportant}
                onToggleLiked={this.onToggleLiked}/>
                <PostAddForm
                onAdd={this.addItem}/>
            </div>
         )
    }
}
