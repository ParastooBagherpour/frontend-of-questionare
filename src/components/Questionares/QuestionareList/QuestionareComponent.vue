<template>
  <div class="questionares">
    <QuestionareNameComponent :title="item.title" />
    <QuestionNumberComponent :count_questions="item.count_questions" />
    <QuestionStatusComponent :status="item.status" />
    <StartAnsQuestionsComponent :status="item.status" :titleQ="item.title" />
  </div>
</template>

<script>
// @ is an alias to /src
import QuestionareNameComponent from "@/components/Questionares/QuestionareList/QuestionareNameComponent";
import QuestionNumberComponent from "@/components/Questionares/QuestionareList/QuestionNumberComponent";
import QuestionStatusComponent from "@/components/Questionares/QuestionareList/QuestionStatusComponent";
import StartAnsQuestionsComponent from "@/components/Questionares/QuestionareList/StartAnsQuestionsComponent";

export default {
  name: "App",
  components: {
    QuestionareNameComponent,
    QuestionNumberComponent,
    QuestionStatusComponent,
    StartAnsQuestionsComponent,
  },
  props: ["item"],
};
</script>
 <style scoped>
.questionares {
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  flex-wrap: wrap;
  border-radius: 10px;
  box-shadow: 0 5px 10px 0 #f1f1f2;
  background-color: #ffffff;
  margin: 0 auto 19px;
  box-sizing: border-box;
  padding: 18px 22px 17px 16px;
}
</style>