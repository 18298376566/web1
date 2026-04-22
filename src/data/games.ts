export interface Game {
  id: number;
  title: string;
  description: string;
  price: number;
  releaseDate: string;
  developer: string;
  publisher: string;
  rating: number;
  tags: string[];
  coverImage: string;
  screenshots: string[];
  systemRequirements: {
    minimum: {
      os: string;
      processor: string;
      memory: string;
      graphics: string;
    };
    recommended: {
      os: string;
      processor: string;
      memory: string;
      graphics: string;
    };
  };
  reviews: {
    id: number;
    username: string;
    avatar: string;
    rating: number;
    comment: string;
    date: string;
  }[];
}

export const games: Game[] = [
  {
    id: 1,
    title: "星际冒险",
    description: "一款史诗级太空冒险游戏，玩家将探索未知的星系，与外星种族接触，参与激烈的太空战斗。游戏拥有丰富的剧情和开放世界玩法，让玩家体验真实的太空探索乐趣。",
    price: 99.00,
    releaseDate: "2024-01-15",
    developer: "太空游戏工作室",
    publisher: "星际娱乐",
    rating: 4.8,
    tags: ["动作", "冒险", "开放世界", "太空", "角色扮演"],
    coverImage: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=space%20adventure%20game%20cover&image_size=square",
    screenshots: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=space%20game%20screenshot%201&image_size=landscape_16_9",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=space%20game%20screenshot%202&image_size=landscape_16_9",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=space%20game%20screenshot%203&image_size=landscape_16_9"
    ],
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-6600K / AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        graphics: "NVIDIA GTX 1060 3GB / AMD RX 580 4GB"
      },
      recommended: {
        os: "Windows 10/11 64-bit",
        processor: "Intel Core i7-8700K / AMD Ryzen 7 2700X",
        memory: "16 GB RAM",
        graphics: "NVIDIA GTX 1080 Ti / AMD RX 5700 XT"
      }
    },
    reviews: [
      {
        id: 1,
        username: "太空探索者",
        avatar: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=user%20avatar%201&image_size=square",
        rating: 5,
        comment: "这款游戏的太空探索体验非常真实，画面精美，剧情引人入胜。强烈推荐给所有喜欢太空题材的玩家！",
        date: "2024-01-20"
      },
      {
        id: 2,
        username: "星际战士",
        avatar: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=user%20avatar%202&image_size=square",
        rating: 4,
        comment: "战斗系统非常流畅，飞船操控感很好。唯一的缺点是任务重复性有点高。",
        date: "2024-01-22"
      }
    ]
  },
  {
    id: 2,
    title: "奇幻大陆",
    description: "一款开放世界奇幻角色扮演游戏，玩家将在一个充满魔法和怪物的大陆上冒险。游戏拥有丰富的职业系统和技能树，让玩家可以根据自己的喜好打造独特的角色。",
    price: 129.00,
    releaseDate: "2024-02-10",
    developer: "奇幻游戏工作室",
    publisher: "魔法娱乐",
    rating: 4.7,
    tags: ["角色扮演", "开放世界", "奇幻", "魔法", "冒险"],
    coverImage: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=fantasy%20game%20cover&image_size=square",
    screenshots: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=fantasy%20game%20screenshot%201&image_size=landscape_16_9",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=fantasy%20game%20screenshot%202&image_size=landscape_16_9",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=fantasy%20game%20screenshot%203&image_size=landscape_16_9"
    ],
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-4690 / AMD FX-8350",
        memory: "8 GB RAM",
        graphics: "NVIDIA GTX 970 / AMD R9 390"
      },
      recommended: {
        os: "Windows 10/11 64-bit",
        processor: "Intel Core i7-6700K / AMD Ryzen 5 3600X",
        memory: "16 GB RAM",
        graphics: "NVIDIA RTX 2070 / AMD RX 5700 XT"
      }
    },
    reviews: [
      {
        id: 1,
        username: "魔法师",
        avatar: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=user%20avatar%203&image_size=square",
        rating: 5,
        comment: "游戏世界非常庞大，探索起来很有乐趣。魔法系统设计得很有深度，不同职业的玩法差异很大。",
        date: "2024-02-15"
      },
      {
        id: 2,
        username: "战士",
        avatar: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=user%20avatar%204&image_size=square",
        rating: 4,
        comment: "战斗手感很好，技能特效华丽。剧情有点老套，但整体游戏体验还是很棒的。",
        date: "2024-02-18"
      }
    ]
  },
  {
    id: 3,
    title: "赛车传奇",
    description: "一款拟真赛车游戏，拥有真实的物理引擎和精美的画面。游戏包含多种赛车和赛道，支持单人模式和多人联机对战。",
    price: 79.00,
    releaseDate: "2024-03-05",
    developer: "赛车游戏工作室",
    publisher: "速度娱乐",
    rating: 4.5,
    tags: ["赛车", "模拟", "多人", "竞速"],
    coverImage: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=racing%20game%20cover&image_size=square",
    screenshots: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=racing%20game%20screenshot%201&image_size=landscape_16_9",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=racing%20game%20screenshot%202&image_size=landscape_16_9",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=racing%20game%20screenshot%203&image_size=landscape_16_9"
    ],
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-8400 / AMD Ryzen 5 2600",
        memory: "8 GB RAM",
        graphics: "NVIDIA GTX 1060 6GB / AMD RX 580 8GB"
      },
      recommended: {
        os: "Windows 10/11 64-bit",
        processor: "Intel Core i7-9700K / AMD Ryzen 7 3700X",
        memory: "16 GB RAM",
        graphics: "NVIDIA RTX 2080 / AMD RX 6800"
      }
    },
    reviews: [
      {
        id: 1,
        username: "赛车手",
        avatar: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=user%20avatar%205&image_size=square",
        rating: 5,
        comment: "物理引擎非常真实，赛车手感很好。赛道设计多样，联机对战也很流畅。",
        date: "2024-03-10"
      },
      {
        id: 2,
        username: "速度爱好者",
        avatar: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=user%20avatar%206&image_size=square",
        rating: 4,
        comment: "画面精美，音效逼真。但 AI 对手有时会表现得不太智能。",
        date: "2024-03-12"
      }
    ]
  },
  {
    id: 4,
    title: "生存之道",
    description: "一款开放世界生存游戏，玩家需要在一个充满危险的环境中收集资源、建造庇护所、制作工具和武器，以应对各种挑战。",
    price: 89.00,
    releaseDate: "2024-04-20",
    developer: "生存游戏工作室",
    publisher: "荒野娱乐",
    rating: 4.6,
    tags: ["生存", "开放世界", "建造", "冒险"],
    coverImage: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=survival%20game%20cover&image_size=square",
    screenshots: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=survival%20game%20screenshot%201&image_size=landscape_16_9",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=survival%20game%20screenshot%202&image_size=landscape_16_9",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=survival%20game%20screenshot%203&image_size=landscape_16_9"
    ],
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-4460 / AMD Ryzen 3 1200",
        memory: "8 GB RAM",
        graphics: "NVIDIA GTX 760 / AMD R9 270"
      },
      recommended: {
        os: "Windows 10/11 64-bit",
        processor: "Intel Core i5-8600K / AMD Ryzen 5 3600",
        memory: "16 GB RAM",
        graphics: "NVIDIA GTX 1070 / AMD RX 580"
      }
    },
    reviews: [
      {
        id: 1,
        username: "生存专家",
        avatar: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=user%20avatar%207&image_size=square",
        rating: 5,
        comment: "游戏的生存机制设计得很合理，资源管理和建造系统都很有趣。环境变化和天气系统增加了游戏的挑战性。",
        date: "2024-04-25"
      },
      {
        id: 2,
        username: "探险家",
        avatar: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=user%20avatar%208&image_size=square",
        rating: 4,
        comment: "开放世界很大，探索起来很有乐趣。但初期资源获取有点困难，需要一定的耐心。",
        date: "2024-04-28"
      }
    ]
  },
  {
    id: 5,
    title: "策略王国",
    description: "一款回合制策略游戏，玩家需要建设自己的王国，发展经济，训练军队，与其他玩家或AI进行对战。",
    price: 69.00,
    releaseDate: "2024-05-15",
    developer: "策略游戏工作室",
    publisher: "王国娱乐",
    rating: 4.4,
    tags: ["策略", "回合制", "多人", "建造"],
    coverImage: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=strategy%20game%20cover&image_size=square",
    screenshots: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=strategy%20game%20screenshot%201&image_size=landscape_16_9",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=strategy%20game%20screenshot%202&image_size=landscape_16_9",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=strategy%20game%20screenshot%203&image_size=landscape_16_9"
    ],
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i3-4130 / AMD Ryzen 3 1200",
        memory: "8 GB RAM",
        graphics: "NVIDIA GTX 650 / AMD R7 260X"
      },
      recommended: {
        os: "Windows 10/11 64-bit",
        processor: "Intel Core i5-7400 / AMD Ryzen 5 2400G",
        memory: "16 GB RAM",
        graphics: "NVIDIA GTX 1060 / AMD RX 570"
      }
    },
    reviews: [
      {
        id: 1,
        username: "策略大师",
        avatar: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=user%20avatar%209&image_size=square",
        rating: 5,
        comment: "游戏的策略深度很高，不同的发展路线和战术选择都能带来不同的游戏体验。多人对战非常刺激。",
        date: "2024-05-20"
      },
      {
        id: 2,
        username: "王国建设者",
        avatar: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=user%20avatar%2010&image_size=square",
        rating: 4,
        comment: "建设系统很有趣，经济管理也很有挑战性。但AI的智商有时会显得不够高。",
        date: "2024-05-22"
      }
    ]
  },
  {
    id: 6,
    title: "恐怖迷宫",
    description: "一款第一人称恐怖游戏，玩家需要在一个充满恐怖元素的迷宫中探索，解开谜题，逃离困境。",
    price: 59.00,
    releaseDate: "2024-06-10",
    developer: "恐怖游戏工作室",
    publisher: "惊悚娱乐",
    rating: 4.3,
    tags: ["恐怖", "第一人称", "解谜", "冒险"],
    coverImage: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=horror%20game%20cover&image_size=square",
    screenshots: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=horror%20game%20screenshot%201&image_size=landscape_16_9",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=horror%20game%20screenshot%202&image_size=landscape_16_9",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=horror%20game%20screenshot%203&image_size=landscape_16_9"
    ],
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-4590 / AMD FX-8350",
        memory: "8 GB RAM",
        graphics: "NVIDIA GTX 760 / AMD R9 270"
      },
      recommended: {
        os: "Windows 10/11 64-bit",
        processor: "Intel Core i7-6700 / AMD Ryzen 5 1600",
        memory: "16 GB RAM",
        graphics: "NVIDIA GTX 1070 / AMD RX 580"
      }
    },
    reviews: [
      {
        id: 1,
        username: "恐怖爱好者",
        avatar: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=user%20avatar%2011&image_size=square",
        rating: 5,
        comment: "游戏的恐怖氛围营造得非常好，音效和画面都很出色。谜题设计也很有创意，不会过于简单。",
        date: "2024-06-15"
      },
      {
        id: 2,
        username: "解谜专家",
        avatar: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=user%20avatar%2012&image_size=square",
        rating: 4,
        comment: "谜题设计很巧妙，需要仔细观察和思考。但游戏长度有点短，希望能有更多内容。",
        date: "2024-06-18"
      }
    ]
  }
];

export const getGameById = (id: number): Game | undefined => {
  return games.find(game => game.id === id);
};