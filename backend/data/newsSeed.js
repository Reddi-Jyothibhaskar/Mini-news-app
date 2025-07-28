const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Article = require('../models/Article');

dotenv.config();

const articles = [
  // EVENTS
  {
    title: 'Annual Tech Fest Announced',
    summary: 'Get ready for the biggest tech fest of the year with coding and robotics challenges.',
    content: 'This year’s tech fest will include hackathons, AI challenges, and drone competitions. Students from various colleges are invited to participate.',
    author: 'Ankit Mehra',
    imageUrl: 'https://images.unsplash.com/photo-1584521947172-ad6d0433b172?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    publishedAt: new Date(),
    category: 'Events'
  },
  {
    title: 'Cultural Day Celebration',
    summary: 'Join us for a vibrant cultural day featuring traditional performances and food.',
    content: 'Students will showcase diverse cultural heritage through dance, music, and food stalls representing different regions of India.',
    author: 'Priya Singh',
    imageUrl: 'https://media.istockphoto.com/id/639392024/photo/color-holi-festival.webp?a=1&b=1&s=612x612&w=0&k=20&c=sq993QjZQkYm4Gn-noknteXNcMJI_b4bNNxmjcPWKNo=',
    publishedAt: new Date(),
    category: 'Events'
  },
  {
    title: 'Workshop on Public Speaking',
    summary: 'Improve your speaking skills with expert-led sessions this weekend.',
    content: 'Open to all students, this workshop covers body language, clarity, confidence, and storytelling.',
    author: 'Neha Reddy',
    imageUrl: 'https://media.istockphoto.com/id/2123151544/photo/businessman-holding-e-learning-on-global-technology-network-knowledge-sharing-skill.webp?a=1&b=1&s=612x612&w=0&k=20&c=zi6_WIrkv7Nm5FzY-7Z1uilv0EBTT-i-_wDbAFjProc=',
    publishedAt: new Date(),
    category: 'Events'
  },

  // ACADEMICS
  {
    title: 'New Semester Timetable Released',
    summary: 'Check out the updated timetable and exam schedules for all departments.',
    content: 'The academic calendar now includes revision breaks and lab evaluation dates.',
    author: 'Dr. Ramesh Rao',
    imageUrl: 'https://media.istockphoto.com/id/106561919/photo/setting-a-date.webp?a=1&b=1&s=612x612&w=0&k=20&c=a9DTB9-jsRcOU9hWbaUNCYTPsxi6XPm5sAqdLLGr5SM=',
    publishedAt: new Date(),
    category: 'Academics'
  },
  {
    title: 'Python Bootcamp Starts Monday',
    summary: 'Enroll in the 10-day Python Bootcamp hosted by the CS department.',
    content: 'Covers basics to advanced topics with certification. Seats are limited.',
    author: 'Meghana Kulkarni',
    imageUrl: 'https://images.unsplash.com/photo-1664570000007-db164768644d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHl0aG9uJTIwbGFuZ3VhZ2V8ZW58MHx8MHx8fDA%3D',
    publishedAt: new Date(),
    category: 'Academics'
  },
  {
    title: 'AI Research Papers Published',
    summary: 'Faculty members have published AI papers in international journals.',
    content: 'Topics include natural language processing, computer vision, and ethical AI systems.',
    author: 'Prof. Arvind Iyer',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1726666269043-fb16e54646d0?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    publishedAt: new Date(),
    category: 'Academics'
  },

  // ALUMNI
  {
    title: 'Alumni Meet 2025 Scheduled',
    summary: 'Reconnect with your batchmates in the upcoming alumni gathering.',
    content: 'The meet will be hosted in the main auditorium with dinner, awards, and performances.',
    author: 'Alumni Committee',
    imageUrl: 'https://media.istockphoto.com/id/1370530551/photo/closeup-shot-of-an-unrecognisable-graduate-receiving-their-certificate-on-graduation-day.webp?a=1&b=1&s=612x612&w=0&k=20&c=GHWQeLCxkvT3rlx4fdXdAAusYV14mQzlBAO7c1ehgOM=',
    publishedAt: new Date(),
    category: 'Alumni'
  },
  {
    title: 'Alumnus Donates 5 Lakhs to Library',
    summary: 'Mr. Karthik Reddy from the 2002 batch has contributed towards book digitization.',
    content: 'The donation will help in digitizing over 10,000 reference books.',
    author: 'Library Admin',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGlicmFyeXxlbnwwfHwwfHx8MA%3D%3D',
    publishedAt: new Date(),
    category: 'Alumni'
  },
  {
    title: 'Startup by Alumnus Wins National Award',
    summary: 'Tech startup by alumni team wins innovation award for AI-enabled platform.',
    content: 'Their platform helps streamline supply chain logistics with predictive analytics.',
    author: 'Entrepreneur Cell',
    imageUrl: 'https://images.unsplash.com/photo-1578269174936-2709b6aeb913?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXdhcmR8ZW58MHx8MHx8fDA%3D',
    publishedAt: new Date(),
    category: 'Alumni'
  },

  // SPORTS
  {
    title: 'Intercollege Cricket Tournament',
    summary: 'Our team enters semifinals in the annual intercollege cricket league.',
    content: 'They beat top colleges and will play finals this Saturday.',
    author: 'Sports Department',
    imageUrl: 'https://images.unsplash.com/photo-1745180266396-ec9b9a66e442?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q3JpY2tldCUyMHRvdXJuYW1lbnR8ZW58MHx8MHx8fDA%3D',
    publishedAt: new Date(),
    category: 'Sports'
  },
  {
    title: 'Girls Basketball Team Wins Gold',
    summary: 'The girls team defeated national champions in a close match.',
    content: 'It was a thrilling game and the team credits the new coach for the win.',
    author: 'PE Instructor',
    imageUrl: 'https://images.unsplash.com/photo-1519766304817-4f37bda74a26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEJhc2tldCUyMGJhbGx8ZW58MHx8MHx8fDA%3D',
    publishedAt: new Date(),
    category: 'Sports'
  },
  {
    title: 'Annual Sports Day Schedule Out',
    summary: 'Track events, volleyball, and chess tournaments to be held over 3 days.',
    content: 'Participants can register online or through their class reps.',
    author: 'Sports Secretary',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1661868906940-5d8443acf49e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U3BvcnRzJTIwZGF5fGVufDB8fDB8fHww',
    publishedAt: new Date(),
    category: 'Sports'
  },

  // CULTURAL
  {
    title: 'Music Club Performance Night',
    summary: 'Live performance by college band and solo artists this Friday.',
    content: 'The event will be held in the amphitheater at 6 PM. Entry is free.',
    author: 'Cultural Committee',
    imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TXVzaWN8ZW58MHx8MHx8fDA%3D',
    publishedAt: new Date(),
    category: 'Cultural'
  },
  {
    title: 'Drama Club Hosts Street Play',
    summary: 'A social-awareness play will be staged in the main quadrangle.',
    content: 'The play focuses on the effects of peer pressure and youth anxiety.',
    author: 'Drama Club',
    imageUrl: 'https://media.istockphoto.com/id/104240908/photo/curtain-up.webp?a=1&b=1&s=612x612&w=0&k=20&c=2R0Cp7kbHLEAI7OAokRCTnYNkvcwvZfDPwYo4Wa5lGk=',
    publishedAt: new Date(),
    category: 'Cultural'
  },
  {
    title: 'College Choir Wins District Competition',
    summary: 'The choir took first place in group vocals and harmonization.',
    content: 'The team will now represent the district in the state-level event.',
    author: 'Music Faculty',
    imageUrl: 'https://images.unsplash.com/photo-1527261834078-9b37d35a4a32?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fENvbGxlZ2UlMjBjaG9pcnxlbnwwfHwwfHx8MA%3D%3D',
    publishedAt: new Date(),
    category: 'Cultural'
  },

  // PLACEMENT
  {
    title: 'Placement Drive by Infosys',
    summary: 'Infosys is conducting campus placements for final year students.',
    content: 'Eligibility: CGPA above 7.0, no backlogs. Register by this Friday.',
    author: 'Placement Officer',
    imageUrl: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW50ZXJ2aWV3fGVufDB8fDB8fHww',
    publishedAt: new Date(),
    category: 'Placement'
  },
  {
    title: 'Resume Building Workshop',
    summary: 'Training and templates for final year students this Wednesday.',
    content: 'Conducted by alumni working in Big 4 companies. Bring a soft copy of your resume.',
    author: 'Career Services',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1661288470388-c5006797bdff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    publishedAt: new Date(),
    category: 'Placement'
  },
  {
    title: 'Capgemini Hires 12 Students',
    summary: '12 students placed in Capgemini’s coding & business roles.',
    content: 'Highest package offered is ₹6.5 LPA. Congrats to the placed students!',
    author: 'Training Cell',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1683121855240-5d3f67a5fdec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGlyaW5nfGVufDB8fDB8fHww',
    publishedAt: new Date(),
    category: 'Placement'
  }
];


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(async () => {
    await Article.deleteMany(); // Clear existing articles
    await Article.insertMany(articles); // Insert new articles
    console.log('Seed data inserted successfully');
    process.exit();
}).catch(err => {
    console.error('Error inserting seed data:', err);
});