<script setup>
import { RouterLink, RouterView } from 'vue-router'
import LogoLe from '../src/components/LogoLe.vue'
</script>

<template>
  <header class="Mainheader">
    <LogoLe class="LogoLe" />
    <nav>
      <div class="NavLinks">
        <RouterLink to="/" title="Accueil" alt="Accueil" class="accueil">Accueil</RouterLink>
        <RouterLink to="/Builds" title="Builds" alt="Builds" class="builds">Builds</RouterLink>
      </div>
    </nav>
  </header>
  <footer>
    <img src="./assets/Logo_Last_Epoch.png" class="LastEpochLogo" />
  </footer>

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
  margin: 15px;
  color: white;
  background-color: #1f142b;
  padding: 7px 15px 7px 15px;
  border-radius: 30px;
  transition: 0.3s;
}
body {
  margin: 0 auto;
  width: 80%;
}
.LastEpochLogo {
  width: 5%;
}
.accueil:hover,
.builds:hover {
  transform: scale(1);
  box-shadow: 0 0 15px #5701a8;
  text-shadow: 0 0 10px #5701a8;
  border-radius: 10px;
  transition: 0.3s;
}
</style>
