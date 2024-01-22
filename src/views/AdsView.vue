<template>
  <div class="ads">
    <div class="empty-div"></div>
    <h1 class="ads-title">Ovo je stranica oglasa</h1>
    <i class="fa fa-plus-square" @click="toggleCreateForm"></i>
    <div class="fav-buttons-div">
      <button v-if="!showFav" @click="toggleShowFav" class="fav-botton">
        Favoriti
      </button>
      <button v-else @click="toggleShowFav" class="fav-botton">
        Svi oglasi
      </button>
    </div>
  </div>
  <div class="container" v-if="showFav">
    <div v-for="ad in getFavs" :key="ad.id">
      <AdDetails :ad="ad" @delete-ad="deleteAd" />
    </div>
  </div>
  <div class="container" v-else>
    <div v-for="ad in allAds" :key="ad.id">
      <AdDetails :ad="ad" @delete-ad="deleteAd" />
    </div>
  </div>
  <div v-if="creatingNew">
    <CreateAd
      :creatingNew="creatingNew"
      @closing-form="toggleCreateForm"
      @new-ad="createNewAd"
    ></CreateAd>
  </div>
</template>

<script>
import AdDetails from "../components/AdDetails.vue";
import CreateAd from "../components/CreateAd.vue";

import { mapState, mapActions } from "pinia";
import { useAdStore } from "../stores/adStore.js";

export default {
  components: { AdDetails, CreateAd },
  data() {
    return {
      showFav: false,
      creatingNew: false,
    };
  },
  computed: {
    ...mapState(useAdStore, ["allAds"]),
    getFavs() {
      return this.allAds.filter((ad) => ad.fav);
    },
  },
  methods: {
    ...mapActions(useAdStore, ["insertAd"]),
    toggleShowFav() {
      this.showFav = !this.showFav;
    },
    deleteAd() {
      console.log("Ad successfully deleted");
    },
    toggleCreateForm() {
      this.creatingNew = !this.creatingNew;
    },
    createNewAd(args) {
      console.log("Created new ad " + args.newAd);
      this.insertAd(args.newAd);
      this.creatingNew = false;
    },
  },
};
</script>

<style>
.ads {
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
}

.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}

.fav-botton {
  padding: 0.8rem;
  background-color: lightgreen;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  border-radius: 10px;
  border: none;
}

.ads-title {
  flex-grow: 8;
}

.fav-botton:hover {
  background-color: rgb(178, 238, 144);
}

.text-to-fav {
  margin-top: 0;
  padding-top: 0;
}

.empty-div {
  margin: 1rem;
  margin-left: 3rem;
  margin-right: 3rem;
  flex-grow: 1;
}

.fa-plus-square {
  font-size: 45px;
  color: lightgray;
  flex-grow: 0.4;
}

.fa-plus-square:hover {
  color: rgba(211, 211, 211, 0.659);
}

.fav-buttons-div {
  flex-grow: 0.6;
}
</style>
