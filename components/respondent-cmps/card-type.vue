<template>
  <div>
    <h1>card-type</h1>
    <v-select
      class="sel"
      :options="typesOfCard"
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
      typesOfCard: [
        { value: 'gold', title: 'Gold' },
        { value: 'silver', title: 'Silver' },
        { value: 'bronze', title: 'Bronze' },
      ],
      selected: "Выберите тип карты"
    }
  },
  watch: {
  selected(newVal) {
    this.$store.commit('dataContent', {data: newVal, id: this.prop })
  }
}
}
</script>

<style></style>
