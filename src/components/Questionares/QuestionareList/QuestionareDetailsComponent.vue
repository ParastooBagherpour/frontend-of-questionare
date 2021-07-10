<template>
  <div class="questionare-details">
    <QuestionareNumberComponent :questionareNum="questionareNum" />
    <SortComponent @sortChanged="sort" />
  </div>
</template>

<script>
// @ is an alias to /src
import QuestionareNumberComponent from "@/components/Questionares/QuestionareList/QuestionareNumberComponent";
import SortComponent from "@/components/Questionares/QuestionareList/SortQuestionares/SortComponent";

export default {
  name: "App",
  components: {
    QuestionareNumberComponent,
    SortComponent,
  },
  props: ["questionareNum"],
  methods: {
    sort: function (type) {
      this.$emit("sorting", type);
      console.log(type);
    },
  },
};
</script>
 <style scoped>
.questionare-details {
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10% auto 0%;
}
@media screen and (max-width: 500px) {
  .questionare-details {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
