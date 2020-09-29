declare module '*.vue' {
    import { defineComponent } from 'vue';
    import { ComponentCustomProperties } from 'vue'
    import { Store } from 'vuex'
    const Component: ReturnType<typeof defineComponent>;
    export default Component;
    
    declare module '@vue/runtime-core' {
      // Declare your own store states.
      interface State {
        count: number
      }
    
      interface ComponentCustomProperties {
        $store: Store<State>
      }
    }
}