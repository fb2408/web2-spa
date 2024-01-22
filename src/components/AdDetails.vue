<template>
  <div :class="{ fav: ad.fav }" class="one-ad">
    <img :src="ad.image" alt="Slika" class="ad-img" />
    <h2 class="one-ad-el">{{ ad.title }}</h2>
    <h3 class="one-ad-el">Cijena: {{ ad.price }} €</h3>
    <h4 class="one-ad-el">Oglas izdao: {{ ad.adOwner }}</h4>
    <p class="one-ad-el">{{ ad.description }}</p>
    <div class="fav-and-button">
      <i class="fa fa-heart heart" @click="setToFav(ad)"></i>
      <button class="delete-btn" @click="deleteAd_local(ad.id)">Obriši</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { useAdStore } from "../stores/adStore.js";

export default {
  props: ["ad"],
  methods: {
    ...mapActions(useAdStore, ["deleteAd", "setToFav"]),
    deleteAd_local(id) {
      this.deleteAd(id);
      this.$emit("deleteAd");
    },
  },
};
</script>

<style scoped>
.ad-img {
  height: 150px;
}

.one-ad-el {
  padding-top: 2px;
  padding-bottom: 2px;
  margin: 4px;
}

.one-ad {
  background-color: lightblue;
  margin: 10px;
  border-radius: 5px;
  padding: 2rem;
}

.fav-and-button {
  margin: 15px;
  display: flex;
  justify-content: space-around;
}

.heart {
  font-size: 26px;
  color: beige;
}

.delete-btn {
  border-radius: 5px;
  background-color: lightgray;
}

.fav .heart {
  color: rgba(255, 0, 0, 0.792);
}
</style>
