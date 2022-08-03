import { createRouter,createWebHistory } from 'vue-router'; 

import Search from '../views/contenu/search.vue'; 
import HandleContenu from '../views/contenu/handle.vue'; 

export const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path: "/" , name: "Home", component : Search},
        {path: "/contenu/create", name:"create-contenu", component:HandleContenu },
        {path: "/contenu/:id/edit", name:"edit-contenu", component:HandleContenu }
    ]
})
