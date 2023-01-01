

<template>

    <div class="home">
        <div class="feature-card">
            <route-link to="/movie/tt0409591">
                <img src="https://m.media-amazon.com/images/M/MV5BNDg3MmI1ZDYtMDZjYi00ZWRlLTk4NzEtZjY4Y2U0NjE5YmRiXkEyXkFqcGdeQXVyNzAxMjE1NDg@._V1_.jpg"
                     alt="Gangs of New York Poster" class="featured-img" />
                <div class="detail">
                    <h3>Gangs of New York</h3>
                    <p>Gangs of New York is a historical drama set in the mid-19th century New York City neighborhood of Five Points, where rival street gangs are locked in a power struggle. The film follows the story of Amsterdam Vallon, a young man seeking revenge against the ruthless leader of the "Native Americans," Bill the Butcher, who killed his father years earlier. As Amsterdam infiltrates the Native Americans and works to take down Bill the Butcher, tensions between the rival gangs come to a head, leading to a final showdown between the "Native Americans" and the "Dead Rabbits," an Irish-American gang.</p>
                </div>
            </route-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        data() {
            return {
                // component data
            };
        },
    }
</script>

<style lang="scss">
    .home{
        .feature-card {
            position: relative;
            .featured-img{
                dispaly: block;
                width: 100%;
                height: 300px;

                object-fit: contain;
                position: relative;
                z-index: 0;
            }

            .detail{
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                top: 300px;
                background-color: rgba(0,0,0,0.6);
                padding: 16px;
                z-index: 1;
            }

            h3{
                color: #FFF;
                margin-bottom: 16px;
            }

            p{
                color: #FFF;
            }
        }
    }
</style>