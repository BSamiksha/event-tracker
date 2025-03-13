
import community_celebration from '../assets/com_celebration.jpg';
import culture_exchange from '../assets/culture_exchange.jpg';
import social_project from '../assets/social_project.jpg';
import john from '../assets/john.jpg';
import jane from '../assets/jane.jpg';
import chris from '../assets/chris.jpg';

export const socials = [
    {
      title: 'Service Projects',
      desc: 'Join hands to create impactful changes.',
      img: social_project,
    },
    {
      title: 'Community Celebrations',
      desc: 'Celebrate diversity and unity.',
      img: community_celebration,
    },
    {
      title: 'Cultural Exchanges',
      desc: 'Explore cultures and build connections.',
      img: culture_exchange,
    },
];

export const memberReviews = [
  {
    name: 'John Doe',
    text: 'This platform helped me build strong connections and grow personally.',
    img: john,
  },
  {
    name: 'Jane Smith',
    text: 'Amazing events and fantastic community support.',
    img: jane,
  },
  {
    name: 'Chris Johnson',
    text: 'I’ve learned so much and connected with incredible people!',
    img: chris,
  },
];

export const statsCount = [
    { stat: '98%', label: 'Opportunities Expanded' },
    { stat: '89%', label: 'Attendee Satisfaction' },
    { stat: '15k+', label: 'Engaged Participants' },
    { stat: '2x', label: 'Impact Growth' },
];

export const defaultEvents = [
    {
  id: 1,
  title: "Holi Festival",
  date: "2025-03-22",
  time: "10:00 AM",
  location: "Jaipur",
  description: "Celebrate the festival of colors with music, dance, and sweets.",
  createdAt: "2025-01-12T10:00:00.000Z",
  category: "religious",
},
{
  id: 2,
  title: "Beach Clean-Up",
  date: "2025-07-22",
  time: "7:00 AM",
  location: "Goa",
  description: "Join us in cleaning up the beach and preserving marine life.",
  createdAt: "2025-06-05T10:00:00.000Z",
  category: "social",
},
{
  id: 3,
  title: "Orphanage Visit",
  date: "2025-08-14",
  time: "4:00 PM",
  location: "Kolkata",
  description: "Spend a day with the children at the orphanage and bring them joy.",
  createdAt: "2025-07-01T10:00:00.000Z",
  category: "charity",
},
];

export const linkData = [
    {
      label: "Home",
      link: "home",
    },
    {
      label: "Events",
      link: "events/view",
      subOptions: [
        { label: "View Events", link: "events/view" },
        { label: "Add New Event", link: "events/add-event" },
      ],
    },
  ];

