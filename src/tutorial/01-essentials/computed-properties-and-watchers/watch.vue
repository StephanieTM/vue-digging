<template>
  <div>Ask a yes/no question: <el-input v-model="question" /></div>
  <div>{{ answer }}</div>
</template>

<script>
function answerQuestion(question = '') {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (question.length % 2 === 0) {
        resolve('Yes.');
      } else {
        resolve('No.');
      }
    }, 2000);
  });
}

export default {
  data() {
    return {
      question: '',
      answer: 'Questions usually contain a question mark. ;-)',
    };
  },
  watch: {
    question(newQuestion) {
      if (newQuestion.indexOf('?') > -1) {
        this.getAnswer();
      }
    },
  },
  methods: {
    async getAnswer() {
      this.answer = 'Thinking...';
      try {
        const result = await answerQuestion(this.question);
        this.answer = result;
      } catch (e) {
        this.answer = 'Error!';
      }
    },
  },
}
</script>
