<template>
  <div class="cmp">
    <div class="respondent-select" v-for="(one, i) of this.data" :key="i">
      <h5>Условие {{ i + 1 }}</h5>
      <v-select
        class="sel"
        :options="statusesOfCard"
        :reduce="(option) => option.value"
        label="title"
        style="background: white"
        v-model="one.status"
      />
    </div>
    <div class="range-btns">
      <button @click="plus" class="btn">Добавить статус</button>
      <button @click="minus" class="btn">Удалить статус</button>
    </div>
  </div>
</template>

<script>
export default {
  props: { id: Number, index: Number },
  data() {
    return {
      data: [{ status: 'Выберите статус карты' }],
      statusesOfCard: [
        { value: 'active', title: 'Активна' },
        { value: 'unactive', title: 'Не активна' },
      ],
    }
  },
  methods: {
    plus() {
      this.data.push({ status: 'Выберите статус карты' })
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
