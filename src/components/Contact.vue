<template>   
    <li>
        <h2>{{ name }} {{ isFavorite ? "(Fav)" : '' }}</h2> 
        <button @click="toggleFav">Change Favorite</button>
        <button @click="toggleDetails">{{ detailsVisible ? 'Hide' : 'Show' }} Details</button>
        <ul v-if="detailsVisible">
            <li><strong>Phone:</strong> {{ phoneNum }}</li>
            <li><strong>Email:</strong> {{ emailAddress }}</li>
        </ul>
    </li>
</template>

<script>
export default {
    //
    // props: [
    //     'name',
    //     'phoneNum',
    //     'emailAddress',
    //     'isFavorite'
    // ],
    props: {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        phoneNum: {
            type: String,
            required: true
        },
        emailAddress: {
            type: String,
            required: true
        },
        isFavorite: {
            type: Boolean,
            required: false,
            default: false
        },
    },
    emits: ['toggle-favorite'],
    // {
    //     'toggle-favorite': function(id) {
    //         // validation
    //         if (id) {
    //             return true;
    //         } else {
    //             console.warn("ID is missing")
    //             return false;
    //         }
    //     }
    // },
    data() {
        return {
            detailsVisible: false,
        }
    },
    methods: {
        toggleDetails() {
            this.detailsVisible = !this.detailsVisible;
        },
        toggleFav() {
            // this.friendFav = !this.friendFav;
            
            // allows you to emit event
            // kebab case
            this.$emit('toggle-favorite', this.id);
        }
    }
}
</script>