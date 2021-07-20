import api from '../../API/imgur.js'
import { router } from '../../main.js';

const state = {
    images:[]
};
const getters = {
    allImages: state => state.images
};
const actions = {
    async fetchImages({rootState,commit}){
        const {token} = rootState.auth
        const response = await api.fetchImages(token)
        commit('setImages',response.data.data)
    },
    async uploadImages({rootState},images){
        //Get the token from auth module
        const {token} = rootState.auth

        //call our api module to do the upload
        await api.upload(token,images)

        //Redirect to ImageList Component
        router.push('/')
        
    }
};
const mutations = {
    setImages(state,images){
        state.images = images
    }
}

export default{
    state,
    getters,
    actions,
    mutations
}