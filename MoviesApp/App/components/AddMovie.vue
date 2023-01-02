<template>
    <transition name="addModal">
        <div class="modal modal-mask" style="display: block">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title">
                            Add Movie
                        </h3>
                    </div>
                    <div class="modal-body">
                        <div class="alert alert-danger" v-show="showError">
                            Please fill out all form fields.
                        </div>
                        <div class="form-group">
                            <label>Title</label>
                            <input type="text" class="form-control" v-model="movie.poster" />
                        </div>
                        <div class="form-group">
                            <label>Title</label>
                            <input type="text" class="form-control" v-model="movie.title" />
                        </div>
                        <div class="form-group">
                            <label>Year</label>
                            <input type="text" class="form-control" v-model="movie.year" />
                        </div>
                        <div class="form-group">
                            <label>Director</label>
                            <input type="text" class="form-control" v-model="movie.director" />
                        </div>
                        <div class="form-group">
                            <label>Description</label>
                            <textarea class="form-control" rows="3" v-model="movie.description"></textarea>
                        </div>
                        <div class="form-group">
                            <label>Cast</label>
                            <input type="text" class="form-control" v-model="movie.cast" />
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" v-on:click="saveMovieAdd">Add Movie</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal" v-on:click="closeAddModal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
	export default {
		props: ['movie'],
		data() {
			return {
				showError: false
			}
		},
		methods: {
			closeAddModal() {
				this.$emit('close-add-modal');
			},
			saveMovieAdd() {
				this.showError = false;
				if (this.movie.title.length > 0 && this.movie.year > 0 && this.movie.director.length > 0 && this.movie.description.length > 0 && this.movie.cast.length > 0 && this.movie.poster.length > 0) {
					this.$emit('save-movie-add');
				} else {
					this.showError = true;
				}
			},
		},
	};
</script>

<style></style>