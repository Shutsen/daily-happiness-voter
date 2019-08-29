<template>
	<div class="insights-table">
		<table class="table table is-striped is-fullwidth">
			<thead>
				<tr>
					<th>Date</th>
					<th class="text-center">Happiness score</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="day_score in daily_scores" :key="day_score.date">
					<td>{{ day_score.date }}</td>
					<td class="avg-score text-center" :class="getColorStyle(day_score)">{{ day_score.happiness_score }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
	props: {
		daily_scores: {
			type: Array,
			required: true
		}
	},
	methods: {
		getColorStyle(day_score) {
			if (day_score.happiness_score < 0) {
				return ['red']
			}
			if (day_score.happiness_score > 0) {
				return ['green']
			}
			return []
		}
	}
}
</script>