// export const getPoetry=function(){
//     return fetch('https://v1.jinrishici.com/all.json',{
//         method:"GET",
//         headers:{
//             "Accept":"application/json",
//             "Content-type":"application/json"
//         },
//     })
//     .then(res =>{
//         if(res.ok){
//             return res.json();
//         }    
//     })
//     .then(data =>{
//         return [data.origin, data.author, data.content];
//     })
//     .catch(e => {
//         throw new Error("error");
//     })
// }

export const getPoetry = async () => {
    const res = await fetch('https://v1.jinrishici.com/all.json')
    if(res.ok) {
      const { origin, author, content } = await res.json();
      return [origin, author, content];
    } 

    return new Error("error")
  } 