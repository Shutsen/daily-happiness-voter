<template>
	<section class="hero is-fullheight is-dark is-bold">
		<div class="hero-body">
			<div class="container">
				<h1 class="title">Manager - Happiness insights</h1>
				<div class="tile-wrapper tile is-ancestor">
					<div class="tile is-vertical is-8">
						<div class="tile is-parent">
							<article class="tile is-child notification is-light p-30px">
								<p class="title">Scores</p>
								<InputRadioButtons v-model="selectedView" :options="viewOptions"/>
								<InsightsTable :daily_scores="daily_scores"/>
							</article>
						</div>
					</div>
					<div class="tile is-parent">
						<article class="tile is-child notification is-light p-30px">
							<p class="title">Interpretation</p>
							<div class="content">
								Employees have the ability to vote their happiness on a daily basis. They can vote once a day, not more, not less. There are 3 states. Unhappy, neutral and happy, respectively getting a score of -1, 0 and 1. Each vote is summed to a total of the day. If you have 5 employees voting every day, the worst possible score is -5, the best possible score is +5. Votes are up!
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
import InputRadioButtons from '../components/input/InputRadioButtons'
import InsightsTable from '../components/InsightsTable'

export default {
	components: { InputRadioButtons, InsightsTable },
	data() {
		return {
			daily_scores: [],
			selectedView: { id: 1, name: 'By day', value: '1' },
			viewOptions: [
				{ id: 1, name: 'Today', value: '1' },
				{ id: 2, name: 'Last week', value: '7' },
				{ id: 3, name: 'Last month', value: '30' },
			]
		}
	},
	watch: {
		selectedView() {
			this.getData()
		}
	},
	async mounted() {
		await this.getData()
	},
	methods: {
		async getData() {
			const response = await votesApi.getVotesForPeriod(this.selectedView.value)
			this.daily_scores = response
		}
	}
}
</script>