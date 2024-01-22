import { defineStore } from "pinia";

export const useAdStore = defineStore("adStore", {
  state: () => ({
    ads: [
      {
        id: 1,
        title: "Prodajem golfa",
        image: "src/assets/1.jpg",
        adOwner: "Mate",
        price: 5000,
        description: "Brutalan je golf",
        fav: true,
      },
      {
        id: 2,
        title: "Prodajem alfu",
        image: "src/assets/2.jpg",
        adOwner: "Ivan",
        price: 6000,
        description: "Brutalan je golf",
        fav: true,
      },
      {
        id: 3,
        title: "Prodajem mercedesa",
        image: "src/assets/3.jpg",
        adOwner: "Stipe",
        price: 10000,
        description: "Brutalan je golf",
        fav: false,
      },
      {
        id: 4,
        title: "Prodajem golfa V",
        image: "src/assets/1.jpg",
        adOwner: "Ana",
        price: 3000,
        description: "Brutalan je golf",
        fav: false,
      },
      {
        id: 5,
        title: "Prodajem gume",
        image: "src/assets/4.jpg",
        adOwner: "Zvone",
        price: 5000,
        description: "Brutalan je golf",
        fav: false,
      },
      {
        id: 6,
        title: "Prodajem mercedesa",
        image: "src/assets/3.jpg",
        adOwner: "Mate",
        price: 10000,
        description: "Brutalan je golf",
        fav: false,
      },
    ],
  }),
  getters: {
    allAds: (state) => state.ads,
    getAdById: (state) => {
      return (id) => state.ads.find((ad) => ad.id === id);
    },
  },
  actions: {
    deleteAd(id) {
      this.ads = this.ads.filter((x) => x.id !== id);
    },
    setToFav(ad) {
      this.getAdById(ad.id).fav = !this.getAdById(ad.id).fav;
    },
    insertAd(ad) {
      this.ads.push(ad);
    },
  },
});
