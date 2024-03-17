let quotes = [
  {
    quote:`"Life is what happens when you're busy making other plans."`,
    writer: `-Mae West`
  },
  {
    quote: `"The future belongs to those who believe in the beauty of their dreams."`,
    writer: `-Baba Ruth`
  },
  {
    quote: `"It does not matter how slowly you go as long as you do not stop."`,
    writer: `-Steve Jobs`
  },
  {
    quote: `"In the end, it's not the years in your life that count. It's the life in your years."`,
    writer: `-Socrates`
  },
  {
    quote: ` "The purpose of our lives is to be happy."`,
    writer: `-Oprah Winfrey`
  },
  {
    quote: `"Get busy living or get busy dying."`,
    writer: `-Dalai Lama`
  },
  {
    quote: `"You only live once, but if you do it right, once is enough."`,
    writer: `-Elton John`
  },
  {
    quote: `"Many of life's failures are people who did not realize how close they were to success when they gave up."`,
    writer: `-Albert Einstein`
  },
  {
    quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`,
    writer: `-Ernest Hemingway`
  }
];

const Qbtn = document.getElementById("Qbtn");
const quote = document.getElementById("quote");
const writer = document.getElementById("writer");

Qbtn.addEventListener('click',()=>{
  const random = Math.floor(Math.random() * quotes.length);
  quote.innerHTML = quotes[random].quote;
  writer.innerHTML = quotes[random].writer;
})