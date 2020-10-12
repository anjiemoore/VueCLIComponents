<template>   
    <li>
        <h2>{{ name }} {{ friendFav === '1' ? "(Fav)" : '' }}</h2> 
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
    // props: [
    //     'name',
    //     'phoneNum',
    //     'emailAddress',
    //     'isFavorite'
    // ],
    props: {
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
            type: String,
            required: false,
            default: '0'
        },
    },
    data() {
        return {
            detailsVisible: false,
            friendFav: this.isFavorite,
            friend: {
                id: 'manuel',
                name: "Manuel Lorenz",
                phone: '293 939 9340',
                email: "manuel@localhost.com",
            }
        }
    },
    methods: {
        toggleDetails() {
            this.detailsVisible = !this.detailsVisible;
        },
        toggleFav() {
            if (this.friendFav === '1') {
                this.friendFav = '0';
            } else {
                this.friendFav = '1'
            }
        }
    }
}
</script>