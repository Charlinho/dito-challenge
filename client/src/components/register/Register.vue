<template>
  <div class="row">
    <br>
    <form class="col s10 m8 offset-m2">
      <div class="card">        
        <div class="card-content">
          <div class="row">
            <div class="input-field col s12 m6">
              <input placeholder="Nome" id="first_name" type="text" class="validate">
              <label for="first_name">Nome</label>
            </div>
            <div class="input-field col s12 m6">
              <input id="last_name" type="text" class="validate">
              <label for="last_name">Sobre Nome</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="email" type="email" class="validate">
              <label for="email">Email</label>
            </div>
          </div>      
          <div class="row">
            <div class="input-field col s12">
              <input id="password" type="password" class="validate">
              <label for="password">Password</label>
            </div>
          </div>
          <div class="row">
            <div class="col s12 m6 offset-m9">              
              <button @click="backToHome()" class="btn waves-effect waves-light" type="button" name="action">Sair</button>              
              <button class="btn waves-effect waves-light" type="submit" name="action">Salvar</button>
            </div>            
          </div>                                       
        </div>        
      </div>                  
    </form>
  </div>
</template>
<script>
export default {
  methods: {
    backToHome (event) {      
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>


