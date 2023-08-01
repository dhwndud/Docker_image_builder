<template>
	<RouterView :key="$route.fullPath" />
</template>

<script setup lang="ts">
defineProps<{ 
	$route: any;
}>()
</script>
