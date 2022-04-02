<template>
  <div class="wrapper">
    <side-bar />

    <div class="main">
      <div class="header">
        <div class="header__search">
          <input
            type="text"
            class="search__input"
            placeholder="Поиск по сайту"
          />
        </div>
        <div class="header__account">
          <div class="account__photo"></div>
          <div>Some name</div>
        </div>
      </div>
      <div class="add-questions__bar">
        <NuxtLink to="/polls/Pars" class="add-questions__link">
          Параметры
        </NuxtLink>
        <NuxtLink to="/polls/Questions" class="add-questions__link">
          Вопросы
        </NuxtLink>
        <NuxtLink to="/polls/Logic" class="add-questions__link">
          Логика
        </NuxtLink>
        <NuxtLink to="/polls/Conditions" class="add-questions__link">
          Условия
        </NuxtLink>
        <NuxtLink to="/polls/Respondent" class="add-questions__link">
          Респоденты
        </NuxtLink>
      </div>
      <Nuxt />
    </div>
  </div>
</template>
