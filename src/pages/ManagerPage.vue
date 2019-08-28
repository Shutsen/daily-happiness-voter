<template>
	<section class="hero is-fullheight is-dark is-bold">
		<div class="hero-body">
			<div class="container">
				<h1 class="title">Manager - Happiness insights</h1>
				<div class="tile-wrapper tile is-ancestor">
					<div class="tile is-vertical is-8">
						<div class="tile">
						<div class="tile is-parent is-vertical">
							<article class="tile is-child notification is-light">
								<p class="title">Vertical...</p>
								<p class="subtitle">Top tile</p>
							</article>
							<article class="tile is-child notification is-light">
								<p class="title">...tiles</p>
								<p class="subtitle">Bottom tile</p>
							</article>
						</div>
						<div class="tile is-parent">
							<article class="tile is-child notification is-light">
								<p class="title">Middle tile</p>
								<p class="subtitle">With an image</p>
								<figure class="image is-4by3">
									<img src="https://bulma.io/images/placeholders/640x480.png">
								</figure>
							</article>
						</div>
						</div>
						<div class="tile is-parent">
						<article class="tile is-child notification is-light">
							<p class="title">Interpretation</p>
							<div class="content">
								Employees have the ability to vote their happiness on a daily basis. They can vote once a day, not more, not less. There are 3 states. Unhappy, neutral and happy, respectively getting a score of -1, 0 and 1. Each vote is summed to a total of the day. If 5 employees vote on a certain day, the worst possible score is -5, the best possible score is 5.
							</div>
						</article>
						</div>
					</div>
					<div class="tile is-parent">
						<article class="tile is-child notification is-light">
						<div class="content">
							<p class="title">Tall tile</p>
							<p class="subtitle">With even more content</p>
							<div class="content">
								<ul>
									<li v-for="score in daily_scores">
										{{ score.date }} <span>{{ score.happiness_score }}</span>
									</li>
								</ul>
							</div>
						</div>
						</article>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import votesApi from '../api/votes.api'

export default {
	data() {
		return {
			daily_scores: []
		}
	},
	async mounted() {
		const response = await votesApi.getHappinessScoreForPeriod()
		this.daily_scores = response
	}
}
</script>