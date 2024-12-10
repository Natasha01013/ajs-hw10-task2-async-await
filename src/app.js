import GameSavingLoader from './gamesavingloader.js';

const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';

(async () => {
    try {
        return console.log(await GameSavingLoader.load(data));
    } catch(error) {
        throw new Error("Ошибка выполнения");
    }
})();