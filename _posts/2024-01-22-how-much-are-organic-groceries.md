---
layout: single
title: "How much are organic groceries?"
header: 
  teaser:
categories:
  - data science
tags:
  - retail
date: 2024-01-22
thumbnail: /assets/images/2024-01-22-how much are organic groceries/organic-pricing-medians.png
---
I spend too much time in the supermarket comparing prices between conventional items and more premium options. I do this because pricing is the start of a story that tells us what makes a product different. Organic has always commanded a premium. Organic growers prioritize long term soil health over short term output. They operate differently, and shoppers recognize the value of that difference by paying more at the checkout stand. What has always fascinated me: what makes shoppers value some organic items over others?

## The approach: 
While my boots on the ground approach was an absolute joy, it lacked the breadth and depth needed for this problem. Approaching this instead as a data science question, I built a program in python that queried Kroger’s Open API. I pulled product data for 11k items listed in a single Cincinnati, OH, location. Within that dataset, I was able to identify 206 like-for-like, lowest cost organic and conventional product pairs. Using these pairs, I calculated a percent premium to indicate how consumers value each organic item versus its conventional counterpart.

## The median organic item sold for 44% more than conventional. 
The produce aisle as a whole drove the median in this dataset. It hosted the largest variety of organic items with the majority of premiums falling between 35-55%. Meanwhile median premiums for snacks (63%), frozen goods (78%) and baking goods (118%) were a huge surprise. 

**A few things could be going on here:**

1. I don’t know enough about produce retailing, but this store might use high quality affordable produce as a way to draw shoppers into the store while recouping margin in other aisles.
2. Story matters. I imagine it is difficult to tell a story when a brand’s marketing real estate is limited to  a one inch produce sticker. You can fit a USDA organic button and not much else.


<img src="/assets/images/2024-01-22-how much are organic groceries/organic-pricing-medians.png" alt="">

## But what would compel a shopper to pay 2-3x the price of conventional? 
My best guess: premiums are compounding. The more premium attributes a product includes (ie the more complex it is) its price point will be exponentially higher.

Frozen pizza is a great example. The product itself is premium because of its convenience. On top of that, it includes only organic ingredients. Most of those ingredients (like cheese and tomato sauce) require organic sub-ingredients and inputs. Multiply all of these attributes together, and we get a frozen pizza selling for 200% more than its lowest cost conventional counterpart. And contrary to produce retailing, frozen pizza’s are large, square and act as a giant billboard inside the freezer cabinet. The story on that billboard: organic vine-ripened tomatoes and dairy cows that spend more time in the pasture makes for something exceptional.

<img src="/assets/images/2024-01-22-how much are organic groceries/organic-pricing-complex.png" alt="">

## Biggest opportunity for value creation: premium staple goods.
I find the products with premiums ranging from 50-100% most compelling. Unlike the ultra-premium products, these represent a class of normal staple goods–the goods shoppers use and consume on a weekly basis. Volume multiplied by relatively high premiums makes this group the biggest value drivers in a standard grocery list.

Loyalty defines these products. If a brand can tell the right story, shoppers will see the value and stick with them. I buy a certain brand of organic milk because I am a nerd. I care too much about grass and fat.  But I also buy that organic milk because the people I love tell me it tastes better. The brand gives me a short story right on the carton about how they do things differently to make sure their milk tastes better. There is no going back.

<img src="/assets/images/2024-01-22-how much are organic groceries/organic-pricing-staple-goods.png" alt="">


## A look forward:
- Shoppers value certified claims. Using USDA as a foundation, let’s continue to build robust transparency programs that tell great stories.
- Let’s build value in everyday pantry staples. Competition is steep, but if we make something unique and tell a great story, shoppers will place our  brand at the top of every grocery list.

## About the data project:
How I isolated each item pair:
1. I parsed product names to determine whether a product is organic or not. USDA Organic regulations state that only certified organic products may be described as “organic”, so it is safe to assume a product listing “Fresh Organic Fuji Apples - 2 pound bag” represents a certified organic product.
2. I parsed the product name field once again to isolate a “common name” for each item. In the example above that would pull “fuji apple” from “Fresh Organic Fuji Apples - 2 pound bag”.
3. And finally, I converted all fill weights into uniform units of measure (either pounds or fluid ounces depending on the physical product type).
4. With these three helper columns, I was able to group items by organic status and common name. And within each grouping, I was able to isolate the lowest $/lb or $/fl oz variant. 
5. This yielded two dataframes: 1.) the lowest cost organic variants and 2.) the lowest cost conventional variants. I joined these into a single comparison dataframe to calculate premiums.

**Example calculation:** organic fuji apples priced at $2.64/lb vs. conventional fuji apples priced at $1.83/lb results in a 44% premium for organic. Right in line with the median–what an indicator!

**One source of error:** bulk deals (high fill weight, low unit price) created some big outliers. To reduce sticker shock organic items often sell in smaller configurations. And conversely, we see more bulk discounts on conventional items. When these converge, my comparison produced an outlier.

**A limitation:** to generate common names for each item, I used string matching with regex. In future iterations of this project, a natural language processor paired with a machine learning model could:
 Find more matches and increase the sample size 
 Analyze product titles to extrapolate premiums not just from organic claims but other claims as well such as non-gmo, regenerative and combinations thereof.  
