let url='http://178.172.252.153:4000/';
export function GetPost(id) {
    fetch(`${url}posts${id?'/'+id:''}`)
    .then((response) => response.json())
    .then((s) => console.log(s))
}
export function PostPost(data) {
    fetch(`${url}posts/5`,
        {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }

        })
    .then((response) => response.json())
    .then((s) => console.log(s))
}
export function DeletePost(id) {
    fetch(`${url}posts/${id}`,
        {
            method: 'DELETE', 
            headers: { 
                'Content-type': 'application/json'
            } 

        })
    .then((response) => response.json())
    .then((s) => console.log(s))
}
export function SetUrl(tempUrl){url=tempUrl};
// function put(n) {
//     fetch(`http://178.172.252.153:4000/posts/${n}`,
//         {
//             method: 'PUT', 
//             body: JSON.stringify(data2),
//             headers: { 
//                 'Content-type': 'application/json'
//             } 

//         })
//     .then((response) => response.json())
//     .then((s) => console.log(s))
// }
