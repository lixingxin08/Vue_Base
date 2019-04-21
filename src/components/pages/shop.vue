<template>
    <div>
        <div class="slider">
            <div class="list">
                <div class="sss" v-for="(item,index) in list">{{item}}</div>
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
<style lang="scss" scoped>
$bcg_color:red;
@mixin color{
   background-color: yellow;
}
.slider{
    width: 1rem;
    height: 3rem;
    margin: 0 auto;
    position: relative;
    .list{
    width: 4rem;
    height: 3rem;
    position: absolute;
    box-sizing: border-box;
    background-color: $bcg_color;
    .sss{
    width: 1rem;
    height: 3rem;
    float: left;
        box-sizing: border-box;
    @include color;
           }
        }
      }


</style>
