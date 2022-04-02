<template>
  <div>
      <h1>card-status</h1>
                <v-select
            class="sel"
            :options="statusesOfCard"
            :reduce="(option) => option.value"
            label="title"
            v-model="selected"
          />
  </div>
</template>

<script>
export default {
props: ['prop'],
data() {
  return {
      selected: "Выберите статус карты",
      statusesOfCard: [
        { value: 'active', title: 'Активна' },
        { value: 'unactive', title: 'Не активна' },
      ],
  }
},
watch: {
  selected(newVal) {
    this.$store.commit('dataContent', {data: newVal, id: this.prop })
  }
}
}
</script>

<style>

</style>