<template>
    <div class="dropper">
        <input 
            type="file" 
            @change="uploadImages($event.target.files)"
            multiple
            accept="image/*"
        />
        <span>Drop image here</span>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name:'UploadForm',
    methods:{
        ...mapActions(['uploadImages'])
    }
}
</script>
<style scoped>
    .dropper{
        height: 30vh;
        border: 6px dashed black;
        border-radius:6px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .dropper:hover{
        background-color: #eee;
    }
    input{
        height: 30vh;
        width: 100%;
        position:absolute;
        opacity: 0;
    }
</style>