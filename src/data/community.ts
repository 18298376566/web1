export interface Post {
  id: number;
  title: string;
  content: string;
  author: {
    id: number;
    username: string;
    avatar: string;
  };
  date: string;
  likes: number;
  comments: number;
  tags: string[];
  image?: string;
}

export interface Comment {
  id: number;
  postId: number;
  author: {
    id: number;
    username: string;
    avatar: string;
  };
  content: string;
  date: string;
  likes: number;
  replies: Comment[];
}

export const posts: Post[] = [
  {
    id: 1,
    title: "《星际冒险》新DLC即将发布，新增多个星系",
    content: "根据官方消息，《星际冒险》的第一个大型DLC《深空探索》将于下个月发布，将新增5个可探索的星系和10个新任务。玩家将能够探索更多未知的星球，遇到新的外星种族，获取更强大的武器和装备。",
    author: {
      id: 1,
      username: "太空探索者",
      avatar: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=user%20avatar%201&image_size=square"
    },
    date: "2024-07-15",
    likes: 156,
    comments: 42,
    tags: ["星际冒险", "DLC", "更新"],
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=space%20game%20dlc%20announcement&image_size=landscape_16_9"
  },
  {
    id: 2,
    title: "《奇幻大陆》职业选择指南",
    content: "在《奇幻大陆》中，选择适合自己的职业非常重要。本指南将详细介绍游戏中的各个职业特点、技能树和发展方向，帮助新手玩家做出最适合自己的选择。",
    author: {
      id: 2,
      username: "魔法师",
      avatar: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=user%20avatar%203&image_size=square"
    },
    date: "2024-07-14",
    likes: 203,
    comments: 56,
    tags: ["奇幻大陆", "职业指南", "攻略"],
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=fantasy%20game%20classes&image_size=landscape_16_9"
  },
  {
    id: 3,
    title: "《赛车传奇》最佳赛道攻略",
    content: "《赛车传奇》中有很多不同的赛道，每个赛道都有其独特的特点和难点。本文将为大家介绍各个赛道的最佳行驶路线和技巧，帮助大家在比赛中取得更好的成绩。",
    author: {
      id: 3,
      username: "赛车手",
      avatar: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=user%20avatar%205&image_size=square"
    },
    date: "2024-07-13",
    likes: 128,
    comments: 34,
    tags: ["赛车传奇", "赛道攻略", "技巧"],
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=racing%20game%20track&image_size=landscape_16_9"
  },
  {
    id: 4,
    title: "《生存之道》新手生存技巧",
    content: "《生存之道》是一款非常具有挑战性的生存游戏，对于新手来说可能会有些困难。本文将分享一些新手生存的基本技巧，帮助大家在游戏中更好地生存下去。",
    author: {
      id: 4,
      username: "生存专家",
      avatar: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=user%20avatar%207&image_size=square"
    },
    date: "2024-07-12",
    likes: 175,
    comments: 48,
    tags: ["生存之道", "新手技巧", "攻略"],
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=survival%20game%20tips&image_size=landscape_16_9"
  },
  {
    id: 5,
    title: "《策略王国》多人对战心得",
    content: "《策略王国》的多人对战非常考验玩家的策略能力和操作水平。本文将分享一些多人对战的心得和技巧，帮助大家在对战中取得胜利。",
    author: {
      id: 5,
      username: "策略大师",
      avatar: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=user%20avatar%209&image_size=square"
    },
    date: "2024-07-11",
    likes: 142,
    comments: 39,
    tags: ["策略王国", "多人对战", "技巧"],
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=strategy%20game%20multiplayer&image_size=landscape_16_9"
  }
];

export const comments: Comment[] = [
  {
    id: 1,
    postId: 1,
    author: {
      id: 6,
      username: "星际爱好者",
      avatar: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=user%20avatar%2013&image_size=square"
    },
    content: "太好了！我一直在期待这个DLC，希望能有更多的探索内容。",
    date: "2024-07-15",
    likes: 23,
    replies: [
      {
        id: 2,
        postId: 1,
        author: {
          id: 1,
          username: "太空探索者",
          avatar: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=user%20avatar%201&image_size=square"
        },
        content: "是的，我也很期待。据说是有一个新的外星种族，非常神秘。",
        date: "2024-07-15",
        likes: 12,
        replies: []
      }
    ]
  },
  {
    id: 3,
    postId: 1,
    author: {
      id: 7,
      username: "游戏迷",
      avatar: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=user%20avatar%2014&image_size=square"
    },
    content: "请问DLC是免费的还是需要单独购买？",
    date: "2024-07-15",
    likes: 8,
    replies: [
      {
        id: 4,
        postId: 1,
        author: {
          id: 1,
          username: "太空探索者",
          avatar: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=user%20avatar%201&image_size=square"
        },
        content: "根据官方消息，DLC是需要单独购买的，价格大约是本体的30%。",
        date: "2024-07-15",
        likes: 5,
        replies: []
      }
    ]
  },
  {
    id: 5,
    postId: 2,
    author: {
      id: 8,
      username: "新手玩家",
      avatar: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=user%20avatar%2015&image_size=square"
    },
    content: "非常感谢这个指南，对我帮助很大！",
    date: "2024-07-14",
    likes: 15,
    replies: []
  },
  {
    id: 6,
    postId: 2,
    author: {
      id: 9,
      username: "老玩家",
      avatar: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=user%20avatar%2016&image_size=square"
    },
    content: "补充一点，法师职业后期非常强大，但前期比较脆弱，需要注意生存。",
    date: "2024-07-14",
    likes: 28,
    replies: []
  }
];

export const getPosts = (): Post[] => {
  return posts;
};

export const getPostById = (id: number): Post | undefined => {
  return posts.find(post => post.id === id);
};

export const getCommentsByPostId = (postId: number): Comment[] => {
  return comments.filter(comment => comment.postId === postId);
};