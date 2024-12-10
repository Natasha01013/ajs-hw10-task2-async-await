import GameSavingLoader from "../gamesavingloader.js";

test('cheking GameSavingLoader', async () => {
    const mockJsonString = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
    const result = await GameSavingLoader.load(mockJsonString);
    expect(result).toEqual('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');
})
