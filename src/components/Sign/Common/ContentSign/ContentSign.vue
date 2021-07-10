<template>
    <div class="content">
        <LogoSign></LogoSign>
        <WelcomeSign></WelcomeSign>
        <router-view></router-view>
    </div>
</template>

<script>
    import LogoSign from '../ContentSign/ChildContentSign/LogoSign';
    import WelcomeSign from '../ContentSign/ChildContentSign/WelcomeSign';

    export default {
        name: "ContentSign",
        components: {
            LogoSign,
            WelcomeSign,
        }
    }
</script>

<style scoped>
@media only screen and (max-width: 550px) {
  .content{
    margin-left: 20px;
  }
}
</style>