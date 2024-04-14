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
  const stats = loadData();
  console.log(stats);

})
