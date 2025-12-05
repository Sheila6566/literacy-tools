const { createApp, ref, onMounted, computed } = Vue;

const app = createApp({
	setup() {
		// 分类选择
		const selectedCategory = ref("全部");

		// 所有分类
		const categories = window.categories;

		// 过滤后的汉字数据
		const filteredCharacters = computed(() => {
			if (selectedCategory.value === "全部") {
				return window.characterData;
			}
			return window.characterData.filter((char) => char.category === selectedCategory.value);
		});

		// 当前显示的汉字索引
		const currentIndex = ref(0);

		// 练习模式状态
		const isInPracticeMode = ref(false);

		// 用户答案
		const userAnswer = ref("");

		// 练习结果
		const practiceResult = ref(null);

		// 当前显示的汉字
		const currentCharacter = computed(() => {
			if (filteredCharacters.value.length > 0) {
				return filteredCharacters.value[currentIndex.value];
			}
			return { char: "", pinyin: "", meaning: "" };
		});

		// 音频播放功能
		const speakCharacter = (text) => {
			if ("speechSynthesis" in window) {
				const utterance = new SpeechSynthesisUtterance(text);
				utterance.lang = "zh-CN";
				utterance.rate = 0.8;
				speechSynthesis.speak(utterance);
			} else {
				alert("您的浏览器不支持语音播放功能");
			}
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

		// 开始练习模式
		const startPractice = () => {
			if (filteredCharacters.value.length === 0) {
				alert("请选择一个包含汉字的分类");
				return;
			}
			isInPracticeMode.value = true;
			userAnswer.value = "";
			practiceResult.value = null;
			// 随机选择一个汉字进行练习
			currentIndex.value = Math.floor(Math.random() * filteredCharacters.value.length);
		};

		// 结束练习模式
		const endPractice = () => {
			isInPracticeMode.value = false;
			userAnswer.value = "";
			practiceResult.value = null;
		};

		// 检查答案
		const checkAnswer = () => {
			if (filteredCharacters.value.length === 0) return;

			const currentChar = filteredCharacters.value[currentIndex.value];
			if (userAnswer.value.trim() === currentChar.char) {
				practiceResult.value = "correct";
				setTimeout(() => {
					// 回到学习模式并显示下一个字符
					endPractice();
					nextCharacter();
				}, 1500);
			} else {
				practiceResult.value = "incorrect";
			}
		};

		// 键盘事件处理
		const handleKeyPress = (event) => {
			if (event.key === "Enter" && isInPracticeMode.value) {
				checkAnswer();
			}
		};

		// 当分类改变时重置索引
		const onCategoryChange = () => {
			currentIndex.value = 0;
		};

		onMounted(() => {
			window.addEventListener("keydown", handleKeyPress);
		});

		return {
			categories,
			selectedCategory,
			filteredCharacters,
			currentIndex,
			isInPracticeMode,
			userAnswer,
			practiceResult,
			currentCharacter,
			speakCharacter,
			nextCharacter,
			prevCharacter,
			startPractice,
			endPractice,
			checkAnswer,
			onCategoryChange,
		};
	},

	template: `
    <div class="literacy-app">
      <!-- 头部标题 -->
      <header class="app-header">
        <h1>🌟 识字小工具 🌟</h1>
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
          <option v-for="category in categories" :key="category" :value="category">
            {{ category }}
          </option>
        </select>
      </div>
      
      <!-- 主要内容区域 -->
      <main class="app-main">
        <div v-if="!isInPracticeMode" class="learning-mode">
          <!-- 汉字展示卡片 -->
          <div class="character-card">
            <div class="character-display">
              {{ currentCharacter.char }}
            </div>
            <div class="character-info">
              <div class="pinyin">拼音: {{ currentCharacter.pinyin }}</div>
              <div class="meaning">意思: {{ currentCharacter.meaning }}</div>
              <div class="category">类别: {{ currentCharacter.category }}</div>
            </div>
            <button @click="speakCharacter(currentCharacter.char)" class="sound-btn">
              🔊 听发音
            </button>
          </div>
          
          <!-- 导航按钮 -->
          <div class="navigation">
            <button @click="prevCharacter" class="nav-btn" :disabled="filteredCharacters.length <= 1">⬅️ 上一个</button>
            <span class="counter">{{ currentIndex + 1 }} / {{ filteredCharacters.length }}</span>
            <button @click="nextCharacter" class="nav-btn" :disabled="filteredCharacters.length <= 1">下一个 ➡️</button>
          </div>
          
          <!-- 开始练习按钮 -->
          <div class="practice-section">
            <button @click="startPractice" class="practice-btn" :disabled="filteredCharacters.length === 0">
              🎮 开始练习
            </button>
          </div>
        </div>
        
        <!-- 练习模式 -->
        <div v-else class="practice-mode">
          <div class="practice-card">
            <h2>练习时间!</h2>
            <div class="question">
              <p>请问这是什么字？</p>
              <div class="character-question">
                {{ currentCharacter.char }}
              </div>
            </div>
            
            <div class="answer-section">
              <input 
                v-model="userAnswer" 
                placeholder="请输入汉字..." 
                class="answer-input"
                @keyup.enter="checkAnswer"
              />
              <button @click="checkAnswer" class="submit-btn">提交答案</button>
            </div>
            
            <div v-if="practiceResult" class="result" :class="practiceResult">
              <div v-if="practiceResult === 'correct'">🎉 答对了！真棒！</div>
              <div v-else>❌ 不对哦，再试试看</div>
            </div>
          </div>
          
          <button @click="endPractice" class="back-btn">🔙 返回学习</button>
        </div>
      </main>
      
      <!-- 字符列表缩略图 -->
      <footer class="app-footer">
        <div class="characters-preview">
          <div 
            v-for="(char, index) in filteredCharacters" 
            :key="char.id"
            class="char-thumb"
            :class="{ active: index === currentIndex }"
            @click="currentIndex = index"
          >
            {{ char.char }}
          </div>
        </div>
      </footer>
    </div>
  `,
});

app.mount("#app");
