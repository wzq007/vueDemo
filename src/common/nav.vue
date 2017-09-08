<template>
    <div>
        <ul class="nav">
            <li class="nav-btn" v-for="item in typeMap">{{item.label}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                typeMap: [
                    {name: 'tab1', label: 'tab1'},
                    {name: 'tab2', label: 'tab2'},
                    {name: 'tab3', label: 'tab3'},
                    {name: 'tab4', label: 'tab4'}
                ]
            };
        }
    };
</script>

<style type="text/css" lang="less">
    @import "../assets/common/color.less";

    .nav {
        width: 100%;
        height: 40px;
        line-height: 40px;
        background-color: @black;
        .nav-btn {
            display: inline-block;
            color: #FFF;
            float: left;
            padding-right: 20px;
        }
    }
</style>

