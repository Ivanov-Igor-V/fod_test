<template>
  <div class="conditions">
    <div>
      <div class="respondent-select">
        <h5>Условие {{ index + 1 }}</h5>
        <v-select
          class="select"
          :options="options"
          :reduce="(option) => option.value"
          label="title"
          v-model="selected"
          style="background: white"
        >
        </v-select>
      </div>
    </div>
    <div>
      <keep-alive>
        <component :id="id" :is="this.cmp" />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import AgeFields from './respondent-cmps/age-fields.vue'
import CardStatus from './respondent-cmps/card-status.vue'
import CardType from './respondent-cmps/card-type.vue'
export default {
  components: { AgeFields, CardStatus, CardType },
  name: 'respondent-conditions',
  props: { id: Number, index: Number },
  data() {
    return {
      options: [
        { value: 'age', title: 'Возраст респондента' },
        { value: 'card-status', title: 'Статус карты лояльности' },
        { value: 'card-type', title: 'Тип карты лояльности' },
      ],

      selected: 'Выберите',
      cardActivity: true,
      cmp: '',
    }
  },
  methods: {},
  watch: {
    selected(newVal) {
      this.$store.commit('ChangeType', { id: this.id, condType: newVal })
      if (newVal == 'card-status') {
        this.cmp = 'CardStatus'
      }
      if (newVal == 'card-type') {
        this.cmp = 'CardType'
      }
      if (newVal == 'age') {
        this.cmp = 'ageFields'
      }
    },
  },
}
</script>

<style></style>
