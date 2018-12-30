var app = new Vue({
    el:'#app',
    data:{
    product:'SOCKS',
    description: 'A pair of warm, fuzzy socks',
    image:'./assets/vmSocks-green-onWhite.jpg',
    altText:'a pair of socks',
    inStock: true,
    onSale: true,
    details:["80% cotton","20% polyester","Gender-neutral "],
    variants: [
        {
            variantId:2234,
            variantColor:"green"

        },
        {
            variantId:2235,
            variantColor:"blue"
        }
    ],
    sizes:["35","36","37","38","39","40","41","42"],
    cart:0,
},
    methods: {
        addToCart(){
            this.cart +=1;
        }
    }
});
