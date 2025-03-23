export class ResourceManager {
  game;
  euro = 0;

  constructor(game) {
    this.game = game;
    this.loadData(); // Load saved data when the game starts
  }

  addEuros(delta) {
    this.euro += delta;
    this.saveData(); // Save data whenever euros are updated
    this.game.notifyUpdate();
  }

  saveData() {
    const data = {
      euro: this.euro,
    };
    localStorage.setItem('gameData', JSON.stringify(data)); // Save data to localStorage
  }

  loadData() {
    const savedData = localStorage.getItem('gameData');
    if (savedData) {
      const data = JSON.parse(savedData);
      this.euro = data.euro || 0; // Load euro value or default to 0
    }
  }
}
