<template>
  <div class="row">
    <br>
    <form @submit.prevent="save()" class="col s8 m8 offset-m2">
      <div class="card">              
        <div class="card-content">
          <div class="row">
            <div class="input-field col s12">
              <input v-model="data.title" id="titulo" type="text" class="validate">
              <label for="Título">Título</label>
            </div>
          </div>                          
          <div class="row">
            <div class="input-field col s12">
              <input v-model="data.imgUrl" id="url" type="text" class="validate">
              <label for="URL Imamge">URL Imagem</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <textarea v-model="data.description" id="textarea" class="materialize-textarea"></textarea>
              <label for="textarea">Descriação</label>
            </div>
          </div>
          <div class="row">
            <div class="col s12 m6 offset-m9">                            
              <button class="btn waves-effect waves-light" type="submit" name="action">Salvar</button>
            </div>            
          </div>                                             
        </div>                  
      </div>
    </form>  
  </div>  
</template>
<script>
import Data from '../../domain/data/Data'
import DataService from '../../domain/data/DataService'

export default {
  data () {
    return {
      data: new Data()
    }
  },
  created () {
    this.service = new DataService(this.$resource)
  },
  methods: {
    save () {
      this.service.create(this.data)
        .then(() => {
          this.data = new Data()
        }, err => console.log(err))
    }
  }
}
</script>
<style>

</style>


