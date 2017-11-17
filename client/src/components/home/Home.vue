<template>
  <div>  
    <div class="row">
      <form @submit.prevent="search()">
        <br>
        <div class="input-field col s12 m8 offset-m2">
          <input v-model="filter" id="autocomplete-input" type="text" class="autocomplete">
          <label for="autocomplete-input">Pesquisar</label>
        </div>      
      </form>    
    </div>
    <div v-show="!isAuthenticated()" class="row">
      <p class="center-align">Para visualizar as buscas no autocomplete <router-link to="/login">logue</router-link> no sistema. Caso não tenha usuário faça o <router-link to="/register">cadastro.</router-link></p>
    </div>
    <div class="row">
      <div v-for="dt in data" :key="dt.id">
        <card :title="dt.title" :img-url="dt.imgUrl" :description="dt.description"></card>
      </div>
      <div v-show="data.length == 0">
        <p class="center-align">Nenhum resultado encontrado!</p>
      </div>
    </div> 
  </div>   
</template>

<script>
import Card from '../shared/card/Card.vue'
import Event from '../../domain/event/Event'
import EventService from '../../domain/event/EventService'
import DataService from '../../domain/data/DataService'

export default {
  components: {
    'card': Card
  },
  data () {
    return {
      data: [],
      filter: '',
      event: new Event('search')
    }
  },
  created () {
    this.service = new DataService(this.$resource)
    this.eventService = new EventService(this.$resource)
    this.listData()
    this.listEvents()
  },
  mounted: () => {
    setTimeout(() => {
      /* eslint-env jquery */
      $(document).ready(function () {
        $('.button-collapse').sideNav()
      })
    }, 1000)
  },
  methods: {
    listData () {
      this.service.listAll().then((data) => {
        this.data = data
      }, err => console.log(err))
    },
    listEvents () {
      let loggedUser = this.$ls.get('logged')
      if (loggedUser) {
        let autoCompleteData = {
          data: {
            '_': null,
            ' ': null
          }
        }
        this.eventService.listAll(loggedUser._id)
          .then((data) => {
            data.forEach((el, index) => {
              autoCompleteData.data[el.word] = null
            })
            this.autoComplete(autoCompleteData.data)
          }, err => console.log(err))
      }
    },
    search () {
      if (this.filter) {
        this.createEvent()
        let exp = new RegExp(this.filter.trim(), 'i')
        this.data = this.data.filter(dt => exp.test(dt.title))
      } else {
        this.listData()
      }
    },
    isAuthenticated () {
      return this.$ls.get('logged') !== null
    },
    autoComplete (data) {
      $('input.autocomplete').autocomplete({
        data,
        limit: 10,
        onAutocomplete: (val) => {
          this.filter = val
          this.search()
        },
        minLength: 2
      })
    },
    createEvent () {
      if (this.$ls.get('logged')) {
        this.event.word = this.filter
        this.event.userId = this.$ls.get('logged')._id

        this.eventService.create(this.event)
          .then((data) => {
            console.log('Evento Criado com Sucesso')
            this.listEvents()
          }, err => console.log(err))
      }
    }
  }
}
</script>

<style scoped>

</style>
