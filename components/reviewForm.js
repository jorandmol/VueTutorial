app.component('review-form', {
    template:
    /*html*/
    `
    <form class="review-form" @submit.prevent="onSubmit">
        <h3>Leave a review</h3>
        <label for="name">Name:</label>
        <input id="name" v-model="name">
        <label for="review">Review:</label>
        <textarea id="review" v-model="review"></textarea>
        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
        </select>
        <h4>Would you recommend this product?</h4>
        <label for="recommend">Yes</label>
        <input type="radio" id="recommend" v-model="recommendation" value="yes" />
        <label for="norecommend">No</label>
        <input type="radio" id="norecommend" v-model="recommendation" value="no" />
        <button class="button" type="submit">Submit</button>
    </form>
    `,
    data() {
        return {
            name: '',
            review: '',
            rating: null,
            recommendation: ''
        }
    },
    methods: {
        onSubmit() {
            if (this.name === '' || this.review === '' || this.rating === null || this.recommendation === '') {
                alert('Review is incomplete, fill out every field')
                return
            }
            const productReview = {
               name: this.name,
               review: this.review,
               rating: this.rating,
               recommendation: this.recommendation
            }
            this.$emit('review-submitted', productReview)
            // reset
            this.name = ''
            this.review = '',
            this.rating = null,
            this.recommendation = ''
        }

    }
})