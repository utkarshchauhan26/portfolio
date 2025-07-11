/** @format */

import {
  GitHubLogo,
  CodeforcesLogo,
  LeetCodeLogo,
  LinkedInLogo,
  XLogo,
  DevToLogo,
  DiscordLogo,
  FacebookLogo,
  GmailLogo,
  KaggleLogo,
  MediumLogo,
  SlackLogo,
  StackOverFlowLogo,
  YTLogo,
} from "@/assets/images";

const adminName = "Utkarsh Chauhan";

console.log(import.meta.url); // Outputs the URL of this script

const AllSocialMedia = [
  {
    name: "GitHub",
    logo: GitHubLogo,
    isEnable: true,
    url: "https://github.com/utkarshchauhan26",
  },
  {
    name: "Codeforces",
    logo: CodeforcesLogo,
    isEnable: true,
    url: "https://codeforces.com/profile/utkarsh_chauhan01",
  },
  {
    name: "LeetCode",
    logo: LeetCodeLogo,
    isEnable: true,
    url: "https://leetcode.com/u/utkarsh_chauhan01/",
  },
  {
    name: "LinkedIn",
    logo: LinkedInLogo,
    isEnable: true,
    url: "www.linkedin.com/in/utkarsh-chauhan-874ba1205",
  },
  {
    name: "Twitter (X)",
    logo: XLogo,
    isEnable: true,
    url: "https://x.com/Utkarsh92617416",
  },
  {
    name: "Dev.to",
    logo: DevToLogo,
    isEnable: true,
    url: "https://dev.to/username",
  },
  {
    name: "Discord",
    logo: DiscordLogo,
    isEnable: false,
    url: "https://discord.com/users/username",
  },
  {
    name: "Facebook",
    logo: FacebookLogo,
    isEnable: false,
    url: "https://facebook.com/yourusername",
  },
  {
    name: "Gmail",
    logo: GmailLogo,
    isEnable: false,
    url: "mailto:chauhanutkarsh54@gmail.com",
  },
  {
    name: "Kaggle",
    logo: KaggleLogo,
    isEnable: false,
    url: "https://www.kaggle.com/yourusername",
  },
  {
    name: "Medium",
    logo: MediumLogo,
    isEnable: false,
    url: "https://medium.com/@yourusername",
  },
  {
    name: "Slack",
    logo: SlackLogo,
    isEnable: false,
    url: "",
  },
  {
    name: "Stack Overflow",
    logo: StackOverFlowLogo,
    isEnable: false,
    url: "https://stackoverflow.com/users/yourid/yourusername",
  },
  {
    name: "YouTube",
    logo: YTLogo,
    isEnable: false,
    url: "https://www.youtube.com/c/yourchannelname",
  },
];

const SocialLinks = {
  githubLink: "https://github.com/utkarshchauhan26",
  codeforcesLink: "https://codeforces.com/profile/utkarsh_chauhan01",
  leetcodeLink: "https://leetcode.com/u/utkarsh_chauhan01/",
  linkedInLink: "https://www.linkedin.com/in/utkarsh-chauhan-874ba1205",
  twitterLink: "https://x.com/Utkarsh92617416",
  devToLink: "https://dev.to/username",
  discordLink: "https://discord.com/users/username", // You can remove this if isEnable: false
  facebookLink: "https://facebook.com/yourusername", // Remove or replace if needed
  gmailLink: "mailto:chauhanutkarsh54@gmail.com", // Replace with your actual email if needed
  kaggleLink: "https://www.kaggle.com/yourusername", // Replace with your username
  mediumLink: "https://medium.com/@yourusername", // Replace with your username
  slackLink: "",
  stackOverflowLink: "https://stackoverflow.com/users/yourid/yourusername", // Replace with actual info
  youtubeLink: "https://www.youtube.com/c/yourchannelname", // Replace with your channel link
};

const WhatIamDoingNow = {
  lastUpdate: "July 8, 2025",
  list: [
    "Learning business and how to improve it by solving and watching case studies",
    "Exploring what I genuinely love - because that matters the most",
    "Engineering solutions for real-world problems to sharpen decision-making and execution instincts",
  ],
};

const ToolBox = {
  tagline: "Learn everything, master the one you love the most",

  ToolList: {
    Technologies: [
      {
        name: "Programming Languages",
        list: ["C++", "Python", "Java", "Dart", "SQL", "C", "JavaScript"],
      },
      {
        name: "Frameworks",
        list: ["React.js", "Next.js", "Flutter"],
      },
      {
        name: "AI/ML Libraries",
        list: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "MTCNN", "ResNet"],
      },
      {
        name: "Database Technologies",
        list: ["MySQL", "PostgreSQL", "Firebase"],
      },
    ],

    Tools: [
      {
        name: "Version Control",
        list: ["Git", "GitHub"],
      },
    ],

    Hardware: [
      {
        name: "Laptop/PC",
        list: ["Acer Nitro 5"],
      },
      {
        name: "Development Boards",
        list: [],
      },
      {
        name: "Peripherals",
        list: ["Mechanical Keyboard"],
      },
      {
        name: "AI-Specific Hardware",
        list: [],
      },
    ],

    Platforms: [
      {
        name: "Cloud Platforms",
        list: ["AWS"],
      },
      {
        name: "Collaboration",
        list: ["Slack", "Zoom"],
      },
      {
        name: "Learning Platforms",
        list: ["Coursera", "YouTube"],
      },
      {
        name: "Competitive Coding",
        list: ["Coding Ninjas", "LeetCode"],
      },
    ],
  },
};

const MyHobbies = [
  {
    name: "Playing Video Games",
    message:
      "Because commanding chaos, making decisions under fire, and staying three moves ahead is peak leadership training - at 120 FPS. ",
  },
  {
    name: "Watching Movies",
    message:
      "Cinema is emotion. It rewires how I feel, think, and see the world. ",
  },
  {
    name: "Listening to Music",
    message:
      "Beats + Flow = My daily energy boost and chill pill. Keeps me in my zone.",
  },
];

const FourTierMasteryData = {
  2025: [
    {
      name: "Primary", // Don't Change this
      which: "Product Manager",
      desc: [
        "This is where I truly belong - solving problems, improving business, and building user-first solutions.",
        "From crafting product strategies to thinking out of the box, this is what I love the most and do best.",
      ],
      skillTags: [
        "Product Strategy",
        "User Research",
        "Growth Mindset",
        "Business Thinking",
        "Problem Solving",
        "Wireframing",
        "Agile Thinking",
        "Execution",
        "Cross-functional Collaboration",
      ],
    },
    {
      name: "Secondary", // Don't Change this
      which: "Full-Stack Developer",
      desc: [
        "Still love building. From React to Next.js, I build clean UIs and ship scalable logic that works.",
        "It's my builder's toolkit - always ready to experiment, iterate, and launch fast.",
      ],
      skillTags: [
        "React",
        "Next.js",
        "Flutter",
        "HTML5",
        "CSS3",
        "JavaScript",
        "APIs",
        "Firebase",
        "PostgreSQL",
        "Git",
        "Deployment",
      ],
    },
    {
      name: "Third", // Don't Change this
      which: "-",
      desc: [
        "I'm focused. I'd rather master what I truly enjoy than do everything halfway.",
      ],
      skillTags: [],
    },
    {
      name: "Fourth", // Don't Change this
      which: "-",
      desc: [
        "Not chasing ranks here. Just focused on becoming world-class at what I do best.",
      ],
      skillTags: [],
    },
  ],
};


export {
  AllSocialMedia,
  WhatIamDoingNow,
  ToolBox,
  MyHobbies,
  SocialLinks,
  adminName,
  FourTierMasteryData,
};
