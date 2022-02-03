export default {
  data() {
    return {
      items: [],
      page: 1,
      category: ""
    };
  },
  methods: {
    async getData() {
      const url = `https://rickandmortyapi.com/api/${this.category}?page=${this.page}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        this.items = this.items.concat(
          data.results.map((character) => character.name)
        );
        this.page++;
      } catch (e) {
        console.warn(e);
      }
    }
  }
};
