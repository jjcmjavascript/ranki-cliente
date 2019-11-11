<template>
    <div id="alertas">
        <template v-if="type == 'multiple'">
            <template v-if="$attrs.success">
                <div class="alert alert-success alert-dismissible fade show" role="alert" v-for="message in $attrs.success">
                    {{ message }}
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
            </template>

            <template v-if="$attrs.error">
                <div class="alert alert-success alert-dismissible fade show" role="alert" v-for="message in $attrs.error">
                    {{ message }}
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
            </template>
        </template>
        <template v-else>
            <div class="alert alert-success" role="alert" v-if="$attrs.success && $attrs.success.length > 0">
                <li v-for="message in $attrs.success">{{ message }}</li>
            </div>

            <div class="alert alert-danger" role="alert" v-if="$attrs.error && $attrs.error.length > 0">
                <li v-for="message in $attrs.error">{{ message }}</li>
            </div>
        </template>
    </div>
</template>

<script>
    export default {
        props: [
            'type',
        ],
        params: [
            'success',
            'error'
        ],
    };
</script>

<style scoped>
    li {
        list-style-type: none;
    }
</style>