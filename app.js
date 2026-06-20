;(function(){"use strict";
// ═══════════════════════════════════════════════════════════
//  RALLY CAP U5 — APP DATA
// ═══════════════════════════════════════════════════════════

const CAP_COLORS = {
  White: { bg: '#f5f5f5', border: '#bdbdbd', text: '#333', badge: '#888', emoji: '⚪' },
  Grey:  { bg: '#e8e8e8', border: '#9e9e9e', text: '#333', badge: '#666', emoji: '🩶' },
  Black: { bg: '#3a3a3a', border: '#222',    text: '#fff', badge: '#ccc', emoji: '⚫' },
  Green: { bg: '#e8f5e9', border: '#43a047', text: '#1b5e20', badge: '#388e3c', emoji: '🟢' },
  Blue:  { bg: '#e3f0fb', border: '#1976d2', text: '#0d47a1', badge: '#1565c0', emoji: '🔵' },
  Red:   { bg: '#fdecea', border: '#e53935', text: '#b71c1c', badge: '#c62828', emoji: '🔴' },
};

const SKILLS_BY_CAP = {
  White: [
    { cat: '🏃 Movement', skill: 'Agility — Jump over a line 10 reps', drill: 'The Kangaroo', desc: 'Kids jump back and forth over a chalk line in their own style. Focus: safe landing technique, not style.' },
    { cat: '🎯 Throwing', skill: 'Throw 5 feet to a coach', drill: 'Handcuffs', desc: 'Coach holds arms behind back, kids throw to them at 5 ft. Teaches proper grip before arm motion.' },
    { cat: '🧤 Receiving', skill: 'Catch underhand toss at 5 feet', drill: 'Catch Like an Egg', desc: 'Use soft hands to absorb the ball — don\'t stab at it. Both hands together.' },
    { cat: '🏏 Hitting', skill: 'Hit ball off a tee into fair territory', drill: 'Tee Work', desc: 'Tee placed in front of home plate (not on it). Contact matters, not distance.' },
    { cat: '🏃 Baserunning', skill: 'Run all 4 bases after tee hit', drill: 'Full Circuit', desc: 'Coach stands on 1st base line. Batter swings, drops bat safely, and runs home→1st→2nd→3rd→home.' },
  ],
  Grey: [
    { cat: '🏃 Movement', skill: 'Balance — Hold pitching position 5 sec each side', drill: 'Up & Down', desc: 'Lift one knee to hip height, hold. Teaches the loaded pitching stance on both sides.' },
    { cat: '🎯 Throwing', skill: 'Throw 10 feet to a coach', drill: 'Distance Focus', desc: 'No accuracy required — just reach the distance. Reinforces step-and-throw mechanics.' },
    { cat: '🧤 Receiving', skill: 'Field 3/5 rolled grounders at 15 feet', drill: 'The Crocodile', desc: 'Glove open like a croc mouth, scoop and close. Ball rolled gently along the ground.' },
    { cat: '🏏 Hitting', skill: 'Hit 3/5 balls in fair territory off tee', drill: 'Counting Hits', desc: 'Now we count! Three out of five contacts in fair territory. Still off the tee.' },
    { cat: '🏃 Baserunning', skill: 'Hit off tee & run through 1st base', drill: 'The Transition', desc: 'Learn to drop the bat and explode toward 1st without slowing down at the bag.' },
  ],
  Black: [
    { cat: '🏃 Movement', skill: 'Coordination — 10 jumping jacks', drill: 'Jack-of-all-Trades', desc: 'Look for arm/leg synchronization — classic intro to coordinated movement.' },
    { cat: '🎯 Throwing', skill: 'Throw 25 feet in the air (no bouncing)', drill: 'Air Throw', desc: 'Ball must travel through the air to the coach. Key step up from rolling/bouncing throws.' },
    { cat: '🧤 Receiving', skill: 'Catch 3/5 fly balls at 10 feet height', drill: 'Fly Ball Catch', desc: 'Coach tosses ball 15 ft up, 10 ft away. Two-hand catches, watch the ball all the way in.' },
    { cat: '🏏 Hitting', skill: 'Hit front-toss 3/5 fair balls from 8 ft', drill: 'Front Toss', desc: 'Coach kneels and tosses underhand from 8 ft. First step toward live pitching!' },
    { cat: '🏃 Baserunning', skill: 'Run 2 bases and STOP on the bag', drill: 'Stop & Go', desc: 'Players at each base, sprint to next and decelerate in control.' },
  ],
  Green: [
    { cat: '🏃 Movement', skill: 'Agility — Touch 6 cones in star shape', drill: 'Hurdle Slalom', desc: 'Cones in a star, kids weave through without turning their back. Introduces direction changes.' },
    { cat: '🎯 Throwing', skill: 'Throw 25 feet accurately at a target', drill: 'The Target', desc: 'Same distance as Black, but now we aim! Throw at a hula hoop or cone target.' },
    { cat: '🧤 Receiving', skill: 'Field 3/5 grounders LEFT and 3/5 RIGHT', drill: 'Lateral Grounders', desc: 'Coach rolls ball 5–10 ft to each side. Kids must move laterally and field.' },
    { cat: '🏏 Hitting', skill: 'Hit 3/5 underhand tosses to outfield', drill: 'Power Hit', desc: 'Ball must reach outfield grass. Coach tosses from 20 ft standing up. More power required!' },
    { cat: '🏃 Baserunning', skill: 'Run 20 feet then feet-first slide', drill: 'Crab Dance', desc: 'From crab position, practice sliding on grass. Then build up to a full run and slide.' },
  ],
  Blue: [
    { cat: '🏃 Movement', skill: 'Catcher squat jumps L & R 5 times each', drill: 'Frog Race', desc: 'Squat like a catcher, then jump sideways. Teams race in frog jumps. Builds catcher athleticism.' },
    { cat: '🎯 Throwing', skill: 'Throw 50 feet in the air', drill: 'The Relay', desc: 'Big arm throw! Coach at 50 ft. Ball must stay in the air. Relay teams compete.' },
    { cat: '🧤 Receiving', skill: 'Catch 3/5 fly balls LEFT and 3/5 RIGHT', drill: 'Field 3', desc: 'Ball thrown at 15 ft height, 5–10 ft to each side. Move and track the ball laterally.' },
    { cat: '🏏 Hitting', skill: 'Side-toss hit 3/5 balls 75 feet or more', drill: 'Side Toss', desc: 'Coach at player\'s side at 8 ft (like a game). Ball must reach 75 ft.' },
    { cat: '🏃 Baserunning', skill: 'Steal 2nd base on coach signal from 1st', drill: 'Base Steal', desc: 'Lead off 1st, react to "Go!" signal, run full speed to 2nd.' },
  ],
  Red: [
    { cat: '🏃 Movement', skill: 'Juggle 2 balls between 2 hands for 5 sec', drill: 'Juggling in Pairs', desc: 'Partners exchange balls simultaneously — right hand throws, left hand catches.' },
    { cat: '🎯 Throwing', skill: 'Throw 3/5 from shortstop to 1st base', drill: 'CHAMP', desc: 'Real game throw! Ball rolled to SS position, player fields and throws to 1st base.' },
    { cat: '🧤 Receiving', skill: 'Catch 13/15 — grounders, fly balls & thrown', drill: 'All Messed Up', desc: 'Mixed ball types in a row. Best receiving test.' },
    { cat: '🏏 Hitting', skill: 'Hit 3/5 from overhand pitch or machine', drill: 'Accurate Hitter', desc: 'Real-speed pitching! Aim for specific field zones.' },
    { cat: '🏃 Baserunning', skill: 'Steal 3rd base on signal from 1st', drill: 'Long Steal', desc: 'Lead off 1st, react to "Go!", run all the way to 3rd.' },
  ],
};

const WEEKS = [
  { week:1, theme:'Welcome to Baseball! ⚾', cap:'White', practices:[
    { day:'Practice 1A', duration:'60 min', focus:'Grip, throw & tee hitting', segments:[
      { time:'0–10 min',  title:'🎉 Name Game Warm-Up',      type:'fun',         detail:'Everyone says their name + a baseball word. Then a light jog around the bases!' },
      { time:'10–25 min', title:'⚾ Handcuffs Drill',         type:'skill',       detail:'WHITE THROWING SKILL: Coach holds arms behind back, kid throws to them at 5 ft. Teaches proper grip before arm motion.' },
      { time:'25–40 min', title:'🏏 Tee Hitting',             type:'skill',       detail:'WHITE HITTING SKILL: Every kid gets 5 swings off the tee. Cheer every contact — contact is the goal, not distance!' },
      { time:'40–50 min', title:'🎈 Balloon Catch',           type:'fun',         detail:'Use a balloon or beach ball. Two-hand catch practice with zero pressure and lots of giggles.' },
      { time:'50–60 min', title:'🏆 Team Cheer & Stickers',  type:'celebration', detail:'Gather in a circle, share ONE thing you liked today. Hand out participation stickers!' },
    ]},
    { day:'Practice 1B', duration:'60 min', focus:'Catching & base running', segments:[
      { time:'0–10 min',  title:'🏃 Silly Run Warm-Up',       type:'fun',         detail:'Coach calls different run styles: crab, skip, gallop, tiptoe around the bases.' },
      { time:'10–25 min', title:'🧤 Catch Like an Egg',       type:'skill',       detail:'WHITE RECEIVING SKILL: Soft hands — pretend the ball is a raw egg! Underhand toss at 5 ft.' },
      { time:'25–40 min', title:'🏃 Run the Bases!',          type:'skill',       detail:'WHITE BASERUNNING SKILL: Each kid hits off tee then runs the full circuit: home→1st→2nd→3rd→home.' },
      { time:'40–55 min', title:'🎯 Bean Bag Bucket Toss',    type:'fun',         detail:'Toss bean bags into a bucket from 5 ft, 8 ft, 10 ft. Track personal best each round!' },
      { time:'55–60 min', title:'🌟 High-Five Lineup',        type:'celebration', detail:'Everyone lines up for a round of high-fives and "Great job today!"' },
    ]},
  ]},
  { week:2, theme:'Move Like a Ballplayer 🐸', cap:'White', practices:[
    { day:'Practice 2A', duration:'60 min', focus:'Agility & movement skills', segments:[
      { time:'0–10 min',  title:'🐘 Animal Walk Warm-Up',     type:'fun',         detail:'Walk like different animals between bases: elephant stomp, penguin waddle, bunny hop, crab crawl.' },
      { time:'10–25 min', title:'🦘 The Kangaroo',            type:'skill',       detail:'WHITE MOVEMENT SKILL: Jump over a chalk line 10 reps in your own style. Every style is valid!' },
      { time:'25–40 min', title:'🏏 Tee Hitting Review',      type:'skill',       detail:'Re-practice White hitting. Focus: feet apart, eye on ball, swing through. 5 swings each.' },
      { time:'40–55 min', title:'🎪 Obstacle Course',         type:'fun',         detail:'Jump line → pick up ball → throw in bucket → run to 1st base → celebrate!' },
      { time:'55–60 min', title:'🏆 Best Jump Contest',       type:'celebration', detail:'Who can show off their best jump? Every style gets a cheer. No losers!' },
    ]},
    { day:'Practice 2B', duration:'60 min', focus:'White Cap review & mini game', segments:[
      { time:'0–10 min',  title:'🎵 Freeze Dance',            type:'fun',         detail:'Play music, kids dance. When music stops — freeze in a baseball pose!' },
      { time:'10–20 min', title:'🔄 White Cap Skills Blitz',  type:'skill',       detail:'Quick rotation through all 5 White skills: 2 min each.' },
      { time:'20–45 min', title:'⚾ Mini Tee Ball Game',      type:'fun',         detail:'Simple tee-ball game: hit off tee, run bases. No outs — everyone runs, everyone bats!' },
      { time:'45–55 min', title:'🏃 Relay Race Around Bases', type:'fun',         detail:'Two teams relay-race around the bases. Cheer for everyone!' },
      { time:'55–60 min', title:'🥇 White Cap Celebration',   type:'celebration', detail:'Ask each kid: "What\'s your favourite baseball move?" Celebrate White Cap progress!' },
    ]},
  ]},
  { week:3, theme:'Balance & Grounders 🎯', cap:'Grey', practices:[
    { day:'Practice 3A', duration:'60 min', focus:'Balance & throwing distance', segments:[
      { time:'0–10 min',  title:'🦩 Flamingo Warm-Up',        type:'fun',         detail:'Balance on one foot 5 sec, then switch. Eyes open → eyes closed → arms out.' },
      { time:'10–25 min', title:'⚖️ Up & Down Balance',       type:'skill',       detail:'GREY MOVEMENT SKILL: Hold pitching balance position 5 seconds on both sides.' },
      { time:'25–40 min', title:'🎯 10-Foot Throw',           type:'skill',       detail:'GREY THROWING SKILL: Throw 10 ft to coach. Step and throw! No accuracy needed.' },
      { time:'40–55 min', title:'🐸 Leap Frog Relay',         type:'fun',         detail:'Teams leap frog around the bases. Hilariously exhausting.' },
      { time:'55–60 min', title:'🌟 Balance Champion',        type:'celebration', detail:'Who can balance longest on one foot? Group cheer for everyone who tries!' },
    ]},
    { day:'Practice 3B', duration:'60 min', focus:'Grounders & counting hits', segments:[
      { time:'0–10 min',  title:'🐊 Croc Stretch Warm-Up',    type:'fun',         detail:'Crocodile stretch: reach arms forward, open and close "jaws." Shoulder warm-up!' },
      { time:'10–25 min', title:'🧤 The Crocodile Drill',     type:'skill',       detail:'GREY RECEIVING SKILL: Field 3/5 rolled grounders at 15 ft. Glove down like croc jaws!' },
      { time:'25–40 min', title:'🏏 Grey Tee Hitting (3/5)',  type:'skill',       detail:'GREY HITTING SKILL: Count hits in fair territory. First time we track a score!' },
      { time:'40–55 min', title:'🎯 Grounder Derby',          type:'fun',         detail:'Coach rolls grounders, kids compete to scoop the most in 2 minutes.' },
      { time:'55–60 min', title:'📊 Leaderboard Cheer',       type:'celebration', detail:'Draw a funny scoreboard. Kids names + their fair hits today.' },
    ]},
  ]},
  { week:4, theme:'Run Through 1st Base! 🏃', cap:'Grey', practices:[
    { day:'Practice 4A', duration:'60 min', focus:'Base running transition', segments:[
      { time:'0–10 min',  title:'🚦 Red Light Green Light',   type:'fun',         detail:'Classic game — sprint on green, freeze in fielding stance on red.' },
      { time:'10–25 min', title:'🏃 The Transition',          type:'skill',       detail:'GREY BASERUNNING SKILL: Hit off tee, run THROUGH 1st base. Drop the bat SAFELY first!' },
      { time:'25–40 min', title:'🎯 10-ft Throw with Target', type:'skill',       detail:'Re-practice Grey throwing. Add a fun target: hula hoop or sock on a cone.' },
      { time:'40–55 min', title:'🎪 Full Tee Ball Sequence',  type:'fun',         detail:'Stance → tee hit → drop bat → run through 1st. Each kid gets 3 full reps!' },
      { time:'55–60 min', title:'🥳 Speed Star Cheer',        type:'celebration', detail:'Fastest run through 1st wins a special "Speed Star" cheer!' },
    ]},
    { day:'Practice 4B', duration:'60 min', focus:'Grey Cap consolidation + mini game', segments:[
      { time:'0–10 min',  title:'🎵 Baseball Bingo',          type:'fun',         detail:'Call baseball actions: throw! catch! run! slide! Kids act them out.' },
      { time:'10–30 min', title:'🔄 Grey Cap Stations',       type:'skill',       detail:'5 stations, 3 min each: Balance → 10-ft throw → grounder → tee hit → run-through 1st.' },
      { time:'30–50 min', title:'⚾ Tee Ball Mini Game',      type:'fun',         detail:'Full game with Grey rules: hit off tee, run bases. Defenders field grounders.' },
      { time:'50–60 min', title:'🌟 Grey Cap Ceremony',       type:'celebration', detail:'Acknowledge Grey Cap mastery! Big cheers, high fives, team photo.' },
    ]},
  ]},
  { week:5, theme:'Jump for Coordination! 🤸', cap:'Black', practices:[
    { day:'Practice 5A', duration:'60 min', focus:'Coordination & air throwing', segments:[
      { time:'0–10 min',  title:'🌊 Jumping Jack Wave',       type:'fun',         detail:'Everyone does jumping jacks as a wave — one side starts, ripples to the other.' },
      { time:'10–25 min', title:'⭐ Jack-of-all-Trades',      type:'skill',       detail:'BLACK MOVEMENT SKILL: 10 jumping jacks without stopping. Celebrate finishing!' },
      { time:'25–40 min', title:'🚀 25-Foot Air Throw',       type:'skill',       detail:'BLACK THROWING SKILL: Throw 25 ft in the air — no bouncing! Big milestone.' },
      { time:'40–55 min', title:'🎈 Pop Fly Fun',             type:'fun',         detail:'Coach pops ball up, kids try to catch with two hands. Use a tennis ball.' },
      { time:'55–60 min', title:'🏆 Air Throw Challenge',     type:'celebration', detail:'Each kid gets one attempt at 25 ft air throw. Group counts the distance!' },
    ]},
    { day:'Practice 5B', duration:'60 min', focus:'Fly ball catching & front toss', segments:[
      { time:'0–10 min',  title:'☁️ Cloud Watching Sprint',   type:'fun',         detail:'Coach points to an imaginary cloud, kids sprint and catch an imaginary ball!' },
      { time:'10–25 min', title:'☁️ Fly Ball Catch 3/5',      type:'skill',       detail:'BLACK RECEIVING SKILL: Catch 3/5 fly balls tossed to 10 ft height. Call "Mine!"' },
      { time:'25–40 min', title:'🏏 Front Toss Hitting',      type:'skill',       detail:'BLACK HITTING SKILL: Hit 3/5 front-toss from coach kneeling at 8 ft.' },
      { time:'40–55 min', title:'🎯 Hit & Field Game',        type:'fun',         detail:'Batter hits, fielders catch fly ball or scoop grounder. Everyone rotates!' },
      { time:'55–60 min', title:'🌟 Star of the Day',         type:'celebration', detail:'Coach names one amazing catch, one great hit, one funny moment.' },
    ]},
  ]},
  { week:6, theme:'Stop at the Bag! 🛑', cap:'Black', practices:[
    { day:'Practice 6A', duration:'60 min', focus:'2-base running & stopping', segments:[
      { time:'0–10 min',  title:'🚂 Train Warm-Up',           type:'fun',         detail:'Everyone holds shoulders ahead — coach drives the "train" around the bases!' },
      { time:'10–25 min', title:'🛑 Stop & Go Bases',         type:'skill',       detail:'BLACK BASERUNNING SKILL: Run 2 bases and STOP on the bag. Go on signal.' },
      { time:'25–40 min', title:'🔄 Black Skills Mix',        type:'skill',       detail:'Quick rotation: jumping jacks → 25-ft air throw → front toss hit → fly ball → 2-base stop.' },
      { time:'40–55 min', title:'🎪 Musical Bases',           type:'fun',         detail:'Like musical chairs with bases! Rock-paper-scissors for ties.' },
      { time:'55–60 min', title:'🏆 Halfway Milestone',       type:'celebration', detail:'Talk about improvement since White Cap. Look how far we\'ve come!' },
    ]},
    { day:'Practice 6B', duration:'60 min', focus:'Black Cap game day', segments:[
      { time:'0–10 min',  title:'⚾ Baseball Stretches',       type:'fun',         detail:'Arm circles = big throw. Squat = catcher. Lunge = step to 1st base.' },
      { time:'10–25 min', title:'🎯 Black Cap Assessment',    type:'skill',       detail:'Quick run through: 10 jumping jacks, 25-ft air throw, 3/5 front-toss hits.' },
      { time:'25–55 min', title:'⚾ Full Game — Front Toss',  type:'fun',         detail:'Full game with front toss pitching. Defenders field, baserunners stop at each bag.' },
      { time:'55–60 min', title:'🌟 Halfway Celebration!',    type:'celebration', detail:'Halfway through the season! Every player gets a personal compliment.' },
    ]},
  ]},
  { week:7, theme:'Change Direction! 🌟', cap:'Green', practices:[
    { day:'Practice 7A', duration:'60 min', focus:'Agility cones & throwing accuracy', segments:[
      { time:'0–10 min',  title:'🌪️ Cone Maze Warm-Up',       type:'fun',         detail:'Weave through cones set up like a slalom. Personal best only!' },
      { time:'10–25 min', title:'⭐ Hurdle Slalom',            type:'skill',       detail:'GREEN MOVEMENT SKILL: Touch 6 cones in star shape while looking FORWARD only.' },
      { time:'25–40 min', title:'🎯 Accuracy Throw — Target', type:'skill',       detail:'GREEN THROWING SKILL: Throw 25 ft at a hula hoop or cone target. Accuracy matters!' },
      { time:'40–55 min', title:'🎯 Target Practice Contest', type:'fun',         detail:'Each kid gets 5 throws at a bucket target. Personal best focus!' },
      { time:'55–60 min', title:'🌟 Accuracy Award',          type:'celebration', detail:'Award the Most Accurate Throw of the day with a big team cheer!' },
    ]},
    { day:'Practice 7B', duration:'60 min', focus:'Lateral grounders & power hitting', segments:[
      { time:'0–10 min',  title:'🦀 Crab Walk Race',          type:'fun',         detail:'Crab walk race across the infield. Gets those lateral muscles warmed up!' },
      { time:'10–25 min', title:'↔️ Lateral Grounders',       type:'skill',       detail:'GREEN RECEIVING SKILL: Field 3/5 grounders to LEFT and 3/5 to RIGHT.' },
      { time:'25–40 min', title:'🏏 Hit to the Outfield!',    type:'skill',       detail:'GREEN HITTING SKILL: Hit 3/5 underhand tosses to outfield grass (coach at 20 ft).' },
      { time:'40–55 min', title:'🎪 Home Run Derby',          type:'fun',         detail:'Every kid gets 5 swings. Count how many reach outfield. Cheer "Home Run!"' },
      { time:'55–60 min', title:'💪 Power Hitter Cheer',      type:'celebration', detail:'Celebrate the biggest hit of the day with a special team cheer!' },
    ]},
  ]},
  { week:8, theme:'Feet First Slide! 🛝', cap:'Green', practices:[
    { day:'Practice 8A', duration:'60 min', focus:'Sliding & Green Cap consolidation', segments:[
      { time:'0–10 min',  title:'🛝 Slide Intro on Grass',    type:'fun',         detail:'Practice sitting down fast on grass in a sliding position. Just get comfortable!' },
      { time:'10–30 min', title:'🦀 Crab Dance Slide',        type:'skill',       detail:'GREEN BASERUNNING SKILL: Run 20 ft then feet-first slide on grass. Build up progressively!' },
      { time:'30–45 min', title:'🔄 Green Cap Stations',      type:'skill',       detail:'5 stations, 3 min: star cone agility → lateral grounder → outfield hit → accuracy throw → slide.' },
      { time:'45–58 min', title:'⚾ Slide Tag Game',          type:'fun',         detail:'Play tag on grass — only safe spot is to sit in a slide position!' },
      { time:'58–60 min', title:'🌟 Smoothest Slide Award',   type:'celebration', detail:'Who got the smoothest slide today? Team vote! Big dramatic celebration.' },
    ]},
    { day:'Practice 8B', duration:'60 min', focus:'Green Cap game with slides', segments:[
      { time:'0–10 min',  title:'🎵 Baseball Freeze Tag',     type:'fun',         detail:'Tagged kids freeze in batting stance. Unfreeze a teammate with a catcher squat!' },
      { time:'10–25 min', title:'🎯 Green Cap Assessment',    type:'skill',       detail:'Test: star cone agility, accuracy throw, lateral grounders, outfield hit, grass slide.' },
      { time:'25–55 min', title:'⚾ Full Game with Slides',   type:'fun',         detail:'Full game, underhand pitching. Baserunners ENCOURAGED to slide into bags!' },
      { time:'55–60 min', title:'🏆 Green Cap Ceremony',      type:'celebration', detail:'Acknowledge Green Cap achievements. Team high-five tunnel!' },
    ]},
  ]},
  { week:9, theme:'Go Long! 🚀', cap:'Blue', practices:[
    { day:'Practice 9A', duration:'60 min', focus:'Frog balance & 50-ft throwing', segments:[
      { time:'0–10 min',  title:'🐸 Frog Race Warm-Up',       type:'fun',         detail:'Squat like a catcher, jump sideways as far as possible. Team relay race!' },
      { time:'10–25 min', title:'🐸 Frog Squat Jumps',        type:'skill',       detail:'BLUE MOVEMENT SKILL: Catcher squat jumps left and right 5 times each.' },
      { time:'25–45 min', title:'🚀 50-Foot Air Throw',       type:'skill',       detail:'BLUE THROWING SKILL: Throw 50 ft in the air to coach. BIG throw!' },
      { time:'45–58 min', title:'🎯 Long Toss Contest',       type:'fun',         detail:'Mark distances: 30 ft, 40 ft, 50 ft, 60 ft. Each kid finds their max distance!' },
      { time:'58–60 min', title:'💪 Rocket Arm Award',        type:'celebration', detail:'Award the "Rocket Arm" with a special cheer. Effort matters most!' },
    ]},
    { day:'Practice 9B', duration:'60 min', focus:'Lateral fly balls & power hitting', segments:[
      { time:'0–10 min',  title:'☀️ Ball Tracking Drill',     type:'fun',         detail:'Coach throws ball up, everyone tracks with eyes and points where it will land.' },
      { time:'10–25 min', title:'↔️ Lateral Fly Balls',       type:'skill',       detail:'BLUE RECEIVING SKILL: Catch 3/5 fly balls to LEFT and 3/5 to RIGHT at 15 ft height.' },
      { time:'25–40 min', title:'🏏 Side-Toss 75-Foot Hit',   type:'skill',       detail:'BLUE HITTING SKILL: Side-toss 3/5 balls at least 75 ft. Game-angle toss!' },
      { time:'40–55 min', title:'🎪 75-ft Outfield Challenge',type:'fun',         detail:'Mark 75 ft with a rope. Hit past the rope = score! Team vs team.' },
      { time:'55–60 min', title:'🌟 All-Around Players',      type:'celebration', detail:'Name one exceptional thing each kid did today. No skill too small!' },
    ]},
  ]},
  { week:10, theme:'Steal the Base! 🏅', cap:'Blue', practices:[
    { day:'Practice 10A', duration:'60 min', focus:'Base stealing & Blue Cap mastery', segments:[
      { time:'0–10 min',  title:'🚦 Steal! Reaction Game',    type:'fun',         detail:'Kids take a lead off a cone, coach says "Go!" randomly. Sprint to next cone!' },
      { time:'10–25 min', title:'🏃 Steal 2nd Base',          type:'skill',       detail:'BLUE BASERUNNING SKILL: Lead off 1st, react to "Go!", sprint to 2nd.' },
      { time:'25–40 min', title:'🎯 Red Cap Preview: CHAMP',  type:'skill',       detail:'RED CAP PREVIEW: Throw from SS to 1st base! First real game scenario!' },
      { time:'40–55 min', title:'⚾ Base Stealing Game',      type:'fun',         detail:'Full game where stealing is encouraged! Coach signals from 3rd base.' },
      { time:'55–60 min', title:'🏆 Season MVP Votes',        type:'celebration', detail:'Every player votes for someone else\'s best season moment. Read them aloud!' },
    ]},
    { day:'🎉 Practice 10B — SEASON FINALE!', duration:'75 min', focus:'Championship game & awards', segments:[
      { time:'0–10 min',  title:'🎺 Opening Ceremonies',      type:'fun',         detail:'Announce team name, walk out to entrance music. Shake hands like the pros!' },
      { time:'10–20 min', title:'🔄 Best Skills Showcase',    type:'skill',       detail:'Each kid demonstrates their FAVOURITE skill from the season. Everyone cheers!' },
      { time:'20–55 min', title:'🏆 Championship Tee Ball',   type:'fun',         detail:'Full game with ALL rules: front-toss pitching, lateral fielding, sliding, stealing!' },
      { time:'55–70 min', title:'🎖️ Award Ceremony',          type:'celebration', detail:'Every player gets a personalized award: Best Cannon Arm, Smoothest Slide, etc.' },
      { time:'70–75 min', title:'📸 Team Photo & Handshake',  type:'celebration', detail:'Classic baseball handshake line + team photo. "Good game, good game…"' },
    ]},
  ]},
];

// ═══════════════════════════════════════════════════════════
//  STATE
// ═══════════════════════════════════════════════════════════
let state = {
  view: 'home',
  week: 0,
  practice: 0,
  expandedSeg: null,
  selectedCap: 'White',
  remindersEnabled: false,
  reminderDay: 'Monday',
  reminderTime: '17:00',
  completedSkills: JSON.parse(localStorage.getItem('rc_completed') || '{}'),
};

function saveCompleted() {
  localStorage.setItem('rc_completed', JSON.stringify(state.completedSkills));
}

// ═══════════════════════════════════════════════════════════
//  PUSH NOTIFICATION HELPERS
// ═══════════════════════════════════════════════════════════
async function requestNotificationPermission() {
  if (!('Notification' in window)) return false;
  const result = await Notification.requestPermission();
  return result === 'granted';
}

function scheduleLocalReminders() {
  localStorage.setItem('rc_reminders', JSON.stringify({
    enabled: state.remindersEnabled,
    day: state.reminderDay,
    time: state.reminderTime,
  }));
}

function checkDueReminder() {
  const prefs = JSON.parse(localStorage.getItem('rc_reminders') || 'null');
  if (!prefs || !prefs.enabled) return;
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  if (days[new Date().getDay()] !== prefs.day) return;
  const today = new Date().toDateString();
  if (localStorage.getItem('rc_last_notif') === today) return;
  if (Notification.permission === 'granted') {
    new Notification('⚾ Rally Cap Practice Today!', {
      body: 'Get your glove ready — practice is today!',
      icon: './icons/icon-192.png',
    });
    localStorage.setItem('rc_last_notif', today);
  }
}

// ═══════════════════════════════════════════════════════════
//  RENDER ENGINE
// ═══════════════════════════════════════════════════════════
function render() {
  const app = document.getElementById('app');
  app.innerHTML = '';
  const page = document.createElement('div');
  page.className = 'page';
  if      (state.view === 'home')     renderHome(page);
  else if (state.view === 'week')     renderWeek(page);
  else if (state.view === 'skills')   renderSkills(page);
  else                                renderSettings(page);
  app.appendChild(page);
  renderNav();
}

function renderNav() {
  const old = document.getElementById('nav');
  if (old) old.remove();
  const nav = document.createElement('nav');
  nav.id = 'nav';
  [{ id:'home', icon:'🏠', label:'Home' },
   { id:'week', icon:'📅', label:'Plan' },
   { id:'skills', icon:'🎯', label:'Skills' },
   { id:'settings', icon:'⚙️', label:'Settings' }
  ].forEach(item => {
    const btn = document.createElement('button');
    btn.className = 'nav-btn' + (state.view === item.id ? ' active' : '');
    btn.innerHTML = `<span class="nav-icon">${item.icon}</span><span class="nav-label">${item.label}</span>`;
    btn.onclick = () => { state.view = item.id; render(); };
    nav.appendChild(btn);
  });
  document.body.appendChild(nav);
}

function renderHome(el) {
  const total = Object.values(SKILLS_BY_CAP).flat().length;
  const done  = Object.keys(state.completedSkills).length;
  const pct   = Math.round((done / total) * 100);
  el.innerHTML = `
    <div class="hero"><div class="hero-ball">⚾</div><h1>Rally Cap</h1><p>U5 · Baseball Canada · 10-Week Plan</p></div>
    <div class="card">
      <div class="card-title">📊 Season Progress</div>
      <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
      <div class="progress-label">${done} of ${total} skills tracked · ${pct}%</div>
    </div>
    <div class="card"><div class="card-title">📅 Jump to Week</div><div class="week-grid" id="wgrid"></div></div>
    <div class="card-small">
      <span>${state.remindersEnabled ? '🔔 Reminders on — ' + state.reminderDay + 's at ' + state.reminderTime : '🔕 Reminders off'}</span>
      <button class="link-btn" onclick="state.view='settings';render()">Edit</button>
    </div>
  `;
  const grid = el.querySelector('#wgrid');
  WEEKS.forEach((w, i) => {
    const cs = CAP_COLORS[w.cap.split(' ')[0]] || CAP_COLORS.Blue;
    const btn = document.createElement('button');
    btn.className = 'week-chip';
    btn.style.cssText = `background:${cs.bg};border-color:${cs.border};color:${cs.text}`;
    btn.innerHTML = `<b>Wk ${i+1}</b><br><small>${cs.emoji}</small>`;
    btn.onclick = () => { state.week = i; state.practice = 0; state.expandedSeg = null; state.view = 'week'; render(); };
    grid.appendChild(btn);
  });
}

function renderWeek(el) {
  const week     = WEEKS[state.week];
  const practice = week.practices[state.practice];
  const cs       = CAP_COLORS[week.cap.split(' ')[0]] || CAP_COLORS.Blue;
  const TYPE_STYLE = {
    skill:       { bg:'#e8f5e9', border:'#43a047', icon:'⭐' },
    fun:         { bg:'#fff8e1', border:'#f9a825', icon:'🎉' },
    celebration: { bg:'#fce4ec', border:'#e91e63', icon:'🏆' },
  };

  const wsel = document.createElement('div');
  wsel.className = 'week-selector';
  const prev = document.createElement('button');
  prev.className = 'arrow-btn'; prev.textContent = '‹'; prev.disabled = state.week === 0;
  prev.onclick = () => { state.week--; state.practice = 0; state.expandedSeg = null; render(); };
  const mid = document.createElement('div');
  mid.className = 'week-label';
  mid.innerHTML = `<span class="week-num">Week ${state.week+1}</span><span class="week-theme">${week.theme}</span>`;
  const nxt = document.createElement('button');
  nxt.className = 'arrow-btn'; nxt.textContent = '›'; nxt.disabled = state.week === 9;
  nxt.onclick = () => { state.week++; state.practice = 0; state.expandedSeg = null; render(); };
  wsel.append(prev, mid, nxt);
  el.appendChild(wsel);

  const badge = document.createElement('div');
  badge.className = 'cap-badge';
  badge.style.cssText = `background:${cs.bg};border-color:${cs.border};color:${cs.text}`;
  badge.textContent = `${cs.emoji} ${week.cap} Cap Level`;
  el.appendChild(badge);

  const tabs = document.createElement('div');
  tabs.className = 'practice-tabs';
  week.practices.forEach((p, i) => {
    const tab = document.createElement('button');
    tab.className = 'practice-tab' + (state.practice === i ? ' active' : '');
    if (state.practice === i) tab.style.cssText = `background:${cs.border};color:#fff;border-color:${cs.border}`;
    tab.textContent = p.day.replace('Practice ', 'P').replace('🎉 ', '');
    tab.onclick = () => { state.practice = i; state.expandedSeg = null; render(); };
    tabs.appendChild(tab);
  });
  el.appendChild(tabs);

  const meta = document.createElement('div');
  meta.className = 'practice-meta';
  meta.innerHTML = `<span>⏱ ${practice.duration}</span><span>🎯 ${practice.focus}</span>`;
  el.appendChild(meta);

  practice.segments.forEach((seg, si) => {
    const ts     = TYPE_STYLE[seg.type];
    const isOpen = state.expandedSeg === si;
    const card   = document.createElement('div');
    card.className = 'seg-card';
    card.style.cssText = `background:${ts.bg};border-color:${ts.border}`;
    const hdr = document.createElement('button');
    hdr.className = 'seg-header';
    hdr.innerHTML = `
      <span class="seg-time">${seg.time}</span>
      <span class="seg-icon">${ts.icon}</span>
      <span class="seg-title">${seg.title}</span>
      <span class="seg-arrow${isOpen ? ' open' : ''}">›</span>
    `;
    hdr.onclick = () => { state.expandedSeg = isOpen ? null : si; render(); };
    card.appendChild(hdr);
    if (isOpen) {
      const body = document.createElement('div');
      body.className = 'seg-body';
      body.textContent = seg.detail;
      card.appendChild(body);
    }
    el.appendChild(card);
  });
}

function renderSkills(el) {
  el.innerHTML = `<h2 class="page-title">🎯 Skills Reference</h2><div class="cap-selector" id="capsel"></div>`;
  const capsel = el.querySelector('#capsel');
  Object.keys(CAP_COLORS).forEach(cap => {
    const cs  = CAP_COLORS[cap];
    const btn = document.createElement('button');
    btn.className = 'cap-chip' + (state.selectedCap === cap ? ' active' : '');
    if (state.selectedCap === cap) btn.style.cssText = `background:${cs.bg};border-color:${cs.border};color:${cs.text}`;
    btn.textContent = `${cs.emoji} ${cap}`;
    btn.onclick = () => { state.selectedCap = cap; render(); };
    capsel.appendChild(btn);
  });
  const cs = CAP_COLORS[state.selectedCap];
  SKILLS_BY_CAP[state.selectedCap].forEach((skill, i) => {
    const key  = `${state.selectedCap}-${i}`;
    const done = !!state.completedSkills[key];
    const card = document.createElement('div');
    card.className = 'skill-card' + (done ? ' done' : '');
    card.style.cssText = `background:${cs.bg};border-color:${cs.border}`;
    card.innerHTML = `
      <div class="skill-header">
        <span class="skill-num" style="background:${cs.border};color:#fff">${i+1}</span>
        <div class="skill-info">
          <div class="skill-cat" style="color:${cs.badge}">${skill.cat}</div>
          <div class="skill-name" style="color:${cs.text}">${skill.skill}</div>
          <div class="skill-drill">Drill: <b>${skill.drill}</b></div>
          <div class="skill-desc">${skill.desc}</div>
        </div>
        <button class="check-btn${done ? ' checked' : ''}" style="${done ? `background:${cs.border};border-color:${cs.border}` : ''}" data-key="${key}">
          ${done ? '✓' : '○'}
        </button>
      </div>
    `;
    card.querySelector('.check-btn').onclick = e => {
      const k = e.currentTarget.dataset.key;
      if (state.completedSkills[k]) delete state.completedSkills[k];
      else state.completedSkills[k] = true;
      saveCompleted();
      render();
    };
    el.appendChild(card);
  });
  const note = document.createElement('div');
  note.className = 'note-card';
  note.innerHTML = '<b>💡 Tip:</b> Tap ○ next to a skill to mark it complete. Progress is saved on your device.';
  el.appendChild(note);
}

function renderSettings(el) {
  el.innerHTML = `
    <h2 class="page-title">⚙️ Settings</h2>
    <div class="card">
      <div class="card-title">📱 Install App</div>
      <p class="card-text">Add Rally Cap to your home screen for instant offline access.</p>
      <div class="install-steps">
        <div class="install-step"><b>iPhone/iPad:</b> Tap the Share button in Safari → "Add to Home Screen"</div>
        <div class="install-step"><b>Android:</b> Tap ⋮ in Chrome → "Add to Home Screen" or "Install App"</div>
      </div>
    </div>
    <div class="card">
      <div class="card-title">🔔 Practice Reminders</div>
      <label class="toggle-row">
        <span>Enable Reminders</span>
        <div class="toggle-wrap">
          <input type="checkbox" id="rem-toggle" ${state.remindersEnabled ? 'checked' : ''}>
          <div class="toggle-slider"></div>
        </div>
      </label>
      <div id="rem-details" style="display:${state.remindersEnabled ? 'flex' : 'none'};flex-direction:column;gap:10px;margin-top:12px">
        <div class="setting-row">
          <label>Practice Day</label>
          <select id="rem-day">${['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'].map(d => `<option${state.reminderDay===d?' selected':''}>${d}</option>`).join('')}</select>
        </div>
        <div class="setting-row">
          <label>Reminder Time</label>
          <input type="time" id="rem-time" value="${state.reminderTime}">
        </div>
        <button class="save-btn" id="save-rem">Save Reminder</button>
        <div id="rem-status" class="rem-status"></div>
      </div>
    </div>
    <div class="card">
      <div class="card-title">🗑️ Reset Progress</div>
      <p class="card-text">Clear all completed skill checkmarks.</p>
      <button class="danger-btn" id="reset-btn">Reset All Progress</button>
    </div>
    <div class="note-card"><b>ℹ️ About:</b> Based on Baseball Canada's official Rally Cap program for U5 (ages 4–5). Parent participation encouraged!</div>
  `;
  el.querySelector('#rem-toggle').addEventListener('change', e => {
    state.remindersEnabled = e.target.checked;
    el.querySelector('#rem-details').style.display = state.remindersEnabled ? 'flex' : 'none';
  });
  el.querySelector('#save-rem').addEventListener('click', async () => {
    state.reminderDay  = el.querySelector('#rem-day').value;
    state.reminderTime = el.querySelector('#rem-time').value;
    const status = el.querySelector('#rem-status');
    if (state.remindersEnabled) {
      const granted = await requestNotificationPermission();
      if (granted) {
        scheduleLocalReminders();
        status.textContent = `✅ Reminder set for ${state.reminderDay}s at ${state.reminderTime}`;
        status.style.color = '#2e7d32';
      } else {
        status.textContent = '❌ Permission denied. Enable notifications in browser settings.';
        status.style.color = '#c62828';
      }
    }
  });
  el.querySelector('#reset-btn').addEventListener('click', () => {
    if (confirm('Reset all skill progress?')) {
      state.completedSkills = {};
      saveCompleted();
      render();
    }
  });
}

// ═══════════════════════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  // Register service worker (relative path for GitHub Pages subpaths)
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }

  // Restore reminder prefs
  const prefs = JSON.parse(localStorage.getItem('rc_reminders') || 'null');
  if (prefs) {
    state.remindersEnabled = prefs.enabled;
    state.reminderDay      = prefs.day;
    state.reminderTime     = prefs.time;
  }
  checkDueReminder();
  render();
});

})(); // end IIFE
