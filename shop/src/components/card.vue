<template>
    <div class="card">
        <h2>{{data.name}}</h2>
        <p>{{data.desc}}</p>
        <p>${{data.price}}</p>
    </div>
</template>

<script>
export default {
    props: [
        'data'
    ]
}
</script>

<style lang="scss">
    .card {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100px;
        margin: 10px;
        padding: 10px;
        border: 1px solid grey;
        border-radius: 10%;
    }
</style>