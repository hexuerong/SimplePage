<template>
<div>
    <el-tree 
    ref="tree"
    :data="data" 
    :props="defaultProps" 
    :indent='17'
    :expand-on-click-node="false" 
    @node-click="handleNodeClick"
    :highlight-current="true">
    </el-tree>
    <el-button type='text' @click="clickButton1">取消选中</el-button>    
    <el-button type='text' @click="clickButton2">选中上次选中</el-button>        
</div>
</template>

<script type="text/ecmascript-6">
export default {
    name: 'App',
    data () {
        return {
            data: [{
                label: '一级 1',
                children: [{
                    label: '二级 1-1',
                    children: [{
                        label: '三级 1-1-1'
                    }]
                }]
            }, {
                label: '一级 2',
                children: [{
                    label: '二级 2-1',
                    children: [{
                        label: '三级 2-1-1'
                    }]
                }, {
                    label: '二级 2-2',
                    children: [{
                        label: '三级 2-2-1'
                    }]
                }]
            }, {
                label: '一级 3',
                children: [{
                    label: '二级 3-1',
                    children: [{
                        label: '三级 3-1-1'
                    }]
                }, {
                    label: '二级 3-2',
                    children: [{
                        label: '三级 3-2-1'
                    }]
                }]
            }],
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            currentItem: null,
            lastItem: {
                label: '一级 3',
                children: [{
                    label: '二级 3-1',
                    children: [{
                        label: '三级 3-1-1'
                    }]
                }, {
                    label: '二级 3-2',
                    children: [{
                        label: '三级 3-2-1'
                    }]
                }]
            }
        }
    },
    methods: {
        handleNodeClick (data) {
            this.currentItem = data;
            // this.lastItem = data;
        },
        clickButton1 (e){
            this.currentItem = null;
            this.$refs.tree.selectNode(null);
        },
        clickButton2 (e){
            // debugger
            console.log(this.currentItem);
            console.log(this.lastItem);            
            if(this.currentItem){
                this.$refs.tree.selectNode(this.currentItem);
            }else{
                console.log('in');
                this.$refs.tree.selectNode(this.lastItem);     
            }           
        }
    }
}
</script>

<style lang="less" scoped>
/* .el-tree--highlight-current{
    .el-tree-node{
        &.is-current{
            &>.el-tree-node__content{
                background-color: #4d4d80!important;
                color: #ffffff;
            }
        }
    }
} */
.el-tree--highlight-current .el-tree-node.is-current>.el-tree-node__content{
    background-color: #4d4d80!important;
}
</style>