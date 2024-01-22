---
title: "How much more expensive are organic groceries?"
categories:
  - Post Formats
tags:
  - image
  - Post Formats
---

I spend too much time in the supermarket comparing prices between conventional items and more premium options. I do this because pricing is the start of a story that tells us what makes a product different. Organic has always commanded a premium. Organic growers prioritize long term soil health over short term output. They operate differently, and shoppers recognize the value of that difference by paying more at the checkout stand. What has always fascinated me: what makes shoppers value some organic items over others?

The approach:
While my boots on the ground approach was an absolute joy, it lacked the breadth and depth needed for this problem. Approaching this instead as a data science question, I built a program in python that queried Kroger’s Open API. I pulled product data for 11k items listed in a single Cincinnati, OH, location. Within that dataset, I was able to identify 206 like-for-like, lowest cost organic and conventional product pairs. Using these pairs, I calculated a percent premium to indicate how consumers value each organic item versus its conventional counterpart.

The median organic item sold for 44% more than conventional. 
The produce aisle as a whole drove the median in this dataset. It hosted the largest variety of organic items with the majority of premiums falling between 35-55%. Meanwhile median premiums for snacks (63%), frozen goods (78%) and baking goods (118%) were a huge surprise. 

A few things could be going on here:

1. I don’t know enough about produce retailing, but this store might use high quality affordable produce as a way to draw shoppers into the store while recouping margin in other aisles.
2. Story matters. I imagine it is difficult to tell a story when a brand’s marketing real estate is limited to  a one inch produce sticker. You can fit a USDA organic button and not much else.
