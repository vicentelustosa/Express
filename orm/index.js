const postModel = require(`./src/models/postORM`);

 async function main(){
  await postModel.create(
  {
    title:"nova postagem",
    content:"texto"}
);

const posts = await postModel.findAll();

console.log(posts);
  
}

main();

