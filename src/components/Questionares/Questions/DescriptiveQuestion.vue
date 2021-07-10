<template>
  <div>
    <textarea class="description" v-model="ans" @change="onChange($event)"></textarea>
  </div>
</template>
<script>
export default {
  data: function () {
    return { ans: "" };
  },
  methods: {
    onChange(event) {
      this.$emit("answer", event.target.value);
    },
  },
};
</script>
<style scoped>
.description {
  width: 55%;
  height: 250px;
  display: block;
  font-family: shabnam;
  font-size: 12px;
  line-height: 2;
  letter-spacing: -0.14px;
  text-align: right;
  color: #747474;
  border: none;
  border-radius: 10px;
  background-color: #e6e9ef;
  padding: 30px;
  margin: 20px auto 200px auto;
  resize: none;
}
</style>