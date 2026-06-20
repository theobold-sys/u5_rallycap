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
      { time:'0–10 min',  title:'🎉 Name Game Warm-Up',       type:'fun',         detail:'Everyone says their name + a baseball word. Then a light jog around the bases!' },
      { time:'10–25 min', title:'⚾ Handcuffs Drill',          type:'skill',       detail:'WHITE THROWING SKILL: Coach holds arms behind back, kid throws to them at 5 ft. Laugh and repeat! Teaches proper grip before arm motion.' },
      { time:'25–40 min', title:'🏏 Tee Hitting',              type:'skill',       detail:'WHITE HITTING SKILL: Every kid gets 5 swings off the tee. Cheer every contact — contact is the goal, not distance!' },
      { time:'40–50 min', title:'🎈 Balloon Catch',            type:'fun',         detail:'Use a balloon or beach ball. Two-hand catch practice with zero pressure and lots of giggles.' },
      { time:'50–60 min', title:'🏆 Team Cheer & Stickers',   type:'celebration', detail:'Gather in a circle, share ONE thing you liked today. Hand out participation stickers!' },
    ]},
    { day:'Practice 1B', duration:'60 min', focus:'Catching & base running', segments:[
      { time:'0–10 min',  title:'🏃 Silly Run Warm-Up',        type:'fun',         detail:'Coach calls different run styles: crab, skip, gallop, tiptoe around the bases.' },
      { time:'10–25 min', title:'🧤 Catch Like an Egg',        type:'skill',       detail:'WHITE RECEIVING SKILL: Soft hands — pretend the ball is a raw egg! Underhand toss at 5 ft. Don\'t drop the egg!' },
      { time:'25–40 min', title:'🏃 Run the Bases!',           type:'skill',       detail:'WHITE BASERUNNING SKILL: Each kid hits off tee, then runs the full circuit: home→1st→2nd→3rd→home. Encourage at every bag!' },
      { time:'40–55 min', title:'🎯 Bean Bag Bucket Toss',     type:'fun',         detail:'Toss bean bags into a bucket from 5 ft, 8 ft, 10 ft. Track personal best each round!' },
      { time:'55–60 min', title:'🌟 High-Five Lineup',         type:'celebration', detail:'Everyone lines up for a round of high-fives and "Great job today!"' },
    ]},
  ]},
  { week:2, theme:'Move Like a Ballplayer 🐸', cap:'White', practices:[
    { day:'Practice 2A', duration:'60 min', focus:'Agility & movement skills', segments:[
      { time:'0–10 min',  title:'🐘 Animal Walk Warm-Up',      type:'fun',         detail:'Walk like different animals between bases: elephant stomp, penguin waddle, bunny hop, crab crawl.' },
      { time:'10–25 min', title:'🦘 The Kangaroo',             type:'skill',       detail:'WHITE MOVEMENT SKILL: Jump over a chalk line 10 reps in your own style. "Show me YOUR jump!" Every style is valid.' },
      { time:'25–40 min', title:'🏏 Tee Hitting Review',       type:'skill',       detail:'Re-practice White hitting. Focus: feet apart, eye on ball, swing through. 5 swings each.' },
      { time:'40–55 min', title:'🎪 Obstacle Course',          type:'fun',         detail:'Jump line → pick up ball → throw in bucket → run to 1st base → celebrate! Time it for fun.' },
      { time:'55–60 min', title:'🏆 Best Jump Contest',        type:'celebration', detail:'Who can show off their best jump? Every style gets a cheer. No losers!' },
    ]},
    { day:'Practice 2B', duration:'60 min', focus:'White Cap review & mini game', segments:[
      { time:'0–10 min',  title:'🎵 Freeze Dance',             type:'fun',         detail:'Play music, kids dance. When music stops — freeze in a baseball pose! Batting stance, fielding, etc.' },
      { time:'10–20 min', title:'🔄 White Cap Skills Blitz',   type:'skill',       detail:'Quick rotation through all 5 White skills: 2 minutes each. Grip throw → tee hit → catch → agility jump → base run.' },
      { time:'20–45 min', title:'⚾ Mini Tee Ball Game',       type:'fun',         detail:'Simple tee-ball game: hit off tee, run bases. No outs — everyone runs, everyone bats. PURE FUN!' },
      { time:'45–55 min', title:'🏃 Relay Race Around Bases',  type:'fun',         detail:'Two teams relay-race around the bases. Cheer for everyone no matter what!' },
      { time:'55–60 min', title:'🥇 White Cap Celebration',    type:'celebration', detail:'Ask each kid: "What\'s your favourite baseball move?" Celebrate their White Cap progress!' },
    ]},
  ]},
  { week:3, theme:'Balance & Grounders 🎯', cap:'Grey', practices:[
    { day:'Practice 3A', duration:'60 min', focus:'Balance & throwing distance', segments:[
      { time:'0–10 min',  title:'🦩 Flamingo Warm-Up',         type:'fun',         detail:'Balance on one foot 5 sec, then switch. Progress: eyes open → eyes closed → arms out.' },
      { time:'10–25 min', title:'⚖️ Up & Down Balance',        type:'skill',       detail:'GREY MOVEMENT SKILL: Hold pitching balance position 5 seconds on both sides. "Pretend you\'re about to pitch!"' },
      { time:'25–40 min', title:'🎯 10-Foot Throw',            type:'skill',       detail:'GREY THROWING SKILL: Throw 10 ft to coach. Step and throw! No accuracy needed — just reach the coach.' },
      { time:'40–55 min', title:'🐸 Leap Frog Relay',          type:'fun',         detail:'Teams leap frog around the bases. Hilariously exhausting.' },
      { time:'55–60 min', title:'🌟 Balance Champion',         type:'celebration', detail:'Who can balance longest on one foot? Group cheer for everyone who tries!' },
    ]},
    { day:'Practice 3B', duration:'60 min', focus:'Grounders & counting hits', segments:[
      { time:'0–10 min',  title:'🐊 Croc Stretch Warm-Up',     type:'fun',         detail:'Crocodile stretch: reach arms forward on ground, open and close "jaws." Shoulder warm-up!' },
      { time:'10–25 min', title:'🧤 The Crocodile Drill',      type:'skill',       detail:'GREY RECEIVING SKILL: Field 3/5 rolled grounders at 15 ft. Glove down like croc jaws — scoop and close!' },
      { time:'25–40 min', title:'🏏 Grey Tee Hitting (3/5)',   type:'skill',       detail:'GREY HITTING SKILL: Count hits in fair territory. First time we track a score! Celebrate each fair ball.' },
      { time:'40–55 min', title:'🎯 Grounder Derby',           type:'fun',         detail:'Coach rolls grounders, kids compete to see who can scoop the most in 2 minutes. Group vs coach!' },
      { time:'55–60 min', title:'📊 Leaderboard Cheer',        type:'celebration', detail:'Draw a funny scoreboard. Kids\' names + their fair hits today. Celebrate improvement over last week!' },
    ]},
  ]},
  { week:4, theme:'Run Through 1st Base! 🏃', cap:'Grey', practices:[
    { day:'Practice 4A', duration:'60 min', focus:'Base running transition', segments:[
      { time:'0–10 min',  title:'🚦 Red Light Green Light',    type:'fun',         detail:'Classic game — but run like a baseball player! Sprint on green, freeze in fielding stance on red.' },
      { time:'10–25 min', title:'🏃 The Transition',           type:'skill',       detail:'GREY BASERUNNING SKILL: Hit off tee, run THROUGH 1st base. Drop the bat SAFELY first! Coach cheers through the bag.' },
      { time:'25–40 min', title:'🎯 10-ft Throw with Target',  type:'skill',       detail:'Re-practice Grey throwing. Add a fun target: hula hoop on the ground or sock on a cone.' },
      { time:'40–55 min', title:'🎪 Full Tee Ball Sequence',   type:'fun',         detail:'Stance → tee hit → drop bat safely → run through 1st. Each kid gets 3 full reps with full cheering!' },
      { time:'55–60 min', title:'🥳 Speed Star Cheer',         type:'celebration', detail:'Fastest run through 1st base wins a special "Speed Star" cheer from the whole team!' },
    ]},
    { day:'Practice 4B', duration:'60 min', focus:'Grey Cap consolidation + mini game', segments:[
      { time:'0–10 min',  title:'🎵 Baseball Bingo',           type:'fun',         detail:'Call out baseball actions: throw! catch! run! slide! Kids act them out. Winner picks the team name today!' },
      { time:'10–30 min', title:'🔄 Grey Cap Stations',        type:'skill',       detail:'5 stations, 3 min each: Balance hold → 10-ft throw → crocodile grounder → tee hit → run-through 1st.' },
      { time:'30–50 min', title:'⚾ Tee Ball Mini Game',       type:'fun',         detail:'Full game with Grey rules: hit off tee, run bases. Defenders field grounders. No outs — just fun!' },
      { time:'50–60 min', title:'🌟 Grey Cap Ceremony',        type:'celebration', detail:'Acknowledge Grey Cap mastery! Big cheers, high fives, maybe a team photo.' },
    ]},
  ]},
  { week:5, theme:'Jump for Coordination! 🤸', cap:'Black', practices:[
    { day:'Practice 5A', duration:'60 min', focus:'Coordination & air throwing', segments:[
      { time:'0–10 min',  title:'🌊 Jumping Jack Wave',        type:'fun',         detail:'Everyone does jumping jacks as a wave — one side starts, ripples to the other. Silly and warm!' },
      { time:'10–25 min', title:'⭐ Jack-of-all-Trades',       type:'skill',       detail:'BLACK MOVEMENT SKILL: 10 jumping jacks without stopping. Simple but surprisingly tricky for 5-year-olds! Celebrate finishing.' },
      { time:'25–40 min', title:'🚀 25-Foot Air Throw',        type:'skill',       detail:'BLACK THROWING SKILL: Throw 25 ft in the air — no bouncing! Big milestone. Use a towel on the ground as target zone.' },
      { time:'40–55 min', title:'🎈 Pop Fly Fun',              type:'fun',         detail:'Coach pops ball up (not too high!), kids try to catch with two hands. Use a tennis ball for safety.' },
      { time:'55–60 min', title:'🏆 Air Throw Challenge',      type:'celebration', detail:'Each kid gets one attempt at the 25 ft air throw. Group counts the distance together!' },
    ]},
    { day:'Practice 5B', duration:'60 min', focus:'Fly ball catching & front toss', segments:[
      { time:'0–10 min',  title:'☁️ Cloud Watching Sprint',    type:'fun',         detail:'Coach points to an imaginary cloud, kids sprint toward it, stop, and catch an imaginary ball!' },
      { time:'10–25 min', title:'☁️ Fly Ball Catch 3/5',       type:'skill',       detail:'BLACK RECEIVING SKILL: Catch 3/5 fly balls tossed to 10 ft height. Two hands! Call "Mine!" before catching.' },
      { time:'25–40 min', title:'🏏 Front Toss Hitting',       type:'skill',       detail:'BLACK HITTING SKILL: Hit 3/5 front-toss from coach kneeling at 8 ft. First "live" pitching experience!' },
      { time:'40–55 min', title:'🎯 Hit & Field Game',         type:'fun',         detail:'Batter hits from tee, fielders catch fly ball or scoop grounder. Everyone rotates positions!' },
      { time:'55–60 min', title:'🌟 Star of the Day',          type:'celebration', detail:'Coach names one amazing catch, one great hit, one funny moment. Everyone cheers!' },
    ]},
  ]},
  { week:6, theme:'Stop at the Bag! 🛑', cap:'Black', practices:[
    { day:'Practice 6A', duration:'60 min', focus:'2-base running & stopping', segments:[
      { time:'0–10 min',  title:'🚂 Train Warm-Up',            type:'fun',         detail:'Everyone holds shoulders of the person ahead, coach drives the "train" around the bases at different speeds!' },
      { time:'10–25 min', title:'🛑 Stop & Go Bases',          type:'skill',       detail:'BLACK BASERUNNING SKILL: Run 2 bases and STOP on the bag. Distribute players at each base, go on signal.' },
      { time:'25–40 min', title:'🔄 Black Skills Mix',         type:'skill',       detail:'Quick rotation: jumping jacks → 25-ft air throw → front toss hit → fly ball catch → 2-base stop.' },
      { time:'40–55 min', title:'🎪 Musical Bases',            type:'fun',         detail:'Like musical chairs but with bases! Walk around bases, when music stops — stay on your base. Rock-paper-scissors for ties!' },
      { time:'55–60 min', title:'🏆 Halfway Milestone Check',  type:'celebration', detail:'Talk about what\'s improved since White Cap. Look how far we\'ve come in 6 sessions!' },
    ]},
    { day:'Practice 6B', duration:'60 min', focus:'Black Cap game day', segments:[
      { time:'0–10 min',  title:'⚾ Baseball Stretches',        type:'fun',         detail:'Arm circles = "big throw warm-up." Squat = "catcher position." Lunge = "big step to 1st base."' },
      { time:'10–25 min', title:'🎯 Black Cap Assessment',     type:'skill',       detail:'Quick run through: 10 jumping jacks, 25-ft air throw, 3/5 front-toss hits. Note each player\'s progress!' },
      { time:'25–55 min', title:'⚾ Full Game — Front Toss',   type:'fun',         detail:'Full game with front toss pitching. Defenders field, baserunners stop at each bag. Real baseball!' },
      { time:'55–60 min', title:'🌟 Halfway Celebration!',     type:'celebration', detail:'We\'re halfway through the season! Every player gets a personal compliment from the coach.' },
    ]},
  ]},
  { week:7, theme:'Change Direction! 🌟', cap:'Green', practices:[
    { day:'Practice 7A', duration:'60 min', focus:'Agility cones & throwing accuracy', segments:[
      { time:'0–10 min',  title:'🌪️ Cone Maze Warm-Up',        type:'fun',         detail:'Weave through cones set up like a slalom. Time kids for fun — personal best only!' },
      { time:'10–25 min', title:'⭐ Hurdle Slalom',             type:'skill',       detail:'GREEN MOVEMENT SKILL: Touch 6 cones in star shape while looking FORWARD only. Set up cones in a star with bats as hurdles.' },
      { time:'25–40 min', title:'🎯 Accuracy Throw — Target',  type:'skill',       detail:'GREEN THROWING SKILL: Throw 25 ft at a hula hoop or cone target. "Aim small, miss small!" Accuracy matters now.' },
      { time:'40–55 min', title:'🎯 Target Practice Contest',  type:'fun',         detail:'Each kid gets 5 throws at a bucket target. Count hits. Personal best focus — not against each other!' },
      { time:'55–60 min', title:'🌟 Accuracy Award',           type:'celebration', detail:'Award the Most Accurate Throw of the day with a big team cheer!' },
    ]},
    { day:'Practice 7B', duration:'60 min', focus:'Lateral grounders & power hitting', segments:[
      { time:'0–10 min',  title:'🦀 Crab Walk Race',           type:'fun',         detail:'Crab walk race across the infield. Gets those lateral muscles warmed up for side grounders!' },
      { time:'10–25 min', title:'↔️ Lateral Grounders',        type:'skill',       detail:'GREEN RECEIVING SKILL: Field 3/5 grounders to LEFT and 3/5 to RIGHT. Move your feet! Coach rolls 5–10 ft each side.' },
      { time:'25–40 min', title:'🏏 Hit to the Outfield!',     type:'skill',       detail:'GREEN HITTING SKILL: Hit 3/5 underhand tosses to outfield grass (coach at 20 ft). "Drive it to the outfield!"' },
      { time:'40–55 min', title:'🎪 Home Run Derby',           type:'fun',         detail:'Every kid gets 5 swings. Count how many reach outfield. Cheer "Home Run!" for every outfield hit!' },
      { time:'55–60 min', title:'💪 Power Hitter Cheer',       type:'celebration', detail:'Celebrate the biggest hit of the day with a special team cheer!' },
    ]},
  ]},
  { week:8, theme:'Feet First Slide! 🛝', cap:'Green', practices:[
    { day:'Practice 8A', duration:'60 min', focus:'Sliding & Green Cap consolidation', segments:[
      { time:'0–10 min',  title:'🛝 Slide Intro on Grass',     type:'fun',         detail:'Just practice sitting down fast on grass in a sliding position. No running yet — just get comfortable!' },
      { time:'10–30 min', title:'🦀 Crab Dance Slide',         type:'skill',       detail:'GREEN BASERUNNING SKILL: Run 20 ft then feet-first slide on grass. Progression: crab sit → scoot → walk → jog → full run + slide!' },
      { time:'30–45 min', title:'🔄 Green Cap Stations',       type:'skill',       detail:'5 stations, 3 min each: star cone agility → lateral grounder → outfield hit → accuracy throw → grass slide.' },
      { time:'45–58 min', title:'⚾ Slide Tag Game',           type:'fun',         detail:'Play tag on the grass where the only safe move is to sit in a slide position. Gets them comfortable sliding!' },
      { time:'58–60 min', title:'🌟 Smoothest Slide Award',    type:'celebration', detail:'Who got the smoothest slide today? Team vote! Big dramatic celebration.' },
    ]},
    { day:'Practice 8B', duration:'60 min', focus:'Green Cap game with slides', segments:[
      { time:'0–10 min',  title:'🎵 Baseball Freeze Tag',      type:'fun',         detail:'Tagger is the pitcher. Tagged kids freeze in batting stance. Unfreeze a teammate by doing a catcher squat!' },
      { time:'10–25 min', title:'🎯 Green Cap Assessment',     type:'skill',       detail:'Test: star cone agility, 25-ft accuracy throw, lateral grounders both sides, outfield hit, grass slide.' },
      { time:'25–55 min', title:'⚾ Full Game with Slides',    type:'fun',         detail:'Full game, underhand pitching from coach. Baserunners ENCOURAGED to slide into bags on grass. Heroes!' },
      { time:'55–60 min', title:'🏆 Green Cap Ceremony',       type:'celebration', detail:'Acknowledge Green Cap achievements. Team high-five tunnel!' },
    ]},
  ]},
  { week:9, theme:'Go Long! 🚀', cap:'Blue', practices:[
    { day:'Practice 9A', duration:'60 min', focus:'Frog balance & 50-ft throwing', segments:[
      { time:'0–10 min',  title:'🐸 Frog Race Warm-Up',        type:'fun',         detail:'Squat like a catcher, jump sideways as far as possible. Team relay race. Pure chaos and joy!' },
      { time:'10–25 min', title:'🐸 Frog Squat Jumps',         type:'skill',       detail:'BLUE MOVEMENT SKILL: Catcher squat jumps left and right 5 times each. Teams race in frog jumps!' },
      { time:'25–45 min', title:'🚀 50-Foot Air Throw',        type:'skill',       detail:'BLUE THROWING SKILL: Throw 50 ft in the air to coach. BIG throw! Count how many reach 50 ft.' },
      { time:'45–58 min', title:'🎯 Long Toss Contest',        type:'fun',         detail:'Mark distances: 30 ft, 40 ft, 50 ft, 60 ft. Each kid finds their max distance. Personal record!' },
      { time:'58–60 min', title:'💪 Rocket Arm Award',         type:'celebration', detail:'Award the "Rocket Arm" with a special cheer. Distance matters less than effort!' },
    ]},
    { day:'Practice 9B', duration:'60 min', focus:'Lateral fly balls & power hitting', segments:[
      { time:'0–10 min',  title:'☀️ Ball Tracking Drill',      type:'fun',         detail:'Coach throws ball straight up, everyone tracks with eyes and points where it will land. No catching yet!' },
      { time:'10–25 min', title:'↔️ Lateral Fly Balls',        type:'skill',       detail:'BLUE RECEIVING SKILL: Catch 3/5 fly balls to LEFT and 3/5 to RIGHT. Ball at 15 ft height, 5–10 ft to side.' },
      { time:'25–40 min', title:'🏏 Side-Toss 75-Foot Hit',    type:'skill',       detail:'BLUE HITTING SKILL: Side-toss 3/5 balls at least 75 ft. Coach at player\'s side — game-angle toss!' },
      { time:'40–55 min', title:'🎪 75-ft Outfield Challenge', type:'fun',         detail:'Mark 75 ft with a rope. Hit past the rope = score! Team vs team, everyone bats.' },
      { time:'55–60 min', title:'🌟 All-Around Players',       type:'celebration', detail:'Name one exceptional thing each kid did today. No skill too small to celebrate!' },
    ]},
  ]},
  { week:10, theme:'Steal the Base! 🏅', cap:'Blue', practices:[
    { day:'Practice 10A', duration:'60 min', focus:'Base stealing & Blue Cap mastery', segments:[
      { time:'0–10 min',  title:'🚦 Steal! Reaction Game',     type:'fun',         detail:'Kids take a lead off a cone, coach says "Go!" randomly. Sprint to next cone. React quickly!' },
      { time:'10–25 min', title:'🏃 Steal 2nd Base',           type:'skill',       detail:'BLUE BASERUNNING SKILL: Lead off 1st on one foot, react to "Go!", sprint to 2nd. Explosiveness!' },
      { time:'25–40 min', title:'🎯 Red Cap Preview: CHAMP',   type:'skill',       detail:'RED CAP PREVIEW: Throw from SS to 1st base! Coach rolls to SS, player fields and throws. First real game scenario!' },
      { time:'40–55 min', title:'⚾ Base Stealing Game',       type:'fun',         detail:'Full game where stealing is encouraged! Coach signals from 3rd base. Electric atmosphere!' },
      { time:'55–60 min', title:'🏆 Season MVP Votes',         type:'celebration', detail:'Every player votes for someone else\'s best moment from the WHOLE SEASON. Read them aloud!' },
    ]},
    { day:'🎉 Practice 10B — SEASON FINALE!', duration:'75 min', focus:'Championship game & awards', segments:[
      { time:'0–10 min',  title:'🎺 Opening Ceremonies',       type:'fun',         detail:'Announce team name, walk out to "entrance music" on a phone speaker. Shake hands like the pros!' },
      { time:'10–20 min', title:'🔄 Best Skills Showcase',     type:'skill',       detail:'Each kid demonstrates their FAVOURITE skill learned this season. Coach and parents cheer for each one!' },
      { time:'20–55 min', title:'🏆 Championship Tee Ball',    type:'fun',         detail:'Full game with ALL rules learned: front-toss pitching, lateral fielding, sliding, stealing — everything! Parents welcome on the field!' },
      { time:'55–70 min', title:'🎖️ Award Ceremony',           type:'celebration', detail:'Every player gets a personalized award: "Best Cannon Arm," "Smoothest Slide," "Fastest Runner," "Most Improved," etc.' },
      { time:'70–75 min', title:'📸 Team Photo & Handshake',   type:'celebration', detail:'Classic baseball handshake line + team photo. "Good game, good game, good game…"' },
    ]},
  ]},
];

// ═══════════════════════════════════════════════════════════
//  STATE
// ═══════════════════════════════════════════════════════════
let state = {
  view: 'home',      // home | week | skills | settings
  week: 0,
  practice: 0,
  expandedSeg: null,
  selectedCap: 'White',
  remindersEnabled: false,
  reminderDay: 'Monday',
  reminderTime: '17:00',
  practiceStartWeek: null, // ISO date string of Week 1 start
  completedSkills: JSON.parse(localStorage.getItem('rc_completed') || '{}'),
  swReg: null,
};

function saveCompleted() {
  localStorage.setItem('rc_completed', JSON.stringify(state.completedSkills));
}

// ═══════════════════════════════════════════════════════════
//  SERVICE WORKER REGISTRATION
// ═══════════════════════════════════════════════════════════
async function registerSW() {
  if ('serviceWorker' in navigator) {
    try {
      state.swReg = await navigator.serviceWorker.register('/sw.js');
    } catch(e) { console.warn('SW registration failed', e); }
  }
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
  // Store reminder prefs — a real server would use Web Push API
  localStorage.setItem('rc_reminders', JSON.stringify({
    enabled: state.remindersEnabled,
    day: state.reminderDay,
    time: state.reminderTime,
    startWeek: state.practiceStartWeek,
  }));
}

function checkDueReminder() {
  const prefs = JSON.parse(localStorage.getItem('rc_reminders') || 'null');
  if (!prefs || !prefs.enabled) return;
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const todayName = days[new Date().getDay()];
  if (todayName !== prefs.day) return;
  const lastShown = localStorage.getItem('rc_last_notif');
  const today = new Date().toDateString();
  if (lastShown === today) return;
  // Show notification
  if (Notification.permission === 'granted') {
    new Notification('⚾ Rally Cap Practice Today!', {
      body: 'Get your glove ready — practice is today! Tap to view the plan.',
      icon: '/icons/icon-192.png',
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

  switch(state.view) {
    case 'home':     app.appendChild(renderHome()); break;
    case 'week':     app.appendChild(renderWeek()); break;
    case 'skills':   app.appendChild(renderSkills()); break;
    case 'settings': app.appendChild(renderSettings()); break;
  }
  renderNav();
}

// ── NAV BAR ───────────────────────────────────────────────
function renderNav() {
  const existing = document.getElementById('nav');
  if (existing) existing.remove();
  const nav = document.createElement('nav');
  nav.id = 'nav';
  const items = [
    { id:'home',     icon:'🏠', label:'Home' },
    { id:'week',     icon:'📅', label:'Plan' },
    { id:'skills',   icon:'🎯', label:'Skills' },
    { id:'settings', icon:'⚙️', label:'Settings' },
  ];
  items.forEach(item => {
    const btn = document.createElement('button');
    btn.className = 'nav-btn' + (state.view === item.id ? ' active' : '');
    btn.innerHTML = `<span class="nav-icon">${item.icon}</span><span class="nav-label">${item.label}</span>`;
    btn.onclick = () => { state.view = item.id; render(); };
    nav.appendChild(btn);
  });
  document.body.appendChild(nav);
}

// ── HOME ──────────────────────────────────────────────────
function renderHome() {
  const el = document.createElement('div');
  el.className = 'page';

  // Hero
  const hero = document.createElement('div');
  hero.className = 'hero';
  hero.innerHTML = `
    <div class="hero-ball">⚾</div>
    <h1>Rally Cap</h1>
    <p>U5 · Baseball Canada · 10-Week Plan</p>
  `;
  el.appendChild(hero);

  // Progress overview
  const totalSkills = Object.values(SKILLS_BY_CAP).flat().length;
  const doneSkills = Object.keys(state.completedSkills).length;
  const pct = Math.round((doneSkills / totalSkills) * 100);

  const prog = document.createElement('div');
  prog.className = 'card';
  prog.innerHTML = `
    <div class="card-title">📊 Season Progress</div>
    <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
    <div class="progress-label">${doneSkills} of ${totalSkills} skills tracked · ${pct}%</div>
  `;
  el.appendChild(prog);

  // Week quick-access grid
  const grid = document.createElement('div');
  grid.className = 'card';
  grid.innerHTML = '<div class="card-title">📅 Jump to Week</div>';
  const weekGrid = document.createElement('div');
  weekGrid.className = 'week-grid';
  WEEKS.forEach((w, i) => {
    const cs = CAP_COLORS[w.cap.split(' ')[0]] || CAP_COLORS.Blue;
    const btn = document.createElement('button');
    btn.className = 'week-chip';
    btn.style.cssText = `background:${cs.bg};border-color:${cs.border};color:${cs.text}`;
    btn.innerHTML = `<b>Wk ${i+1}</b><br><small>${cs.emoji}</small>`;
    btn.onclick = () => { state.week = i; state.practice = 0; state.expandedSeg = null; state.view = 'week'; render(); };
    weekGrid.appendChild(btn);
  });
  grid.appendChild(weekGrid);
  el.appendChild(grid);

  // Reminders status
  const remStatus = document.createElement('div');
  remStatus.className = 'card card-small';
  const remOn = state.remindersEnabled;
  remStatus.innerHTML = `
    <span>${remOn ? '🔔' : '🔕'} Reminders ${remOn ? `on — ${state.reminderDay}s at ${state.reminderTime}` : 'off'}</span>
    <button class="link-btn" onclick="state.view='settings';render()">Edit</button>
  `;
  el.appendChild(remStatus);

  return el;
}

// ── WEEK VIEW ─────────────────────────────────────────────
function renderWeek() {
  const el = document.createElement('div');
  el.className = 'page';

  const week = WEEKS[state.week];
  const practice = week.practices[state.practice];
  const cs = CAP_COLORS[week.cap.split(' ')[0]] || CAP_COLORS.Blue;

  // Week selector
  const wSel = document.createElement('div');
  wSel.className = 'week-selector';
  const prev = document.createElement('button');
  prev.className = 'arrow-btn';
  prev.textContent = '‹';
  prev.disabled = state.week === 0;
  prev.onclick = () => { state.week--; state.practice=0; state.expandedSeg=null; render(); };

  const mid = document.createElement('div');
  mid.className = 'week-label';
  mid.innerHTML = `<span class="week-num">Week ${state.week+1}</span><span class="week-theme">${week.theme}</span>`;

  const next = document.createElement('button');
  next.className = 'arrow-btn';
  next.textContent = '›';
  next.disabled = state.week === 9;
  next.onclick = () => { state.week++; state.practice=0; state.expandedSeg=null; render(); };

  wSel.append(prev, mid, next);
  el.appendChild(wSel);

  // Cap badge
  const capBadge = document.createElement('div');
  capBadge.className = 'cap-badge';
  capBadge.style.cssText = `background:${cs.bg};border-color:${cs.border};color:${cs.text}`;
  capBadge.textContent = `${cs.emoji} ${week.cap} Cap Level`;
  el.appendChild(capBadge);

  // Practice tabs
  const tabs = document.createElement('div');
  tabs.className = 'practice-tabs';
  week.practices.forEach((p, i) => {
    const tab = document.createElement('button');
    tab.className = 'practice-tab' + (state.practice === i ? ' active' : '');
    if (state.practice === i) tab.style.cssText = `background:${cs.border};color:#fff;border-color:${cs.border}`;
    tab.textContent = p.day.replace('Practice ', 'P');
    tab.onclick = () => { state.practice = i; state.expandedSeg = null; render(); };
    tabs.appendChild(tab);
  });
  el.appendChild(tabs);

  // Practice meta
  const meta = document.createElement('div');
  meta.className = 'practice-meta';
  meta.innerHTML = `<span>⏱ ${practice.duration}</span><span>🎯 ${practice.focus}</span>`;
  el.appendChild(meta);

  // Segments
  const TYPE_STYLE = {
    skill:       { bg:'#e8f5e9', border:'#43a047', icon:'⭐', label:'Skill' },
    fun:         { bg:'#fff8e1', border:'#f9a825', icon:'🎉', label:'Fun' },
    celebration: { bg:'#fce4ec', border:'#e91e63', icon:'🏆', label:'Celebrate' },
  };

  practice.segments.forEach((seg, si) => {
    const ts = TYPE_STYLE[seg.type];
    const isOpen = state.expandedSeg === si;

    const card = document.createElement('div');
    card.className = 'seg-card';
    card.style.cssText = `background:${ts.bg};border-color:${ts.border}`;

    const header = document.createElement('button');
    header.className = 'seg-header';
    header.innerHTML = `
      <span class="seg-time">${seg.time}</span>
      <span class="seg-icon">${ts.icon}</span>
      <span class="seg-title">${seg.title}</span>
      <span class="seg-arrow ${isOpen ? 'open' : ''}">›</span>
    `;
    header.onclick = () => {
      state.expandedSeg = isOpen ? null : si;
      render();
    };
    card.appendChild(header);

    if (isOpen) {
      const body = document.createElement('div');
      body.className = 'seg-body';
      body.textContent = seg.detail;
      card.appendChild(body);
    }

    el.appendChild(card);
  });

  return el;
}

// ── SKILLS VIEW ───────────────────────────────────────────
function renderSkills() {
  const el = document.createElement('div');
  el.className = 'page';

  const title = document.createElement('h2');
  title.className = 'page-title';
  title.textContent = '🎯 Skills Reference';
  el.appendChild(title);

  // Cap selector
  const capSel = document.createElement('div');
  capSel.className = 'cap-selector';
  Object.keys(CAP_COLORS).forEach(cap => {
    const cs = CAP_COLORS[cap];
    const btn = document.createElement('button');
    btn.className = 'cap-chip' + (state.selectedCap === cap ? ' active' : '');
    if (state.selectedCap === cap) btn.style.cssText = `background:${cs.bg};border-color:${cs.border};color:${cs.text}`;
    btn.textContent = `${cs.emoji} ${cap}`;
    btn.onclick = () => { state.selectedCap = cap; render(); };
    capSel.appendChild(btn);
  });
  el.appendChild(capSel);

  const cs = CAP_COLORS[state.selectedCap];

  SKILLS_BY_CAP[state.selectedCap].forEach((skill, i) => {
    const key = `${state.selectedCap}-${i}`;
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
        <button class="check-btn ${done ? 'checked' : ''}" style="${done ? `background:${cs.border};border-color:${cs.border}` : ''}" data-key="${key}">
          ${done ? '✓' : '○'}
        </button>
      </div>
    `;

    card.querySelector('.check-btn').onclick = (e) => {
      const k = e.target.dataset.key;
      if (state.completedSkills[k]) delete state.completedSkills[k];
      else state.completedSkills[k] = true;
      saveCompleted();
      render();
    };

    el.appendChild(card);
  });

  const note = document.createElement('div');
  note.className = 'note-card';
  note.innerHTML = '<b>💡 Tip:</b> Tap the circle ○ next to a skill to mark it complete. Progress is saved on your device.';
  el.appendChild(note);

  return el;
}

// ── SETTINGS VIEW ─────────────────────────────────────────
function renderSettings() {
  const el = document.createElement('div');
  el.className = 'page';

  const title = document.createElement('h2');
  title.className = 'page-title';
  title.textContent = '⚙️ Settings';
  el.appendChild(title);

  // Install prompt card
  const installCard = document.createElement('div');
  installCard.className = 'card';
  installCard.innerHTML = `
    <div class="card-title">📱 Install App</div>
    <p class="card-text">Add Rally Cap to your home screen for instant access and offline use.</p>
    <div class="install-steps">
      <div class="install-step"><b>iPhone/iPad:</b> Tap Share → "Add to Home Screen"</div>
      <div class="install-step"><b>Android:</b> Tap ⋮ menu → "Add to Home Screen" or "Install App"</div>
    </div>
  `;
  el.appendChild(installCard);

  // Reminder settings
  const reminderCard = document.createElement('div');
  reminderCard.className = 'card';
  reminderCard.innerHTML = `<div class="card-title">🔔 Practice Reminders</div>`;

  const toggle = document.createElement('label');
  toggle.className = 'toggle-row';
  toggle.innerHTML = `
    <span>Enable Reminders</span>
    <div class="toggle-wrap">
      <input type="checkbox" id="rem-toggle" ${state.remindersEnabled ? 'checked' : ''}>
      <div class="toggle-slider"></div>
    </div>
  `;
  reminderCard.appendChild(toggle);

  const remDetails = document.createElement('div');
  remDetails.id = 'rem-details';
  remDetails.style.display = state.remindersEnabled ? 'block' : 'none';
  remDetails.innerHTML = `
    <div class="setting-row">
      <label>Practice Day</label>
      <select id="rem-day">
        ${['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'].map(d =>
          `<option ${state.reminderDay===d?'selected':''}>${d}</option>`
        ).join('')}
      </select>
    </div>
    <div class="setting-row">
      <label>Reminder Time</label>
      <input type="time" id="rem-time" value="${state.reminderTime}">
    </div>
    <button class="save-btn" id="save-reminders">Save Reminder</button>
    <div id="rem-status" class="rem-status"></div>
  `;
  reminderCard.appendChild(remDetails);
  el.appendChild(reminderCard);

  // Reset card
  const resetCard = document.createElement('div');
  resetCard.className = 'card';
  resetCard.innerHTML = `
    <div class="card-title">🗑️ Reset Progress</div>
    <p class="card-text">Clear all completed skill checkmarks.</p>
    <button class="danger-btn" id="reset-btn">Reset All Progress</button>
  `;
  el.appendChild(resetCard);

  // About
  const about = document.createElement('div');
  about.className = 'note-card';
  about.innerHTML = `<b>ℹ️ About:</b> Based on Baseball Canada's official Rally Cap program for U5 (ages 4–5). Parent participation encouraged at all sessions!`;
  el.appendChild(about);

  // Wire events after DOM insertion
  requestAnimationFrame(() => {
    document.getElementById('rem-toggle')?.addEventListener('change', e => {
      state.remindersEnabled = e.target.checked;
      document.getElementById('rem-details').style.display = state.remindersEnabled ? 'block' : 'none';
    });

    document.getElementById('save-reminders')?.addEventListener('click', async () => {
      state.reminderDay = document.getElementById('rem-day').value;
      state.reminderTime = document.getElementById('rem-time').value;
      const status = document.getElementById('rem-status');
      if (state.remindersEnabled) {
        const granted = await requestNotificationPermission();
        if (granted) {
          scheduleLocalReminders();
          status.textContent = `✅ Reminder set for ${state.reminderDay}s at ${state.reminderTime}`;
          status.style.color = '#2e7d32';
        } else {
          status.textContent = '❌ Notification permission denied. Please enable in browser settings.';
          status.style.color = '#c62828';
        }
      }
    });

    document.getElementById('reset-btn')?.addEventListener('click', () => {
      if (confirm('Reset all skill progress?')) {
        state.completedSkills = {};
        saveCompleted();
        render();
      }
    });
  });

  return el;
}

// ═══════════════════════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  registerSW();
  checkDueReminder();

  // Restore reminder prefs
  const prefs = JSON.parse(localStorage.getItem('rc_reminders') || 'null');
  if (prefs) {
    state.remindersEnabled = prefs.enabled;
    state.reminderDay = prefs.day;
    state.reminderTime = prefs.time;
  }

  render();
});
