import axios from "axios";

/**遊戲資料定義 */
export interface IGameData {
  /**遊戲ID */
  id: number;
  /**遊戲名稱 */
  name: string;
  /**遊戲類型 */
  type: string;
  /**在線人數 */
  numPeople: number;
}

const sheetURL: string =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR9gehyH-WQXNky5gug9hQkUYr0aZ8Q0tw3-SkdbkjU5VJMeAVUYOldVQb98FQ5V-T8Ctduvqp6icSK/pub?output=csv";
/** 取得遊戲資料 */
export const apiGetGameData = () => {
  return new Promise<IGameData[]>((res) => {
    const allGameData: IGameData[] = [];
    const url: string = `${sheetURL}&gid=0&time=${Date.now()}`;
    axios.get(url).then((response) => {
      const csv: string = response.data;
      const rows = csv.split("\r\n");
      //0是標題列,略過
      for (let i: number = 1; i < rows.length; ++i) {
        const gameCSV = rows[i];
        const gameData = gameCSV.split(",");
        allGameData.push({
          id: parseInt(gameData[0]),
          name: gameData[1],
          type: gameData[2],
          numPeople: 0,
        });
      }
      res(allGameData);
    });
  });
};
/** 取得會員資料 */
export const apiGetMemberData = async () => {
  let data;
  const url: string = `${sheetURL}&gid=512318210`;
  await axios.get(url).then((res) => {
    console.log(res);
  });
  return data;
};
