<template>
    <div class="pb-3">
    <!-- <div class="panelParent col-xs-12" :class="size ? size : ''"> -->
        <div :class="_cardClass" :id="id ? id : 'panel'">
            <div class="card-header clearfix" :class="_panelClass" v-if="hasHeader && (type != 'resultado' || hasButtons)">
                <h4 class="float-left" :style="marginTop">
                    <slot name="header"></slot>
                </h4>

                <div class="float-right">
                    <slot name="buttons"></slot>
                </div>
            </div>

            <div class="clearfix" :class="_bodyCard, _bodyColor">
                <h3 class="card-title" v-if="hasHeader && type == 'resultado' && !hasButtons">
                    <slot name="header"></slot>
                </h3>

                <slot name="main"></slot>
            </div>

            <div class="card-footer clearfix" :class="_footerClass">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'id',
            'footer-class',
            'size',
            'type',
        ],
        computed: {
            hasHeader() {
                return !!this.$slots['header'];
            },
            hasButtons() {
                return !!this.$slots['buttons'];
            },
            _footerClass() {
                let _class = this.footerClass ? this.footerClass : '';
                if (!this.$slots['footer']) {
                    _class += ' d-none';
                }
                return _class;
            },
            // estilos
            _panelClass: function() {
                let background = 'bg-flat-grey';
                if (this.type) {
                    switch (this.type) {
                        case 'filtro':
                        case 'crud':
                            background = 'bg-info';
                            break;
                        case 'profile':
                            background = 'bg-material-indigo';
                            break;
                    }
                }
                return background;
            },
            _cardClass: function() {
                let background = 'card';
                if (this.type) {
                    switch (this.type) {
                        case 'profile':
                            background = 'bordered-card border-info';
                            break;
                    }
                }
                return background;
            },
            _bodyColor: function() {
                let background = '';
                if (this.type) {
                    switch (this.type) {
                        case 'profile':
                            background = 'text-info';
                            break;
                    }
                }
                return background;
            },
            _bodyCard: function() {
                let style = '';

                if(this.type != 'crud') {
                    style = ' card-body';
                }

                return style;
            },
            marginTop: function() {
                let style = '';

                if (this.$slots.buttons) {
                    style = 'margin-top: 5px;';
                }

                return style;
            },
        },
    }
</script>

<!--
panelClass: {
    flat-red
    flat-iris
    flat-pink
    flat-purple
    flat-blue
    flat-green
    flat-yellow
    flat-grey
}
 -->