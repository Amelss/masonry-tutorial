const gridContainer = document.querySelector('.grid-container')

function generateMasonryGrid(columns, posts) {
    gridContainer.innerHTML = '';

    // Stores all of the column arrays which contain the relevant posts
    let columnWrappers = {}

    // Create column item array and add this to columnWrapper object
    for (let i = 0; i < columns; i++){
        columnWrappers[`column${i}`] = []
    }
    
    for (let i = 0; i < posts.length; i++){
        const column = i % columns;
        columnWrappers[`column${column}`].push(posts[i])
    }

    for (let i = 0; i < columns; i++){
        let columnPosts = columnWrappers[`column${i}`]
        let column = document.createElement('div')
        column.classList.add('column')

        columnPosts.forEach(post => {
            let postsDiv = document.createElement('div')
            postsDiv.classList.add('post')
            let image = document.createElement('img')
            image.src = post.image
            postsDiv.appendChild(image)
            column.appendChild(postsDiv)
        })

        gridContainer.appendChild(column)
    }


}


generateMasonryGrid(4, posts)