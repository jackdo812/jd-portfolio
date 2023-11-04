

const getPage  = (pageNum) => {
    return fetch(`https://jackthecoder.com/zxbpsrwen/wp-json/wp/v2/pages/${pageNum}?_embed&acf_format=standard`).then(
        (res) => res.json(),
      )
}

const getPost  = (slug) => {
    const postUrl = slug ? `posts/?slug=${slug}&_embed&acf_format=standard` : "posts?_embed&acf_format=standard&tag";
    return fetch(`https://jackthecoder.com/zxbpsrwen/wp-json/wp/v2/${postUrl}`).then(
        (res) => res.json(),
      )
}

const getCPT  = (name) => {
  return fetch(`https://jackthecoder.com/zxbpsrwen/wp-json/wp/v2/${name}`).then(
      (res) => res.json(),
    )
}


export {getPage, getPost, getCPT}