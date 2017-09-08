<template>
    <div>
        <navModule></navModule>
        <!--<img src="../assets/logo.png">-->
        <tab1></tab1>
    </div>
</template>

<script>
    import tab1 from '../views/tab-1.vue';
    import navModule from '../common/nav.vue';

    export default {
        name: 'app',
        components: {
            tab1,
            navModule
        }
    };
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin: 0;
    }
</style>
