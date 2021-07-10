<template>
  <div>
    <div class="box-of-all-questionares">
      <div v-for="(item, idx) in this.paginationList" class="box-of-each-questionare" :key="idx">
        <QuestionareComponent :item="item" />
      </div>
    </div>
    <div class="box-of-pagination">
      <img @click="pre(correntPage)" src="../../../assets/img/arrow(4)(2).svg" class="nextOrBefore" />
      <div v-for="(n , i) in (this.pageCount)" class="pagination" :key="i">
        <div @click="liNum(i) " :class="[i === correntPage ? activeClass : nonactiveClass]">{{i+1}}</div>
      </div>
      <img
        @click="next(correntPage)"
        src="../../../assets/img/arrow(4)(1).svg"
        class="nextOrBefore"
      />
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import QuestionareComponent from "@/components/Questionares/QuestionareList/QuestionareComponent";

export default {
  components: {
    QuestionareComponent,
  },
  props: ["list"],
  computed: {
    value: {
      get() {
        return this.list;
      },
    },
  },
  watch: {
    list: function () {
      this.paginationList = this.list.slice(
        this.correntPage * 4,
        this.correntPage * 4 + 4
      );
    },
  },
  methods: {
    pre: function (i) {
      if (i > 0) {
        this.correntPage--;
        this.paginationList = this.list.slice(
          this.correntPage * 4,
          this.correntPage * 4 + 4
        );
      }
    },
    next: function (i) {
      if (i < this.pageCount - 1) {
        this.correntPage++;
        this.paginationList = this.list.slice(
          this.correntPage * 4,
          this.correntPage * 4 + 4
        );
      }
    },
    liNum: function (index) {
      this.correntPage = index;
      this.paginationList = this.list.slice(index * 4, index * 4 + 4);
      this.liCount = this.list.length / 3 + 1;
    },
    pagesNum: function () {
      if (this.list.length % 4 === 0) {
        this.pageCount = this.list.length / 4;
      } else {
        this.pageCount = Math.floor(this.list.length / 4) + 1;
      }
    },
  },
  mounted() {
    this.liNum(0), this.pagesNum();
  },
  data: function () {
    return {
      paginationList: [],
      pageCount: 0,
      correntPage: 0,
      activeClass: "activeClass",
      nonactiveClass: "nonactiveClass",
    };
  },
};
</script>
 <style scoped>
.activeClass {
  background-color: #4570f5;
  border-radius: 50%;
  cursor: pointer;
  width: 30px;
  height: 30px;
  color: white;
}
.nonactiveClass {
  color: #aeaeae;
}
.box-of-all-questionares {
  padding-bottom: 130px;
  height: 370px;
}
.box-of-each-questionare {
  margin: 19px auto;
  display: flex;
  width: 70%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.box-of-pagination {
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  background-color: white;
  height: 50px;
  border-radius: 10px;
  box-shadow: 0 5px 10px 0 #f1f1f2;
  padding: 0px 15px;
  margin-bottom: 10px;
}
.pagination {
  font-family: shabnam-digit;
  display: inline;
}

.pagination div {
  float: left;
  margin: 10px 10px;
  text-decoration: none;
}
.nextOrBefore {
  color: #aeaeae;
  float: left;
  text-decoration: none;
  margin: 0px 10px;
  cursor: pointer;
}

.pagination div:hover {
  border-radius: 50%;
  cursor: pointer;
  width: 30px;
  height: 30px;
}
.nextOrBefore:hover {
  margin: 0px 25px;
}
@media screen and (max-width: 900px) {
  .box-of-all-questionares {
    height: 680px;
  }
}
@media screen and (max-width: 600px) {
  .activeClass {
    width: 15px;
    height: 15px;
  }
  .pagination div {
    margin: 18px 5px;
    font-size: 11px;
  }

  .nextOrBefore {
    margin: 0px 5px;
  }
  .pagination div:hover {
    width: 15px;
    height: 15px;
  }
  .nextOrBefore:hover {
    margin: 0px 10px;
  }
}
</style>