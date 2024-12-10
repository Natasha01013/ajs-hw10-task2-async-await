import {json} from "./parser.js";
import {read} from "./reader.js";

export default class GameSavingLoader {
    static async load(data) {
       return await json(await read(data));
    }
}