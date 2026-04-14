import imgKaraage from "figma:asset/a7bebd2fdcdfce6fdf7b6f23a8e4d921e0022c7c.png";
import imgTKG from "figma:asset/848c01b23724163fb4c3d6a145993b2674273c93.png";

export interface Ingredient {
  name: string;
  amount: string;
  isPantryItem?: boolean; // highlight if it's in the user's pantry
}

export interface CookingStep {
  text: string;
}

export interface RecipeDetail {
  id: number;
  image: string;
  title: string;
  time: string;
  servings: string;
  fireLevel: number;
  consumptionAmount: string;
  consumptionMl: string;
  description: string;
  tags: string[];
  highlightTag: string;
  ingredients: Ingredient[];
  steps: CookingStep[];
}

export const recipeDetails: RecipeDetail[] = [
  {
    id: 1,
    image: imgKaraage,
    title: "青じそ唐揚げ",
    time: "25分",
    servings: "2人分",
    fireLevel: 3,
    consumptionAmount: "大さじ4",
    consumptionMl: "60ml",
    description: "青じそドレッシングを下味に使えば、柔らかくてジューシーな唐揚げに！",
    tags: ["鶏もも肉", "片栗粉", "青じそドレッシング"],
    highlightTag: "青じそドレッシング",
    ingredients: [
      { name: "鶏もも肉", amount: "300g（1枚）" },
      { name: "青じそドレッシング", amount: "大さじ4", isPantryItem: true },
      { name: "片栗粉", amount: "大さじ4" },
      { name: "薄力粉", amount: "大さじ2" },
      { name: "卵", amount: "1/2個" },
      { name: "揚げ油", amount: "適量" },
      { name: "レモン（お好みで）", amount: "1/4個" },
    ],
    steps: [
      { text: "鶏もも肉は余分な脂を取り除き、一口大（3〜4cm角）に切る。" },
      { text: "ポリ袋に鶏肉と青じそドレッシング大さじ4を入れ、よく揉み込んで15分以上漬ける。ドレッシングのお酢と油分が肉を柔らかくする。" },
      { text: "漬け込んだ鶏肉に溶き卵を加えて混ぜ、片栗粉と薄力粉を合わせた衣をまぶす。" },
      { text: "170℃の油で4〜5分揚げ、一度取り出して2分休ませる。その後180℃に上げて1分ほど二度揚げし、カリッと仕上げる。" },
    ],
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1659415402220-91d0f830064d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdm9jYWRvJTIwc2hyaW1wJTIwc2FsYWQlMjBmcmVzaHxlbnwxfHx8fDE3NzAzODcwMjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "アボカドとエビのサラダ",
    time: "10分",
    servings: "2人分",
    fireLevel: 1,
    consumptionAmount: "大さじ1",
    consumptionMl: "15ml",
    description: "クミンが香るエスニック風サラダ",
    tags: ["アボカド", "エビ", "レタス", "マヨネーズ", "レモン果汁", "クミンパウダー"],
    highlightTag: "レモン果汁",
    ingredients: [
      { name: "アボカド", amount: "1個" },
      { name: "むきエビ", amount: "100g" },
      { name: "レタス", amount: "3枚" },
      { name: "マヨネーズ", amount: "大さじ2" },
      { name: "レモン果汁", amount: "大さじ1", isPantryItem: true },
      { name: "クミンパウダー", amount: "小さじ1/2", isPantryItem: true },
      { name: "塩こしょう", amount: "少々" },
    ],
    steps: [
      { text: "エビは塩茹でし、水気を切って冷ます。" },
      { text: "アボカドは種を取り、一口大に切る。レタスは食べやすい大きさにちぎる。" },
      { text: "ボウルにマヨネーズ、レモン果汁、クミンパウダーを混ぜ、スパイシーなドレッシングを作る。" },
      { text: "器にレタスを敷き、アボカドとエビを盛り付け、ドレッシングをかけて軽く和える。" },
    ],
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1757715377671-01c20cfa1880?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmlleZCUyMHJpY2UlMjBhc2lhbiUyMGRpc2glMjBwbGF0ZXxlbnwxfHx8fDE3NzAzODcwMjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "ナンプラー香るチャーハン",
    time: "15分",
    servings: "2人分",
    fireLevel: 3,
    consumptionAmount: "大さじ4",
    consumptionMl: "60ml",
    description: "普通のチャーハンもナンプラーだけで本格的",
    tags: ["ご飯", "長ねぎ", "えび", "卵", "ナンプラー"],
    highlightTag: "ナンプラー",
    ingredients: [
      { name: "ご飯", amount: "2杯分" },
      { name: "長ねぎ", amount: "1/2本" },
      { name: "むきえび", amount: "80g" },
      { name: "卵", amount: "2個" },
      { name: "ナンプラー", amount: "大さじ2", isPantryItem: true },
      { name: "サラダ油", amount: "大さじ1" },
    ],
    steps: [
      { text: "長ねぎはみじん切りにする。えびは背ワタを取り、一口大に切る。" },
      { text: "フライパンに油を熱し、溶き卵を入れて手早くかき混ぜ、半熟状にする。" },
      { text: "ご飯を加え、卵と合わせながら強火で炒める。えびと長ねぎを加えて炒め合わせる。" },
      { text: "ナンプラーを回し入れ、全体を混ぜ合わせて香りを立たせる。" },
    ],
  },
  {
    id: 4,
    image: imgTKG,
    title: "エスニックTKG",
    time: "3分",
    servings: "1人分",
    fireLevel: 1,
    consumptionAmount: "小さじ1",
    consumptionMl: "5ml",
    description: "醤油の代わりにナンプラーを使うだけで、一気にタイの屋台飯のような風味に",
    tags: ["ご飯", "卵", "ナンプラー", "ごま油"],
    highlightTag: "ナンプラー",
    ingredients: [
      { name: "ご飯", amount: "1杯分" },
      { name: "卵", amount: "1個" },
      { name: "ナンプラー", amount: "小さじ1", isPantryItem: true },
      { name: "ごま油", amount: "数滴" },
      { name: "ブラックペッパー", amount: "少々" },
      { name: "レモン汁（お好みで）", amount: "1滴" },
    ],
    steps: [
      { text: "アツアツのご飯を茶碗に盛り、中央にくぼみを作って卵を落とす。" },
      { text: "ナンプラーを小さじ1回しかけ、ごま油を数滴垂らす。" },
      { text: "ブラックペッパーを振り、お好みでレモン汁を1滴。よく混ぜて召し上がれ。" },
    ],
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1514536958296-436f46226e74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxzYW1pYyUyMGdsYXpleZCUyMHRlcml5YWtpJTIwY2hpY2tlbiUyMHBsYXRlfGVufDF8fHx8MTc3MTYyNjAyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "洋風こっくり照り焼き",
    time: "20分",
    servings: "2人分",
    fireLevel: 2,
    consumptionAmount: "大さじ1",
    consumptionMl: "15ml",
    description: "仕上げにバルサミコ酢を加えるだけで、酸味でキレが出てお店のようなソースに",
    tags: ["鶏もも肉", "バルサミコ酢", "醤油", "みりん"],
    highlightTag: "バルサミコ酢",
    ingredients: [
      { name: "鶏もも肉", amount: "300g（1枚）" },
      { name: "醤油", amount: "大さじ2" },
      { name: "酒", amount: "大さじ2" },
      { name: "みりん", amount: "大さじ2" },
      { name: "バルサミコ酢", amount: "大さじ1", isPantryItem: true },
      { name: "サラダ油", amount: "大さじ1" },
    ],
    steps: [
      { text: "鶏もも肉は余分な脂を取り、フォークで数カ所穴を開ける。" },
      { text: "フライパンに油を熱し、鶏肉を皮目から中火でじっくり焼く。両面にこんがり焼き色をつける。" },
      { text: "醤油・酒・みりんを合わせて回し入れ、中火で煮絡める。" },
      { text: "照りが出てきたら仕上げにバルサミコ酢を大さじ1加え、軽く煮詰める。加熱で酸味が飛び、フルーティーな甘みととろみに変わる。" },
    ],
  },
];

export function getRecipeById(id: number): RecipeDetail | undefined {
  return recipeDetails.find((r) => r.id === id);
}