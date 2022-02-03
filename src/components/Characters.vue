<template>
  <div class="container">
    <div class="row">
      <input class="mb-2" v-model="searchCharactersPhrase" />
      <div>
        {{ searchCharactersResultsText }}
      </div>
    </div>
    <div class="mb-2">
      <div>Highlighted species:</div>
      <button class="btn btn-primary" @click="highlightSpecies('')">
        None
      </button>
      <button
        class="btn btn-primary"
        v-for="species in speciecList"
        :key="species"
        @click="highlightSpecies(species)"
      >
        {{ species }}
      </button>
    </div>
    <div class="row">
      <div
        v-for="character in filteredCharacters"
        :key="character.id"
        class="card col-4 card-bg"
        :style="{
          'background-color':
            character.species === hightLightedSpecies ? 'yellow' : '',
        }"
      >
        <img :src="character.image" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{{ character.name }}</h5>
          <p class="card-text">Status: {{ character.status }}</p>
          <p class="card-text">Gender: {{ character.gender }}</p>
          <p class="card-text">Species: {{ character.species }}</p>
        </div>
      </div>
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <button
              :disabled="currentCharactersPage === 1"
              class="page-link"
              @click="setCurrentCharatersPage(currentCharactersPage - 1)"
            >
              Previous
            </button>
          </li>
          <li
            class="page-item"
            @click="setCurrentCharatersPage(currentCharactersPage + 1)"
          >
            <button class="page-link">Next</button>
          </li>
        </ul>
      </nav>
    </div>
    <div class="row mt-4">
      <input class="mb-2" v-model="searchLocationsPhrase" />
      <div>
        {{ searchLocationsResultsText }}
      </div>
    </div>
    <div class="row mt-3">
      <div
        v-for="location in filteredLocations"
        :key="location.id"
        class="card col-4"
      >
        <div class="card-body">
          <h5 class="card-title">{{ location.name }}</h5>
          <p class="card-text">Type: {{ location.type }}</p>
          <p class="card-text">Dimension: {{ location.dimension }}</p>
        </div>
      </div>
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <button
              :disabled="currentLocationsPage === 1"
              class="page-link"
              @click="setCurrentLocationsPage(currentLocationsPage - 1)"
            >
              Previous
            </button>
          </li>
          <li class="page-item">
            <button
              class="page-link"
              @click="setCurrentLocationsPage(currentLocationsPage + 1)"
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Characters",
  data() {
    return {
      characters: [],
      locations: [],
      searchCharactersPhrase: "",
      searchLocationsPhrase: "",
      hightLightedSpecies: "",
      nextCharactersPage: "",
      nextLocationsPage: "",
      currentCharactersPage: 1,
      currentLocationsPage: 1,
    };
  },
  watch: {
    async currentCharactersPage(value) {
      await this.getCharacters(value);
    },
    async currentLocationsPage(value) {
      await this.getLocations(value);
    },
  },
  computed: {
    highlightedSpeciesText() {
      return this.hightLightedSpecies
        ? `Hightlighted specius: ${this.hightLightedSpecies}`
        : "";
    },
    searchCharactersResultsText() {
      return this.searchCharactersPhrase
        ? `Search results for: ${this.searchCharactersPhrase}`
        : "";
    },
    searchLocationsResultsText() {
      return `Search results for: ${this.searchLocationsPhrase}`;
    },
    speciecList() {
      return [
        ...new Set(this.characters.map((character) => character.species)),
      ];
    },
    filteredCharacters() {
      return this.characters.filter((character) =>
        character.name
          .toLowerCase()
          .includes(this.searchCharactersPhrase.toLowerCase())
      );
    },
    filteredLocations() {
      return this.locations.filter((location) =>
        location.name
          .toLowerCase()
          .includes(this.searchLocationsPhrase.toLowerCase())
      );
    },
  },
  async created() {
    await this.getCharacters();
    await this.getLocations();
  },
  methods: {
    setCurrentCharatersPage(page) {
      this.currentCharactersPage = page;
    },
    async getCharacters() {
      const url = `https://rickandmortyapi.com/api/character?page=${this.currentCharactersPage}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        this.characters = data.results;
      } catch (e) {
        console.warn(e);
      }
    },
    highlightSpecies(species) {
      this.hightLightedSpecies = species;
    },
    async getLocations() {
      const url = `https://rickandmortyapi.com/api/location?page=${this.currentLocationsPage}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        this.locations = data.results;
      } catch (e) {
        console.warn(e);
      }
    },
    setCurrentLocationsPage(page) {
      this.currentLocationsPage = page;
    },
  },
};
</script>

<style scoped>
button {
  display: inline-block;
  margin: 0 5px;
}
</style>
