import shareComponent from './share.vue';
let $vm
const share = {
    install: function(Vue) {
        if (!$vm) {
            const Share = Vue.extend(shareComponent)
            $vm = new Share({
                el: document.createElement('div')
            })
            document.body.appendChild($vm.$el)
        }
        const show = (obj) => {
            $vm.showState = true;
            if (obj.hasOwnProperty('title') && obj.title) {
                $vm.title = obj.title;
            }
            if (obj.hasOwnProperty('desc') && obj.desc) {
                $vm.desc = obj.desc;
            }
            if (obj.hasOwnProperty('imgUrl') && obj.imgUrl) {
                $vm.imgUrl = obj.imgUrl;
            }
            if (obj.hasOwnProperty('link') && obj.link) {
                $vm.link = obj.link;
            }

        }
        Vue.component('share', shareComponent);
        if (!Vue.$share) {
            Vue.$share = {
                show
            }
        } else {
            Vue.$share.show = show
        }

        Vue.mixin({
            created: function() {
                this.$share = Vue.$share
            }
        })
    }
}
export default share;