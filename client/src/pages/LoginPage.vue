<script setup>
import { Pop } from '@/utils/Pop.js'
import forestBg from '/img/forest-bg.jpg'
import blurryForestBg from '/img/blurry-forest-bg.webp'
import { logger } from '@/utils/Logger.js'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const formData = ref({
  username:'',
  password:''
})

const showPassword = ref(false)
const highRezBgLoaded = ref(false)

async function submitLogin(){
  try {
    logger.log('Loging in')
    router.push({name: 'Home'})
  }
  catch (error){
    Pop.error(error, "Could not Login")
  }
}
</script>


<template>
    <div class="login-container">
      <div class="position-relative img-container">
        <img class="login-img-blur" :src="blurryForestBg" alt="">
        <img @load="highRezBgLoaded = true" class="login-img" :src="forestBg" :class="{'img-loaded': highRezBgLoaded}" alt="">
      </div>
        <section class="container">
          <div class="row align-items-center justify-content-between flex-column p-1 p-md-3 p-lg-4">

            <div class="col-12 col-md-8">
              <img class="bcl-logo" height="80" src="/public/img/bcl_logo.png" alt="">
            </div>

            <div class="login-card col-12 col-md-8">
              <div class="fs-2 fw-bold">Sales Assistant</div>
              <div class="fs-2 fw-bold mb-3">Login</div>
              <form class="row" @submit.prevent="submitLogin">
                <div class="mb-3">
                  <label for="">Username or email</label>
                  <input type="text" required class="form-control">
                </div>
                <div class="mb-3">
                  <label for="">Password</label>
                  <div class="input-group">
                    <input v-if="!showPassword" v-model="formData.password" type="password" required class="form-control">
                    <input v-else v-model="formData.password" type="text" required class="form-control">
                    <button @click="showPassword = !showPassword" type="button" class="btn btn-outline-secondary border-start-0" title="toggle password visibility">
                      <i v-if="!showPassword" class="mdi mdi-eye-off"></i>
                      <i v-else class="mdi mdi-eye"></i>
                    </button>
                  </div>
                </div>
                <div class="mb-3">
                  <button type="submit" class="btn btn-primary w-100 text-white fw-medium">Login</button>
                </div>
                <div class="mb-3 text-secondary">
                  <button type="button" class="btn w-100"> forgot password?</button>
                </div>
              </form>
            </div>

            <div class="text-secondary col-12 col-md-8 text-center">
              Bear Creek something something
            </div>
          

          </div>
        </section>
    </div>
</template>


<style lang="scss" scoped>

.login-container{
  --login-w: 100%;
  --bg-w: 0px;
  font-family: var(--montserrat-font);
  display: grid;
  grid-template-columns: var(--bg-w) minmax(var(--login-w), 1fr);
  height: 100dvh;
  width: 100dvw;
  overflow: hidden;

  .img-container{
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #374552;
  }

  .login-img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    position: absolute;
    opacity: 0;
    transition: opacity .25s ease;
  }
  .login-img-blur{
    transition: opacity .25s ease;
    filter: blur(25px);
    width: 120%;
    height: 120%;
    object-fit: cover;
    object-position: top;
    position: absolute;
    left: -10%;
  }

  .img-loaded{
    opacity: 1;
  }

  .bcl-logo{
    width: 100%;
    object-fit: contain;
  }

  .container{
    height: 100%;
    .row{
      height: 100%;
    }
  }

  .login-card{
    display: flex;
    flex-direction: column;
  }
}

@media  screen and (min-width: 700px) {
  .login-container{
    --bg-w: 1fr;
    --login-w: 700px;
  }
}

</style>