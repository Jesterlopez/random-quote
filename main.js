const API_URL = "https://api.quotable.io/random"

const quoteTag = document.querySelector('.quote-tag')
const quoteContent = document.querySelector('.qoute-content')
const quoteAuthor = document.querySelector('.quote-author')
const button = document.getElementById('generate-quote')



const generateNewQoute = async () => {
  const response = await fetch(API_URL)
  const responseJson = await response.json()
  const { content, author, tags } = await responseJson
  const tag = tags[0]

  return { content, author, tag }
}

button.addEventListener('click', async () => {
  const { content, author, tag } = await generateNewQoute()
  quoteTag.innerHTML = tag
  quoteContent.innerHTML = content
  quoteAuthor.innerHTML = author
})

window.addEventListener('DOMContentLoaded', async () => {
  const { content, author, tag } = await generateNewQoute()
  quoteTag.innerHTML = tag
  quoteContent.innerHTML = content
  quoteAuthor.innerHTML = author
})

