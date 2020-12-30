<template>
  <div class="child">
    1
    <div class="children">
      2
      <div class="childrennnn">
        3
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {
    const data = {
      id: 1,
      name: "lisi",
    };
    // const config= {headers: {'Content-Type': 'multipart/form-data'}}
    const config = {};
    this.$api.gettest(data).then((res) => {
      console.log(res);
    });
    this.$api.posttest(data).then((res) => {
      console.log(res);
    });
  },
  mounted() {},
  props: {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.child{
  color: red;
  .children{
    color: green;
    .childrennnn{
      color: blue;

    }
  }
}
</style>
