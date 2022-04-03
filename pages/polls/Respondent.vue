<template>
  <div class="respondent">
    <h3 class="respondent__title">Добавить опрос</h3>
    <div v-if="!this.formLength" class="respondent__condition">Нет условий</div>
    <div
      class="respondent__condition"
      v-for="(item, index) in this.conditions"
      :key="item.id"
    >
      <respondent-conditions :id="item.id" :index="index" />

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
        <button class="btn" @click="TEST">Протестировать опрос</button>
        <button class="btn" @click="POST">Далее</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
export default {
  data() {
    return {
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

    POST() {
      console.log('какой-то запрос на сервер')
    },

    TEST() {
      console.log('тут какая-то валидация, может быть')
    },
  },
  computed: {
    ...mapGetters(['formLength']),
    ...mapState(['conditions']),
  },
}
</script>
