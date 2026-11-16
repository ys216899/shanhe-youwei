window.addEventListener("DOMContentLoaded", () => {
  let currentLang = "cn";

  // 切换中英文
  document.getElementById("lang-toggle").addEventListener("click", () => {
    currentLang = currentLang === "cn" ? "en" : "cn";
    const activeBtn = document.querySelector(".province-btn.active");
    if (activeBtn) {
      showRecipe(activeBtn.dataset.prov);
    }
  });

  // 点击省份按钮展示菜谱
  document.querySelectorAll(".province-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".province-btn").forEach(b => {
        b.classList.remove("active");
      });
      btn.classList.add("active");
      showRecipe(btn.dataset.prov);
    });
  });

  // 返回主页按钮逻辑
  const backBtn = document.getElementById("back-button");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      document.getElementById("recipe-display").innerHTML = `
        <h2>请选择一个省份 / Please select a province</h2>
        <img src="./山河有味美食地图.PNG"
             style="max-width:90%; border-radius:12px; margin-top:20px;" />
      `;
      backBtn.style.display = "none";
      document.querySelectorAll(".province-btn").forEach(b => {
        b.classList.remove("active");
      });
    });
  }

  function showRecipe(provinceKey) {
    const recipe = recipes[provinceKey];
    if (!recipe) return;

    const lang = currentLang;
    const html = `
      <h2>${recipe.name}</h2>
      <img src="${recipe.image}" alt="${recipe.name}" />
      <div class="recipe-details">
        <h4>${lang === "cn" ? "食材准备" : "Ingredients"}</h4>
        <ul>
          ${recipe.ingredients[lang].map(item => `<li>${item}</li>`).join("")}
        </ul>
        <h4>${lang === "cn" ? "做法步骤" : "Steps"}</h4>
        <ol>
          ${recipe.steps[lang].map(step => `<li>${step}</li>`).join("")}
        </ol>
      </div>
    `;
    document.getElementById("recipe-display").innerHTML = html;
  }
});


const recipes = {
  // 华南 South China
  "Guangdong": {
    name: "白切鸡 / White Cut Chicken",
    image: "https://p4.itc.cn/images01/20200708/94ebab30891b445f82e6a11b857078f3.gif",
    ingredients: {
      cn: ["整鸡（约1500克）", "姜50克", "葱2根", "盐10克", "酱油30毫升"],
      en: ["Whole chicken (~1500g)", "Ginger (50g)", "Scallions (2 stalks)", "Salt (10g)", "Soy sauce (30ml)"]
    },
    steps: {
      cn: [
        "整鸡清洗干净，姜切片，葱打结。",
        "锅中加入清水，放入整鸡、姜片和葱结，大火煮沸。",
        "转小火焖煮约30分钟，煮熟后捞出放凉。",
        "冷却后切块，搭配酱油葱姜蘸水食用。"
      ],
      en: [
        "Clean the whole chicken; slice the ginger and tie the scallions.",
        "Place chicken in a pot with water, add ginger and scallions, and bring to boil.",
        "Simmer on low heat for 30 mins until cooked through, remove and let cool.",
        "Cut into pieces and serve with a soy-based dipping sauce."
      ]
    }
  },
  "Fujian": {
    name: "佛跳墙 / Buddha Jumps Over the Wall",
    image: "https://p3.itc.cn/images01/20230303/4b9e3310dbb344eea36417a664359fc6.gif ",
    ingredients: {
      cn: ["海参100克", "干贝50克", "鱼翅50克", "花菇50克", "鸡肉200克", "猪蹄筋100克", "鹌鹑蛋10个", "枸杞10克", "绍兴黄酒100毫升", "鸡汤500毫升", "盐适量"],
      en: ["Sea cucumber 100g", "Dried scallops 50g", "Shark fin 50g", "Shiitake mushrooms 50g", "Chicken meat 200g", "Pig tendons 100g", "Quail eggs 10", "Goji berries 10g", "Shaoxing wine 100ml", "Chicken broth 500ml", "Salt to taste"]
    },
    steps: {
      cn: [
        "将海参、干贝、鱼翅、花菇提前泡发。",
        "鸡肉切块焯水。",
        "所有食材放入炖盅，加入鸡汤和黄酒。",
        "小火炖3小时后加入鹌鹑蛋和枸杞，再炖30分钟，加盐调味即可。"
      ],
      en: [
        "Soak sea cucumber, scallops, shark fin, and mushrooms until soft.",
        "Cut chicken into pieces and blanch.",
        "Place all ingredients in a stew pot, add broth and wine.",
        "Simmer for 3 hours, then add eggs and goji berries, cook for 30 more mins, season and serve."
      ]
    }
  },
  "Guangxi": {
    name: "螺蛳粉 / Luosifen",
    image: "https://pic.rmb.bdstatic.com/bjh/down/324a900399e02fb55378ba2a9e724baf.gif",
    ingredients: {
      cn: ["米粉200克", "螺蛳汤底500毫升", "酸笋50克", "花生30克", "腐竹30克", "木耳适量", "青菜适量", "油辣椒2汤匙"],
      en: ["Rice noodles 200g", "Snail broth 500ml", "Pickled bamboo shoots 50g", "Peanuts 30g", "Fried tofu skin 30g", "Wood ear mushrooms", "Greens", "Chili oil 2 tbsp"]
    },
    steps: {
      cn: [
        "米粉煮软备用，配料加热。",
        "螺蛳汤煮沸，倒入碗中加米粉和配菜。",
        "淋上辣椒油即可食用。"
      ],
      en: [
        "Cook rice noodles until soft. Heat all toppings.",
        "Boil snail broth, pour over noodles and toppings.",
        "Add chili oil before serving."
      ]
    }
  },
  "Hainan": {
    name: "椰子鸡 / Coconut Chicken Soup",
    image: "https://p0.itc.cn/q_70/images03/20210205/e9fcc80715144fc7babebbaa235e80a9.gif",
    ingredients: {
      cn: ["文昌鸡500克", "椰子水1个", "椰肉片适量", "枸杞10克", "姜片5片", "盐适量"],
      en: ["Wenchang chicken 500g", "Coconut water (from 1 coconut)", "Coconut meat slices", "Goji berries 10g", "Ginger slices 5", "Salt to taste"]
    },
    steps: {
      cn: [
        "鸡切块焯水备用。",
        "锅中加入椰子水、椰肉、鸡肉、姜片煮30分钟。",
        "加入枸杞和盐再煮5分钟即可。"
      ],
      en: [
        "Cut and blanch chicken.",
        "Simmer chicken with coconut water, meat, and ginger for 30 minutes.",
        "Add goji berries and salt, cook 5 more minutes and serve."
      ]
    }
  },

  // 华东 East China
  "Shanghai": {
    name: "小笼包 / Xiao Long Bao",
    image: "https://pic1.zhimg.com/v2-c34389876fd83b39d93951d804c58d34_1440w.gif",
    ingredients: {
      cn: ["面粉500克", "酵母2克", "泡打粉2克", "糖5克", "温水270克", "猪肉馅300克", "姜末10克", "酱油15毫升", "香油10毫升", "盐适量"],
      en: ["Flour 500g", "Yeast 2g", "Baking powder 2g", "Sugar 5g", "Warm water 270g", "Ground pork 300g", "Minced ginger 10g", "Soy sauce 15ml", "Sesame oil 10ml", "Salt to taste"]
    },
    steps: {
      cn: [
        "和面发酵2小时。",
        "将调好馅料包入小面团中，收口捏褶。",
        "蒸锅烧开后蒸10分钟即可食用。"
      ],
      en: [
        "Prepare dough and let rise for 2 hours.",
        "Fill each piece with pork filling and seal with pleats.",
        "Steam over boiling water for 10 minutes before serving."
      ]
    }
  },
 "Jiangsu": {
  name: "无锡排骨 / Wuxi Spare Ribs",
  image: "https://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20181122/b69823da46ba486bade8a7f724606fd4.jpeg",
  ingredients: {
    cn: ["排骨500克", "大葱1段", "姜2片", "蒜3瓣", "桂皮3克", "八角1个", "丁香4个", "小茴香1茶匙", "老抽1茶匙", "生抽2汤匙", "黄酒2汤匙", "冰糖2汤匙", "腐乳汁4汤匙", "一次性茶包袋1个"],
    en: ["Ribs 500g", "Scallion 1", "Ginger 2 slices", "Garlic 3 cloves", "Cinnamon 3g", "Star anise 1", "Clove 4", "Fennel seeds 1 tsp", "Dark soy sauce 1 tsp", "Light soy sauce 2 tbsp", "Yellow wine 2 tbsp", "Rock sugar 2 tbsp", "Fermented bean curd 4 tbsp", "Tea bag 1"]
  },
  steps: {
    cn: [
      "排骨焯水后煎至金黄，加葱姜蒜炒香。",
      "调入调料，焖煮1.5小时后收汁即可。"
    ],
    en: [
      "Blanch ribs and fry until golden; sauté with aromatics.",
      "Add sauces and simmer 1.5 hours, reduce sauce to finish."
    ]
  }
},

"Zhejiang": {
  name: "醉鸡 / Drunken Chicken",
  image: "https://www.kawalife.com/upload_file/951/16637299514.jpg",
  ingredients: {
    cn: ["鸡腿3只", "绍兴酒500ml", "鸡汤500ml", "姜片20克", "葱段20克", "米酒2大匙", "当归1片", "枸杞10克", "姜片15克", "盐1茶匙", "糖1茶匙"],
    en: ["Chicken legs 3", "Shaoxing wine 500ml", "Chicken broth 500ml", "Ginger slices 20g", "Scallion 20g", "Rice wine 2 tbsp", "Angelica 1 slice", "Goji berries 10g", "Ginger 15g", "Salt 1 tsp", "Sugar 1 tsp"]
  },
  steps: {
    cn: [
      "鸡腿焯水后煮熟泡冰水。",
      "与药材及调味料同鸡汤冷藏一晚即成。"
    ],
    en: [
      "Blanch and cook chicken, then cool in ice water.",
      "Soak in broth with herbs and seasonings overnight."
    ]
  }
},

  "Shandong": {
    name: "九转大肠 / Braised Intestines in Brown Sauce",
    image: "https://pic.rmb.bdstatic.com/9d548d0ed6ee3b7b0b992f0a5de25c95.gif",
    ingredients: {
      cn: ["猪大肠500克", "八角1个", "桂皮1块", "葱姜蒜适量", "白糖2汤匙", "酱油2汤匙", "醋1汤匙", "料酒1汤匙", "高汤500毫升"],
      en: ["Pork intestine 500g", "Star anise 1", "Cinnamon 1 piece", "Scallion, ginger, garlic", "Sugar 2 tbsp", "Soy sauce 2 tbsp", "Vinegar 1 tbsp", "Cooking wine 1 tbsp", "Stock 500ml"]
    },
    steps: {
      cn: [
        "大肠反复清洗，用料酒焯水。",
        "锅中炒糖色，加香料、酱油、醋等调料。",
        "加入大肠和高汤，小火炖1小时至软糯入味。"
      ],
      en: [
        "Clean intestine thoroughly, blanch with wine.",
        "Caramelize sugar, then add aromatics and sauces.",
        "Add intestine and stock, simmer for 1 hour until tender."
      ]
    }
  },

  // 华中 Central China
  "Jiangxi": {
    name: "窑工鸡 / Clay Kiln Chicken",
    image: "https://p7.itc.cn/images01/20220315/628b1710b980406892af595c60386daa.gif",
    ingredients: {
      cn: ["整鸡1只（约1500克）", "香菇50克", "老姜30克", "盐15克", "红枣5颗", "料酒2汤匙"],
      en: ["Whole chicken (~1500g)", "Shiitake mushrooms 50g", "Old ginger 30g", "Salt 15g", "Red dates 5", "Cooking wine 2 tbsp"]
    },
    steps: {
      cn: [
        "鸡洗净，姜切片，香菇泡发。",
        "将所有配料塞入鸡腹中，外层用荷叶包裹，再用黄泥封住。",
        "置于土窑中烘烤3小时后取出食用。"
      ],
      en: [
        "Clean chicken, slice ginger, soak mushrooms.",
        "Stuff ingredients into chicken, wrap in lotus leaves and seal with clay.",
        "Bake in a kiln for 3 hours and serve."
      ]
    }
  },
  "Hunan": {
    name: "辣椒炒肉 / Stir-Fried Pork with Chili",
    image: "https://p6.itc.cn/q_70/images03/20220415/d158cfc7ac1a40c3b64e357775dfe585.gif",
    ingredients: {
      cn: ["五花肉200克", "青椒2个", "红椒1个", "大蒜3瓣", "生抽1汤匙", "盐适量"],
      en: ["Pork belly 200g", "Green chili peppers 2", "Red chili pepper 1", "Garlic cloves 3", "Light soy sauce 1 tbsp", "Salt to taste"]
    },
    steps: {
      cn: [
        "五花肉切片备用，辣椒切条，大蒜切片。",
        "锅中加油爆香蒜片，放入肉片煸炒至出油。",
        "加入辣椒翻炒均匀，调入生抽和盐，炒熟出锅。"
      ],
      en: [
        "Slice pork and chili peppers, slice garlic.",
        "Stir-fry garlic until fragrant, add pork and cook until fat is rendered.",
        "Add chilies, soy sauce, and salt. Stir-fry until cooked and serve."
      ]
    }
  },


  // 华北 North China
  "Beijing": {
    name: "炸酱面 / Zha Jiang Mian",
    image: "https://inews.gtimg.com/newsapp_match/0/13667885192/0 ",
    ingredients: {
      cn: [
        "面条300克",
        "猪肉末150克",
        "黄豆酱2大匙",
        "甜面酱1.5大匙",
        "姜末10克",
        "蒜末10克",
        "料酒1汤匙",
        "黄瓜丝、豆芽、胡萝卜丝适量"
      ],
      en: [
        "Noodles 300g",
        "Minced pork 150g",
        "Soybean paste 2 tbsp",
        "Sweet bean sauce 1.5 tbsp",
        "Minced ginger 10g",
        "Minced garlic 10g",
        "Cooking wine 1 tbsp",
        "Cucumber, bean sprouts, carrot for garnish"
      ]
    },
    steps: {
      cn: [
        "锅中热油，下姜蒜末炒香，加入肉末炒熟。",
        "倒入两种酱炒匀，加入料酒炒至香浓。",
        "面条煮熟捞出，码上蔬菜丝和酱料拌匀食用。"
      ],
      en: [
        "Heat oil, sauté ginger and garlic, then add minced pork and stir-fry.",
        "Add both sauces and wine, stir until fragrant.",
        "Cook noodles, top with vegetables and sauce. Mix and enjoy."
      ]
    }
  },
  "Tianjin": {
    name: "煎饼果子 / Jianbing Guozi",
    image: "https://img1.baidu.com/it/u=3410791568,231338067&fm=253&fmt=auto&app=138&f=GIF?w=607&h=405",
    ingredients: {
      cn: [
        "绿豆面糊200克",
        "鸡蛋1个",
        "薄脆1片",
        "葱末10克",
        "甜面酱1汤匙",
        "香菜少许"
      ],
      en: [
        "Mung bean batter 200g",
        "Egg 1",
        "Crispy fritter 1 piece",
        "Minced scallion 10g",
        "Sweet bean sauce 1 tbsp",
        "Coriander"
      ]
    },
    steps: {
      cn: [
        "平底锅刷油摊绿豆糊，加蛋摊匀。",
        "撒葱花，抹酱，放脆饼、香菜。",
        "折叠卷起，趁热食用。"
      ],
      en: [
        "Heat pan, spread batter and crack egg on top.",
        "Sprinkle scallions, spread sauce, add fritter and herbs.",
        "Fold and roll, serve hot."
      ]
    }
  },
  "Hebei": {
    name: "驴肉火烧 / Donkey Burger",
    image: "https://img9.21food.cn/img/album/2018/12/6/bjpinweixuan9251612003Ta.jpg",
    ingredients: {
      cn: [
        "驴肉300克（熟驴肉）",
        "火烧饼胚4个",
        "葱末20克",
        "香菜10克",
        "甜面酱适量"
      ],
      en: [
        "Cooked donkey meat 300g",
        "Flatbread buns 4",
        "Minced scallion 20g",
        "Coriander 10g",
        "Sweet bean sauce to taste"
      ]
    },
    steps: {
      cn: [
        "将火烧饼对半切开，驴肉切片或切末。",
        "铺上香菜和葱末，抹上甜面酱，夹入驴肉即可。"
      ],
      en: [
        "Slice open flatbread, chop or slice donkey meat.",
        "Spread sauce, add herbs and meat, and serve."
      ]
    }
  },
  "Heilongjiang": {
    name: "锅包肉 / Guo Bao Rou",
    image: "https://p4.itc.cn/q_70/images03/20210113/dfe9e79952074f1ead35c134e64c746b.gif ",
    ingredients: {
      cn: [
        "猪里脊肉300克",
        "鸡蛋1个",
        "淀粉适量",
        "盐适量",
        "白醋1汤匙",
        "白糖2汤匙",
        "番茄酱1汤匙",
        "蒜末5克",
        "葱段适量",
        "植物油适量"
      ],
      en: [
        "Pork tenderloin 300g",
        "Egg 1",
        "Starch",
        "Salt to taste",
        "White vinegar 1 tbsp",
        "Sugar 2 tbsp",
        "Ketchup 1 tbsp",
        "Minced garlic 5g",
        "Scallion sections",
        "Vegetable oil"
      ]
    },
    steps: {
      cn: [
        "肉切薄片加盐蛋液抓匀，裹淀粉后炸至金黄备用。",
        "锅中少油炒蒜末，调入糖、醋、番茄酱，炒出浓汁。",
        "倒入炸肉快速翻炒裹匀酱汁即可。"
      ],
      en: [
        "Slice pork, marinate with salt and egg, coat in starch, and deep-fry until golden.",
        "Stir-fry garlic, add vinegar, sugar, ketchup to make sauce.",
        "Add fried pork and toss to coat. Serve hot."
      ]
    }
  },
  "Jilin": {
    name: "朝鲜冷面 / Chaoxian Cold Noodles",
    image: "https://gss0.baidu.com/70cFfyinKgQFm2e88IuM_a/baike/pic/item/a2cc7cd98d1001e90a721da5b40e7bec55e797c9.jpg ",
    ingredients: {
      cn: [
        "荞麦冷面200克",
        "牛肉片50克",
        "鸡蛋1个",
        "黄瓜丝适量",
        "梨片适量",
        "泡菜适量",
        "冷面汤500毫升（高汤或牛骨汤加冷水）",
        "白醋1汤匙",
        "糖1汤匙",
        "盐适量"
      ],
      en: [
        "Buckwheat noodles 200g",
        "Beef slices 50g",
        "Egg 1",
        "Cucumber strips",
        "Pear slices",
        "Kimchi",
        "Cold broth 500ml",
        "White vinegar 1 tbsp",
        "Sugar 1 tbsp",
        "Salt to taste"
      ]
    },
    steps: {
      cn: [
        "鸡蛋煮熟切半，牛肉煮熟切片，梨黄瓜切丝。",
        "冷面煮熟后过冷水。",
        "准备冷面汤，加盐、糖、醋调味后冷藏。",
        "所有材料组合在碗中，倒入冷面汤即可。"
      ],
      en: [
        "Boil egg and slice in half. Cook and slice beef. Julienne pear and cucumber.",
        "Cook noodles, rinse with cold water.",
        "Mix cold broth with vinegar, sugar, and salt. Chill in fridge.",
        "Assemble all ingredients in a bowl and pour broth over."
      ]
    }
  },





  // 西北 Northwest
  "Shaanxi": {
    name: "羊肉泡馍 / Lamb Stew with Crumbled Flatbread",
    image: "https://q6.itc.cn/images01/20240421/0682cf2e5bea404cba5dc92236bc3102.jpeg",
    ingredients: {
      cn: [
        "羊肉300克",
        "干馍2个",
        "粉丝50克",
        "香菜少许",
        "蒜末5克",
        "花椒适量",
        "八角1个",
        "生姜3片",
        "盐适量",
        "高汤500毫升"
      ],
      en: [
        "Lamb 300g",
        "Unleavened flatbread 2",
        "Vermicelli 50g",
        "Coriander",
        "Minced garlic 5g",
        "Sichuan pepper",
        "Star anise 1",
        "Ginger slices 3",
        "Salt",
        "Broth 500ml"
      ]
    },
    steps: {
      cn: [
        "羊肉煮至软烂，捞出切片备用。",
        "干馍掰小块放碗中，加入粉丝。",
        "倒入热高汤和羊肉片，撒上香菜蒜末即可。"
      ],
      en: [
        "Boil lamb until tender, then slice.",
        "Break bread into small pieces in a bowl, add vermicelli.",
        "Pour in hot broth and sliced lamb, garnish with coriander and garlic."
      ]
    }
  },
  "Gansu": {
    name: "羊肉串 / Lamb Skewers",
    image: "https://pic.rmb.bdstatic.com/bjh/down/5c6190079f7865f16c62b8eb97d3f727.gif ",
    ingredients: {
      cn: [
        "羊肉300克",
        "孜然粉1汤匙",
        "辣椒粉1汤匙",
        "盐适量",
        "植物油1汤匙",
        "竹签若干"
      ],
      en: [
        "Lamb 300g",
        "Cumin powder 1 tbsp",
        "Chili powder 1 tbsp",
        "Salt",
        "Vegetable oil 1 tbsp",
        "Skewers"
      ]
    },
    steps: {
      cn: [
        "羊肉切块，用油、盐、孜然、辣椒粉腌制30分钟。",
        "穿成串，烤箱或炭火烤制15分钟，中途翻面。",
        "撒点干料提香即可。"
      ],
      en: [
        "Cut lamb into cubes, marinate with oil, salt, cumin, and chili powder for 30 minutes.",
        "Skewer the lamb and grill for 15 minutes, turning halfway.",
        "Sprinkle with dry seasoning before serving."
      ]
    }
  },
  "InnerMongolia": {
    name: "手抓羊肉 / Hand-Pulled Mutton",
    image: "https://pic.rmb.bdstatic.com/640665cfbfdc7954583eae52bec25fe2.gif",
    ingredients: {
      cn: [
        "羊排或羊腿肉500克",
        "姜3片",
        "花椒10粒",
        "盐适量",
        "蘸料：酱油、醋、蒜泥、香菜适量"
      ],
      en: [
        "Lamb ribs or leg 500g",
        "Ginger slices 3",
        "Sichuan peppercorns 10",
        "Salt",
        "Dipping sauce: soy sauce, vinegar, mashed garlic, cilantro"
      ]
    },
    steps: {
      cn: [
        "羊肉冷水下锅，加姜和花椒煮沸。",
        "撇去浮沫，小火炖煮1小时，加盐再煮20分钟。",
        "出锅切块，配蘸料食用。"
      ],
      en: [
        "Put lamb in cold water with ginger and peppercorns, bring to a boil.",
        "Skim foam, simmer for 1 hour, add salt and cook 20 minutes more.",
        "Remove, slice, and serve with dipping sauce."
      ]
    }
  }
}; // 









window.addEventListener("DOMContentLoaded", () => {
  let currentLang = "cn";

  // 切换中英文
  document.getElementById("lang-toggle").addEventListener("click", () => {
    currentLang = currentLang === "cn" ? "en" : "cn";
    const activeBtn = document.querySelector(".province-btn.active");
    if (activeBtn) {
      showRecipe(activeBtn.dataset.prov);
    }
  });

  // 点击省份按钮展示菜谱
  document.querySelectorAll(".province-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".province-btn").forEach(b => {
        b.classList.remove("active");
      });
      btn.classList.add("active");
      showRecipe(btn.dataset.prov);
    });
  });

  // 返回主页按钮逻辑
  const backBtn = document.getElementById("back-button");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      document.getElementById("recipe-display").innerHTML = `
        <h2>请选择一个省份 / Please select a province</h2>
        <img src="https://zh.maps-china-cn.com/img/1200/中国省份地图.jpg"
             style="max-width:90%; border-radius:12px; margin-top:20px;" />
      `;
      backBtn.style.display = "none";
      document.querySelectorAll(".province-btn").forEach(b => {
        b.classList.remove("active");
      });
    });
  }
});
