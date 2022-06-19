const quotes = [
    {
      quote: "정답은 없을지도 몰라 어쩜 이것도 답은 아닌거야",
      author: "BTS - Answer:Love my self 中",
    },
    {
      quote: "그저 날 사랑하는 일조차 누구의 허락이 필요했던 거야",
      author: "BTS - Answer:Love my self 中",
    },
    {
      quote: "우리 함께라면 사막도 바다가 돼",
      author: "BTS",
    },
    {
      quote:
        "어쩌면 누군가를 사랑하는 것보다 더 어려운 게 나 자신을 사랑하는 거야",
      author: "BTS - Answer:Love Myself 中",
    },
    {
      quote:
        "여러분은 누군가에게 사랑과 마음을 줄 수 있는 사람들이니까 어디 있든 무엇을 하든 분명 따뜻한 사람들일 거라고 생각해요. 다른 사람에게 사랑을 줄 수 있는 사람은 무엇이든 할 수 있어요.",
      author: "BTS RM",
    },
    {
      quote: "너의 수고는 너만 알면 돼",
      author: "BTS JIN",
    },
    {
      quote: "너의 평범함은 되려 나의 특별함, 너의 특별함은 되려 나의 평범함",
      author: "AugustD - 사람 中",
    },
    {
      quote:
        "정말 해야 할 목표가 있다면 뒤돌아보지 않기. 주저하지 말고 망설이지 말고 일단 도전하는 게 중요합니다. 자신이 가고 싶은 길이 있다면 보다 분명히 걸으세요. 그래야 후회하지 않습니다.",
      author: "BTS JIMIN",
    },
    {
      quote: "변화는 모두에게 필연적이지, 어떻게 변해가는지가 우리의 업일지도",
      author: "AugustD - 저 달 中",
    },
    {
      quote: "고민보다 GO",
      author: "BTS",
    },
  ];
  
  const quote = document.querySelector("#quote span:first-child");
  const author = document.querySelector("#quote span:last-child");
  
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  quote.innerText = todaysQuote.quote;
  author.innerText = todaysQuote.author;