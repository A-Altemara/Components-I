const article = document.createElement('div')
  const title = document.createElement('h2')
  const date = document.createElement('p')
  const firstParagraph = document.createElement('p')
  const secondParagraph = document.createElement('p')
  const thirdParagraph = document.createElement('p')
  const expandButton = document.createElement('span')

  const feed = document.querySelector('.articles')

  feed.appendChild(article)
  article.appendChild(title)
  article.appendChild(date)
  article.appendChild(firstParagraph)
  article.appendChild(secondParagraph)
  article.appendChild(thirdParagraph)
  article.appendChild(expandButton)



  // return testArticle

  // const testArticle = articleMaker({ title: 'foo', date: 'bar', firstParagraph: 'bat', secondParagraph: 'spam', thirdParagraph: 'kitty'})
// console.log(testArticle)
// articleMaker()

// article.classList.add('article')
// date.classList.add('date')
// expandButton.classList.add('expandButton')

// expandButton.addEventListener("click", () =>{
//   article.classList.toggle()
// })