
<template>

	<div>
		<div class="row">
			<div class="col mt-3">
				<button class="btn btn-primary" v-on:click="openAddModal">Add Movie</button>
			</div>
		</div>
		<div class="row">
			<display-movie v-for="movie in movies" v-bind:movie="movie" v-bind:key="movie.id" v-on:edit-movie="editMovie" v-on:delete-movie="deleteMovie"></display-movie>
			<add-movie v-if="showAddModal" v-bind:movie="movieToAdd" v-on:close-add-modal="closeAddModal" v-on:save-movie-add="saveMovieAdd"></add-movie>
			<edit-movie v-if="showEditModal" v-bind:movie="movieToEdit" v-on:close-edit-modal="closeEditModal" v-on:save-movie-edit="saveMovieEdit"></edit-movie>
		</div>
	</div>
</template>
<script>
	import DisplayMovie from './components/DisplayMovie'
	import axios from 'axios'
	import AddMovie from './components/AddMovie'
	import EditMovie from './components/EditMovie'
	export default {
		name: 'app',
		components: {
			DisplayMovie,
			AddMovie,
			EditMovie,
		},
		data() {
			return {
				movies: [],
				movieToAdd: {
					poster: '',
					title: '',
					year: '',
					director: '',
					description: '',
					cast: '',
				},
				showAddModal: false,
				movieToEdit: {
                    poster: '',
					title: '',
					year: '',
					director: '',
					description: '',
					cast: '',
				},
				showEditModal: false,
			}
		},
		methods: {
			getMovies() {
				axios({
					method: 'GET', 'url': '/api/movies'
				}).then(result => {
					this.movies = result.data;
				}, error => {
					console.error(error);
				});
			},
			openAddModal() {
				this.showAddModal = true;
			},
			closeAddModal() {
				this.showAddModal = false;
				this.movieToAdd = {
                    poster: '',
					title: '',
					year: '',
					director: '',
					description: '',
					cast: '',
				};
			},
			saveMovieAdd() {
				axios({
					method: 'POST', 'url': '/api/movies', 'data': this.movieToAdd
				}).then(result => {
					this.getMovies();
					this.closeAddModal();
				}, error => {
					console.error(error);
				});
			},
			editMovie(id) {
				axios({
					method: 'GET', 'url': '/api/movies/' + id
				}).then(result => {
					this.movieToEdit = result.data;
				}, error => {
					console.error(error);
				});
				this.showEditModal = true;
			},
			closeEditModal() {
				this.showEditModal = false;
				this.movieToEdit = {
					poster: '',
					title: '',
					year: '',
					director: '',
					description: '',
					cast: '',
				};
			},
			saveMovieEdit() {
				axios({
					method: 'PUT', 'url': '/api/movies/' + this.movieToEdit.id, 'data': this.movieToEdit
				}).then(result => {
					this.getMovies();
					this.closeEditModal();
				}, error => {
					console.error(error);
				});
			},
			deleteMovie(id) {
				axios({
					method: 'DELETE', 'url': '/api/movies/' + id
				}).then(result => {
					this.getMovies();
				}, error => {
					console.error(error);
				});
			},
		},
		mounted() {
			this.getMovies();
		},
	}
</script>
<style lang="scss">
</style>