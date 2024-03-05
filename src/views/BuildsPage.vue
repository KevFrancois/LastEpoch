<script setup></script>

<template>
  <div class="TitleBuild">
    <h1>Last Epoch Builds</h1>
  </div>
  <h2>Builds</h2>
  <div class="classes">
    <sections class="Sentinel">
      <h3>Sentinel</h3>
    </sections>
    <sections class="Rogue">
      <h3>Rogue</h3>
    </sections>
    <sections class="Mage">
      <h3>Mage</h3>
    </sections>
    <sections class="Primalist">
      <h3>Primalist</h3>
    </sections>
    <sections class="Acolyte">
      <h3>Acolyte</h3>
    </sections>
  </div>

  <main></main>
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
  background-image: url('../../img/HBackground3.jpeg');
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
</style>
