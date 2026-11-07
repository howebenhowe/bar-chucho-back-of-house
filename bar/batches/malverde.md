---
title: Malverde Batch
date: 2022-07-01
author: Ben Howe
gravatar: c4128f514f3a7fe3a56a68e48651671575f016843ef5f41ca1215b2fbbd1f986
ingredients:
  - name: La Higuera
    parts: 8
    bottle_volume: 750
  - name: Midori
    parts: 1
    bottle_volume: 1000
standard_yield: 3375
total_parts: 9
---

# {{$frontmatter.title}}

<BatchTable
:totalParts=$frontmatter.total_parts
:ingredients=$frontmatter.ingredients
:standardYield=$frontmatter.standard_yield
/>
