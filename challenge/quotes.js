const quotes = [
    {
      quote: "Dumb Dumb",
      author: "The Red - The 1st Album",
    },
    {
      quote: "Huff n Puff",
      author: "The Red - The 1st Album",
    },
    {
      quote: "Campfire",
      author: "The Red - The 1st Album",
    },
    {
      quote:"Red Dress",
      author: "BTS - The Red - The 1st Album",
    },
    {
      quote:"Oh Boy",
      author: "The Red - The 1st Album",
    },
    {
      quote: "Lady's Room",
      author: "The Red - The 1st Album",
    },
    {
      quote: "Time Slip",
      author: "The Red - The 1st Album",
    },
    {
      quote:"Don't U Wait No More",
      author: "The Red - The 1st Album",
    },
    {
      quote: "Day 1",
      author: "The Red - The 1st Album",
    },
    {
      quote: "Cool World",
      author: "The Red - The 1st Album",
    },
  ];
  
  const quote = document.querySelector("#quote span:first-child");
  const author = document.querySelector("#quote span:last-child");
  
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  quote.innerText = todaysQuote.quote;
  author.innerText = todaysQuote.author;