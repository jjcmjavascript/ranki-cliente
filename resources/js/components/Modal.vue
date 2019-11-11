<template>
    <div class="c-modal" :id="_id">
        <div class="content" :class="_size">
            <div class="header clearfix">
                <h5 class="title"><slot name="header"></slot></h5>
                <button type="button" class="close-icon" v-on:click="close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>

            <div class="body clearfix">
                <slot name="main"></slot>
            </div>

            <div class="footer clearfix">
                <slot name="footer"></slot>

                <button class="btn btn-link" id="close" v-on:click="close">Cerrar</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'id',
            'size'
        ],
        computed: {
            _id: function() {
                return this.id ? this.id : 'customModal';
            },
            _size: function() {
                return this.size ? this.size : 'medium';
            },
        },
        methods: {
            close: function() {
                document.getElementById(this._id).classList.remove('show');
                document.querySelector('body').classList.remove('with-modal');
                this.$emit('close');
            },
            show: function() {
                document.querySelector('body').classList.add('with-modal');
                document.getElementById(this._id).classList.add('show');
            },
            hide: function() {
                this.close();
            },
        },
    };
</script>

<style scoped>
    .c-modal {
        position: absolute;
        margin: 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: none;
    }

    .c-modal.show {
        display: block;
    }

    .c-modal .content {
        position: sticky;
        min-height: 200px;
        width: 600px;
        top: 50px;
        margin: 0 auto;

        background-color: #FFF;
        border: 1px solid #3094C2;
        border-radius: .3rem;
        color: #000;
    }

    .c-modal .content.extra-large {
        width: 1000px;
    }
    .c-modal .content.large {
        width: 800px;
    }
    .c-modal .content.medium {
        width: 600px;
    }
    .c-modal .content.small {
        width: 400px;
    }

    .c-modal .header,
    .c-modal .body,
    .c-modal .footer {
        padding: 20px;
    }

    .c-modal .header {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        border-top-left-radius: .3rem;
        border-top-right-radius: .3rem;
    }
    .c-modal .header .title {
        font-size: 20px;
        margin-bottom: 0;
        line-height: 1.5;
        font-weight: 500;
        margin-top: 0;
        color: #41B0FF;
    }
    .c-modal .header .close-icon {
        background-color: transparent;
        border: 0;
        color: #000;
        cursor: pointer;
        float: right;
        font-family: inherit;
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 1;
        margin: 0rem 0rem 0rem auto;
        padding: 0;
        opacity: .5;
        text-shadow: 0 1px 0 #fff;

        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }
    .c-modal .header .close-icon:hover {
        opacity: 1;
    }

    .c-modal .body {
        font-size: 14px;
        line-height: 1.5;
        font-weight: 400;
        min-height: 100px;

        height: auto;
        /* 50 = container top | 70 = header height | 58 = footer height | 50 = container bottom */
        max-height: calc(100vh - 50px - 70px - 58px - 50px);
        overflow: auto;
    }
    .c-modal .body .row {
        margin: 0;
    }

    .c-modal .footer {
        font-size: 14px;
        position: relative;
        width: 100%;
        bottom: 0;
        padding: 10px;
        background-color: rgba(0,0,0,.2);
        border-bottom-left-radius: .3rem;
        border-bottom-right-radius: .3rem;
        height: 58px;
    }
    .c-modal .footer #close {
        float: right;
    }
    .c-modal .footer .btn-link {
        color: #000;
        text-decoration: none;
    }
    .c-modal .footer .btn-link:hover {
        background-color: rgba(0, 0, 0, 0.15);
    }

    .c-modal table.table-bordered th,
    .c-modal table.table-bordered td {
        border: 1px solid #3094C2 !important;
    }

    @media all and (max-width: 1100px) {
        .c-modal .content.extra-large {
            width: 95%;
        }
    }
    @media all and (max-width: 870px) {
        .c-modal .content.large {
            width: 90%;
        }
    }
    @media all and (max-width: 768px) {
        .c-modal .content.medium {
            width: 90%;
        }
    }
    @media all and (max-width: 530px) {
        .c-modal .content.small {
            width: 90%;
        }
    }
</style>

<style>
    .c-modal .main-timeline2 {
        width: 100%;
    }
    .c-modal .timeline {
        min-height: 130px;
    }
    .c-modal .timeline .timeline-content .inner-content .title {
        display: block !important;
        margin-bottom: 0;
        padding-bottom: 0;
        font-size: 22px;
    }
    .c-modal .timeline .timeline-content .inner-content .subtitle {
        display: block !important;
        font-size: 16px;
    }
</style>