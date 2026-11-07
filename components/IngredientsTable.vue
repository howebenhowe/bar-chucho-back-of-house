<script setup>
import { ref } from 'vue'
  const props = defineProps({
    showNotes: Boolean,
    isScalable: Boolean,
    defaultUnit: String,
		recipe: Object,
  })
	const scale = ref(1);
	const onScaleInput = (event) => {
		scale.value = document.getElementById("scale").value;
	}
</script>

<template>
	<div v-if="isScalable">
		scale: <input id="scale" @keypress="onScaleInput" @keyup="onScaleInput" >
	</div>
  <table class="avoid-break">
		<thead>
			<tr>
				<th style="text-align:left;">ingredient</th>
				<th style="text-align:right;">quantity<span v-if="defaultUnit"> ({{ defaultUnit }})</span></th>
				<th v-if="showNotes" style="text-align:right;">notes</th>
				<th v-if="isScalable" style="text-align:right;">scaled quantitiy</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="ingredient of recipe.ingredients">
				<td style="text-align:left;">{{ ingredient.name }}</td>
				<td style="text-align:right;">{{ ingredient.amount }}{{ ingredient.unit }}</td>
				<td v-if="showNotes" style="text-align:left;">{{ ingredient.notes || '' }}</td>
				<td v-if="isScalable" style="text-align:right;">{{ ingredient.amount * scale }}{{ ingredient.unit }}</td>
			</tr>
		</tbody>
  </table>
	<p v-if="isScalable">scaled yield: {{ recipe.yield.precise.amount * scale }}{{ recipe.yield.precise.unit }} (~{{ recipe.yield.practical.amount * scale }}{{ recipe.yield.practical.unit }})</p>
</template>
