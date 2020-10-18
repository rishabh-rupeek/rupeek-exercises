<template>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
        <ul class="nav navbar-nav">
            <li class="nav-item active">
                <router-link class="nav-link" to="/" exact>Home</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/workshops" exact>Workshops</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name:'Navbar'
}
</script>