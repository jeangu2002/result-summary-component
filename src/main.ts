interface Stat {
  category:string;
  score: number;
  icon: string;
}


function loadData(): Stat[] {
  const data = `
  [
    {
      "category": "Reaction",
      "score": 80,
      "icon": "./assets/images/icon-reaction.svg"
    },
    {
      "category": "Memory",
      "score": 92,
      "icon": "./assets/images/icon-memory.svg"
    },
    {
      "category": "Verbal",
      "score": 61,
      "icon": "./assets/images/icon-verbal.svg"
    },
    {
      "category": "Visual",
      "score": 72,
      "icon": "./assets/images/icon-visual.svg"
    }
  ]
  `;
  return JSON.parse(data);

}

window.addEventListener('DOMContentLoaded', () => {
  const stats = Array.from(document.querySelectorAll('.stat'));
  const score = document.querySelector('.score > strong');
  const scoreParagraph:HTMLElement | null = document.querySelector('.score > p')
  let timeout = 250;
  stats.forEach(stat => {
    setTimeout(() => {
      stat.classList.add('active');
    }, timeout);
    timeout += 250;
  });

  setTimeout(() => {
      let count = 0;
      scoreParagraph!.style.display = 'block';
      const interval = setInterval(()=>{
          score!.textContent = `${count}`;
          count++;
          if(count === 73) {
            clearInterval(interval);
          }
      },50)
  }, 1250);

  setTimeout(() => {
      document.querySelector('.appreciation')?.classList.add('visible');
  }, 5000)

})
