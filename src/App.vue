<template>
<section>
    <header><h1>Friends List</h1></header>
    <new-contact @add-contact="addContact"></new-contact>
    <ul>
        <friend-contact v-for="friend in friends" :key="friend.id" :id='friend.id' :name='friend.name' :phone-num='friend.phone' :email-address='friend.email' :is-favorite='friend.isFavorite' @toggle-favorite='toggleFavoriteStatus'></friend-contact>
    </ul>
</section>
</template>
<script>
export default {
    data() {
        return {
            friends: [
                {
                    id: 'amy',
                    name: 'Amy Smith',
                    phone: '393 029 8301',
                    email: 'amy@gmail.com',
                    isFavorite: true
                },
                {
                    id: 'jenny',
                    name: 'Jenny Smith',
                    phone: '393 029 8301',
                    email: 'jenny@gmail.com',
                    isFavorite: false
                }
            ]
        }
    },
    methods: {
        toggleFavoriteStatus(friendId) {
            const identifiedFriend = this.friends.find(friend => friend.id === friendId);
            identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
        },
        addContact(name, phone, email) {
            const newAddedContact = {
                id: new Date().toISOString,
                name: name,
                phone: phone,
                email: email,
                isFavorite: false
            };
            this.friends.push(newAddedContact);
        }
    }
}
</script>
<style>
* {
    box-sizing: border-box;
}

html {
    font-family: 'Jost', sans-serif;
}

body {
    margin: 0;
}

header {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 3rem auto;
    border-radius: 10px;
    padding: 1rem;
    background-color: #7EBDC3;
    color: white;
    text-align: center;
    width: 90%;
    max-width: 40rem;
}

#app ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

#app li {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 1rem auto;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
    width: 90%;
    max-width: 40rem;
}

#app h2 {
    font-size: 2rem;
    border-bottom: 4px solid #ccc;
    color: #7A6263;
    margin: 0 0 1rem 0;
}

#app button {
    font: inherit;
    cursor: pointer;
    border: 1px solid #9fc86a;
    background-color: #9fc86a;
    color: white;
    padding: 0.05rem 1rem;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
    background-color: #82B342;
    border-color: #82B342;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>