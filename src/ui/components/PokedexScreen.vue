<template>
  <div class="screen">
    <div class="pokedex-screen">
      <img
        v-if="error"
        src="../assets/glitch-static.gif"
        class="pokedex-no-screen"
      />
      <img
        v-else-if="loading"
        src="../assets/glitch-static.gif"
        class="pokedex-no-screen"
      />
      <div class="pokemon-info" v-else-if="pokemon">
        <h2 class="pokemon-name">
          Hola <b>{{ pokemon.name }}!</b>
        </h2>
        <img
          class="pokemon-img"
          v-bind:src="pokemon.sprites.other.home.front_default"
          v-bind:alt="pokemon.name"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import {Pokemon} from "@/app/modules/Pokedex/domain/Pokemon";
import {getModule} from "vuex-module-decorators";
import PokedexStore from "@/ui/store/modules/pokedex/pokedexStore";

@Component


export default class PokedexScreen extends Vue {
  // @Prop() private pokemon!: Pokemon;
  @Prop({ default: true }) private error!: boolean;
  @Prop({ default: true }) private loading!: boolean;

  pokedexModule = getModule(PokedexStore, this.$store);

  get pokemon(): Pokemon {
    //return {id:0, name:"", base_experience: 0, sprites: {front_default: ''}}
    return this.pokedexModule.pokemon
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,400;1,700&display=swap");
.screen {
  width: 500px;
  height: 350px;
  background: rgba(0, 212, 255, 1);
  background: linear-gradient(
    111deg,
    rgba(218, 255, 253, 1) 0%,
    rgba(0, 212, 255, 1) 3%,
    rgba(218, 255, 253, 1) 5%,
    rgba(0, 212, 255, 1) 15%,
    rgba(0, 212, 255, 1) 17%,
    rgba(218, 255, 253, 1) 40%,
    rgba(0, 212, 255, 1) 49%,
    rgba(218, 255, 253, 1) 98%,
    rgba(0, 212, 255, 1) 100%
  );
  margin: 0 auto;
  margin-top: 10px;
  border: 10px solid;
}
.pokedex-no-screen {
  width: 500px;
  height: 350px;
  background-color: #f2f2f2;
  margin: 0 auto;
}
.pokemon-info {
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  > h2 {
    font-size: 2em;
    margin-bottom: 10px;
    text-align: right;
    margin: 5px;
    font-weight: bold;
    font-family: "Roboto Mono", monospace;
  }
  > img {
    width: 300px;
    height: auto;
  }
}
</style>
