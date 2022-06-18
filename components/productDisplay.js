app.component('product-display', {
    props: {
        premium: {
            type: Boolean, required: true
        }
    },
    template:
    /*html*/
    `
    <div class="product-display">
        <div class="product-container">
            <div class="product-image">
                <img v-bind:src="image" :class="[!inStock ? 'out-of-stock-img' : '']">
            </div>
            <div class="product-info">
                <h1>{{ productTitle }}</h1>
                <p v-if="onSale">{{ saleMessage }}</p>
                <!-- Only make the element visible/invisble, not remove from DOM -->
                <!-- <p v-show="inStock">In stock</p> -->
                <p v-if="inStock">In Stock</p>
                <p v-else>Out of Stock</p>
                <p>Shipping: {{ shipping }}</p>
                <product-details :details="details"></product-details>
                <div v-for="(variant, index) in variants" :key="variant.id" @mouseover="updateVariant(index)" class="color-circle" :style="{ backgroundColor: variant.color}"></div>
                <!-- backgroundColor == 'background-color' -->
                <button class="button" :class="{ disabledButton: !inStock}" :disabled="!inStock" @click="addToCart">Add to Cart</button>
            </div>
        </div>
    </div>
    `,
    data() {
        return {
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            details: ['50% cotton', '35% wool', '15% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
            ],
            onSale: true
        }
    },
    methods: {
        updateVariant(index) {
            this.selectedVariant = index
        }
    },
    computed: {
        productTitle() {
            return `${this.brand} ${this.product}`
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity > 0
        },
        saleMessage() {
            return this.productTitle + ' is on sale!'
        },
        shipping() {
            return this.premium ? 'free' : '2,99 €'
        }
    }
})