<template>
  <footer>
    <div class="FooterNav">
      <a
        href="https://lastepoch.com/"
        title="Last Epoch Official Website"
        alt="Last Epoch Official Website"
        target="_blank"
        ><img src="../assets/Logo_Last_Epoch.png" class="LastEpochLogo"
      /></a>
      <img src="../assets/DiscordLogo2.png" class="Discord" />
    </div>
  </footer>
</template>

<style>
footer {
  margin-top: 300px;
}
.LastEpochLogo {
  width: 4%;
  transition: 0.3s;
}
.LastEpochLogo:hover {
  transform: scale(1.1);
  transition: 0.3s;
}
.Discord {
  width: 2%;
  transition: 0.3s;
}
.Discord:hover {
  transform: scale(1.1);
  box-shadow: 0 0 15px #5701a8;
  text-shadow: 0 0 10px #5701a8;
  border-radius: 15px;
  background-color: #201a29;
  opacity: 85%;
  transition: 0.3s;
}
.FooterNav {
  display: flex;
  align-items: center;
}
</style>
