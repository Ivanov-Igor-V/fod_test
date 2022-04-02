<template>
  <div>
    <div class="respondent__select" v-for="(one, i) of numOfRanges" :key="i">
      <div class="AF__container">      <h5>Диапазон {{ i + 1 }}</h5>
      <p>От</p>
      <input
        type="text"
        name=""
        id=""
        placeholder="Нижняя граница"
        v-model.lazy="numOfRanges[i].start"
      />

      <p>До</p>
      <input
        type="text"
        name=""
        id=""
        placeholder="Верхняя граница"
        v-model.lazy="numOfRanges[i].end"
      />
      </div>
    </div>
    <div class="btns">
      <button @click="minus">DELETE</button>
      <button @click="plus">Добавить диапазон</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['prop'],
  data() {
    return {
      numOfRanges: [{ start: '', end: '' }],
    }
  },
  methods: {
    plus() {
      this.numOfRanges.push({ start: '', end: '' })
    },
    minus() {
     if (this.numOfRanges.length > 0) this.numOfRanges.pop()
    },
    dataShare() {
        this.$store.commit("dataContent", {data: this.numOfRanges, id: this.prop })
    }
  },
  watch: {
    numOfRanges: {
      handler() {
      this.dataShare()
    },
    deep: true
    }
  },
  computed: {
  }
}
</script>

<style>

</style>
