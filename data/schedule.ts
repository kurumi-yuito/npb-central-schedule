export type TeamCode = 'T'|'G'|'DB'|'S'|'C'|'D'
export type Game = {
  date: string;
  home: TeamCode;
  away: TeamCode;
  stadium: string;
  view?: 'ホーム'|'ビジター';
}
const SCHEDULE: Game[] = [
  {
    "date": "2026-03-27",
    "home": "G",
    "away": "T",
    "stadium": "東京D"
  },
  {
    "date": "2026-03-27",
    "home": "DB",
    "away": "S",
    "stadium": "横浜"
  },
  {
    "date": "2026-03-27",
    "home": "C",
    "away": "D",
    "stadium": "マツダ"
  },
  {
    "date": "2026-03-28",
    "home": "G",
    "away": "T",
    "stadium": "東京D"
  },
  {
    "date": "2026-03-28",
    "home": "DB",
    "away": "S",
    "stadium": "横浜"
  },
  {
    "date": "2026-03-28",
    "home": "C",
    "away": "D",
    "stadium": "マツダ"
  },
  {
    "date": "2026-03-29",
    "home": "G",
    "away": "T",
    "stadium": "東京D"
  },
  {
    "date": "2026-03-29",
    "home": "DB",
    "away": "S",
    "stadium": "横浜"
  },
  {
    "date": "2026-03-29",
    "home": "C",
    "away": "D",
    "stadium": "マツダ"
  },
  {
    "date": "2026-03-31",
    "home": "S",
    "away": "C",
    "stadium": "神宮"
  },
  {
    "date": "2026-03-31",
    "home": "D",
    "away": "G",
    "stadium": "バンテリン"
  },
  {
    "date": "2026-03-31",
    "home": "T",
    "away": "DB",
    "stadium": "京セラD大阪"
  },
  {
    "date": "2026-04-01",
    "home": "S",
    "away": "C",
    "stadium": "神宮"
  },
  {
    "date": "2026-04-01",
    "home": "D",
    "away": "G",
    "stadium": "バンテリン"
  },
  {
    "date": "2026-04-01",
    "home": "T",
    "away": "DB",
    "stadium": "京セラD大阪"
  },
  {
    "date": "2026-04-02",
    "home": "S",
    "away": "C",
    "stadium": "神宮"
  },
  {
    "date": "2026-04-02",
    "home": "D",
    "away": "G",
    "stadium": "バンテリン"
  },
  {
    "date": "2026-04-02",
    "home": "T",
    "away": "DB",
    "stadium": "京セラD大阪"
  },
  {
    "date": "2026-04-03",
    "home": "G",
    "away": "DB",
    "stadium": "東京D"
  },
  {
    "date": "2026-04-03",
    "home": "S",
    "away": "D",
    "stadium": "神宮"
  },
  {
    "date": "2026-04-03",
    "home": "C",
    "away": "T",
    "stadium": "マツダ"
  },
  {
    "date": "2026-04-04",
    "home": "G",
    "away": "DB",
    "stadium": "東京D"
  },
  {
    "date": "2026-04-04",
    "home": "S",
    "away": "D",
    "stadium": "神宮"
  },
  {
    "date": "2026-04-04",
    "home": "C",
    "away": "T",
    "stadium": "マツダ"
  },
  {
    "date": "2026-04-05",
    "home": "G",
    "away": "DB",
    "stadium": "東京D"
  },
  {
    "date": "2026-04-05",
    "home": "S",
    "away": "D",
    "stadium": "神宮"
  },
  {
    "date": "2026-04-05",
    "home": "C",
    "away": "T",
    "stadium": "マツダ"
  },
  {
    "date": "2026-04-07",
    "home": "DB",
    "away": "D",
    "stadium": "横浜"
  },
  {
    "date": "2026-04-07",
    "home": "T",
    "away": "S",
    "stadium": "甲子園"
  },
  {
    "date": "2026-04-07",
    "home": "C",
    "away": "G",
    "stadium": "マツダ"
  },
  {
    "date": "2026-04-08",
    "home": "DB",
    "away": "D",
    "stadium": "横浜"
  },
  {
    "date": "2026-04-08",
    "home": "T",
    "away": "S",
    "stadium": "甲子園"
  },
  {
    "date": "2026-04-08",
    "home": "C",
    "away": "G",
    "stadium": "マツダ"
  },
  {
    "date": "2026-04-09",
    "home": "T",
    "away": "S",
    "stadium": "甲子園"
  },
  {
    "date": "2026-04-09",
    "home": "C",
    "away": "G",
    "stadium": "マツダ"
  },
  {
    "date": "2026-04-10",
    "home": "G",
    "away": "S",
    "stadium": "東京D"
  },
  {
    "date": "2026-04-10",
    "home": "DB",
    "away": "C",
    "stadium": "横浜"
  },
  {
    "date": "2026-04-10",
    "home": "D",
    "away": "T",
    "stadium": "バンテリン"
  },
  {
    "date": "2026-04-11",
    "home": "G",
    "away": "S",
    "stadium": "東京D"
  },
  {
    "date": "2026-04-11",
    "home": "DB",
    "away": "C",
    "stadium": "横浜"
  },
  {
    "date": "2026-04-11",
    "home": "D",
    "away": "T",
    "stadium": "バンテリン"
  },
  {
    "date": "2026-04-12",
    "home": "G",
    "away": "S",
    "stadium": "東京D"
  },
  {
    "date": "2026-04-12",
    "home": "DB",
    "away": "C",
    "stadium": "横浜"
  },
  {
    "date": "2026-04-12",
    "home": "D",
    "away": "T",
    "stadium": "バンテリン"
  },
  {
    "date": "2026-04-14",
    "home": "S",
    "away": "DB",
    "stadium": "松 山"
  },
  {
    "date": "2026-04-14",
    "home": "D",
    "away": "C",
    "stadium": "豊 橋"
  },
  {
    "date": "2026-04-14",
    "home": "T",
    "away": "G",
    "stadium": "甲子園"
  },
  {
    "date": "2026-04-15",
    "home": "D",
    "away": "C",
    "stadium": "バンテリン"
  },
  {
    "date": "2026-04-15",
    "home": "T",
    "away": "G",
    "stadium": "甲子園"
  },
  {
    "date": "2026-04-16",
    "home": "S",
    "away": "DB",
    "stadium": "神宮"
  },
  {
    "date": "2026-04-16",
    "home": "T",
    "away": "G",
    "stadium": "甲子園"
  },
  {
    "date": "2026-04-17",
    "home": "S",
    "away": "G",
    "stadium": "神宮"
  },
  {
    "date": "2026-04-17",
    "home": "T",
    "away": "D",
    "stadium": "甲子園"
  },
  {
    "date": "2026-04-17",
    "home": "C",
    "away": "DB",
    "stadium": "マツダ"
  },
  {
    "date": "2026-04-18",
    "home": "S",
    "away": "G",
    "stadium": "神宮"
  },
  {
    "date": "2026-04-18",
    "home": "T",
    "away": "D",
    "stadium": "甲子園"
  },
  {
    "date": "2026-04-18",
    "home": "C",
    "away": "DB",
    "stadium": "マツダ"
  },
  {
    "date": "2026-04-19",
    "home": "S",
    "away": "G",
    "stadium": "神宮"
  },
  {
    "date": "2026-04-19",
    "home": "T",
    "away": "D",
    "stadium": "甲子園"
  },
  {
    "date": "2026-04-19",
    "home": "C",
    "away": "DB",
    "stadium": "マツダ"
  },
  {
    "date": "2026-04-21",
    "home": "G",
    "away": "D",
    "stadium": "長 野"
  },
  {
    "date": "2026-04-21",
    "home": "DB",
    "away": "T",
    "stadium": "横浜"
  },
  {
    "date": "2026-04-21",
    "home": "C",
    "away": "S",
    "stadium": "マツダ"
  },
  {
    "date": "2026-04-22",
    "home": "G",
    "away": "D",
    "stadium": "前 橋"
  },
  {
    "date": "2026-04-22",
    "home": "DB",
    "away": "T",
    "stadium": "横浜"
  },
  {
    "date": "2026-04-22",
    "home": "C",
    "away": "S",
    "stadium": "マツダ"
  },
  {
    "date": "2026-04-23",
    "home": "DB",
    "away": "T",
    "stadium": "横浜"
  },
  {
    "date": "2026-04-23",
    "home": "C",
    "away": "S",
    "stadium": "マツダ"
  },
  {
    "date": "2026-04-24",
    "home": "DB",
    "away": "G",
    "stadium": "横浜"
  },
  {
    "date": "2026-04-24",
    "home": "D",
    "away": "S",
    "stadium": "バンテリン"
  },
  {
    "date": "2026-04-25",
    "home": "DB",
    "away": "G",
    "stadium": "横浜"
  },
  {
    "date": "2026-04-25",
    "home": "D",
    "away": "S",
    "stadium": "バンテリン"
  },
  {
    "date": "2026-04-25",
    "home": "T",
    "away": "C",
    "stadium": "甲子園"
  },
  {
    "date": "2026-04-26",
    "home": "DB",
    "away": "G",
    "stadium": "横浜"
  },
  {
    "date": "2026-04-26",
    "home": "D",
    "away": "S",
    "stadium": "バンテリン"
  },
  {
    "date": "2026-04-26",
    "home": "T",
    "away": "C",
    "stadium": "甲子園"
  },
  {
    "date": "2026-04-28",
    "home": "G",
    "away": "C",
    "stadium": "東京D"
  },
  {
    "date": "2026-04-28",
    "home": "S",
    "away": "T",
    "stadium": "神宮"
  },
  {
    "date": "2026-04-28",
    "home": "D",
    "away": "DB",
    "stadium": "バンテリン"
  },
  {
    "date": "2026-04-29",
    "home": "G",
    "away": "C",
    "stadium": "東京D"
  },
  {
    "date": "2026-04-29",
    "home": "S",
    "away": "T",
    "stadium": "神宮"
  },
  {
    "date": "2026-04-29",
    "home": "D",
    "away": "DB",
    "stadium": "バンテリン"
  },
  {
    "date": "2026-04-30",
    "home": "G",
    "away": "C",
    "stadium": "東京D"
  },
  {
    "date": "2026-04-30",
    "home": "S",
    "away": "T",
    "stadium": "神宮"
  },
  {
    "date": "2026-04-30",
    "home": "D",
    "away": "DB",
    "stadium": "バンテリン"
  },
  {
    "date": "2026-05-01",
    "home": "S",
    "away": "DB",
    "stadium": "神宮"
  },
  {
    "date": "2026-05-01",
    "home": "T",
    "away": "G",
    "stadium": "甲子園"
  },
  {
    "date": "2026-05-01",
    "home": "C",
    "away": "D",
    "stadium": "マツダ"
  },
  {
    "date": "2026-05-02",
    "home": "S",
    "away": "DB",
    "stadium": "神宮"
  },
  {
    "date": "2026-05-02",
    "home": "T",
    "away": "G",
    "stadium": "甲子園"
  },
  {
    "date": "2026-05-02",
    "home": "C",
    "away": "D",
    "stadium": "マツダ"
  },
  {
    "date": "2026-05-03",
    "home": "S",
    "away": "DB",
    "stadium": "神宮"
  },
  {
    "date": "2026-05-03",
    "home": "T",
    "away": "G",
    "stadium": "甲子園"
  },
  {
    "date": "2026-05-03",
    "home": "C",
    "away": "D",
    "stadium": "マツダ"
  },
  {
    "date": "2026-05-04",
    "home": "G",
    "away": "S",
    "stadium": "東京D"
  },
  {
    "date": "2026-05-04",
    "home": "DB",
    "away": "C",
    "stadium": "横浜"
  },
  {
    "date": "2026-05-04",
    "home": "D",
    "away": "T",
    "stadium": "バンテリン"
  },
  {
    "date": "2026-05-05",
    "home": "G",
    "away": "S",
    "stadium": "東京D"
  },
  {
    "date": "2026-05-05",
    "home": "DB",
    "away": "C",
    "stadium": "横浜"
  },
  {
    "date": "2026-05-05",
    "home": "D",
    "away": "T",
    "stadium": "バンテリン"
  },
  {
    "date": "2026-05-06",
    "home": "G",
    "away": "S",
    "stadium": "東京D"
  },
  {
    "date": "2026-05-06",
    "home": "DB",
    "away": "C",
    "stadium": "横浜"
  },
  {
    "date": "2026-05-06",
    "home": "D",
    "away": "T",
    "stadium": "バンテリン"
  },
  {
    "date": "2026-05-08",
    "home": "D",
    "away": "G",
    "stadium": "バンテリン"
  },
  {
    "date": "2026-05-08",
    "home": "T",
    "away": "DB",
    "stadium": "甲子園"
  },
  {
    "date": "2026-05-08",
    "home": "C",
    "away": "S",
    "stadium": "マツダ"
  },
  {
    "date": "2026-05-09",
    "home": "D",
    "away": "G",
    "stadium": "バンテリン"
  },
  {
    "date": "2026-05-09",
    "home": "T",
    "away": "DB",
    "stadium": "甲子園"
  },
  {
    "date": "2026-05-09",
    "home": "C",
    "away": "S",
    "stadium": "マツダ"
  },
  {
    "date": "2026-05-10",
    "home": "D",
    "away": "G",
    "stadium": "バンテリン"
  },
  {
    "date": "2026-05-10",
    "home": "T",
    "away": "DB",
    "stadium": "甲子園"
  },
  {
    "date": "2026-05-10",
    "home": "C",
    "away": "S",
    "stadium": "マツダ"
  },
  {
    "date": "2026-05-12",
    "home": "G",
    "away": "C",
    "stadium": "岐 阜"
  },
  {
    "date": "2026-05-12",
    "home": "S",
    "away": "T",
    "stadium": "神宮"
  },
  {
    "date": "2026-05-12",
    "home": "DB",
    "away": "D",
    "stadium": "横浜"
  },
  {
    "date": "2026-05-13",
    "home": "G",
    "away": "C",
    "stadium": "福 井"
  },
  {
    "date": "2026-05-13",
    "home": "S",
    "away": "T",
    "stadium": "神宮"
  },
  {
    "date": "2026-05-13",
    "home": "DB",
    "away": "D",
    "stadium": "横浜"
  },
  {
    "date": "2026-05-14",
    "home": "DB",
    "away": "D",
    "stadium": "横浜"
  },
  {
    "date": "2026-05-15",
    "home": "G",
    "away": "DB",
    "stadium": "東京D"
  },
  {
    "date": "2026-05-15",
    "home": "D",
    "away": "S",
    "stadium": "バンテリン"
  },
  {
    "date": "2026-05-15",
    "home": "T",
    "away": "C",
    "stadium": "甲子園"
  },
  {
    "date": "2026-05-16",
    "home": "G",
    "away": "DB",
    "stadium": "東京D"
  },
  {
    "date": "2026-05-16",
    "home": "D",
    "away": "S",
    "stadium": "バンテリン"
  },
  {
    "date": "2026-05-16",
    "home": "T",
    "away": "C",
    "stadium": "甲子園"
  },
  {
    "date": "2026-05-17",
    "home": "G",
    "away": "DB",
    "stadium": "東京D"
  },
  {
    "date": "2026-05-17",
    "home": "D",
    "away": "S",
    "stadium": "バンテリン"
  },
  {
    "date": "2026-05-17",
    "home": "T",
    "away": "C",
    "stadium": "甲子園"
  },
  {
    "date": "2026-05-19",
    "home": "S",
    "away": "G",
    "stadium": "いわき"
  },
  {
    "date": "2026-05-19",
    "home": "T",
    "away": "D",
    "stadium": "倉 敷"
  },
  {
    "date": "2026-05-19",
    "home": "C",
    "away": "DB",
    "stadium": "マツダ"
  },
  {
    "date": "2026-05-20",
    "home": "T",
    "away": "D",
    "stadium": "甲子園"
  },
  {
    "date": "2026-05-20",
    "home": "C",
    "away": "DB",
    "stadium": "マツダ"
  },
  {
    "date": "2026-05-21",
    "home": "S",
    "away": "G",
    "stadium": "神宮"
  },
  {
    "date": "2026-05-21",
    "home": "T",
    "away": "D",
    "stadium": "甲子園"
  },
  {
    "date": "2026-05-21",
    "home": "C",
    "away": "DB",
    "stadium": "マツダ"
  },
  {
    "date": "2026-05-22",
    "home": "G",
    "away": "T",
    "stadium": "東京D"
  },
  {
    "date": "2026-05-22",
    "home": "D",
    "away": "C",
    "stadium": "バンテリン"
  },
  {
    "date": "2026-05-23",
    "home": "G",
    "away": "T",
    "stadium": "東京D"
  },
  {
    "date": "2026-05-23",
    "home": "DB",
    "away": "S",
    "stadium": "横浜"
  },
  {
    "date": "2026-05-23",
    "home": "D",
    "away": "C",
    "stadium": "バンテリン"
  },
  {
    "date": "2026-05-24",
    "home": "G",
    "away": "T",
    "stadium": "東京D"
  },
  {
    "date": "2026-05-24",
    "home": "DB",
    "away": "S",
    "stadium": "横浜"
  },
  {
    "date": "2026-05-24",
    "home": "D",
    "away": "C",
    "stadium": "バンテリン"
  },
  {
    "date": "2026-06-19",
    "home": "G",
    "away": "D",
    "stadium": "東京D"
  },
  {
    "date": "2026-06-19",
    "home": "S",
    "away": "C",
    "stadium": "神宮"
  },
  {
    "date": "2026-06-19",
    "home": "DB",
    "away": "T",
    "stadium": "横浜"
  },
  {
    "date": "2026-06-20",
    "home": "G",
    "away": "D",
    "stadium": "東京D"
  },
  {
    "date": "2026-06-20",
    "home": "S",
    "away": "C",
    "stadium": "神宮"
  },
  {
    "date": "2026-06-20",
    "home": "DB",
    "away": "T",
    "stadium": "横浜"
  },
  {
    "date": "2026-06-21",
    "home": "G",
    "away": "D",
    "stadium": "東京D"
  },
  {
    "date": "2026-06-21",
    "home": "S",
    "away": "C",
    "stadium": "神宮"
  },
  {
    "date": "2026-06-21",
    "home": "DB",
    "away": "T",
    "stadium": "横浜"
  },
  {
    "date": "2026-06-23",
    "home": "D",
    "away": "DB",
    "stadium": "岐 阜"
  },
  {
    "date": "2026-06-23",
    "home": "T",
    "away": "S",
    "stadium": "甲子園"
  },
  {
    "date": "2026-06-23",
    "home": "C",
    "away": "G",
    "stadium": "マツダ"
  },
  {
    "date": "2026-06-24",
    "home": "D",
    "away": "DB",
    "stadium": "バンテリン"
  },
  {
    "date": "2026-06-24",
    "home": "T",
    "away": "S",
    "stadium": "甲子園"
  },
  {
    "date": "2026-06-24",
    "home": "C",
    "away": "G",
    "stadium": "マツダ"
  },
  {
    "date": "2026-06-25",
    "home": "D",
    "away": "DB",
    "stadium": "バンテリン"
  },
  {
    "date": "2026-06-25",
    "home": "T",
    "away": "S",
    "stadium": "甲子園"
  },
  {
    "date": "2026-06-26",
    "home": "S",
    "away": "D",
    "stadium": "神宮"
  },
  {
    "date": "2026-06-26",
    "home": "DB",
    "away": "G",
    "stadium": "横浜"
  },
  {
    "date": "2026-06-26",
    "home": "C",
    "away": "T",
    "stadium": "マツダ"
  },
  {
    "date": "2026-06-27",
    "home": "S",
    "away": "D",
    "stadium": "神宮"
  },
  {
    "date": "2026-06-27",
    "home": "DB",
    "away": "G",
    "stadium": "横浜"
  },
  {
    "date": "2026-06-27",
    "home": "C",
    "away": "T",
    "stadium": "マツダ"
  },
  {
    "date": "2026-06-28",
    "home": "S",
    "away": "D",
    "stadium": "神宮"
  },
  {
    "date": "2026-06-28",
    "home": "DB",
    "away": "G",
    "stadium": "横浜"
  },
  {
    "date": "2026-06-28",
    "home": "C",
    "away": "T",
    "stadium": "マツダ"
  },
  {
    "date": "2026-06-30",
    "home": "G",
    "away": "S",
    "stadium": "弘 前"
  },
  {
    "date": "2026-06-30",
    "home": "DB",
    "away": "C",
    "stadium": "ハ-ドオフ新潟"
  },
  {
    "date": "2026-06-30",
    "home": "T",
    "away": "D",
    "stadium": "甲子園"
  },
  {
    "date": "2026-07-01",
    "home": "G",
    "away": "S",
    "stadium": "盛 岡"
  },
  {
    "date": "2026-07-01",
    "home": "T",
    "away": "D",
    "stadium": "甲子園"
  },
  {
    "date": "2026-07-02",
    "home": "DB",
    "away": "C",
    "stadium": "横浜"
  },
  {
    "date": "2026-07-02",
    "home": "T",
    "away": "D",
    "stadium": "甲子園"
  },
  {
    "date": "2026-07-03",
    "home": "S",
    "away": "DB",
    "stadium": "神宮"
  },
  {
    "date": "2026-07-03",
    "home": "D",
    "away": "G",
    "stadium": "バンテリン"
  },
  {
    "date": "2026-07-03",
    "home": "T",
    "away": "C",
    "stadium": "甲子園"
  },
  {
    "date": "2026-07-04",
    "home": "S",
    "away": "DB",
    "stadium": "神宮"
  },
  {
    "date": "2026-07-04",
    "home": "D",
    "away": "G",
    "stadium": "バンテリン"
  },
  {
    "date": "2026-07-04",
    "home": "T",
    "away": "C",
    "stadium": "甲子園"
  },
  {
    "date": "2026-07-05",
    "home": "S",
    "away": "DB",
    "stadium": "神宮"
  },
  {
    "date": "2026-07-05",
    "home": "D",
    "away": "G",
    "stadium": "バンテリン"
  },
  {
    "date": "2026-07-05",
    "home": "T",
    "away": "C",
    "stadium": "甲子園"
  },
  {
    "date": "2026-07-07",
    "home": "G",
    "away": "T",
    "stadium": "東京D"
  },
  {
    "date": "2026-07-07",
    "home": "DB",
    "away": "D",
    "stadium": "横浜"
  },
  {
    "date": "2026-07-07",
    "home": "C",
    "away": "S",
    "stadium": "マツダ"
  },
  {
    "date": "2026-07-08",
    "home": "G",
    "away": "T",
    "stadium": "東京D"
  },
  {
    "date": "2026-07-08",
    "home": "DB",
    "away": "D",
    "stadium": "横浜"
  },
  {
    "date": "2026-07-08",
    "home": "C",
    "away": "S",
    "stadium": "マツダ"
  },
  {
    "date": "2026-07-09",
    "home": "G",
    "away": "T",
    "stadium": "東京D"
  },
  {
    "date": "2026-07-09",
    "home": "DB",
    "away": "D",
    "stadium": "横浜"
  },
  {
    "date": "2026-07-09",
    "home": "C",
    "away": "S",
    "stadium": "マツダ"
  },
  {
    "date": "2026-07-10",
    "home": "DB",
    "away": "G",
    "stadium": "横浜"
  },
  {
    "date": "2026-07-10",
    "home": "D",
    "away": "C",
    "stadium": "バンテリン"
  },
  {
    "date": "2026-07-10",
    "home": "T",
    "away": "S",
    "stadium": "甲子園"
  },
  {
    "date": "2026-07-11",
    "home": "DB",
    "away": "G",
    "stadium": "横浜"
  },
  {
    "date": "2026-07-11",
    "home": "D",
    "away": "C",
    "stadium": "バンテリン"
  },
  {
    "date": "2026-07-11",
    "home": "T",
    "away": "S",
    "stadium": "甲子園"
  },
  {
    "date": "2026-07-12",
    "home": "DB",
    "away": "G",
    "stadium": "横浜"
  },
  {
    "date": "2026-07-12",
    "home": "D",
    "away": "C",
    "stadium": "バンテリン"
  },
  {
    "date": "2026-07-12",
    "home": "T",
    "away": "S",
    "stadium": "甲子園"
  },
  {
    "date": "2026-07-14",
    "home": "S",
    "away": "G",
    "stadium": "神宮"
  },
  {
    "date": "2026-07-14",
    "home": "D",
    "away": "T",
    "stadium": "バンテリン"
  },
  {
    "date": "2026-07-14",
    "home": "C",
    "away": "DB",
    "stadium": "マツダ"
  },
  {
    "date": "2026-07-15",
    "home": "S",
    "away": "G",
    "stadium": "神宮"
  },
  {
    "date": "2026-07-15",
    "home": "D",
    "away": "T",
    "stadium": "バンテリン"
  },
  {
    "date": "2026-07-15",
    "home": "C",
    "away": "DB",
    "stadium": "マツダ"
  },
  {
    "date": "2026-07-16",
    "home": "S",
    "away": "G",
    "stadium": "神宮"
  },
  {
    "date": "2026-07-16",
    "home": "D",
    "away": "T",
    "stadium": "バンテリン"
  },
  {
    "date": "2026-07-17",
    "home": "G",
    "away": "D",
    "stadium": "東京D"
  },
  {
    "date": "2026-07-17",
    "home": "DB",
    "away": "S",
    "stadium": "横浜"
  },
  {
    "date": "2026-07-17",
    "home": "C",
    "away": "T",
    "stadium": "マツダ"
  },
  {
    "date": "2026-07-18",
    "home": "G",
    "away": "D",
    "stadium": "東京D"
  },
  {
    "date": "2026-07-18",
    "home": "DB",
    "away": "S",
    "stadium": "横浜"
  },
  {
    "date": "2026-07-18",
    "home": "C",
    "away": "T",
    "stadium": "マツダ"
  },
  {
    "date": "2026-07-19",
    "home": "G",
    "away": "D",
    "stadium": "東京D"
  },
  {
    "date": "2026-07-19",
    "home": "DB",
    "away": "S",
    "stadium": "横浜"
  },
  {
    "date": "2026-07-19",
    "home": "C",
    "away": "T",
    "stadium": "マツダ"
  },
  {
    "date": "2026-07-20",
    "home": "G",
    "away": "C",
    "stadium": "東京D"
  },
  {
    "date": "2026-07-20",
    "home": "S",
    "away": "D",
    "stadium": "神宮"
  },
  {
    "date": "2026-07-20",
    "home": "T",
    "away": "DB",
    "stadium": "甲子園"
  },
  {
    "date": "2026-07-21",
    "home": "G",
    "away": "C",
    "stadium": "東京D"
  },
  {
    "date": "2026-07-21",
    "home": "S",
    "away": "D",
    "stadium": "神宮"
  },
  {
    "date": "2026-07-21",
    "home": "T",
    "away": "DB",
    "stadium": "甲子園"
  },
  {
    "date": "2026-07-22",
    "home": "G",
    "away": "C",
    "stadium": "東京D"
  },
  {
    "date": "2026-07-22",
    "home": "S",
    "away": "D",
    "stadium": "神宮"
  },
  {
    "date": "2026-07-22",
    "home": "T",
    "away": "DB",
    "stadium": "甲子園"
  },
  {
    "date": "2026-07-24",
    "home": "S",
    "away": "C",
    "stadium": "神宮"
  },
  {
    "date": "2026-07-24",
    "home": "D",
    "away": "DB",
    "stadium": "バンテリン"
  },
  {
    "date": "2026-07-24",
    "home": "T",
    "away": "G",
    "stadium": "甲子園"
  },
  {
    "date": "2026-07-25",
    "home": "S",
    "away": "C",
    "stadium": "神宮"
  },
  {
    "date": "2026-07-25",
    "home": "D",
    "away": "DB",
    "stadium": "バンテリン"
  },
  {
    "date": "2026-07-25",
    "home": "T",
    "away": "G",
    "stadium": "甲子園"
  },
  {
    "date": "2026-07-26",
    "home": "S",
    "away": "C",
    "stadium": "神宮"
  },
  {
    "date": "2026-07-26",
    "home": "D",
    "away": "DB",
    "stadium": "バンテリン"
  },
  {
    "date": "2026-07-26",
    "home": "T",
    "away": "G",
    "stadium": "甲子園"
  },
  {
    "date": "2026-07-31",
    "home": "G",
    "away": "DB",
    "stadium": "東京D"
  },
  {
    "date": "2026-07-31",
    "home": "S",
    "away": "T",
    "stadium": "神宮"
  },
  {
    "date": "2026-07-31",
    "home": "C",
    "away": "D",
    "stadium": "マツダ"
  },
  {
    "date": "2026-08-01",
    "home": "G",
    "away": "DB",
    "stadium": "東京D"
  },
  {
    "date": "2026-08-01",
    "home": "S",
    "away": "T",
    "stadium": "神宮"
  },
  {
    "date": "2026-08-01",
    "home": "C",
    "away": "D",
    "stadium": "マツダ"
  },
  {
    "date": "2026-08-02",
    "home": "G",
    "away": "DB",
    "stadium": "東京D"
  },
  {
    "date": "2026-08-02",
    "home": "S",
    "away": "T",
    "stadium": "神宮"
  },
  {
    "date": "2026-08-02",
    "home": "C",
    "away": "D",
    "stadium": "マツダ"
  },
  {
    "date": "2026-08-04",
    "home": "DB",
    "away": "T",
    "stadium": "横浜"
  },
  {
    "date": "2026-08-04",
    "home": "D",
    "away": "S",
    "stadium": "バンテリン"
  },
  {
    "date": "2026-08-04",
    "home": "C",
    "away": "G",
    "stadium": "マツダ"
  },
  {
    "date": "2026-08-05",
    "home": "DB",
    "away": "T",
    "stadium": "横浜"
  },
  {
    "date": "2026-08-05",
    "home": "D",
    "away": "S",
    "stadium": "バンテリン"
  },
  {
    "date": "2026-08-05",
    "home": "C",
    "away": "G",
    "stadium": "マツダ"
  },
  {
    "date": "2026-08-06",
    "home": "DB",
    "away": "T",
    "stadium": "横浜"
  },
  {
    "date": "2026-08-06",
    "home": "D",
    "away": "S",
    "stadium": "バンテリン"
  },
  {
    "date": "2026-08-06",
    "home": "C",
    "away": "G",
    "stadium": "マツダ"
  },
  {
    "date": "2026-08-07",
    "home": "G",
    "away": "S",
    "stadium": "東京D"
  },
  {
    "date": "2026-08-07",
    "home": "DB",
    "away": "C",
    "stadium": "横浜"
  },
  {
    "date": "2026-08-07",
    "home": "T",
    "away": "D",
    "stadium": "京セラD大阪"
  },
  {
    "date": "2026-08-08",
    "home": "G",
    "away": "S",
    "stadium": "東京D"
  },
  {
    "date": "2026-08-08",
    "home": "DB",
    "away": "C",
    "stadium": "横浜"
  },
  {
    "date": "2026-08-08",
    "home": "T",
    "away": "D",
    "stadium": "京セラD大阪"
  },
  {
    "date": "2026-08-09",
    "home": "G",
    "away": "S",
    "stadium": "東京D"
  },
  {
    "date": "2026-08-09",
    "home": "DB",
    "away": "C",
    "stadium": "横浜"
  },
  {
    "date": "2026-08-09",
    "home": "T",
    "away": "D",
    "stadium": "京セラD大阪"
  },
  {
    "date": "2026-08-11",
    "home": "G",
    "away": "T",
    "stadium": "東京D"
  },
  {
    "date": "2026-08-11",
    "home": "S",
    "away": "C",
    "stadium": "神宮"
  },
  {
    "date": "2026-08-11",
    "home": "D",
    "away": "DB",
    "stadium": "バンテリン"
  },
  {
    "date": "2026-08-12",
    "home": "G",
    "away": "T",
    "stadium": "東京D"
  },
  {
    "date": "2026-08-12",
    "home": "S",
    "away": "C",
    "stadium": "神宮"
  },
  {
    "date": "2026-08-12",
    "home": "D",
    "away": "DB",
    "stadium": "バンテリン"
  },
  {
    "date": "2026-08-13",
    "home": "G",
    "away": "T",
    "stadium": "東京D"
  },
  {
    "date": "2026-08-13",
    "home": "S",
    "away": "C",
    "stadium": "神宮"
  },
  {
    "date": "2026-08-13",
    "home": "D",
    "away": "DB",
    "stadium": "バンテリン"
  },
  {
    "date": "2026-08-14",
    "home": "S",
    "away": "DB",
    "stadium": "神宮"
  },
  {
    "date": "2026-08-14",
    "home": "D",
    "away": "G",
    "stadium": "バンテリン"
  },
  {
    "date": "2026-08-14",
    "home": "C",
    "away": "T",
    "stadium": "マツダ"
  },
  {
    "date": "2026-08-15",
    "home": "S",
    "away": "DB",
    "stadium": "神宮"
  },
  {
    "date": "2026-08-15",
    "home": "D",
    "away": "G",
    "stadium": "バンテリン"
  },
  {
    "date": "2026-08-15",
    "home": "C",
    "away": "T",
    "stadium": "マツダ"
  },
  {
    "date": "2026-08-16",
    "home": "S",
    "away": "DB",
    "stadium": "神宮"
  },
  {
    "date": "2026-08-16",
    "home": "D",
    "away": "G",
    "stadium": "バンテリン"
  },
  {
    "date": "2026-08-16",
    "home": "C",
    "away": "T",
    "stadium": "マツダ"
  },
  {
    "date": "2026-08-18",
    "home": "DB",
    "away": "G",
    "stadium": "横浜"
  },
  {
    "date": "2026-08-18",
    "home": "T",
    "away": "S",
    "stadium": "京セラD大阪"
  },
  {
    "date": "2026-08-18",
    "home": "C",
    "away": "D",
    "stadium": "マツダ"
  },
  {
    "date": "2026-08-19",
    "home": "DB",
    "away": "G",
    "stadium": "横浜"
  },
  {
    "date": "2026-08-19",
    "home": "T",
    "away": "S",
    "stadium": "京セラD大阪"
  },
  {
    "date": "2026-08-19",
    "home": "C",
    "away": "D",
    "stadium": "マツダ"
  },
  {
    "date": "2026-08-20",
    "home": "DB",
    "away": "G",
    "stadium": "横浜"
  },
  {
    "date": "2026-08-20",
    "home": "T",
    "away": "S",
    "stadium": "京セラD大阪"
  },
  {
    "date": "2026-08-20",
    "home": "C",
    "away": "D",
    "stadium": "マツダ"
  },
  {
    "date": "2026-08-21",
    "home": "G",
    "away": "C",
    "stadium": "東京D"
  },
  {
    "date": "2026-08-21",
    "home": "DB",
    "away": "T",
    "stadium": "横浜"
  },
  {
    "date": "2026-08-21",
    "home": "D",
    "away": "S",
    "stadium": "バンテリン"
  },
  {
    "date": "2026-08-22",
    "home": "G",
    "away": "C",
    "stadium": "東京D"
  },
  {
    "date": "2026-08-22",
    "home": "DB",
    "away": "T",
    "stadium": "横浜"
  },
  {
    "date": "2026-08-22",
    "home": "D",
    "away": "S",
    "stadium": "バンテリン"
  },
  {
    "date": "2026-08-23",
    "home": "G",
    "away": "C",
    "stadium": "東京D"
  },
  {
    "date": "2026-08-23",
    "home": "DB",
    "away": "T",
    "stadium": "横浜"
  },
  {
    "date": "2026-08-23",
    "home": "D",
    "away": "S",
    "stadium": "バンテリン"
  },
  {
    "date": "2026-08-25",
    "home": "S",
    "away": "G",
    "stadium": "神宮"
  },
  {
    "date": "2026-08-25",
    "home": "D",
    "away": "T",
    "stadium": "バンテリン"
  },
  {
    "date": "2026-08-25",
    "home": "C",
    "away": "DB",
    "stadium": "マツダ"
  },
  {
    "date": "2026-08-26",
    "home": "S",
    "away": "G",
    "stadium": "神宮"
  },
  {
    "date": "2026-08-26",
    "home": "D",
    "away": "T",
    "stadium": "バンテリン"
  },
  {
    "date": "2026-08-26",
    "home": "C",
    "away": "DB",
    "stadium": "マツダ"
  },
  {
    "date": "2026-08-27",
    "home": "S",
    "away": "G",
    "stadium": "神宮"
  },
  {
    "date": "2026-08-27",
    "home": "D",
    "away": "T",
    "stadium": "バンテリン"
  },
  {
    "date": "2026-08-27",
    "home": "C",
    "away": "DB",
    "stadium": "マツダ"
  },
  {
    "date": "2026-08-28",
    "home": "DB",
    "away": "D",
    "stadium": "横浜"
  },
  {
    "date": "2026-08-28",
    "home": "T",
    "away": "G",
    "stadium": "甲子園"
  },
  {
    "date": "2026-08-28",
    "home": "C",
    "away": "S",
    "stadium": "マツダ"
  },
  {
    "date": "2026-08-29",
    "home": "DB",
    "away": "D",
    "stadium": "横浜"
  },
  {
    "date": "2026-08-29",
    "home": "T",
    "away": "G",
    "stadium": "甲子園"
  },
  {
    "date": "2026-08-29",
    "home": "C",
    "away": "S",
    "stadium": "マツダ"
  },
  {
    "date": "2026-08-30",
    "home": "DB",
    "away": "D",
    "stadium": "横浜"
  },
  {
    "date": "2026-08-30",
    "home": "T",
    "away": "G",
    "stadium": "甲子園"
  },
  {
    "date": "2026-08-30",
    "home": "C",
    "away": "S",
    "stadium": "マツダ"
  },
  {
    "date": "2026-09-01",
    "home": "G",
    "away": "DB",
    "stadium": "京セラD大阪"
  },
  {
    "date": "2026-09-01",
    "home": "S",
    "away": "T",
    "stadium": "神宮"
  },
  {
    "date": "2026-09-01",
    "home": "D",
    "away": "C",
    "stadium": "バンテリン"
  },
  {
    "date": "2026-09-02",
    "home": "G",
    "away": "DB",
    "stadium": "京セラD大阪"
  },
  {
    "date": "2026-09-02",
    "home": "S",
    "away": "T",
    "stadium": "神宮"
  },
  {
    "date": "2026-09-02",
    "home": "D",
    "away": "C",
    "stadium": "バンテリン"
  },
  {
    "date": "2026-09-03",
    "home": "S",
    "away": "T",
    "stadium": "神宮"
  },
  {
    "date": "2026-09-03",
    "home": "D",
    "away": "C",
    "stadium": "バンテリン"
  },
  {
    "date": "2026-09-04",
    "home": "S",
    "away": "D",
    "stadium": "神宮"
  },
  {
    "date": "2026-09-04",
    "home": "C",
    "away": "G",
    "stadium": "マツダ"
  },
  {
    "date": "2026-09-05",
    "home": "S",
    "away": "D",
    "stadium": "神宮"
  },
  {
    "date": "2026-09-05",
    "home": "T",
    "away": "DB",
    "stadium": "甲子園"
  },
  {
    "date": "2026-09-05",
    "home": "C",
    "away": "G",
    "stadium": "マツダ"
  },
  {
    "date": "2026-09-06",
    "home": "S",
    "away": "D",
    "stadium": "神宮"
  },
  {
    "date": "2026-09-06",
    "home": "T",
    "away": "DB",
    "stadium": "甲子園"
  },
  {
    "date": "2026-09-06",
    "home": "C",
    "away": "G",
    "stadium": "マツダ"
  },
  {
    "date": "2026-09-08",
    "home": "G",
    "away": "D",
    "stadium": "東京D"
  },
  {
    "date": "2026-09-08",
    "home": "DB",
    "away": "S",
    "stadium": "横浜"
  },
  {
    "date": "2026-09-08",
    "home": "T",
    "away": "C",
    "stadium": "甲子園"
  },
  {
    "date": "2026-09-09",
    "home": "G",
    "away": "D",
    "stadium": "東京D"
  },
  {
    "date": "2026-09-09",
    "home": "DB",
    "away": "S",
    "stadium": "横浜"
  },
  {
    "date": "2026-09-09",
    "home": "T",
    "away": "C",
    "stadium": "甲子園"
  },
  {
    "date": "2026-09-10",
    "home": "G",
    "away": "D",
    "stadium": "東京D"
  },
  {
    "date": "2026-09-10",
    "home": "DB",
    "away": "S",
    "stadium": "横浜"
  },
  {
    "date": "2026-09-10",
    "home": "T",
    "away": "C",
    "stadium": "甲子園"
  },
  {
    "date": "2026-09-11",
    "home": "C",
    "away": "DB",
    "stadium": "マツダ"
  },
  {
    "date": "2026-09-12",
    "home": "G",
    "away": "T",
    "stadium": "東京D"
  },
  {
    "date": "2026-09-12",
    "home": "D",
    "away": "S",
    "stadium": "バンテリン"
  },
  {
    "date": "2026-09-12",
    "home": "C",
    "away": "DB",
    "stadium": "マツダ"
  },
  {
    "date": "2026-09-13",
    "home": "S",
    "away": "C",
    "stadium": "神宮"
  },
  {
    "date": "2026-09-13",
    "home": "DB",
    "away": "G",
    "stadium": "横浜"
  },
  {
    "date": "2026-09-13",
    "home": "T",
    "away": "D",
    "stadium": "甲子園"
  },
  {
    "date": "2026-09-18",
    "home": "G",
    "away": "D",
    "stadium": "東京D"
  },
  {
    "date": "2026-09-18",
    "home": "DB",
    "away": "S",
    "stadium": "横浜"
  },
  {
    "date": "2026-09-18",
    "home": "T",
    "away": "C",
    "stadium": "甲子園"
  },
  {
    "date": "2026-09-19",
    "home": "G",
    "away": "D",
    "stadium": "東京D"
  },
  {
    "date": "2026-09-19",
    "home": "DB",
    "away": "S",
    "stadium": "横浜"
  },
  {
    "date": "2026-09-19",
    "home": "T",
    "away": "C",
    "stadium": "甲子園"
  },
  {
    "date": "2026-09-20",
    "home": "G",
    "away": "S",
    "stadium": "東京D"
  },
  {
    "date": "2026-09-20",
    "home": "D",
    "away": "C",
    "stadium": "バンテリン"
  },
  {
    "date": "2026-09-20",
    "home": "T",
    "away": "DB",
    "stadium": "甲子園"
  },
  {
    "date": "2026-09-21",
    "home": "D",
    "away": "C",
    "stadium": "バンテリン"
  },
  {
    "date": "2026-09-21",
    "home": "T",
    "away": "DB",
    "stadium": "甲子園"
  },
  {
    "date": "2026-09-22",
    "home": "S",
    "away": "T",
    "stadium": "神宮"
  },
  {
    "date": "2026-09-22",
    "home": "DB",
    "away": "D",
    "stadium": "横浜"
  },
  {
    "date": "2026-09-22",
    "home": "C",
    "away": "G",
    "stadium": "マツダ"
  },
  {
    "date": "2026-09-23",
    "home": "S",
    "away": "T",
    "stadium": "神宮"
  },
  {
    "date": "2026-09-23",
    "home": "DB",
    "away": "D",
    "stadium": "横浜"
  },
  {
    "date": "2026-09-23",
    "home": "C",
    "away": "G",
    "stadium": "マツダ"
  }
]
export { SCHEDULE };
export default SCHEDULE;
