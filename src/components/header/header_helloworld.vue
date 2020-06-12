<template>
	<div>
		<h1 class="display-4">Hello, world!{{ $route.params.id }}</h1>
		<router-link to="/hellolongsky">Go to hellolongsky</router-link>
		<router-link to="/hellotest">Go to hellotest</router-link>
		<router-link to="/helloworld/1234/123">Go to helloword</router-link>
	</div>
</template>

<script>
	export default{
		created() {
			console.log("生命周期执行")
		}
	}
</script>

<style>
	
</style>