<template>
  <div class="cmp">
    <div class="respondent-select" v-for="(one, i) of this.data" :key="i">
      <h5>Условие {{ i + 1 }}</h5>
      <v-select
        class="sel"
        :options="typesOfCard"
        :reduce="(option) => option.value"
        label="title"
        style="background: white"
        v-model="one.type"
      />
    </div>
    <div class="range-btns">
      <button @click="plus" class="btn">Добавить тип</button>
      <button @click="minus" class="btn">Удалить тип</button>
    </div>
  </div>
</template>

<script>
export default {
  props: { id: Number, index: Number },
  data() {
    return {
      data: [{ type: 'Выберите статус карты' }],
      typesOfCard: [
        { value: 'gold', title: 'Gold' },
        { value: 'silver', title: 'Silver' },
        { value: 'bronze', title: 'Bronze' },
      ],
    }
  },
  methods: {
    plus() {
      this.data.push({ type: 'Выберите статус карты' })
    },
    minus() {
      if (this.data.length > 1) this.data.pop()
    },
  },
  watch: {
    data: {
      handler(newVal) {
        this.$store.commit('dataContent', { data: newVal, id: this.id })
      },
      deep: true,
    },
  },
}
</script>

<style></style>
