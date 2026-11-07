<script setup>
  const props = defineProps({
		buildMethod: String,
		glass: String,
		garnish: String,
  })
</script>

<template>
  <table class="avoid-break">
		<thead>
			<tr>
				<th style="text-align:left;">method</th>
				<th style="text-align:right;">glass</th>
				<th style="text-align:right;">garnish</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td style="text-align:left;">{{ buildMethod }}</td>
				<td style="text-align:center;">{{ glass }}</td>
				<td style="text-align:right;">{{ garnish }}</td>
			</tr>
		</tbody>
  </table>
</template>
