<script setup>
	import { ref } from 'vue'
  const props = defineProps({
		totalParts: Number,
		standardYield: Number,
		ingredients: Object,
  })
	const scale = ref(1);
	const onScaleInput = (event) => {
		scale.value = document.getElementById("scale").value;
	}
</script>

<template>
	scale: <input id="scale" @keypress="onScaleInput" @keyup="onScaleInput" >
  <table class="avoid-break">
		<thead>
			<tr>
				<th style="text-align:left;">ingredient</th>
				<th style="text-align:right;">parts</th>
				<th style="text-align:right;">standard bottle volume</th>
				<th style="text-align:right;">quantity</th>
				<th style="text-align:right;"># of bottles</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="ingredient of ingredients">
				<td style="text-align:left;">{{ ingredient.name }}</td>
				<td style="text-align:left;">{{ ingredient.parts }}</td>
				<td style="text-align:left;">{{ ingredient.bottle_volume }}</td>
				<td style="text-align:right;">{{ ingredient.parts / totalParts * standardYield * scale }}</td>
				<td style="text-align:right;">{{ ingredient.parts / totalParts * standardYield * scale / ingredient.bottle_volume }}</td>
			</tr>
		</tbody>
  </table>
	<p>scaled yield: {{ standardYield * scale }}</p>
</template>
