const root = document.documentElement;
const header = document.querySelector("[data-header]");
const themeToggle = document.querySelector("[data-theme-toggle]");
const languageButtons = [...document.querySelectorAll("[data-lang-option]")];
const metaDescription = document.querySelector('meta[name="description"]');

const translations = {
  zh: {
    meta: {
      title: "果果max | 系统构建者官网",
      description: "果果max 个人官网。系统构建者作品集，专注产品系统、品牌系统与 AI 工作流系统。",
    },
    brand: { aria: "果果max 首页" },
    language: { aria: "语言切换" },
    theme: { aria: "切换深浅色模式" },
    nav: {
      aria: "主导航",
      capability: "能力",
      work: "作品",
      themes: "主题",
      writing: "写作",
      contact: "联系",
    },
    hero: {
      eyebrow: "系统构建者作品集",
      title: "我为产品、品牌与 AI 构建系统",
      subtitle: "专注产品、品牌与 AI 系统设计，将复杂业务想法转化为可执行的增长系统。",
      proof: {
        aria: "能力证明",
        prd: "200+ PRD",
        brand: "3 个品牌系统",
        ai: "AI 系统",
      },
      viewWork: "查看作品",
      contact: "联系我",
    },
    capability: {
      eyebrow: "信任证明",
      title: "能力系统",
      product: {
        title: "产品系统",
        body: "设计 PRD → 行为机制 → 增长结构。",
        meta: "PRD / 增长 / 机制",
      },
      brand: {
        title: "品牌系统",
        body: "将文化转化为可消费的商业系统。",
        meta: "文化 / 商业 / 识别",
      },
      ai: {
        title: "AI 系统",
        body: "构建自动化内容与工作流系统。",
        meta: "工作流 / 自动化 / 内容",
      },
    },
    work: {
      eyebrow: "作品集",
      title: "精选作品",
      viewCase: "查看案例",
      games: {
        aria: "可试玩游戏作品",
        play: "立即试玩",
        blindBox: {
          title: "插画抽卡盲盒",
          tag: "浏览器游戏 / 抽卡盲盒",
          body: "用画券抽取原创插画卡，包含稀有度、保底、十连结果与收藏反馈。",
        },
        gods: {
          title: "神明也要流量",
          tag: "浏览器游戏 / 经营模拟",
          body: "经营一座快倒闭的小庙，处理愿望小票、香火、粉丝、功德与地府风险。",
        },
        collection: {
          title: "插画盲盒收藏册",
          tag: "浏览器游戏 / 收藏系统",
          body: "同一盲盒游戏的收藏侧玩法，展示卡册、稀有度筛选和未解锁插画目标。",
        },
      },
      artdrew: {
        title: "ARTDREW",
        tag: "品牌 / 游戏",
        body: "将艺术转化为可玩的盲盒系统。",
      },
      prd: {
        title: "PRD 知识库系统",
        tag: "系统 / 知识",
        body: "200+ 产品结构模型的系统化映射与复用。",
      },
      blindBox: {
        title: "盲盒机制设计",
        tag: "产品 / 游戏",
        body: "由概率与行为心理驱动的增长系统。",
      },
      zhuwu: {
        title: "ZHUWU 品牌系统",
        tag: "品牌 / 文化",
        body: "将东方祝福文化现代化。",
      },
      dongyin: {
        title: "DONGYIN 品牌系统",
        tag: "品牌 / 产品",
        body: "将宫廷审美转译为现代产品语言。",
      },
      aiFactory: {
        title: "AI 内容工厂",
        tag: "AI / 工作流",
        body: "从创意、写作到发布的自动化内容流水线。",
      },
    },
    themes: {
      eyebrow: "探索",
      title: "主题入口",
      systems: {
        title: "系统思维",
        body: "产品 / PRD / 增长",
      },
      brand: {
        title: "品牌系统",
        body: "文化 / 商业 / 识别",
      },
      ai: {
        title: "AI 系统",
        body: "自动化 / 工作流 / 内容",
      },
    },
    writing: {
      aria: "写作与研究主题",
      eyebrow: "长内容",
      title: "写作与研究",
      product: "产品思考",
      brand: "品牌系统",
      ai: "AI 系统",
    },
    contact: {
      eyebrow: "联系",
      title: "一起构建系统",
      body: "我为产品、品牌与 AI 设计可增长的系统。",
      email: "邮箱",
      qr: "微信二维码",
      qrAria: "微信二维码占位",
    },
  },
  en: {
    meta: {
      title: "Guoguo Max | System Builder Portfolio",
      description:
        "Guoguo Max personal site. A system builder portfolio for product systems, brand systems, and AI workflow systems.",
    },
    brand: { aria: "Guoguo Max home" },
    language: { aria: "Language switcher" },
    theme: { aria: "Toggle light or dark mode" },
    nav: {
      aria: "Primary navigation",
      capability: "Capability",
      work: "Work",
      themes: "Themes",
      writing: "Writing",
      contact: "Contact",
    },
    hero: {
      eyebrow: "System Builder Portfolio",
      title: "I build systems for products, brands, AI",
      subtitle: "Product / Brand / AI systems design. I turn complex business ideas into executable growth systems.",
      proof: {
        aria: "Proof points",
        prd: "200+ PRD",
        brand: "3 Brand Systems",
        ai: "AI Systems",
      },
      viewWork: "View Work",
      contact: "Contact",
    },
    capability: {
      eyebrow: "Trust Proof",
      title: "Capability System",
      product: {
        title: "Product Systems",
        body: "Design PRD → behavior → growth structure.",
        meta: "PRD / Growth / Mechanism",
      },
      brand: {
        title: "Brand Systems",
        body: "Turn culture into commercial systems.",
        meta: "Culture / Commerce / Identity",
      },
      ai: {
        title: "AI Systems",
        body: "Build automated content & workflow systems.",
        meta: "Workflow / Automation / Content",
      },
    },
    work: {
      eyebrow: "Portfolio",
      title: "Selected Work",
      viewCase: "View Case",
      games: {
        aria: "Playable browser game projects",
        play: "Play now",
        blindBox: {
          title: "Illustration Blind Box",
          tag: "Browser Game / Gacha",
          body: "Spend art tickets to reveal original illustration cards, with rarity, pity rules, ten-pull results, and collection feedback.",
        },
        gods: {
          title: "Gods Need Clout",
          tag: "Browser Game / Management Sim",
          body: "Run a fading neighborhood temple while balancing wish tickets, incense, fans, merit, and underworld audit risk.",
        },
        collection: {
          title: "Blind Box Collection",
          tag: "Browser Game / Collection System",
          body: "A collection-focused view of the blind box game, showing album progress, rarity filters, and locked illustration goals.",
        },
      },
      artdrew: {
        title: "ARTDREW",
        tag: "Brand / Game",
        body: "Turn art into a playable blind box system.",
      },
      prd: {
        title: "PRD Knowledge System",
        tag: "System / Knowledge",
        body: "200+ product structures mapped and reusable.",
      },
      blindBox: {
        title: "Blind Box Mechanism Design",
        tag: "Product / Game",
        body: "Probability + psychology-driven growth system.",
      },
      zhuwu: {
        title: "ZHUWU Brand System",
        tag: "Brand / Culture",
        body: "Modernizing Eastern blessing culture.",
      },
      dongyin: {
        title: "DONGYIN Brand System",
        tag: "Brand / Product",
        body: "Palace aesthetics → modern product language.",
      },
      aiFactory: {
        title: "AI Content Factory",
        tag: "AI / Workflow",
        body: "Automated ideation → writing → publishing pipeline.",
      },
    },
    themes: {
      eyebrow: "Explore",
      title: "Explore Themes",
      systems: {
        title: "Systems Thinking",
        body: "Product / PRD / Growth",
      },
      brand: {
        title: "Brand Systems",
        body: "Culture / Commerce / Identity",
      },
      ai: {
        title: "AI Systems",
        body: "Automation / Workflow / Content",
      },
    },
    writing: {
      aria: "Writing and research topics",
      eyebrow: "Long Form",
      title: "Writing & Research",
      product: "Product Thinking",
      brand: "Brand Systems",
      ai: "AI Systems",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's work together",
      body: "I design systems for products, brands & AI.",
      email: "Email",
      qr: "WeChat QR",
      qrAria: "WeChat QR placeholder",
    },
  },
};

const getValue = (dictionary, path) =>
  path.split(".").reduce((value, key) => (value == null ? value : value[key]), dictionary);

const applyLanguage = (language) => {
  const dictionary = translations[language] ?? translations.zh;

  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.title = dictionary.meta.title;

  if (metaDescription) {
    metaDescription.setAttribute("content", dictionary.meta.description);
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = getValue(dictionary, element.dataset.i18n);
    if (value != null) {
      element.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const value = getValue(dictionary, element.dataset.i18nAriaLabel);
    if (value != null) {
      element.setAttribute("aria-label", value);
    }
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.langOption === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem("guoguo-language", language);
};

const storedTheme = localStorage.getItem("guoguo-theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const storedLanguage = localStorage.getItem("guoguo-language");
const initialLanguage = storedLanguage || "zh";

root.dataset.theme = storedTheme || (prefersDark ? "dark" : "light");
applyLanguage(initialLanguage);

const syncHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 8);
};

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

themeToggle?.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = nextTheme;
  localStorage.setItem("guoguo-theme", nextTheme);
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.langOption || "zh");
  });
});
