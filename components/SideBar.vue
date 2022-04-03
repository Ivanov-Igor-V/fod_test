<template>
  <div>
    <nav class="navigation">
      <NuxtLink to="/" class="navigation__link">
        <div class="navigation__home"></div>
      </NuxtLink>
      <NuxtLink to="/polls" class="navigation__link">
        <div class="navigation__fake-icon">I</div>
        <div>Опросы</div></NuxtLink
      >
      <NuxtLink to="/users" class="navigation__link">
        <div class="navigation__fake-icon">I</div>
        <div>Пользователи</div>
      </NuxtLink>
      <NuxtLink to="/black-list" class="navigation__link">
        <div class="navigation__fake-icon">I</div>
        <div>Черные списки</div>
      </NuxtLink>
      <NuxtLink to="/call-center" class="navigation__link">
        <div class="navigation__fake-icon">I</div>
        <div>Колл центр</div>
      </NuxtLink>
    </nav>
  </div>
</template>
