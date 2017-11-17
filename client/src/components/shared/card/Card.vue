<<template>
  <div class="row">
    <div class="col s12 m6 offset-m3">
      <br>
      <div class="card">
        <div class="card-image waves-effect waves-block waves-light">
          <img class="activator" :src="imgUrl" :alt="title">
        </div>
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">{{ title }}<i class="material-icons right">more_vert</i></span>          
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">{{ title }}<i class="material-icons right">close</i></span>
          <p>{{ description }}</p>
        </div>
      </div>
    </div>    
  </div> 
</template>
<script>
export default {
  props: ['title', 'description', 'imgUrl']
}
</script>
<style>

</style>


