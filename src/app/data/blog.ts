export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: number;
  image: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'best-hybrid-cars-sri-lanka-2024',
    title: 'Best Hybrid Cars to Buy in Sri Lanka in 2024',
    excerpt: 'With fuel prices continuing to rise, hybrid vehicles offer Sri Lankan buyers the perfect balance of performance and efficiency. Here are our top picks for 2024.',
    content: `
## Why Hybrid Cars Make Sense in Sri Lanka

Sri Lanka's fuel costs and road conditions make hybrid vehicles an exceptionally smart choice. Modern hybrids like the Toyota Camry WS and Nissan X-Trail e-POWER deliver outstanding fuel economy while handling our diverse road conditions with ease.

## Our Top Hybrid Picks

### 1. Toyota Camry WS Hybrid
The Camry WS Hybrid remains the gold standard in the executive sedan segment. With fuel consumption as low as 4.2L/100km and Toyota's renowned reliability, it's a compelling proposition.

### 2. Nissan X-Trail e-POWER
Nissan's revolutionary e-Power technology means the wheels are always driven by an electric motor, giving you EV-like smoothness with petrol convenience.

### 3. Toyota Prius Z (5th Gen)
The all-new Prius is a revelation. Finally, it's as stylish as it is efficient, with a stunning fastback design and class-leading 3.5L/100km economy.

### 4. Honda CR-V e:HEV
Honda's 2-motor hybrid system makes the CR-V e:HEV a supremely capable family SUV, with seamless AWD and impressive fuel figures.

## The SST Auto Advantage

At SST Auto, all our hybrid vehicles are thoroughly inspected and come with our 100-point quality assurance. We also offer competitive hybrid vehicle financing with rates tailored to Sri Lankan buyers.
    `,
    category: 'Buying Guide',
    tags: ['Hybrid', 'Toyota', 'Nissan', 'Honda', '2024'],
    author: { name: 'Kasun Perera', role: 'Senior Automotive Advisor', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop' },
    publishedAt: '2024-03-15',
    readTime: 6,
    image: 'https://images.unsplash.com/photo-1594201043503-46105ff92438?w=1200&h=600&fit=crop&auto=format',
    featured: true,
  },
  {
    id: '2',
    slug: 'bmw-vs-mercedes-which-to-buy',
    title: 'BMW vs Mercedes-Benz: Which Premium Brand Should You Buy in Sri Lanka?',
    excerpt: 'Two of the world\'s most prestigious automotive brands battle it out for your money. We break down the key differences to help you make the right decision.',
    content: `
## The Ultimate Luxury Rivalry

BMW and Mercedes-Benz have been competing for decades to claim the title of the world's finest automotive brand. Both offer exceptional quality, cutting-edge technology, and undeniable prestige. But which is right for you?

## BMW: The Driver's Choice

BMW's "Ultimate Driving Machine" tagline isn't just marketing. The brand truly focuses on driving dynamics. The 3 Series remains the benchmark sports sedan, while the 5 Series offers executive luxury with an athletic character.

**Why choose BMW:**
- Superior driving dynamics and handling
- More sporty, driver-focused interiors
- M Sport packages for added aggression
- Generally lower initial purchase price

## Mercedes-Benz: The Luxury Standard

Mercedes-Benz prioritises comfort, refinement, and technological innovation. The MBUX infotainment system is industry-leading, and the interiors set the benchmark for luxury.

**Why choose Mercedes-Benz:**
- More opulent, comfort-focused interiors
- Industry-leading MBUX technology
- Superior refinement and noise insulation
- Prestigious three-pointed star badge

## Our Verdict

For those who love driving: BMW. For those who love being driven: Mercedes-Benz. Both brands are well-supported in Sri Lanka with dealer networks and parts availability.

At SST Auto, we stock both brands and can arrange test drives to help you decide.
    `,
    category: 'Comparison',
    tags: ['BMW', 'Mercedes-Benz', 'Luxury', 'Comparison'],
    author: { name: 'Dinesh Wickramasinghe', role: 'Luxury Vehicle Specialist', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop' },
    publishedAt: '2024-02-28',
    readTime: 8,
    image: 'https://images.unsplash.com/photo-1569663485392-300558865df0?w=1200&h=600&fit=crop&auto=format',
    featured: true,
  },
  {
    id: '3',
    slug: 'electric-vehicles-sri-lanka-guide',
    title: 'Complete Guide to Electric Vehicles in Sri Lanka: Everything You Need to Know',
    excerpt: 'Thinking of making the switch to electric? Our comprehensive guide covers charging, range, costs, and the best EVs available in Sri Lanka right now.',
    content: `
## EV Revolution Arrives in Sri Lanka

Electric vehicles are no longer a novelty in Sri Lanka. With improving charging infrastructure and attractive government incentives, now is an excellent time to consider making the switch.

## Charging Infrastructure

Sri Lanka's charging network is rapidly expanding. Key charging points are available in Colombo, Kandy, Galle, and Negombo. Most EV owners primarily charge at home overnight.

## Cost of Ownership

While the initial purchase price of an EV is higher, the running costs tell a different story:
- Electricity cost: ~LKR 2-3 per km vs petrol at ~LKR 15-20 per km
- Maintenance: EVs have fewer moving parts, reducing service costs significantly
- Government incentives: Reduced import duties on fully electric vehicles

## Top EVs Available Through SST Auto

### Nissan Leaf e+
The most popular EV in Sri Lanka with 385km range and proven reliability.

### Buying Tips

1. Assess your daily commute — most EV owners find 80km daily is easily covered
2. Plan home charging installation before purchase
3. Consider the resale value trajectory

Contact SST Auto's EV specialists for a no-obligation consultation.
    `,
    category: 'Electric Vehicles',
    tags: ['Electric', 'EV', 'Nissan Leaf', 'Charging', 'Green'],
    author: { name: 'Priya Jayawardena', role: 'EV Technology Expert', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop' },
    publishedAt: '2024-01-20',
    readTime: 10,
    image: 'https://images.unsplash.com/photo-1594200879785-b6ee4fc48712?w=1200&h=600&fit=crop&auto=format',
  },
  {
    id: '4',
    slug: 'toyota-reliability-why-popular-sri-lanka',
    title: 'Why Toyota Remains the Most Trusted Brand in Sri Lanka',
    excerpt: 'Toyota\'s dominance in the Sri Lankan automotive market is legendary. We explore the key factors behind their enduring popularity and reliability reputation.',
    content: `
## Toyota's Sri Lankan Story

For over five decades, Toyota has been synonymous with reliability in Sri Lanka. From the legendary Land Cruiser conquering plantation roads to the ubiquitous Corolla ruling Colombo streets, Toyota has earned its dominant market position.

## The Reliability Factor

Toyota's legendary reliability stems from their conservative engineering philosophy. Rather than chasing cutting-edge technology, Toyota focuses on proven, refined systems that stand the test of time.

## Parts Availability

One of Toyota's biggest advantages in Sri Lanka is the extensive parts network. Genuine Toyota parts are available islandwide, keeping maintenance costs competitive.

## Resale Value

Toyota vehicles consistently command the highest resale values in Sri Lanka. A 5-year-old Camry or Land Cruiser retains significantly more value than competitors.

## SST Auto's Toyota Selection

We maintain a premium selection of Toyota vehicles, all thoroughly inspected with verified service histories. Browse our Toyota inventory for the best selection in Colombo.
    `,
    category: 'Brand Spotlight',
    tags: ['Toyota', 'Reliability', 'Sri Lanka', 'Resale Value'],
    author: { name: 'Kasun Perera', role: 'Senior Automotive Advisor', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop' },
    publishedAt: '2024-01-05',
    readTime: 5,
    image: 'https://images.unsplash.com/photo-1688427299215-874216046db2?w=1200&h=600&fit=crop&auto=format',
  },
  {
    id: '5',
    slug: 'vehicle-financing-guide-sri-lanka',
    title: 'Car Financing in Sri Lanka: A Complete Guide for 2024',
    excerpt: 'Navigating vehicle finance in Sri Lanka can be complex. Our expert guide breaks down interest rates, loan terms, and strategies to get the best deal.',
    content: `
## Understanding Vehicle Finance in Sri Lanka

Vehicle financing in Sri Lanka is offered by commercial banks, licensed finance companies, and leasing companies. Each has its own rates, terms, and requirements.

## Current Interest Rate Landscape

As of 2024, vehicle loan rates range from 14% to 22% per annum depending on the lender, vehicle type, and your credit profile.

## Key Finance Considerations

**Deposit:** Most lenders require 25-40% upfront
**Loan Term:** Typically 36-60 months for used vehicles
**Monthly Payment:** Use our Finance Calculator to estimate your payments

## Tips to Get the Best Rate

1. Maintain a good credit history
2. Make a larger deposit to reduce the financed amount
3. Compare at least 3 lenders
4. Consider the total cost, not just monthly payment
5. Read all terms carefully, especially early settlement clauses

## SST Auto Finance Assistance

Our finance team works with multiple lenders to find you the most competitive rate. We handle all the paperwork, making your purchase seamless.
    `,
    category: 'Finance',
    tags: ['Finance', 'Loan', 'Interest Rate', 'Buying Tips'],
    author: { name: 'Nimal Fernando', role: 'Finance Manager', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop' },
    publishedAt: '2023-12-10',
    readTime: 7,
    image: 'https://images.unsplash.com/photo-1584729323111-33bda8f116b2?w=1200&h=600&fit=crop&auto=format',
  },
  {
    id: '6',
    slug: 'selling-your-car-maximum-value',
    title: '7 Tips to Sell Your Car for Maximum Value in Sri Lanka',
    excerpt: 'Getting the best price when selling your vehicle requires preparation and strategy. Our experts share the insider secrets to maximising your car\'s sale price.',
    content: `
## Preparing Your Car for Sale

First impressions matter enormously in the used car market. A well-presented vehicle can command 10-15% more than an identical car in poor condition.

## 7 Expert Tips

**1. Professional Detailing**
A professional detail inside and out can cost LKR 15,000-30,000 but can add significantly more to your asking price.

**2. Address Minor Issues**
Fix small dents, scratches, and mechanical niggles before listing. These disproportionately affect perceived value.

**3. Compile Your Service History**
A complete, documented service history is gold. Find every receipt and organise them chronologically.

**4. Get a Pre-Sale Inspection**
Knowing your car's condition before a buyer's inspection prevents negotiation surprises.

**5. Price It Right**
Research current market prices for your specific variant. Overpricing leads to a stale listing.

**6. Quality Photography**
Good photos dramatically increase inquiry rates. Shoot in natural light with a clean background.

**7. Consider a Dealer Trade-In**
SST Auto offers instant valuations and fair trade-in prices. The convenience often outweighs a small price differential.

## Sell to SST Auto

Skip the hassle of private sale. Get an instant online valuation from SST Auto — we pay top prices and handle all the paperwork.
    `,
    category: 'Selling Guide',
    tags: ['Selling', 'Valuation', 'Tips', 'Trade-In'],
    author: { name: 'Dinesh Wickramasinghe', role: 'Luxury Vehicle Specialist', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop' },
    publishedAt: '2023-11-22',
    readTime: 6,
    image: 'https://images.unsplash.com/photo-1618642624018-a370cbf3cd80?w=1200&h=600&fit=crop&auto=format',
  },
];

export const categories = ['All', 'Buying Guide', 'Comparison', 'Electric Vehicles', 'Brand Spotlight', 'Finance', 'Selling Guide'];
