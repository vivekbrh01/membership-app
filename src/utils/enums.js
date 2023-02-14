import ImageLinks from './ImagesLinks';

export const membershipTypes = [
  {
    title: 'Indiassetz Silver',
    isCurrent: true,
    cardDetails: {
      showCard: false,
      title: 'Annual Savings',
      amount: 'NA',
      gradientColors: [],
      gradientAngle: 0,
    },
    totalAmount: 'NA',
    packageDetails: [
      {
        subTitle: 'Subscription Fees',
        value: 'Free',
        showInfoIcon: false,
      },
      {
        subTitle: 'Residential/Commercial Property Buy/Sell',
        value: '2% ',
        valueDetails: '(Transactional Value)',
        showInfoIcon: false,
      },
      {
        subTitle: 'Residential/Commercial Property Property Rental',
        value: '30 days rent',
        showInfoIcon: false,
      },
      {
        subTitle: 'Residential/Commercial Property Buy/Sell',
        value: '15 days rent ',
        valueDetails: '+GST',
        showInfoIcon: false,
      },
      {
        subTitle: 'Primary Buy - Only Residential',
        value: 'Free',
        showInfoIcon: false,
      },
      {
        subTitle: 'Annual maintenance contract',
        value: '₹ 60/sq.ft.',
        showInfoIcon: false,
      },
    ],
  },
  {
    title: 'Indiassetz Gold',
    isCurrent: false,
    cardDetails: {
      showCard: true,
      title: 'Annual Savings',
      amount: 'Rs 1,50,000',
      gradientColors: ['#FFD194', '#DFA251'],
      gradientAngle: 205.77,
    },
    totalAmount: '₹ 1,999',
    packageDetails: [
      {
        subTitle: 'Subscription Fees',
        value: '₹ 1,999',
        showInfoIcon: false,
      },
      {
        subTitle: 'Cash back Offer',
        value: '₹ 3,000',
        showInfoIcon: true,
      },
      {
        subTitle: 'Residential/Commercial Property Buy/Sell',
        value: '1.25% - 2%',
        showInfoIcon: false,
      },
      {
        subTitle: 'Residential/Commercial Property Property Rental',
        value: '25 days rent',
        showInfoIcon: false,
      },
      {
        subTitle: 'Primary Buy - Only Residential',
        value: 'Free',
        showInfoIcon: false,
      },
    ],
  },
  {
    title: 'Indiassetz Platinum',
    isCurrent: false,
    cardDetails: {
      showCard: true,
      title: 'Annual Savings',
      amount: 'Rs 3,00,000',
      gradientColors: ['#000000', '#2E2D2D'],
      gradientAngle: 325.2,
    },
    totalAmount: '₹ 3,999',
    packageDetails: [
      {
        subTitle: 'Subscription Fees',
        value: '₹ 3,999',
        showInfoIcon: false,
      },
      {
        subTitle: 'Cash back Offer',
        value: '₹ 5,000',
        showInfoIcon: true,
      },
      {
        subTitle: 'Residential/Commercial Property Buy/Sell',
        value: '1% - 1.75%',
        showInfoIcon: false,
      },
      {
        subTitle: 'Residential/Commercial Property Property Rental',
        value: '₹ 699',
        showInfoIcon: false,
      },
      {
        subTitle: 'Primary Buy - Only Residential',
        value: 'Free',
        showInfoIcon: false,
      },
    ],
  },
  {
    title: 'Achievers club',
    isCurrent: false,
    cardDetails: {
      showCard: true,
      title: 'Annual Savings',
      amount: 'Rs 5,00,000',
      gradientColors: ['#B290FB', '#8672F3'],
      gradientAngle: 325.2,
    },
    totalAmount: '₹ 24,999',
    packageDetails: [
      {
        subTitle: 'Subscription Fees',
        value: '₹ 24,999',
        showInfoIcon: false,
      },
      {
        subTitle: 'Cash back Offer',
        value: '₹ 10,000',
        showInfoIcon: true,
      },
      {
        subTitle: 'Residential/Commercial Property Buy/Sell',
        value: '0.75% - 1%',
        valueDetails: '(Transactional Value)',
        showInfoIcon: false,
      },
      {
        subTitle: 'Residential/Commercial Property Property Rental',
        value: '15 days rent',
        showInfoIcon: false,
      },
      {
        subTitle: 'Primary Buy - Only Residential',
        value: 'Free',
        showInfoIcon: false,
      },
    ],
  },
];

export const addressData = {
  id: 1,
  title: 'Navami Landmark',
  locality: 'No 2, 12th main road, Residency road, Bengaluru - 560001',
};

export const frequentlyBoughtTogether = [
  {
    id: 1,
    title: 'Residential Valuation',
    subTitle:
      'The real value of an Asset is not in the bricks and mortar but in its story.',
    image: ImageLinks.boughtTogether1,
  },
  {
    id: 2,
    title: 'Portfolio Advisory',
    subTitle:
      'Advisory as the word suggest, is a consulting Product aimed at bringing the nuances involved in your Real Estate.',
    image: ImageLinks.boughtTogether2,
  },
  {
    id: 3,
    title: 'Flexi Rental',
    subTitle:
      "We connect property owners with a wide rage of platforms, solving property owners' requirements around hosting.",
    image: ImageLinks.boughtTogether3,
  },
  {
    id: 4,
    title: 'Buy/ Sell/ Rent',
    subTitle:
      'Finding a home, commercial property, tenants or a buyer can be hard.',
    image: ImageLinks.boughtTogether4,
  },
];
