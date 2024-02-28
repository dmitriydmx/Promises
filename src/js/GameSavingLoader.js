import json from './parser.js';
import read from './reader.js';
import GameSaving from './GameSaving.js';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      read()
        .then((data) => json(data))
        .then((parsedData) => {
          const saving = new GameSaving(JSON.parse(parsedData));
          resolve(saving);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
