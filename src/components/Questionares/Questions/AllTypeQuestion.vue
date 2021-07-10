<template>
  <div>
    <div class="question-body" v-if="this.i<allQList.length">
      <p class="question-text">{{allQList[this.i].text_question}}</p>
      <div v-if="allQList[this.i].count_options === 4">
        <p class="answering-way">لطفا یک گزینه را انتخاب کنید</p>
        <optionQuestion :obj="allQList[this.i]" @answer="AddAnswerList" />
      </div>
      <div v-if="allQList[this.i].count_options === 2">
        <p class="answering-way">صحیح یا غلط بودن را مشخص کنید</p>
        <optionQuestion :obj="allQList[this.i]" @answer="AddAnswerList" />
      </div>
      <template v-if="allQList[this.i].count_options === 0">
        <p class="answering-way">پاسخ تشریحی کامل بدهید</p>
        <DescriptiveQuestion @answer="AddAnswerList" />
      </template>
      <ProgressComponent
        @nextQ="nextQ"
        @privousQ="privousQ"
        :percent="this.percent"
        :i="this.i+1"
        :questionNum="this.allQList.length"
      />
    </div>
    <div v-else>
      <Finish :answerList="this.answerList" />
    </div>
  </div>
</template>
<script>
import OptionQuestion from "@/components/Questionares/Questions/OptionQuestion";
import DescriptiveQuestion from "@/components/Questionares/Questions/DescriptiveQuestion";
import ProgressComponent from "@/components/Questionares/Questions/ProgressBar/ProgressComponent";
import Finish from "@/components/Questionares/Questions/Finish";
import axios from "axios";
export default {
  methods: {
    calculateProgress: function (i, questionNum) {
      this.percent = Math.round((this.i * 100) / questionNum);
      return this.percent;
    },
    nextQ: function () {
      this.i++;
      this.j++;
      this.calculateProgress(this.i, this.allQList.length);
    },
    privousQ: function () {
      if (this.i > 0) {
        this.i--;
        this.j--;
        this.calculateProgress(this.i, this.allQList.length);
      }
    },
    AddAnswerList: function (ans) {
      this.answerList[this.j] = ans;
    },

    async getAllQuestions() {
      let params = {
        title: this.$route.params.titleQ,
      };

      params = JSON.stringify(params);
      let res = await axios
        .get(
          `/list_questionnaire/get_questions?title=${this.$route.params.titleQ}`,
          {
            headers: {
              token: localStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          this.allQList = res.data.message;
        })
        .catch((e) => {});
    },
  },
  async mounted() {
    await this.getAllQuestions();
  },

  components: {
    OptionQuestion,
    DescriptiveQuestion,
    Finish,
    ProgressComponent,
  },

  data: function () {
    return {
      i: 0,
      j: 0,
      percent: 0,
      answerList: [],
      allQList: [],
    };
  },
};
</script>
<style scoped>
.question-body {
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  min-height: 80vh;
}
.question-text {
  display: block;
  font-family: shabnam;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.36;
  letter-spacing: -0.22px;
  text-align: center;
  color: #2a3774;
  margin: 20px auto;
}
.answering-way {
  display: block;
  font-family: shabnam;
  font-size: 16px;
  line-height: 1.38;
  letter-spacing: -0.16px;
  text-align: center;
  color: #7f86aa;
}

@media screen and (max-width: 650px) {
  .question-text {
    font-size: 14px;
  }
  .answering-way {
    font-size: 14px;
  }
}
</style>

