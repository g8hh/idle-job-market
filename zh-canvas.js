console.log("加载汉化模块");

//1.汉化杂项
var cnItems = {
    _OTHER_: [],
    'If you like the game, support us at our patreon to make this game into a reality.': '如果您喜欢这款游戏，请在我们的 patreon 支持我们，让这款游戏成为现实。',
    'Provide us with any of your feedback of your experience at our discord channel.': '在我们的discord频道向我们提供您对您的体验的任何反馈。',
    'Workers': '工人',
    'Upgrade': '升级',
    'This is an early alpha stage of the game.': '这是游戏的早期 alpha 阶段。',
    'Talent': '天赋',
    'Managers': '经理',
    'Progress': '进度',
    'Cheated': '作弊',
    'Business': '商业',
    'Advertise': '广告',
    'If you like the game, support us at our patreon': '如果您喜欢这款游戏，请在我们的 patreon 支持我们',
    'to make this game into a reality.': '使这个游戏成为现实。',
    'Provide us with any of your feedback of your': '向我们提供您的任何反馈',
    'experience at our discord channel.': '在我们的discord频道体验。',
    'If you like the game, support us at our': '如果你喜欢这个游戏，请支持我们在',
    'patreon to make this game into a reality.': 'patreon 让这个游戏成为现实。',
    ' Reduced resource consumption. Improved performance.': '减少资源消耗。 改进性能。',
    ' Added Basic touch support for Mobile browsers.': '添加了对移动浏览器的基本触摸支持。',
    "Businesses can be run to generate cash. They also generate a bit of xp each time it is run.": "可以经营企业以产生。 每次运行时，它们还会生成一些 经验值。",
    "Unlocks Lemonade Stand Business.": "解锁柠檬水摊生意。",
    "Workers can be hired and placed into different businesses to reduce it's": "可以雇用工人并将其分配到不同的业务中以减少",
    "cooldown. They can be moved around to different businesses.": "冷却。 他们可以转移到不同的企业。",
    "Businesses can be run to generate cash. They also generate a bit of xp each": "可以经营企业以产生。 他们每个人也会产生一点经验",
    "time it is run.": "在它运行的时间。",
    "Workers can be hired and placed into different businesses to reduce it's cooldown. They can be": "可以雇用工人并将其分配到不同的业务中以减少其冷却时间。 他们可以",
    "moved around to different businesses.": "转移到不同的业务。",
    "Upgrade to tranform a business to it's next evolutionary form.": "升级以将业务转变为下一个进化形式。",
    "Advertisements can be run to boost the cash generation of Businesses.": "可以投放广告来促进企业的生成。",
    "HIRE": "雇佣",
    "Lemonade Stand": "柠檬水摊",
    "Managers can be employed to run businesses automatically.": "可以雇用经理来自动经营业务。",
    "Hire a worker. Workers reduce the cooldown of businesses when they are": "雇用一名工人。 工人们减少企业的冷却时间",
    "Change the in-game settings.": "更改游戏内设置。",
    "Put your points on the Talent tree to gain powerful bonuses.": "将您的点数放在天赋树上以获得强大的奖励。",
    "Shows your progress and win conditions.": "显示您的进度和获胜条件。",
    "Teacher": "老师",
    "Switch": "切换",
    "Shows Talent Level and level progression. Blinks yellow whenever xp is generated. Click to go to": "显示天赋等级和等级进展。 每当生成 经验值 时都会闪烁黄色。 点击前往",
    "Gamer": "游戏玩家",
    "Game Developer": "游戏开发者",
    "Draw Sketches": "绘制草图",
    "Cover Singer": "封面歌手",
    "Competitive Gamer": "竞技游戏玩家",
    "Garbage Truck Driver": "垃圾车司机",
    "Generates no cash within 0.7 seconds. But still generates xp as usual.": "在 0.7 秒内不产生。 但仍然像往常一样生成 xp。",
    "Newspaper Delivery": "送报",
    "Researcher": "研究员",
    "Streamer": "流媒体",
    "Street Performer": "街头艺人",
    "Stunt Performer": "特技表演者",
    "Work Out": "健身",
    "Write Short Story": "写短篇小说",
    "Lawyer": "律师",
    "Lemonade": "柠檬水",
    "Generates no cash within 1.5 seconds. But still generates xp as usual.": "在 1.5 秒内不产生。 但仍然像往常一样生成 xp。",
    "Ball Boy": "球童",
    "Bully": "恶霸",
    "Flip Burgers": "翻转汉堡",
    "Clinician": "临床医生",
    "Purchase Lemonade Stand,  Cost: $10 cash and 1 Talent Point.": "购买柠檬水摊，费用：$10 和 1 天赋点。",
    "Worker Capacity: 1,   Duration: 4 minutes.": "工人容量：1，持续时间：4 分钟。",
    "Worker Capacity: 2,   Duration: 3 seconds.": "工人容量：2，持续时间：3 秒。",
    "Worker Capacity: 1,   Duration: 14 seconds.": "工人容量：1，持续时间：14 秒。",
    "Lemonade Stand,  Regular Job": "柠檬水摊, 常规工作",
    "Purchase Stunt Performer,  Cost: $1500 cash and 1 Talent Point.": "购买特技表演者，费用：1500 $和 1 个天赋点。",
    "Purchase Work Out,  Cost: $100 cash and 1 Talent Point.": "购买健身，费用：100 $和 1 个天赋点。",
    "Purchase Write Short Story,  Cost: $150 cash and 1 Talent Point.": "购买写短篇小说，成本：150 $和 1 天赋点。",
    "Unlocks Ball Boy Business.": "解锁球童生意。",
    "Unlocks Bully Business.": "解锁恶霸业务。",
    "Unlocks Clinician Business.   [ Requires Education Talent ]": "解锁临床医生业务。 [需要教育人才]",
    "Unlocks Competitive Gamer Business.": "解锁有竞争力的游戏玩家业务。",
    "Unlocks Cover Singer Business.": "解锁封面歌手业务。",
    "Unlocks Draw Sketches Business.": "解锁绘制草图业务。",
    "Unlocks Flip Burgers Business.": "解锁翻转汉堡业务。",
    "Unlocks Game Developer Business.": "解锁游戏开发商业务。",
    "Unlocks Gamer Business.": "解锁玩家业务。",
    "Unlocks Garbage Truck Driver Business.": "解锁垃圾车司机业务。",
    "Unlocks Lawyer Business.   [ Requires Education Talent ]": "解锁律师业务。 [需要教育人才]",
    "Unlocks Newspaper Delivery Business.": "开启报纸递送业务。",
    "Unlocks Researcher Business.   [ Requires Education Talent ]": "解锁研究员业务。 [需要教育人才]",
    "Unlocks Streamer Business.": "解锁流媒体业务。",
    "Unlocks Street Performer Business.": "解锁街头艺人业务。",
    "Unlocks Stunt Performer Business.": "解锁特技演员业务。",
    "Unlocks Work Out Business.": "解锁健身业务。",
    "Unlocks Write Short Story Business.": "解锁写短篇小说业务。",
    "Purchase Newspaper Delivery,  Cost: $150 cash and 1 Talent Point.": "购买报纸递送，费用：150 $和 1 个天赋点。",
    "Purchase Garbage Truck Driver,  Cost: $250 cash and 1 Talent Point.": "购买垃圾车司机，费用：250 $和 1 个天赋点。",
    "Worker Capacity: 1,   Duration: 2 minutes.": "工人容量：1，持续时间：2 分钟。",
    "Worker Capacity: 1,   Duration: 40 seconds.": "工人容量：1，持续时间：40 秒。",
    "Newspaper Delivery,  Regular Job": "报纸递送，常规工作",
    "Garbage Truck Driver,  Regular Job": "垃圾车司机，常规工作",
    "Street Performer,  Artistic Job": "街头艺人，艺术工作",
    "Stunt Performer,  Physical Job": "特技演员，体力活",
    "Teacher,  Professional Job": "教师, 专业工作",
    "Work Out,  Physical Job": "健身，体力活",
    "Worker Capacity:  None": "工人容量：无",
    "Worker Capacity: 1,   Duration: 1 hour.": "工人容量：1，持续时间：1 小时。",
    "Worker Capacity: 1,   Duration: 1.5 seconds.": "工人容量：1，持续时间：1.5 秒。",
    "Worker Capacity: 1,   Duration: 12 seconds.": "工人容量：1，持续时间：12 秒。",
    "Worker Capacity: 1,   Duration: 20 seconds.": "工人容量：1，持续时间：20 秒。",
    "Worker Capacity: 1,   Duration: 3 minutes.": "工人容量：1，持续时间：3 分钟。",
    "Worker Capacity: 3,   Duration: 7 minutes.": "工人容量：3，持续时间：7 分钟。",
    "Worker Capacity: 1,   Duration: 8 hours.": "工人容量：1，持续时间：8 小时。",
    "Worker Capacity: 3,   Duration: 16 hours.": "工人容量：3，持续时间：16 小时。",
    "Worker Capacity: 4,   Duration: 5 hours.": "工人容量：4，持续时间：5 小时。",
    "Write Short Story,  Artistic Job": "写短篇小说，艺术工作",
    "Purchase Street Performer,  Cost: $200 cash and 1 Talent Point.": "购买街头艺人，费用：200 $和 1 个天赋点",
    "Purchase Teacher,  Cost: $150 cash and 1 Talent Point.": "购买教师，费用：150 $和 1 个天赋点。",
    "Unlocks Teacher Business.   [ Requires Education Talent ]": "解锁教师业务。 [需要教育人才]",
    "Purchase Clinician,  Cost: $350 cash and 1 Talent Point.": "购买临床医生，费用：350 $和 1 个天赋点。",
    "Purchase Competitive Gamer,  Cost: $125 cash and 1 Talent Point.": "购买竞技游戏玩家，费用：125 $和 1 个天赋点。",
    "Purchase Cover Singer,  Cost: $350 cash and 1 Talent Point.": "购买封面歌手，费用：350 $和 1 个天赋点。",
    "Purchase Draw Sketches,  Cost: $55 cash and 1 Talent Point.": "购买绘图草图，费用：55 $和 1 个天赋点。",
    "Purchase Flip Burgers,  Cost: $35 cash and 1 Talent Point.": "购买 翻转汉堡，费用：35 $和 1 个 天赋点。",
    "Purchase Game Developer,  Cost: $200 cash and 1 Talent Point.": "购买游戏开发商，费用：200 $和 1 个天赋点。",
    "Purchase Gamer,  Cost: $550 cash and 1 Talent Point.": "购买 游戏玩家，费用：550 $和 1 个天赋点。",
    "Purchase Lawyer,  Cost: $500 cash and 1 Talent Point.": "购买律师，费用：500 $和 1 个天赋点。",
    "Purchase Ball Boy,  Cost: $500 cash and 1 Talent Point.": "购买 球童，费用：500 $和 1 个人才点。",
    "Purchase Bully,  Cost: $200 cash and 1 Talent Point.": "购买 恶霸，费用：200 $和 1 个天赋点。",
    "Next worker grants 40% cooldown reduction. Each additional worker only": "下一位工人提供 40% 的冷却缩减。 每个额外的工人只",
    "Move a worker into this business.": "将一名工人调入该行业。",
    "Increases Lemonade Stand cash generation by 1 from $1 to $2.": "将 柠檬水摊 的生成从 $1增加到 $2，增加了 1 。",
    "Lemonade Stand,  Level 1": "柠檬水摊，等级 1",
    "\" Squeeze'em till you please'em! \"": "\" 挤压 emmm，直到你满意为止！\"",
    "Level Up Lemonade Stand,": "升级柠檬水摊位，",
    "Lemonade Stand, Regular Job, Upgrade Tier : I": "柠檬水摊，普通工作，升级等级：I",
    "Cash Boost:  Base: 100%,  Advertised: 100%, Talent: 100%,  Final: 100%.": "提升：基础：100%，广告：100%，人才：100%，最终：100%。",
    "Cash Boost:  Base: 100%,  Advertised: 100%, Talent: 100%,  Final": "提升：基础：100%，广告：100%，人才：100%，最终",
    "Cash Generation": "产生",
    "Level Up Lemonade Stand,  Cost: $3,  Level: 1 -> 2": "升级柠檬水架，成本：3 $，等级：1 -> 2",
    "Cash Generation :  Base: $1,  Leveled Up: $1,  Boosted: $1,  Final: $1.": "生成：基础：1 $，升级：1 $，提升：1 $，最终：1 $。",
    "Cash Generation :  Base: $10": "生成：基础：10 $",
    "Flip Burgers,  Regular Job": "翻转汉堡，常规工作",
    "Researcher,  Professional Job": "研究员，专业工作",
    "Worker Capacity: 1,   Duration: 1 day.": "工人容量：1，持续时间：1 天。",
    "Ball Boy,  Physical Job": "球童，体力活",
    "Bully,  Physical Job": "恶霸，体力活",
    "Clinician,  Professional Job": "临床医生，专业工作",
    "Competitive Gamer,  Gaming Job": "竞技游戏玩家, 游戏工作",
    "Cover Singer,  Artistic Job": "封面歌手，艺术工作",
    "Draw Sketches,  Artistic Job": "画草图，艺术工作",
    "Game Developer,  Gaming Job": "游戏开发人员, 游戏工作",
    "Gamer,  Gaming Not So Job": "游戏玩家，游戏不是这样的工作",
    "Lawyer,  Professional Job": "律师, 专业工作",
    "Level Up Lemonade Stand,  Cost: $8,  Level: 2 -> 3": "升级柠檬水摊，成本：8 $，等级：2 -> 3",
    "Increases Lemonade Stand cash generation by 1 from $2 to $3.": "将 柠檬水摊 的生成量从 2 $增加到 3 $，增加 1 倍。",
    "Generates $2 within 3 seconds.": "在 3 秒内生成 2 $。",
    "Lemonade Stand,  Level 2": "柠檬水摊，等级 2",
    "Cash Generation :  Base: $1,  Leveled Up: $2,  Boosted: $2,  Final: $2.": "生成：基础：1 $，升级：2 $，提升：2 $，最终：2 $。",
    "Cash Generation :  Base: $1.3": "生成：基础：1.3 $",
    "Cash Generation :  Base: $1.3 K": "生成：基础：$1.3 K",
    "Cash Generation :  Base: $150": "生成：基础：150 $",
    "Cash Generation :  Base: $150 K": "产生：基础：15 万$",
    "Cash Generation :  Base: $250": "生成：基础：250 $",
    "Cash Generation :  Base: $275": "生成：基础：275 $",
    "Cash Generation :  Base: $275 K": "生成：基础：27.5 万$",
    "Cash Generation :  Base: $600": "生成：基础：600 $",
    "Cash Generation :  Base: $600 K": "产生：基础：60 万$",
    "Cash Generation :  Base: $70": "生成：基础：70 $",
    "Cash Generation :  Base: $75": "生成：基础：75 $",
    "Cash Generation :  Base: $95": "生成：基础：95 $",
    "Cash Generation :  Base: $95 K": "产生：基础：95,000 $",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Generates $1 within 3 seconds.": "在 3 秒内产生 $1。",
    "Generates $1 within 3 seconds": "在 3 秒内产生 $1",
    "Generates $10 within 14 seconds": "在 14 秒内产生 $10",
    "Generates $7 within 12 seconds": "在 12 秒内产生 $7",
    "Generates $75 within 20 seconds": "在 20 秒内产生 $75",
    "Generates $50 within 40 seconds": "在 40 秒内产生 $50",
    "Generates $55 within 35 seconds": "在 35 秒内产生 $55",
    "Generates $70 within 40 seconds": "在 40 秒内产生 $70",
    "Generates $250 within 2 minutes": "在 2 分钟内产生 $250",
    "Generates $700 within 3 minutes": "在 3 分钟内产生 $700",
    "Generates $750 within 4 minutes": "在 4 分钟内产生 $750",
    "Generates $1.3 K within 7 minutes": "在 7 分钟内产生 $1.3 K",
    "Generates $5 K within 20 minutes": "在 20 分钟内产生 $5 K",
    "Generates $15.5 K within 1 hour": "在 1 小时内产生 $15.5 K",
    "Generates $55 K within 4 hours": "在 4 小时内产生 $55 K",
    "Generates $95 K within 5 hours": "在 5 小时内产生 $95 K",
    "Generates $55 K within 4 hours": "在 4 小时内产生 $55 K",
    "Generates $150 K within 8 hours": "在 8 小时内产生 $150 K",
    "Generates $275 K within 16 hours": "在 16 小时内产生 $275 K",
    "Generates $600 K within 1 day": "在 1 天内产生 $600 K",
    "Manager Section": "经理模块",
    "Progress Section": "进度模块",
    "Worker Section": "工人模块",
    "Setting Section": "设置模块",
    "Talent Section": "天赋模块",
    "Upgrade Section": "升级模块",
    'Business Section': '商业模块',
    'Business Section': '商业模块',
    'Settings': '设置',

}

//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    "Switch to ": "切换到 ",
    "Hire Worker,  Cost: ": "雇用工人，费用：",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^\s*$/,
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^Generates \$([\d\.,]+) within ([\d\.,]+) seconds$/, '在 $2 秒内产生 \$ $1'],
    [/^(\d+) Royal points$/, '$1 皇家点数'],
    [/^Cost: (\d+) RP$/, '成本：$1 皇家点数'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);

//2.采集新词
//20190320@JAR

var cnItem = function () {

    //传参是否非空字串
    if (!arguments[0]) return;

    //检验传参是否对象
    let text = arguments[0],
        s = '';
    if (typeof (text) != "string")
        return text;
    else
        s = arguments[0].charCodeAt();

    //检验传参是否英文
    // if (
    //     s < 65 || (s > 90 && s < 97) || (s > 122)
    //
    // ) return text;

    //处理前缀
    let text_prefix = "";
    for(let prefix in cnPrefix){
        if (text.substr(0,prefix.length) === prefix){
            text_prefix = cnPrefix[prefix];
            text = text.substr(prefix.length);
        }
    }
    //处理后缀
    let text_postfix = "";
    for(let postfix in cnPostfix){
        if (text.substr(-postfix.length) === postfix){
            text_postfix = cnPostfix[postfix];
            text = text.substr(0,text.length-postfix.length);
        }
    }
    //处理正则后缀
    let text_reg_exclude_postfix = "";
    for(let reg of cnExcludePostfix){
        let result = text.match(reg);
        if (result){
            text_reg_exclude_postfix = result[0];
            text = text.substr(0, text.length-text_reg_exclude_postfix.length);
        }
    }

    //检验字典是否可存
    if (!cnItems._OTHER_) cnItems._OTHER_ = [];

    //检查是否排除
    for(let reg of cnExcludeWhole){
        if (reg.test(text)){
            return text_prefix + text + text_reg_exclude_postfix + text_postfix;
        }
    }

    //遍历尝试匹配
    for (let i in cnItems) {
        //字典已有词汇或译文、且译文不为空，则返回译文
        if (
            text == i || text == cnItems[i] &&
            cnItems[i] != ''
        )
            return text_prefix + cnItems[i] + text_reg_exclude_postfix + text_postfix;
    }

    //调整收录的词条，0=收录原文，1=收录去除前后缀的文本
    let save_cfg = 1;
    let save_text = save_cfg?text:arguments[0]
    //遍历生词表是否收录
    for (
        let i = 0; i < cnItems._OTHER_.length; i++
    ) {
        //已收录则直接返回
        if (save_text == cnItems._OTHER_[i])
            return arguments[0];
    }

    if (cnItems._OTHER_.length < 500){
        //未收录则保存
        cnItems._OTHER_.push(save_text);
        cnItems._OTHER_.sort(
            function (a, b) {
                return a.localeCompare(b)
            }
        );
    }

    /*
        //开启生词打印
        //console.log(
            '有需要汉化的英文：', text
        );
    */

    //返回生词字串
    return arguments[0];
};

document.createElement = function(name,opt){
	if(name=='canvas'){
		let canvasElement = document.__proto__.createElement.bind(this)(name,opt);
		canvasElement.getContext('2d').fillText = function(text,x,y,max){
			return this.__proto__.fillText.bind(this)(cnItem(text),x,y,max);
		}
		canvasElement.getContext('2d').strokeText = function(text,x,y,max){
			return this.__proto__.strokeText.bind(this)(cnItem(text),x,y,max);
		}
		canvasElement.getContext('2d').measureText = function(text){
			return this.__proto__.measureText.bind(this)(cnItem(text));
		}
		return canvasElement;
	}
	else
		return document.__proto__.createElement.bind(this)(name,opt);
}