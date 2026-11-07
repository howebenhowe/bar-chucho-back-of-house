<script setup>
  const props = defineProps({
		stringProp: String,
		themes: Object,
		objectProp: Object,
  })
</script>

<template>
  <table class="avoid-break">
		<thead>
			<tr>
				<th style="text-align:left;">{{ stringProp }}</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="theme of themes">
				<td style="text-align:left;">{{ theme }}</td>
			</tr>
		</tbody>
  </table>
</template>
