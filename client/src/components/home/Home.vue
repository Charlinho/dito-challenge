<template>  
  <div class="row">
    <br>
    <div class="input-field col s12 m8 offset-m2">
      <input placeholder="Pesquisar" id="first_name" type="text" class="validate">
      <label for="first_name">Pesquisar</label>
    </div>    
  </div>  
</template>

<script>
import Card from '../shared/card/Card.vue'

export default {
  components: {
    'card': Card
  },
  name: 'Home'
}
</script>

<style scoped>

</style>
