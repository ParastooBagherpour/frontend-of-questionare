<template>
  <div>
    <div v-if="listQuestionares.length === 0">
      <noQuestionare />
    </div>
    <div v-else>
      <QuestionareDetailsComponent :questionareNum="this.listQuestionares.length" @sorting="sort" />
      <AllQuestionaresComponent :list="this.listQuestionares" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import QuestionareDetailsComponent from "@/components/Questionares/QuestionareList/QuestionareDetailsComponent";
import AllQuestionaresComponent from "@/components/Questionares/QuestionareList/AllQuestionaresComponent";
import noQuestionare from "@/components/Questionares/QuestionareList/noQuestionare";
import axios from "axios";
import Nprogress from "nprogress";
axios.interceptors.request.use((config) => {
  Nprogress.start();
  return config;
});

axios.interceptors.response.use(
  (response) => {
    Nprogress.done();
    return response;
  },
  (error) => {
    Nprogress.done();

    return Promise.reject(error);
  }
);
export default {
  name: "App",
  components: {
    QuestionareDetailsComponent,
    AllQuestionaresComponent,
    noQuestionare,
  },
  methods: {
    sort: async function (type) {
      let resData = await axios
        .get(
          `/list_questionnaire/filter?filter=
          ${type}`,
          {
            headers: {
              "Content-Type": "application/json",
              token: localStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          this.listQuestionares = res.data.message;
          this.$toasted.success("فیلتر با موفقیت اعمال شد ");
        })
        .catch((e) => {
          this.$toasted.error("اعمال فیلتر با خطا مواجه شد " + e);
        });
    },
  },
  data: function () {
    return {
      listQuestionares: [],
      questionareNum: 0,
    };
  },
  mounted() {
    axios
      .get("/list_questionnaire/get_questionnaire", {
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        this.listQuestionares = res.data.message;
        this.$toasted.success("با موفقیت وارد شدید");
      })
      .catch((e) => {
        this.$toasted.error(
          "نمایش لیست پرسشنامه ها با خطا مواجه شد "  + e
        );
      });
  },
};
</script>

