

const getPage  = (pageNum) => {
    return fetch(`https://jackthecoder.com/zxbpsrwen/wp-json/wp/v2/pages/${pageNum}?_embed`).then(
        (res) => res.json(),
      )
}

const getPost  = () => {
    return fetch(`https://jackthecoder.com/zxbpsrwen/wp-json/wp/v2/posts?_embed`).then(
        (res) => res.json(),
      )
}


export {getPage, getPost}