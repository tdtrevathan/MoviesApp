<template>
	<div class="col-sm-4">
		<div class="card mt-3">
			<div class="card-body">
				<h4 class="card-title">{{movie.title}}</h4>
				<h6 class="card-subtitle mb-2 text-muted">{{movie.year}} - {{movie.director}}</h6>
				<p class="card-text">
					{{movie.description}}
				</p>
				<h6 class="card-subtitle mb-2 text-muted">{{movie.cast}}</h6>
				<button class="btn btn-primary" v-on:click="editMovie(movie.id)">Edit</button>
				<button class="btn btn-secondary" v-on:click="deleteMovie(movie.id)">Delete</button>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		props: ['movie'],
		methods: {
			editMovie(id) {
				this.$emit('edit-movie', id);
			},
			deleteMovie(id) {
				this.$emit('delete-movie', id);
			},
		},
	};
</script>
<style lang="scss"></style>