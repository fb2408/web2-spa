<template>
  <div id="overlay">
    <div class="form-div">
      <form class="form" @submit.prevent="addNewMovie" @reset="closeForm">
        <div class="form-el">
          <label class="label">Naslov</label>
          <input type="text" class="input-text" v-model="newMovie.title" />
        </div>
        <div class="form-el">
          <label class="label">Najbolja uloga</label>
          <input type="text" v-model="newMovie.topCast" />
        </div>
        <div class="form-el">
          <label class="label">Redatelj</label>
          <input type="text" v-model="newMovie.director" />
        </div>
        <div class="form-el">
          <label class="label">Opis</label>
          <textarea
            rows="4"
            placeholder="Unesite kratak opis filma"
            v-model="newMovie.description"
          ></textarea>
        </div>
        <h2 class="error" v-if="errorInPuttingIn">
          Provjerite jeste li dobro ispunili formu
        </h2>
        <div class="form-el buttons">
          <button type="submit" class="button add">Dodaj</button>
          <button type="reset" class="button cancel">Odustani</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: ["creatingNew"],
  data() {
    return {
      newMovie: {
        id: Math.floor(Math.random() * 10000),
        title: "",
        image: "",
        director: "",
        topCast: null,
        description: "",
        fav: false,
      },
      errorInPuttingIn: false,
    };
  },
  methods: {
    closeForm() {
      this.$emit("closingForm");
    },
    addNewMovie() {
      if (
        this.newMovie.title === "" ||
        this.newMovie.director === "" ||
        this.newMovie.topCast === null
      ) {
        this.errorInPuttingIn = true;
      } else {
        this.errorInPuttingIn = false;
        this.$emit("newMovie", { newMovie: this.newMovie });
      }
    },
  },
};
</script>

<style scoped>
#overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.614);
  z-index: 2;
  cursor: pointer;
}

.form-div {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  width: 25%;
  height: 60%;
  background-color: lightblue;
}

.form {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: left;
}

.form-el {
  margin-top: 2rem;
  flex-grow: 1;
}

.buttons {
  flex-grow: 1;
}

.button {
  margin: 1rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  font-size: 17px;
  border-radius: 10px;
}

.label {
  margin-right: 1rem;
}

input {
  padding: 8px;
  border-radius: 10px;
}

textarea {
  border-radius: 10px;
}

.error {
  font-size: 17px;
  color: rgba(255, 0, 0, 0.832);
}
</style>
