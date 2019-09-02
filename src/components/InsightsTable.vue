<template>
	<div class="insights-table">
		<table class="table table is-striped is-fullwidth">
			<thead>
				<tr>
					<th>Date</th>
					<th class="text-center">Happiness score</th>
					<th class="text-center">Positive votes</th>
					<th class="text-center">Negative votes</th>
					<th class="text-center">Neutral votes</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="day in dailyScores" :key="day.date">
					<td>{{ getDayMonthYearString(day.date) }}</td>
					<td class="avg-score text-center" :class="getColorStyle(day)">{{ day.happiness_score }}</td>
					<td class="avg-score text-center green">{{ day.positive }}</td>
					<td class="avg-score text-center red">{{ day.negative }}</td>
					<td class="avg-score text-center">{{ day.neutral }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import { getDayMonthYearString } from '../../utils/date'

export default {
	props: {
		daily_scores: {
			type: Array,
			required: true
		}
	},
	computed: {
		dailyScores() {
			return this.daily_scores.map(day => {
				const score = day.positive - day.negative
				day['happiness_score'] = score
				return day
			})
		}
	},
	methods: {
		getDayMonthYearString,
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