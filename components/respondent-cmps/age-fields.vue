<template>
  <div class="cmp">
    <div class="respondent-select" v-for="(one, i) of numOfRanges" :key="i">
      <div>
        <h5>Диапазон {{ i + 1 }}</h5>
      </div>
      <div class="range">
        <p>От</p>
        <input
          class="range-input"
          type="number"
          name=""
          id=""
          placeholder="Нижняя граница"
          v-model.lazy="numOfRanges[i].start"
        />

        <p>До</p>
        <input
          class="range-input"
          type="nember"
          name=""
          id=""
          placeholder="Верхняя граница"
          v-model.lazy="numOfRanges[i].end"
        />
      </div>
    </div>
    <div class="range-btns">
      <button @click="minus" class="btn">Удалить диапазон</button>
      <button @click="plus" class="btn">Добавить диапазон</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
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
      if (this.numOfRanges.length > 1) this.numOfRanges.pop()
    },
    dataShare() {
      this.$store.commit('dataContent', {
        data: this.numOfRanges,
        id: this.id,
      })
    },
  },
  watch: {
    numOfRanges: {
      handler() {
        this.dataShare()
      },
      deep: true,
    },
  },
  computed: {},
}
</script>

<style></style>
