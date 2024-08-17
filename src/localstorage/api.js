const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

const postApi = {
    getAll: async () => {
        await delay(Math.random() * (1000 - 200) + 200);
        const posts = JSON.parse(localStorage.getItem('post')) || [];
        return posts;
    },
    addPost: async (newPost) => {
        await delay(Math.random() * (1000 - 200) + 200);
        const posts = JSON.parse(localStorage.getItem('post')) || [];
        const newId = posts.length > 0 ? posts.length + 1 : 1;
        newPost.id = newId;
        localStorage.setItem('post', JSON.stringify([...posts, newPost]));
        return newPost;
    },
    deletePost: async (id) => {
        await delay(Math.random() * (1000 - 200) + 200);
        const posts = JSON.parse(localStorage.getItem('post')) || [];
        localStorage.setItem('post', JSON.stringify(posts.filter(post => post.id !== id)));
        return id;
    },
    findOne: async (id) => {
        await delay(Math.random() * (1000 - 200) + 200);
        const posts = JSON.parse(localStorage.getItem('post')) || [];
        const post = posts.find(post => post.id === Number(id));
        return post;
    },
    editPost: async (id, newPost) => {
        await delay(Math.random() * (1000 - 200) + 200);
        const posts = JSON.parse(localStorage.getItem('post')) || [];
        const postIndex = posts.findIndex(post => post.id === Number(id));
        posts[postIndex] = {...posts[postIndex],...newPost };
        localStorage.setItem('post', JSON.stringify(posts));
        return posts[postIndex];
    }
}

export {
    postApi
}