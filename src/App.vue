<script setup>
import { RouterLink, RouterView } from 'vue-router'
import LogoLe from '../src/components/LogoLe.vue'
</script>

<template>
  <header class="Mainheader">
    <LogoLe class="LogoLe" />
    <nav>
      <RouterLink to="/" title="Accueil" alt="Accueil" class="accueil">Accueil</RouterLink>
      <RouterLink to="/Builds" title="Builds" alt="Builds" class="builds">Builds</RouterLink>
    </nav>
  </header>
  <footer></footer>

  <RouterView />
</template>

<style>
.Mainheader {
  display: flex;
  margin-top: 10px;
  align-items: center;
  background-color: #1a1124;
  justify-content: flex-start;
  width: 100%;
  border-radius: 5px;
  position: sticky;
  top: 0;
}
.accueil,
.builds {
  text-decoration: none;
  margin: 10px;
  color: white;
}
body {
  margin: 0 auto;
  width: 80%;
}
</style>
