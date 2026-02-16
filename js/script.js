// ********** 1. 沙县小吃信息库 (保持12种不变) **********
const shaxianFoods = [
    {
        id: "banmian",
        name: "沙县拌面",
        intro: "【务实与热烈】沙县拌面以碱水面为基底，煮后过凉水保持筋道，搭配秘制花生酱（核心灵魂），再加上少许生抽、香醋和葱花。性格如面，浓郁热烈，务实抗饿，是无数人的能量补给站。",
        shops: ["沙县拌面王 - 莲花中路89号 | 花生酱现磨，面条筋道", "老沙县小吃 - 滨河路56号 | 拌面+扁食套餐是经典", "小吃文化城拌面铺 - B区 | 酱香浓郁，可定制辣度"],
        img: "pic/banmian.jpg"
    },
    {
        id: "bianshi",
        name: "沙县扁食",
        intro: "【清淡与通透】皮薄如纸，肉馅经千锤百打而成，口感脆嫩。汤头由猪大骨慢熬，鲜爽清甜。性格如水，清淡通透，不争不抢却不可或缺，代表了生活中的舒适与惬意。",
        shops: ["沙县老扁食店 - 府前中路128号 | 30年老店", "庙门扁食 - 建国路3号 | 真正的“打扁食”，肉馅脆嫩", "巷口扁食铺 - 建国巷25号 | 本地人私藏，性价比高"],
        img: "pic/bianshi.jpg"
    },
    {
        id: "zhengjiao",
        name: "沙县蒸饺",
        intro: "【稳重与包容】柳叶形的精致包法，皮薄馅大，通常是猪肉香菇馅。性格稳重实在，不仅颜值在线，更给人实实在在的饱腹感。蘸上特制的蒜蓉醋，解腻开胃，是靠谱的代名词。",
        shops: ["沙县蒸饺世家 - 文昌路78号 | 现包现蒸", "佳兰烧麦蒸饺 - 府前中路 | 个大饱满", "香兰小吃 - 滨河路 | 蒜蓉醋是一绝"],
        img: "pic/zhengjiao.jpg"
    },
    {
        id: "waguantang",
        name: "沙县瓦罐汤",
        intro: "【温暖与治愈】采用传统瓦罐炭火慢煨，锁住食材的每一分营养。性格温润，在这个快节奏的时代，它愿意花4-6个小时只为温暖你的胃，是深夜里最温柔的慰藉。",
        shops: ["阿莲瓦罐 - 长兴路 | 几百个瓦罐墙，场面震撼", "牛系列炖罐 - 索桥南路 | 专做牛系滋补汤", "老厝瓦罐汤 - 中山路105号 | 桂圆红枣汤是特色"],
        img: "pic/waguantang.jpg"
    },
    {
        id: "doufuwan",
        name: "豆腐丸",
        intro: "【乐观与朴实】把老豆腐捏碎，拌上地瓜粉搓圆，捏成碗状塞入肉馅，煮至浮起。外表朴实（豆腐），内心丰富（肉馅），性格乐观现充，看似普通却充满生活智慧。",
        shops: ["夏茂豆腐丸店 - 罗禅玉店 | 第四代传承人，有海鲜创新口味", "庙门扁肉 - 建国路 | 虽以扁肉闻名，豆腐丸也原汁原味"],
        img: "pic/doufuwan.jpg"
    },
    {
        id: "jinbaoyin",
        name: "金包银",
        intro: "【感性与细腻】雅称“金包银”，把嫩豆腐挖空酿入鲜馅。若炸制，外皮金黄焦酥，内里软嫩。性格外酥内嫩，就像一个内心柔软细腻、但懂得展现坚强一面的人。",
        shops: ["肥姐小吃 - 滨河路13栋 | 现做现炸，外皮酥脆", "李记沙县小吃 - 李纲中路 | 外酥内嫩，馅料足"],
        img: "pic/jinbaoyin.jpg"
    },
    {
        id: "guotie",
        name: "沙县锅贴",
        intro: "【活力与直接】中华名小吃，成品呈金黄色，外皮酥香甜软，内馅油润（常见玉米/鲜肉）。性格活力四射，香气浓郁直接，就像一场热烈的电子乐，让人瞬间充满能量。",
        shops: ["李记沙县小吃 - 李纲中路37-7号 | 网红老店，必点招牌，汁水饱满"],
        img: "pic/guotie.jpg"
    },
    {
        id: "midongpi",
        name: "沙县米冻皮",
        intro: "【真诚与奔放】用米浆蒸制的薄皮，比肠粉更薄更Q弹。性格真诚奔放，吃法多样（豆豉油/泥鳅汤/包心），就像一个喜欢探索未知、不被定义的有趣灵魂。",
        shops: ["富口陈厝米冻皮 - 府前西路126号 | 包心米冻皮特色，馅料丰富", "李记沙县小吃 - 李纲中路 | 配料丰富，菜品齐全"],
        img: "pic/midongpi.jpg"
    },
    {
        id: "shuijing",
        name: "水晶烧麦",
        intro: "【内敛与独特】皮由木薯粉打制，薄而透明，内馅粉丝，必蘸豆豉油。性格沉静内敛，晶莹剔透的外表下藏着细腻的内心，品味独特，不随波逐流。",
        shops: ["佳兰烧麦 - 府前中路 | 老字号，皮晶莹剔透", "阿狗烧麦 - 凤岗三官堂路49-4号 | 游客首选，豆豉油正宗"],
        img: "pic/shuijingshaomai.jpg"
    },
    {
        id: "tianshaomai",
        name: "甜烧麦",
        intro: "【惊喜与多面】小巧莹润，内馅包含饼丁、紫菜、桔饼等，甜咸交织。性格充满惊喜，既有甜蜜的一面，又有特立独行的口感，是极具沙县特色的“隐藏款”。",
        shops: ["肥姐小吃 - 滨河路 | 招牌甜烧麦，配甜水酒绝佳", "佳兰烧麦 - 府前中路152-1号 | 皮薄透亮，柑桔叶清香"],
        img: "pic/tianshaomai.jpg"
    },
    {
        id: "yujiao",
        name: "沙县芋饺",
        intro: "【热情与坚韧】芋头捣烂加木薯粉做皮，呈半透明灰紫色，口感糯叽叽，内馅笋干肉丁。性格热情开朗（外表软糯），内心坚韧（笋干脆爽），是“糯叽叽”爱好者的天菜。",
        shops: ["阿莲小吃 - 凤岗广荣街29号 | 现包现做，笋干很嫩", "庙门扁肉 - 三官堂路 | 老店制作，皮更有嚼劲"],
        img: "pic/yujiao.jpg"
    },
    {
        id: "yutoubing",
        name: "芋头饼",
        intro: "【随性与佛系】香芋泥夹在饼干中，裹芝麻炸至金黄。成品油香沁人，口感酥脆。性格随性佛系，常见于街头巷尾的小摊，充满了市井烟火气，是闲暇时光的最好陪伴。",
        shops: ["街头巷尾小摊 - 无固定店铺 | 随处可见的烟火气，等待你的探索"],
        img: "pic/yutoubing.jpg"
    }
];

// ********** 2. 题目配置 (10题版) **********
const testQuestions = [
    // 基础偏好题
    {
        question: "Q1. 耳机里的单曲循环，通常是哪种风格？",
        options: [
            "摇滚/重金属 (宣泄、强烈)",
            "R&B/轻音乐 (舒适、轻松)",
            "经典老歌/民谣 (怀旧、故事)",
            "电子/舞曲 (活力、节奏)"
        ]
    },
    {
        question: "Q2. 难得的周末，你更倾向于如何度过？",
        options: [
            "专注于提升自己 (学习/搞钱)",
            "约三五好友聚会 (社交/聊天)",
            "户外运动或探险 (流汗/释放)",
            "宅家躺平打游戏 (放松/充电)"
        ]
    },
    {
        question: "Q3. 如果去陌生城市旅游，你会选择？",
        options: [
            "打卡必去的网红地标",
            "钻进没人的巷子探险",
            "在酒店睡到自然醒",
            "漫无目的的 Citywalk"
        ]
    },
    // 进阶性格题
    {
        question: "Q4. 当多项任务Deadline同时逼近，你的反应是？",
        options: [
            "立马列计划，逐个击破 (稳重)",
            "先焦虑一会儿，再爆肝完成 (激情)",
            "不管了，先吃顿好的再说 (乐观)",
            "默默扛下所有，熬夜死磕 (坚韧)"
        ]
    },
    {
        question: "Q5. 在朋友圈里，你通常扮演什么角色？",
        options: [
            "潜水观察员，偶尔点赞",
            "气氛组组长，热衷互动",
            "高冷路人甲，很少看手机",
            "知心大哥哥/大姐姐，倾听者"
        ]
    },
    {
        question: "Q6. 挑选电影时，哪种类型最吸引你？",
        options: [
            "爆笑喜剧，图个开心",
            "烧脑悬疑，挑战智商",
            "热血动作，视觉盛宴",
            "温情治愈，洗涤心灵"
        ]
    },
    // 深度偏好题
    {
        question: "Q7. 出门下馆子，你最看重？",
        options: [
            "必须要正宗、地道",
            "环境要好，适合拍照",
            "分量足，性价比高",
            "没吃过的新奇玩意儿"
        ]
    },
    {
        question: "Q8. 如果拥有一个超能力，你希望是？",
        options: [
            "瞬间移动 (自由)",
            "读心术 (敏感)",
            "力大无穷 (力量)",
            "治愈伤痛 (温暖)"
        ]
    },
    {
        question: "Q9. 用一个季节形容你的性格，更像？",
        options: [
            "热烈的盛夏 (直率)",
            "丰收的金秋 (实在)",
            "温暖的初春 (细腻)",
            "静谧的深冬 (内敛)"
        ]
    },
    {
        question: "Q10. 你的生日礼物愿望是？",
        options: [
            "最新款电子产品 (实用)",
            "绝版手办或周边 (爱好)",
            "亲手写的信或DIY (心意)",
            "搞怪的整蛊玩具 (趣味)"
        ]
    }
];

// ********** 3. 计分矩阵 (10x4 映射) **********
// 逻辑：每题选项为2种特定小吃加分，确保12种小吃覆盖均衡
const scoreMatrix = [
    // Q1 音乐
    [["guotie", "midongpi"], ["jinbaoyin", "doufuwan"], ["banmian", "waguantang"], ["yutoubing", "zhabianshi"]],
    // Q2 周末
    [["banmian", "zhengjiao"], ["bianshi", "guotie"], ["yujiao", "midongpi"], ["yutoubing", "tianshaomai"]],
    // Q3 旅游
    [["bianshi", "zhengjiao"], ["midongpi", "shuijing"], ["waguantang", "doufuwan"], ["jinbaoyin", "tianshaomai"]],
    // Q4 压力 
    [["zhengjiao", "banmian"], ["guotie", "yujiao"], ["doufuwan", "tianshaomai"], ["banya", "shuijing"]],
    // Q5 社交 
    [["shuijing", "waguantang"], ["guotie", "yujiao"], ["banya", "shuijing"], ["jinbaoyin", "doufuwan"]],
    // Q6 电影 
    [["tianshaomai", "doufuwan"], ["shuijing", "midongpi"], ["guotie", "banmian"], ["waguantang", "jinbaoyin"]],
    // Q7 下馆子
    [["banmian", "bianshi"], ["jinbaoyin", "shuijing"], ["zhengjiao", "yutoubing"], ["midongpi", "tianshaomai"]],
    // Q8 超能力 
    [["midongpi", "yutoubing"], ["shuijing", "jinbaoyin"], ["banmian", "zhengjiao"], ["waguantang", "doufuwan"]],
    // Q9 季节 
    [["guotie", "yujiao"], ["zhengjiao", "banmian"], ["tianshaomai", "bianshi"], ["waguantang", "shuijing"]],
    // Q10 礼物
    [["banmian", "zhengjiao"], ["tianshaomai", "bianshi"], ["waguantang", "jinbaoyin"], ["yutoubing", "midongpi"]]
];

// ********** 全局变量 **********
let currentQuestionIndex = 0;
let userAnswers = [];
const totalQuestions = testQuestions.length;

// ********** DOM 元素 **********
const welcomePage = document.getElementById("welcomePage");
const testPage = document.getElementById("testPage");
const resultPage = document.getElementById("resultPage");
const startTestBtn = document.getElementById("startTestBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");
const reTestBtn = document.getElementById("reTestBtn");
const questionCount = document.getElementById("questionCount");
const progressFill = document.getElementById("progressFill");
const questionContent = document.getElementById("questionContent");
const foodName = document.getElementById("foodName");
const foodIntro = document.getElementById("foodIntro");
const shopRecommend = document.getElementById("shopRecommend");
const foodImgDiv = document.querySelector(".food-img");

// ********** 初始化 **********
window.onload = function() {
    renderQuestion();
    updateProgress();
};

// ********** 核心逻辑函数 **********
function renderQuestion() {
    const currentQ = testQuestions[currentQuestionIndex];
    let qHtml = `<h3>${currentQ.question}</h3><div class="options">`;
    currentQ.options.forEach((option, index) => {
        const isChecked = userAnswers[currentQuestionIndex] === index ? "checked" : "";
        qHtml += `
            <label class="option-item">
                <input type="radio" name="option" value="${index}" ${isChecked}>
                ${option}
            </label>
        `;
    });
    qHtml += `</div>`;
    questionContent.innerHTML = qHtml;
}

function updateProgress() {
    questionCount.innerText = `第${currentQuestionIndex + 1}题 / 共${totalQuestions}题`;
    const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
    progressFill.style.width = `${progress}%`;
    
    prevBtn.disabled = currentQuestionIndex === 0;
    
    if (currentQuestionIndex === totalQuestions - 1) {
        nextBtn.style.display = "none";
        submitBtn.style.display = "inline-block";
    } else {
        nextBtn.style.display = "inline-block";
        submitBtn.style.display = "none";
    }
}

function getUserAnswer() {
    const radios = document.getElementsByName("option");
    for (let radio of radios) {
        if (radio.checked) return parseInt(radio.value);
    }
    return null;
}

function generateResult() {
    let scores = {};
    shaxianFoods.forEach(food => scores[food.id] = 0);

    // 遍历10道题的答案
    userAnswers.forEach((ansIndex, qIndex) => {
        // 安全检查：防止数组越界（虽然正常操作不会）
        if (scoreMatrix[qIndex] && scoreMatrix[qIndex][ansIndex]) {
            const targets = scoreMatrix[qIndex][ansIndex];
            targets.forEach(fid => {
                if (scores[fid] !== undefined) scores[fid]++;
            });
        }
    });

    let maxScore = -1;
    let candidates = [];

    for (let fid in scores) {
        if (scores[fid] > maxScore) {
            maxScore = scores[fid];
            candidates = [fid];
        } else if (scores[fid] === maxScore) {
            candidates.push(fid);
        }
    }
    // 随机选一个最高分的
    const winnerId = candidates[Math.floor(Math.random() * candidates.length)];
    return shaxianFoods.find(f => f.id === winnerId);
}

function renderResult(food) {
    if (!food) return; // 容错

    foodName.innerText = food.name;
    foodImgDiv.innerHTML = `<img src="${food.img}" alt="${food.name}">`;
    
    foodIntro.innerHTML = `
        <h4>小吃介绍 <i class="fas fa-info-circle"></i></h4>
        <p>${food.intro}</p>
    `;
    
    let shopHtml = `<h4>本地推荐店铺 <i class="fas fa-map-marker-alt"></i></h4><ul>`;
    food.shops.forEach(shop => {
        const parts = shop.split(" - ");
        if(parts.length > 1) {
             shopHtml += `<li><strong>${parts[0]}</strong> - ${parts[1]}</li>`;
        } else {
             shopHtml += `<li>${shop}</li>`;
        }
    });
    shopHtml += `</ul>`;
    shopRecommend.innerHTML = shopHtml;
}

function resetTest() {
    currentQuestionIndex = 0;
    userAnswers = [];
    renderQuestion();
    updateProgress();
}

// ********** 事件绑定 **********
startTestBtn.addEventListener("click", () => {
    welcomePage.classList.remove("active");
    testPage.classList.add("active");
});

prevBtn.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
        updateProgress();
    }
});

nextBtn.addEventListener("click", () => {
    const ans = getUserAnswer();
    if (ans === null) {
        alert("请选择一个选项再继续哦～");
        return;
    }
    userAnswers[currentQuestionIndex] = ans;
    if (currentQuestionIndex < totalQuestions - 1) {
        currentQuestionIndex++;
        renderQuestion();
        updateProgress();
    }
});

submitBtn.addEventListener("click", () => {
    const ans = getUserAnswer();
    if (ans === null) {
        alert("请选择一个选项再生成结果哦～");
        return;
    }
    userAnswers[currentQuestionIndex] = ans;
    
    const result = generateResult();
    renderResult(result);
    
    testPage.classList.remove("active");
    resultPage.classList.add("active");
});

reTestBtn.addEventListener("click", () => {
    resetTest();
    resultPage.classList.remove("active");
    testPage.classList.add("active");
});