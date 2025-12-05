// src/data.js
const characterData = [
	// 人称代词
	{ id: 1, char: "我", pinyin: "wǒ", meaning: "第一人称代词", category: "人称代词" },
	{ id: 2, char: "你", pinyin: "nǐ", meaning: "第二人称代词", category: "人称代词" },
	{ id: 3, char: "他", pinyin: "tā", meaning: "第三人称代词", category: "人称代词" },

	// 家庭成员
	{ id: 4, char: "爸", pinyin: "bà", meaning: "父亲", category: "家庭成员" },
	{ id: 5, char: "妈", pinyin: "mā", meaning: "母亲", category: "家庭成员" },
	{ id: 6, char: "爷", pinyin: "yé", meaning: "爷爷", category: "家庭成员" },
	{ id: 7, char: "奶", pinyin: "nǎi", meaning: "奶奶", category: "家庭成员" },
	{ id: 8, char: "哥", pinyin: "gē", meaning: "哥哥", category: "家庭成员" },
	{ id: 9, char: "姐", pinyin: "jiě", meaning: "姐姐", category: "家庭成员" },
	{ id: 10, char: "弟", pinyin: "dì", meaning: "弟弟", category: "家庭成员" },
	{ id: 11, char: "妹", pinyin: "mèi", meaning: "妹妹", category: "家庭成员" },
	{ id: 12, char: "叔", pinyin: "shū", meaning: "叔叔", category: "家庭成员" },
	{ id: 13, char: "姨", pinyin: "yí", meaning: "阿姨", category: "家庭成员" },

	// 社会关系
	{ id: 14, char: "师", pinyin: "shī", meaning: "老师", category: "社会关系" },
	{ id: 15, char: "朋", pinyin: "péng", meaning: "朋友", category: "社会关系" },
	{ id: 16, char: "友", pinyin: "yǒu", meaning: "朋友", category: "社会关系" },

	// 年龄相关
	{ id: 17, char: "老", pinyin: "lǎo", meaning: "年老的", category: "年龄相关" },
	{ id: 18, char: "幼", pinyin: "yòu", meaning: "年幼的", category: "年龄相关" },

	// 性别
	{ id: 19, char: "男", pinyin: "nán", meaning: "男性", category: "性别" },
	{ id: 20, char: "女", pinyin: "nǚ", meaning: "女性", category: "性别" },

	// 自然现象
	{ id: 21, char: "天", pinyin: "tiān", meaning: "天空", category: "自然现象" },
	{ id: 22, char: "地", pinyin: "dì", meaning: "大地", category: "自然现象" },
	{ id: 23, char: "日", pinyin: "rì", meaning: "太阳", category: "自然现象" },
	{ id: 24, char: "月", pinyin: "yuè", meaning: "月亮", category: "自然现象" },
	{ id: 25, char: "星", pinyin: "xīng", meaning: "星星", category: "自然现象" },
	{ id: 26, char: "云", pinyin: "yún", meaning: "云朵", category: "自然现象" },
	{ id: 27, char: "风", pinyin: "fēng", meaning: "风", category: "自然现象" },
	{ id: 28, char: "雨", pinyin: "yǔ", meaning: "雨水", category: "自然现象" },
	{ id: 29, char: "雪", pinyin: "xuě", meaning: "雪花", category: "自然现象" },
	{ id: 30, char: "雷", pinyin: "léi", meaning: "雷声", category: "自然现象" },

	// 地理环境
	{ id: 31, char: "山", pinyin: "shān", meaning: "高山", category: "地理环境" },
	{ id: 32, char: "水", pinyin: "shuǐ", meaning: "水流", category: "地理环境" },
	{ id: 33, char: "火", pinyin: "huǒ", meaning: "火焰", category: "地理环境" },
	{ id: 34, char: "土", pinyin: "tǔ", meaning: "土壤", category: "地理环境" },
	{ id: 35, char: "石", pinyin: "shí", meaning: "石头", category: "地理环境" },

	// 植物
	{ id: 36, char: "花", pinyin: "huā", meaning: "花朵", category: "植物" },
	{ id: 37, char: "草", pinyin: "cǎo", meaning: "青草", category: "植物" },
	{ id: 38, char: "树", pinyin: "shù", meaning: "树木", category: "植物" },
	{ id: 39, char: "林", pinyin: "lín", meaning: "树林", category: "植物" },
	{ id: 40, char: "田", pinyin: "tián", meaning: "田野", category: "植物" },

	// 动物
	{ id: 41, char: "猫", pinyin: "māo", meaning: "猫咪", category: "动物" },
	{ id: 42, char: "狗", pinyin: "gǒu", meaning: "小狗", category: "动物" },
	{ id: 43, char: "鸟", pinyin: "niǎo", meaning: "小鸟", category: "动物" },
	{ id: 44, char: "鱼", pinyin: "yú", meaning: "鱼类", category: "动物" },
	{ id: 45, char: "马", pinyin: "mǎ", meaning: "马匹", category: "动物" },
	{ id: 46, char: "牛", pinyin: "niú", meaning: "牛", category: "动物" },
	{ id: 47, char: "羊", pinyin: "yáng", meaning: "山羊", category: "动物" },
	{ id: 48, char: "兔", pinyin: "tù", meaning: "兔子", category: "动物" },
	{ id: 49, char: "鸡", pinyin: "jī", meaning: "公鸡", category: "动物" },
	{ id: 50, char: "鸭", pinyin: "yā", meaning: "鸭子", category: "动物" },
	{ id: 51, char: "鹅", pinyin: "é", meaning: "白鹅", category: "动物" },
	{ id: 52, char: "猪", pinyin: "zhū", meaning: "猪", category: "动物" },
	{ id: 53, char: "猴", pinyin: "hóu", meaning: "猴子", category: "动物" },
	{ id: 54, char: "虎", pinyin: "hǔ", meaning: "老虎", category: "动物" },
	{ id: 55, char: "虫", pinyin: "chóng", meaning: "昆虫", category: "动物" },
	{ id: 56, char: "蛇", pinyin: "shé", meaning: "蛇类", category: "动物" },
	{ id: 57, char: "象", pinyin: "xiàng", meaning: "大象", category: "动物" },
	{ id: 58, char: "龙", pinyin: "lóng", meaning: "龙", category: "动物" },
	{ id: 59, char: "熊", pinyin: "xióng", meaning: "熊", category: "动物" },
	{ id: 60, char: "鼠", pinyin: "shǔ", meaning: "老鼠", category: "动物" },

	// 食物
	{ id: 61, char: "米", pinyin: "mǐ", meaning: "大米", category: "食物" },
	{ id: 62, char: "面", pinyin: "miàn", meaning: "面条", category: "食物" },
	{ id: 63, char: "饭", pinyin: "fàn", meaning: "米饭", category: "食物" },
	{ id: 64, char: "菜", pinyin: "cài", meaning: "蔬菜", category: "食物" },
	{ id: 65, char: "肉", pinyin: "ròu", meaning: "肉类", category: "食物" },
	{ id: 66, char: "蛋", pinyin: "dàn", meaning: "鸡蛋", category: "食物" },
	{ id: 67, char: "奶", pinyin: "nǎi", meaning: "牛奶", category: "食物" },
	{ id: 68, char: "果", pinyin: "guǒ", meaning: "水果", category: "食物" },
	{ id: 69, char: "瓜", pinyin: "guā", meaning: "西瓜", category: "食物" },
	{ id: 70, char: "豆", pinyin: "dòu", meaning: "豆类", category: "食物" },
	{ id: 71, char: "糖", pinyin: "táng", meaning: "糖果", category: "食物" },
	{ id: 72, char: "茶", pinyin: "chá", meaning: "茶叶", category: "食物" },
	{ id: 73, char: "汤", pinyin: "tāng", meaning: "汤品", category: "食物" },
	{ id: 74, char: "油", pinyin: "yóu", meaning: "食用油", category: "食物" },
	{ id: 75, char: "盐", pinyin: "yán", meaning: "食盐", category: "食物" },
	{ id: 76, char: "饼", pinyin: "bǐng", meaning: "饼干", category: "食物" },
	{ id: 77, char: "糕", pinyin: "gāo", meaning: "蛋糕", category: "食物" },

	// 具体水果
	{ id: 78, char: "苹", pinyin: "píng", meaning: "苹果", category: "具体水果" },
	{ id: 79, char: "蕉", pinyin: "jiāo", meaning: "香蕉", category: "具体水果" },

	// 家具用品
	{ id: 80, char: "桌", pinyin: "zhuō", meaning: "桌子", category: "家具用品" },
	{ id: 81, char: "椅", pinyin: "yǐ", meaning: "椅子", category: "家具用品" },
	{ id: 82, char: "床", pinyin: "chuáng", meaning: "床铺", category: "家具用品" },
	{ id: 83, char: "灯", pinyin: "dēng", meaning: "电灯", category: "家具用品" },
	{ id: 84, char: "门", pinyin: "mén", meaning: "房门", category: "家具用品" },
	{ id: 85, char: "窗", pinyin: "chuāng", meaning: "窗户", category: "家具用品" },

	// 餐具
	{ id: 86, char: "碗", pinyin: "wǎn", meaning: "饭碗", category: "餐具" },
	{ id: 87, char: "杯", pinyin: "bēi", meaning: "杯子", category: "餐具" },
	{ id: 88, char: "盘", pinyin: "pán", meaning: "盘子", category: "餐具" },
	{ id: 89, char: "勺", pinyin: "sháo", meaning: "勺子", category: "餐具" },
	{ id: 90, char: "筷", pinyin: "kuài", meaning: "筷子", category: "餐具" },

	// 学习用品
	{ id: 91, char: "书", pinyin: "shū", meaning: "书籍", category: "学习用品" },
	{ id: 92, char: "笔", pinyin: "bǐ", meaning: "铅笔", category: "学习用品" },
	{ id: 93, char: "纸", pinyin: "zhǐ", meaning: "纸张", category: "学习用品" },
	{ id: 94, char: "画", pinyin: "huà", meaning: "图画", category: "学习用品" },

	// 服饰
	{ id: 95, char: "衣", pinyin: "yī", meaning: "衣服", category: "服饰" },
	{ id: 96, char: "鞋", pinyin: "xié", meaning: "鞋子", category: "服饰" },
	{ id: 97, char: "帽", pinyin: "mào", meaning: "帽子", category: "服饰" },
	{ id: 98, char: "袜", pinyin: "wà", meaning: "袜子", category: "服饰" },
	{ id: 99, char: "包", pinyin: "bāo", meaning: "书包", category: "服饰" },
	{ id: 100, char: "伞", pinyin: "sǎn", meaning: "雨伞", category: "服饰" },

	// 日用品
	{ id: 101, char: "梳", pinyin: "shū", meaning: "梳子", category: "日用品" },
	{ id: 102, char: "镜", pinyin: "jìng", meaning: "镜子", category: "日用品" },
	{ id: 103, char: "盆", pinyin: "pén", meaning: "脸盆", category: "日用品" },

	// 动作动词
	{ id: 104, char: "走", pinyin: "zǒu", meaning: "走路", category: "动作动词" },
	{ id: 105, char: "跑", pinyin: "pǎo", meaning: "跑步", category: "动作动词" },
	{ id: 106, char: "跳", pinyin: "tiào", meaning: "跳跃", category: "动作动词" },
	{ id: 107, char: "看", pinyin: "kàn", meaning: "观看", category: "动作动词" },
	{ id: 108, char: "听", pinyin: "tīng", meaning: "聆听", category: "动作动词" },
	{ id: 109, char: "说", pinyin: "shuō", meaning: "说话", category: "动作动词" },
	{ id: 110, char: "吃", pinyin: "chī", meaning: "吃饭", category: "动作动词" },
	{ id: 111, char: "喝", pinyin: "hē", meaning: "喝水", category: "动作动词" },
	{ id: 112, char: "玩", pinyin: "wán", meaning: "玩耍", category: "动作动词" },
	{ id: 113, char: "睡", pinyin: "shuì", meaning: "睡觉", category: "动作动词" },
	{ id: 114, char: "开", pinyin: "kāi", meaning: "打开", category: "动作动词" },
	{ id: 115, char: "关", pinyin: "guān", meaning: "关闭", category: "动作动词" },
	{ id: 116, char: "坐", pinyin: "zuò", meaning: "坐下", category: "动作动词" },
	{ id: 117, char: "站", pinyin: "zhàn", meaning: "站立", category: "动作动词" },
	{ id: 118, char: "来", pinyin: "lái", meaning: "到来", category: "动作动词" },
	{ id: 119, char: "去", pinyin: "qù", meaning: "离去", category: "动作动词" },
	{ id: 120, char: "写", pinyin: "xiě", meaning: "书写", category: "动作动词" },
	{ id: 121, char: "读", pinyin: "dú", meaning: "读书", category: "动作动词" },
	{ id: 122, char: "唱", pinyin: "chàng", meaning: "唱歌", category: "动作动词" },
	{ id: 123, char: "扫", pinyin: "sǎo", meaning: "打扫", category: "动作动词" },

	// 数字
	{ id: 124, char: "一", pinyin: "yī", meaning: "数字一", category: "数字" },
	{ id: 125, char: "二", pinyin: "èr", meaning: "数字二", category: "数字" },
	{ id: 126, char: "三", pinyin: "sān", meaning: "数字三", category: "数字" },
	{ id: 127, char: "四", pinyin: "sì", meaning: "数字四", category: "数字" },
	{ id: 128, char: "五", pinyin: "wǔ", meaning: "数字五", category: "数字" },
	{ id: 129, char: "六", pinyin: "liù", meaning: "数字六", category: "数字" },
	{ id: 130, char: "七", pinyin: "qī", meaning: "数字七", category: "数字" },
	{ id: 131, char: "八", pinyin: "bā", meaning: "数字八", category: "数字" },
	{ id: 132, char: "九", pinyin: "jiǔ", meaning: "数字九", category: "数字" },
	{ id: 133, char: "十", pinyin: "shí", meaning: "数字十", category: "数字" },

	// 方位词
	{ id: 134, char: "上", pinyin: "shàng", meaning: "上面", category: "方位词" },
	{ id: 135, char: "下", pinyin: "xià", meaning: "下面", category: "方位词" },
	{ id: 136, char: "左", pinyin: "zuǒ", meaning: "左边", category: "方位词" },
	{ id: 137, char: "右", pinyin: "yòu", meaning: "右边", category: "方位词" },
	{ id: 138, char: "前", pinyin: "qián", meaning: "前面", category: "方位词" },
	{ id: 139, char: "后", pinyin: "hòu", meaning: "后面", category: "方位词" },
	{ id: 140, char: "里", pinyin: "lǐ", meaning: "里面", category: "方位词" },
	{ id: 141, char: "外", pinyin: "wài", meaning: "外面", category: "方位词" },
	{ id: 142, char: "中", pinyin: "zhōng", meaning: "中间", category: "方位词" },
	{ id: 143, char: "间", pinyin: "jiān", meaning: "之间", category: "方位词" },
	{ id: 144, char: "东", pinyin: "dōng", meaning: "东方", category: "方位词" },
	{ id: 145, char: "西", pinyin: "xī", meaning: "西方", category: "方位词" },

	// 疑问词
	{ id: 146, char: "几", pinyin: "jǐ", meaning: "几个", category: "疑问词" },

	// 形容词
	{ id: 147, char: "大", pinyin: "dà", meaning: "大的", category: "形容词" },
	{ id: 148, char: "小", pinyin: "xiǎo", meaning: "小的", category: "形容词" },
	{ id: 149, char: "高", pinyin: "gāo", meaning: "高的", category: "形容词" },
	{ id: 150, char: "低", pinyin: "dī", meaning: "低的", category: "形容词" },
	{ id: 151, char: "长", pinyin: "cháng", meaning: "长的", category: "形容词" },
	{ id: 152, char: "短", pinyin: "duǎn", meaning: "短的", category: "形容词" },
	{ id: 153, char: "多", pinyin: "duō", meaning: "多的", category: "形容词" },
	{ id: 154, char: "少", pinyin: "shǎo", meaning: "少的", category: "形容词" },
	{ id: 155, char: "好", pinyin: "hǎo", meaning: "好的", category: "形容词" },
	{ id: 156, char: "坏", pinyin: "huài", meaning: "坏的", category: "形容词" },
	{ id: 157, char: "快", pinyin: "kuài", meaning: "快的", category: "形容词" },
	{ id: 158, char: "慢", pinyin: "màn", meaning: "慢的", category: "形容词" },
	{ id: 159, char: "热", pinyin: "rè", meaning: "热的", category: "形容词" },
	{ id: 160, char: "冷", pinyin: "lěng", meaning: "冷的", category: "形容词" },
	{ id: 161, char: "新", pinyin: "xīn", meaning: "新的", category: "形容词" },
	{ id: 162, char: "旧", pinyin: "jiù", meaning: "旧的", category: "形容词" },
	{ id: 163, char: "轻", pinyin: "qīng", meaning: "轻的", category: "形容词" },
	{ id: 164, char: "重", pinyin: "zhòng", meaning: "重的", category: "形容词" },
	{ id: 165, char: "亮", pinyin: "liàng", meaning: "明亮的", category: "形容词" },
	{ id: 166, char: "暗", pinyin: "àn", meaning: "黑暗的", category: "形容词" },

	// 时间词
	{ id: 167, char: "春", pinyin: "chūn", meaning: "春天", category: "时间词" },
	{ id: 168, char: "夏", pinyin: "xià", meaning: "夏天", category: "时间词" },
	{ id: 169, char: "秋", pinyin: "qiū", meaning: "秋天", category: "时间词" },
	{ id: 170, char: "冬", pinyin: "dōng", meaning: "冬天", category: "时间词" },
	{ id: 171, char: "早", pinyin: "zǎo", meaning: "早上", category: "时间词" },
	{ id: 172, char: "晚", pinyin: "wǎn", meaning: "晚上", category: "时间词" },
	{ id: 173, char: "今", pinyin: "jīn", meaning: "今天", category: "时间词" },
	{ id: 174, char: "明", pinyin: "míng", meaning: "明天", category: "时间词" },
	{ id: 175, char: "昨", pinyin: "zuó", meaning: "昨天", category: "时间词" },
	{ id: 176, char: "年", pinyin: "nián", meaning: "年份", category: "时间词" },

	// 身体部位
	{ id: 177, char: "头", pinyin: "tóu", meaning: "头部", category: "身体部位" },
	{ id: 178, char: "手", pinyin: "shǒu", meaning: "手部", category: "身体部位" },
	{ id: 179, char: "耳", pinyin: "ěr", meaning: "耳朵", category: "身体部位" },
	{ id: 180, char: "目", pinyin: "mù", meaning: "眼睛", category: "身体部位" },
	{ id: 181, char: "足", pinyin: "zú", meaning: "脚部", category: "身体部位" },
	{ id: 182, char: "鼻", pinyin: "bí", meaning: "鼻子", category: "身体部位" },
	{ id: 183, char: "舌", pinyin: "shé", meaning: "舌头", category: "身体部位" },
	{ id: 184, char: "牙", pinyin: "yá", meaning: "牙齿", category: "身体部位" },

	// 场所
	{ id: 185, char: "家", pinyin: "jiā", meaning: "家庭", category: "场所" },
	{ id: 186, char: "校", pinyin: "xiào", meaning: "学校", category: "场所" },

	// 其他常用字
	{ id: 187, char: "本", pinyin: "běn", meaning: "书本", category: "其他" },
	{ id: 188, char: "皮", pinyin: "pí", meaning: "皮肤", category: "其他" },
	{ id: 189, char: "自", pinyin: "zì", meaning: "自己", category: "其他" },
	{ id: 190, char: "平", pinyin: "píng", meaning: "平坦", category: "其他" },
	{ id: 191, char: "半", pinyin: "bàn", meaning: "一半", category: "其他" },
	{ id: 192, char: "片", pinyin: "piàn", meaning: "一片", category: "其他" },
	{ id: 193, char: "用", pinyin: "yòng", meaning: "使用", category: "其他" },
];

// 获取所有分类
const categories = [...new Set(characterData.map((item) => item.category))];

// 导出数据
window.characterData = characterData;
window.categories = categories;
