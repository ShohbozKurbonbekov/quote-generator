'use strict';
const quotes = [
  {
    name: 'Albert Einstein',
    quote: 'The measure of intelligence is the ability to change',
  },
  {
    name: 'Oprah Winfrey',
    quote:
      'The greatest discovery of all time is that a person can change his future by merely changing his attitude',
  },
  {
    name: 'Sean Higgins',
    quote:
      'Every day the clock resets. Your wins don not matter. Your failures do not matter. Do not stress on what was, fight for what could be.',
  },
  {
    name: 'Elizabeth Galbut',
    quote:
      'Don’t let rejection create self-doubt. The founder of Starbucks was turned down by 217 of the 242 investors he initially spoke with.',
  },
  {
    name: 'Leo Tolstoy',
    quote:
      'Everyone thinks of changing the world, but no one thinks of changing himself',
  },
  {
    name: 'Jason Lemkin',
    quote: `Play to your strengths. If you aren’t great at something, do more of what you’re great at.`,
  },
  {
    name: 'Harriet Tubman',
    quote: `Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.`,
  },
];

////////// Selecting Elements//////////
const btn = document.querySelector('.btn');
const quote = document.querySelector('.quote');
const authorName = document.querySelector('.author_name');

btn.addEventListener('click', () => {
  let randomText = Math.trunc(Math.random() * quotes.length);
  console.log(randomText);
  quote.textContent = quotes[randomText].quote;
  authorName.textContent = quotes[randomText].name;
});
