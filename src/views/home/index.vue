<template>
    <div class="app-container home-container">
        <el-row :gutter="30">
            <el-col :xs="12" :sm="12" :lg="6">
                <div class="card-block">
                    <img class="logo-icon vue" src="/vue.svg" />
                </div>
            </el-col>
            <el-col :xs="12" :sm="12" :lg="6">
                <div class="card-block">
                    <img class="logo-icon vite" src="/vite.svg" />
                </div>
            </el-col>
            <el-col :xs="12" :sm="12" :lg="6">
                <div class="card-block">
                    <img class="logo-icon ts" src="/ts.svg" />
                </div>
            </el-col>
            <el-col :xs="12" :sm="12" :lg="6">
                <div class="card-block">
                    <img class="logo-icon pinia" src="/pinia.svg" />
                </div>
            </el-col>
        </el-row>
    </div>
</template>


<style lang="scss" scoped>
.home-container {
    height: 100%;
    padding: 40px;
    background-color: #f2f4f6;
}

.card-block {
    display: flex;
    align-items: center;
    overflow: hidden;
    height: 108px;
    padding: 0 20px;
    margin-bottom: 30px;
    background-color: #FFFFFF;
    box-shadow: 4px 4px 40px rgb(0 0 0 / 5%);
    border-radius: 3px;
    cursor: pointer;

    &:hover {
        .vite {
            filter: drop-shadow(0 0 15px #d76a74);
        }

        .vue {
            filter: drop-shadow(0 0 15px #20ae7c);
        }

        .pinia {
            filter: drop-shadow(0 0 15px #fdc958);
        }

        .ts {
            filter: drop-shadow(0 0 15px #1a80c5);
        }
    }

    .logo-icon {
        width: 48px;
        height: 48px;
    }
}
</style>
