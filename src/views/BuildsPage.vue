<script setup>
import BuildCards from '../components/BuildCards.vue'
</script>

<template>
  <div class="TitleBuild">
    <h1>Last Epoch Builds</h1>
  </div>
  <h2>Builds</h2>
  <div class="BuildCards">
    <BuildCards text="Sentinel" img="Sentinel.png" alt="Logo Sentinel" class="BuildCardsItem" />
    <BuildCards text="Rogue" img="Rogue.png" alt="Logo Rogue" class="BuildCardsItem" />
    <BuildCards text="Mage" img="Mage.png" alt="Logo Mage" class="BuildCardsItem" />
    <BuildCards text="Primalist" img="Primalist.png" alt="Logo Primalist" class="BuildCardsItem" />
    <BuildCards text="Acolyte" img="Acolyte.png" alt="Logo Acolyte" class="BuildCardsItem" />
  </div>
</template>

<style>
h1 {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
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
  grid-template-columns: repeat(2, 1fr);
  display: grid;
  justify-items: center;
}
.BuildCardsItem:last-child {
  justify-self: center;
}
</style>
