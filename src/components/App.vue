<template>
    <Fragment>
        {{userInfo}}
        {{request}}
        <h1>Hello Vue 3!</h1>
        <h1>{{newCount}}</h1>
        <button @click="increment">Stroe add</button>
        <button @click="getUserInfo">user add</button>
        <button @click="inc">Clicked {{ count }} times.</button>
        <button @click="getMovie">getMovie</button>
        <br>
        <img v-for="movie in movieItems" :key="movie.id" :src="movie.img" alt="" />
    </Fragment>
</template>

<script lang="ts">
    import { defineComponent, ref } from 'vue'
    import { mapActions, mapGetters } from 'vuex';
    import { request } from '../service/api';
    import { getMovieFn } from '../service/movie';
    export default defineComponent({
        computed: {
            newCount() {
                console.log(this.$store);
                return this.$store.getters.newCount
            },
            userInfo() {
                return {
                    sysFlag: (this.$store.state as any).user.sysFlag,
                    name: (this.$store.state as any).user.name
                }
            }
        },
        setup() {
            const count = ref(0)
            const inc = () => {
                count.value++
            }
            

            return {
                count,
                inc,
                ...getMovieFn()
            }
        },
        methods: {
            increment() {
                // this.$store.commit('increment', 20);
                this.$store.dispatch('add');
            },
            ...mapActions({
                getUserInfo: 'user/getUserInfo'
            })
        }
    })
</script>

<style scoped>
    h1 {
        font-family: Arial, Helvetica, sans-serif;
    }
</style>
