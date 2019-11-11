<template>
    <nav aria-label="..." v-if="maxPage > 1">
        <ul class="pagination">
            <li class="page-item" :class="{ 'disabled' : data.current_page < 2 }">
                <a class="page-link" :href="queries['prev']">Prev</a>
            </li>

            <template v-if="minPage - 1 > 0">
                <li class="page-item">
                    <a class="page-link" :href="queries['first']">1</a>
                </li>
                <span class="page-link disabled" v-if="minPage - 1 > 1">...</span>
            </template>

            <template v-for="(page, key) in pages">
                <li class="page-item" :class="{ 'active' : page == data.current_page }">
                    <a class="page-link" :href="queries.pages[key]">
                        {{ page }} <span class="sr-only" v-if="page == data.current_page">(actual)</span>
                    </a>
                </li>
            </template>

            <template v-if="maxPage < data.last_page">
                <span class="page-link disabled" v-if="maxPage + 1 < data.last_page">...</span>
                <li class="page-item">
                    <a class="page-link" :href="queries['last']">{{ data.last_page }}</a>
                </li>
            </template>

            <li class="page-item" :class="{ 'disabled' : data.current_page >= data.last_page}">
                <a class="page-link" :href="queries['next']">Next</a>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
    .pagination {
        margin-bottom: 0;
        float: right;
    }
    .page-item:not(.disabled) {
        cursor: pointer;
    }
</style>

<script>
    export default {
        data() {
            return {
                queries: {
                    prev: '',
                    first: '',
                    pages: [],
                    last: '',
                    next: '',
                },
            }
        },
        props: {
            data: {
                type: Object,
                required: true,
                default: {
                    current_page: 1,
                    last_page: 1,
                }
            },
            size: {
                type: Number,
                required: false,
                default: 5
            }
        },
        computed: {
            minPage: function() {
                if (this.data.last_page <= this.size
                    || this.data.current_page - Math.ceil((this.size / 2) - 1) <= 1
                ) {
                    return 1;
                }
                else if (this.data.current_page == this.data.last_page
                    && this.data.current_page + 1 - this.size > 0
                ) {
                    return this.data.current_page + 1 - this.size;
                }

                return this.data.current_page - Math.ceil((this.size / 2) - 1);
            },
            maxPage: function() {
                let page_1 = this.data.current_page - Math.ceil((this.size / 2) - 1);
                page_1 = page_1 < 1 ? 1 : page_1;
                if (page_1 - 1 + this.size <= this.data.last_page) {
                    return page_1 - 1 + this.size;
                }
                else if (this.data.current_page + Math.ceil((this.size / 2) - 1) <= this.data.last_page) {
                    return this.data.current_page + Math.ceil((this.size / 2) - 1);
                }

                return this.data.last_page;
            },
            pages: function() {
                let array = [];
                for (var i = this.minPage; i <= this.maxPage; i++) {
                    array.push(i);
                }
                this.setQueries();
                return array;
            },
        },
        methods: {
            getRoute: async function(object) {
                let string = await this.$root.queryString(object);
                return this.$route.path + string;
            },
            setQueries: async function() {
                let query = {};
                this.queries = {
                    prev: '',
                    first: '',
                    pages: [],
                    last: '',
                    next: '',
                };

                for (var i = this.minPage; i <= this.maxPage; i++) {
                    query = this.$route.query;
                    query.page = i;
                    let string = await this.getRoute(query);
                    this.queries.pages.push(string);
                }

                query = this.$route.query;
                query.page = (this.data.current_page - 1) > 0 ? this.data.current_page - 1 : 1;
                this.queries.prev = await this.getRoute(query);

                query = this.$route.query;
                query.page = 1;
                this.queries.first = await this.getRoute(query);

                query = this.$route.query;
                query.page = this.data.last_page;
                this.queries.last = await this.getRoute(query);

                query = this.$route.query;
                query.page = (this.data.current_page + 1) <= this.data.last_page ? this.data.current_page + 1 : this.data.last_page;
                if (Object.keys(this.$route.query).length == 0) {
                    query.page = (this.data.current_page + 1) <= this.data.last_page ? this.data.current_page + 1 : this.data.last_page;
                }
                this.queries.next = await this.getRoute(query);
            },
        },
    };
</script>