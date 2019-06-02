<template>
    <div>
        <div class="slider">
            <div class="list">
                <div class="sss" v-for="(item,index) in list" :key="index">{{item}}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[0,1,2,3]
        }
    },
    methods:{

    }
}
</script>

