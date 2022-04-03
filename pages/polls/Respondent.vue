<template>
  <div class="respondent">
    <h3 class="respondent__title">Добавить опрос</h3>
    <div v-if="!this.formLength" class="respondent__condition">Нет условий</div>
    <div
      class="respondent__condition"
      v-for="(item, index) in this.$store.state.form"
      :key="item.id"
    >
      <div class="respondent__select">
        <h5>Условие {{ index + 1 }}</h5>
        <!-- <v-select
            class="select"
            :options="options"
            :reduce="(option) => option.value"
            label="title"
            v-model="selected"
            style=" background: white;"
          >
          </v-select> -->
          <respondent-conditions :prop="item.id" />
      </div>

      <div class="respondent__delete">
        <button class="btn" @click="deleteCond(item)">Удалить условие</button>
      </div>
    </div>
    <div class="respondent__footer">
      <div class="respondent__addNew">
        <button class="btn" @click="addNewCond">
          Нажмите чтобы добавить новое условие выборки. Все условия связываются
          между собой логическим "И".
        </button>
      </div>
      <div class="respondent__btns">
        <button class="btn">Протестировать опрос</button>
        <button class="btn">Далее</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
export default {
  data() {
    return {
      HugeObject: [],
      conditions: [],
      id: '',
      condType: 'age',
    }
  },
  methods: {
    ...mapMutations(['pushCondition', 'deleteCondition']),

    addNewCond() {
      this.id = Date.now()
      let newCond = { id: this.id, condType: this.condType }
      this.pushCondition(newCond)
    },

    deleteCond(item) {
      this.deleteCondition(item)
    },
  },
  computed: {
    ...mapGetters(['formLength']),
  },
}
</script>
