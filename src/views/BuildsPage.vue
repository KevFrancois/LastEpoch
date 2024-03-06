<script setup>
import BuildCards from '../components/BuildCards.vue'
</script>

<template>
  <div class="TitleBuild">
    <h1>Last Epoch Builds</h1>
  </div>
  <h2>Builds</h2>
  <div class="BuildCards">
    <div class="Sentinel">
      <RouterLink to="/Builds/Sentinel" title="Accueil" alt="Accueil" class="Surlign"
        ><BuildCards text="Sentinel" img="Sentinel.png" alt="Logo Sentinel" class="BuildCardsItem"
      /></RouterLink>
    </div>
    <div class="Rogue">
      <RouterLink to="/Builds/Rogue" title="Accueil" alt="Accueil" class="Surlign"
        ><BuildCards text="Rogue" img="Rogue.png" alt="Logo Rogue" class="BuildCardsItem"
      /></RouterLink>
    </div>
    <div class="Mage">
      <RouterLink to="/Builds/Mage" title="Accueil" alt="Accueil" class="Surlign"
        ><BuildCards text="Mage" img="Mage.png" alt="Logo Mage" class="BuildCardsItem"
      /></RouterLink>
    </div>
    <div class="Primalist">
      <RouterLink to="/Builds/Primalist" title="Accueil" alt="Accueil" class="Surlign"
        ><BuildCards
          text="Primalist"
          img="Primalist.png"
          alt="Logo Primalist"
          class="BuildCardsItem"
        />
      </RouterLink>
    </div>
    <div class="Acolyte">
      <RouterLink to="/Builds/Acolyte" title="Accueil" alt="Accueil" class="Surlign"
        ><BuildCards text="Acolyte" img="Acolyte.png" alt="Logo Acolyte" class="BuildCardsItem"
      /></RouterLink>
    </div>
  </div>
</template>

<style>
h1 {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  font-family: 'Play', sans-serif;
  font-weight: 550;
  font-style: normal;
  color: rgb(255, 255, 255);
  -webkit-text-stroke: 1px;
  -webkit-text-stroke-color: rgb(175, 175, 175);
  background-image: url('../assets/HBackground3.jpeg');
  background-attachment: fixed;
  background-position: bottom;
  background-size: cover;
  height: 150px;
  border-radius: 10px;
}
body {
  background-color: #120e18;
}
h2 {
  text-align: center;
  color: azure;
  margin-top: 50px;
  margin-bottom: 50px;
}
h3 {
  color: aliceblue;
  text-align: center;
}
.classes {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.BuildCards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas:
    ' a a b b '
    ' c c d d '
    ' e f f g ';
  justify-content: center;
  gap: 25px;
}
.Sentinel {
  grid-area: a;
}
.Rogue {
  grid-area: b;
}
.Mage {
  grid-area: c;
}
.Primalist {
  grid-area: d;
}
.Acolyte {
  grid-area: f;
}
.Surlign {
  text-decoration: none;
}
</style>
