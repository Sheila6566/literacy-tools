const { createApp, ref, onMounted, onUnmounted, computed } = Vue;

const app = createApp({
	setup() {
		// 分类选择
		const selectedCategory = ref("全部");

		// 所有分类
		const categories = window.categories;

		// 已认识的汉字ID集合
		const learnedCharacters = ref(new Set());

		// 从localStorage加载已认识的汉字
		const loadLearnedCharacters = () => {
			const saved = localStorage.getItem("learnedCharacters");
			if (saved) {
				learnedCharacters.value = new Set(JSON.parse(saved));
			}
		};

		// 保存已认识的汉字到localStorage
		const saveLearnedCharacters = () => {
			localStorage.setItem("learnedCharacters", JSON.stringify([...learnedCharacters.value]));
		};

		// 切换汉字的认识状态
		const toggleLearned = (id) => {
			if (learnedCharacters.value.has(id)) {
				learnedCharacters.value.delete(id);
			} else {
				learnedCharacters.value.add(id);
			}
			saveLearnedCharacters();
		};

		// 检查汉字是否已认识
		const isLearned = (id) => {
			return learnedCharacters.value.has(id);
		};

		// 过滤后的汉字数据
		const filteredCharacters = computed(() => {
			let chars;
			if (selectedCategory.value === "全部") {
				chars = window.characterData;
			} else if (selectedCategory.value === "已认识") {
				chars = window.characterData.filter((char) => learnedCharacters.value.has(char.id));
			} else if (selectedCategory.value === "未认识") {
				chars = window.characterData.filter((char) => !learnedCharacters.value.has(char.id));
			} else {
				chars = window.characterData.filter((char) => char.category === selectedCategory.value);
			}

			// 创建副本并打乱顺序
			const shuffled = [...chars];
			for (let i = shuffled.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
			}

			return shuffled;
		});

		// 当前显示的汉字索引
		const currentIndex = ref(0);

		// 当前显示的汉字
		const currentCharacter = computed(() => {
			if (filteredCharacters.value.length > 0) {
				return filteredCharacters.value[currentIndex.value];
			}
			return { char: "", pinyin: "", meaning: "" };
		});

		// 音频播放功能
		const speakText = (text) => {
			if ("speechSynthesis" in window) {
				const utterance = new SpeechSynthesisUtterance(text);
				utterance.lang = "zh-CN";
				utterance.rate = 0.8;
				speechSynthesis.speak(utterance);
			} else {
				alert("您的浏览器不支持语音播放功能");
			}
		};

		// 播放汉字发音
		const speakCharacter = () => {
			speakText(currentCharacter.value.char);
		};

		// 播放汉字意思
		const speakMeaning = () => {
			speakText(currentCharacter.value.meaning);
		};

		// 下一个汉字
		const nextCharacter = () => {
			if (currentIndex.value < filteredCharacters.value.length - 1) {
				currentIndex.value++;
			} else {
				currentIndex.value = 0;
			}
		};

		// 上一个汉字
		const prevCharacter = () => {
			if (currentIndex.value > 0) {
				currentIndex.value--;
			} else {
				currentIndex.value = filteredCharacters.value.length - 1;
			}
		};

		// 当分类改变时重置索引
		const onCategoryChange = () => {
			currentIndex.value = 0;
		};

		// 键盘事件处理
		const handleKeyPress = (event) => {
			// 空格键播放发音
			if (event.code === "Space") {
				event.preventDefault();
				speakCharacter();
			}
			// 向下箭头键播放意思
			else if (event.code === "ArrowDown") {
				event.preventDefault();
				speakMeaning();
			}
			// 左箭头键显示上一个字符
			else if (event.code === "ArrowLeft") {
				event.preventDefault();
				prevCharacter();
			}
			// 右箭头键显示下一个字符
			else if (event.code === "ArrowRight") {
				event.preventDefault();
				nextCharacter();
			}
		};

		// 生命周期钩子
		onMounted(() => {
			loadLearnedCharacters();
			window.addEventListener("keydown", handleKeyPress);
		});

		onUnmounted(() => {
			window.removeEventListener("keydown", handleKeyPress);
		});

		return {
			categories,
			selectedCategory,
			filteredCharacters,
			currentIndex,
			currentCharacter,
			speakCharacter,
			speakMeaning,
			nextCharacter,
			prevCharacter,
			onCategoryChange,
			toggleLearned,
			isLearned,
		};
	},

	template: `
    <div class="literacy-app">
      <!-- 头部标题 -->
      <header class="app-header">
        <h1>🌟 Ethan识字小工具 🌟</h1>
      </header>
      
      <!-- 分类选择 -->
      <div class="category-selector">
        <label for="category-select">选择学习类别：</label>
        <select 
          id="category-select" 
          v-model="selectedCategory" 
          @change="onCategoryChange"
          class="category-select"
        >
          <option value="全部">全部</option>
		  <option value="已认识">已认识</option>
		  <option value="未认识">未认识</option>
          <option v-for="category in categories" :key="category" :value="category">
            {{ category }}
          </option>
        </select>
      </div>
      
      <!-- 主要内容区域 -->
      <main class="app-main">
        <div class="learning-mode">
          <!-- 汉字展示卡片 -->
          <div class="character-card">
            <div class="character-display">
            	{{ currentCharacter.char }}
            </div>
			<div v-if="currentCharacter.id && isLearned(currentCharacter.id)" class="learned-mark">✓</div>
            <div class="character-info">
              <div class="pinyin">拼音: {{ currentCharacter.pinyin }}</div>
              <div class="meaning">意思: {{ currentCharacter.meaning }}</div>
              <div class="category">类别: {{ currentCharacter.category }}</div>
            </div>
            <div class="sound-buttons">
              <button @click="speakCharacter" class="sound-btn">
                🔊 听发音
              </button>
              <button @click="speakMeaning" class="meaning-btn">
                📖 听意思
              </button>
			  <button 
			    v-if="currentCharacter.id" 
				@click="toggleLearned(currentCharacter.id)" 
				:class="['learn-btn', { learned: isLearned(currentCharacter.id) }]"
			  >
                {{ isLearned(currentCharacter.id) ? '✅ 取消认识' : '➕ 标记为认识' }}
              </button>
            </div>
          </div>
          
          <!-- 导航按钮 -->
          <div class="navigation">
            <button @click="prevCharacter" class="nav-btn" :disabled="filteredCharacters.length <= 1">⬅️ 上一个</button>
            <span class="counter">{{ currentIndex + 1 }} / {{ filteredCharacters.length }}</span>
            <button @click="nextCharacter" class="nav-btn" :disabled="filteredCharacters.length <= 1">下一个 ➡️</button>
          </div>

		  <div class="character-hint">空格键听发音，向下键听意思，左右键切换字</div>
        </div>
      </main>
      
      <!-- 字符列表缩略图 -->
      <footer class="app-footer">
        <div class="characters-preview">
          <div 
            v-for="(char, index) in filteredCharacters" 
            :key="char.id"
            class="char-thumb"
            :class="{ active: index === currentIndex, learnedThumb: isLearned(char.id) }"
            @click="currentIndex = index"
          >
            {{ char.char }}
          </div>
        </div>

		<p class="characters-total">共{{filteredCharacters.length}}个</p>
      </footer>
    </div>
  `,
});

app.mount("#app");
