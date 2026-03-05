export interface Question {
  text: string;
  options: [string, string, string, string];
  correct: number;
}

export const questionBank: Record<string, Question[]> = {
  "General Knowledge": [
    { text: "What is the only number that is twice the sum of its digits?", options: ["18", "12", "24", "36"], correct: 0 },
    { text: "Which country has the most time zones?", options: ["Russia", "United States", "France", "China"], correct: 2 },
    { text: "What is the smallest country in the world by area?", options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"], correct: 1 },
    { text: "How many hearts does an octopus have?", options: ["1", "2", "3", "4"], correct: 2 },
    { text: "What colour is the 'black box' flight recorder actually painted?", options: ["Black", "Orange", "Red", "Yellow"], correct: 1 },
    { text: "What is the hardest natural substance on Earth?", options: ["Titanium", "Quartz", "Diamond", "Sapphire"], correct: 2 },
    { text: "Which planet has the shortest day in our solar system?", options: ["Mercury", "Jupiter", "Saturn", "Mars"], correct: 1 },
    { text: "What is the most commonly spoken language in the world by total speakers?", options: ["Mandarin", "Spanish", "English", "Hindi"], correct: 2 },
    { text: "In what year did the Berlin Wall fall?", options: ["1987", "1989", "1991", "1990"], correct: 1 },
    { text: "What is the largest organ in the human body?", options: ["Liver", "Brain", "Skin", "Lungs"], correct: 2 },
    { text: "How many bones does an adult human have?", options: ["186", "206", "226", "256"], correct: 1 },
    { text: "What common household item was accidentally invented while trying to make a super-strong adhesive?", options: ["Teflon", "Post-it Notes", "Superglue", "Velcro"], correct: 1 },
    { text: "Which language has the most words?", options: ["English", "Mandarin", "Spanish", "Arabic"], correct: 0 },
    { text: "What is the only letter that doesn't appear in any US state name?", options: ["Q", "X", "Z", "B"], correct: 0 },
    { text: "What animal can sleep for up to 3 years?", options: ["Bear", "Sloth", "Snail", "Tortoise"], correct: 2 },
    { text: "How many edges does a cube have?", options: ["6", "8", "10", "12"], correct: 3 },
    { text: "What percentage of the Earth's water is fresh water?", options: ["3%", "10%", "25%", "50%"], correct: 0 },
    { text: "Which blood type is known as the universal donor?", options: ["A+", "B-", "AB+", "O-"], correct: 3 },
    { text: "What is the rarest M&M colour?", options: ["Red", "Brown", "Orange", "Green"], correct: 1 },
    { text: "How many official languages does the United Nations have?", options: ["4", "5", "6", "8"], correct: 2 },
  ],

  "Science": [
    { text: "What element has the atomic number 79?", options: ["Silver", "Platinum", "Gold", "Mercury"], correct: 2 },
    { text: "What is the speed of light in a vacuum, approximately?", options: ["300,000 km/s", "150,000 km/s", "3,000 km/s", "30,000 km/s"], correct: 0 },
    { text: "Which gas makes up the majority of Earth's atmosphere?", options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"], correct: 2 },
    { text: "What is the chemical formula for table salt?", options: ["NaO", "KCl", "NaCl", "CaCl₂"], correct: 2 },
    { text: "What type of bond involves the sharing of electrons?", options: ["Ionic", "Metallic", "Covalent", "Hydrogen"], correct: 2 },
    { text: "What planet has the most moons?", options: ["Jupiter", "Saturn", "Uranus", "Neptune"], correct: 1 },
    { text: "What is the powerhouse of the cell?", options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"], correct: 1 },
    { text: "What particle in an atom has no charge?", options: ["Proton", "Electron", "Neutron", "Photon"], correct: 2 },
    { text: "What phenomenon causes a stick to look bent when partially submerged in water?", options: ["Reflection", "Diffraction", "Refraction", "Dispersion"], correct: 2 },
    { text: "How many chromosomes do humans typically have?", options: ["23", "44", "46", "48"], correct: 2 },
    { text: "What unit is used to measure electric current?", options: ["Volt", "Watt", "Ohm", "Ampere"], correct: 3 },
    { text: "Which organ produces insulin?", options: ["Liver", "Kidney", "Pancreas", "Stomach"], correct: 2 },
    { text: "What is the most abundant element in the universe?", options: ["Oxygen", "Carbon", "Helium", "Hydrogen"], correct: 3 },
    { text: "What is the pH of pure water at 25°C?", options: ["5", "7", "8", "6"], correct: 1 },
    { text: "What type of rock is formed from cooled magma or lava?", options: ["Sedimentary", "Metamorphic", "Igneous", "Mineral"], correct: 2 },
    { text: "What is the main component of the Sun?", options: ["Helium", "Hydrogen", "Oxygen", "Neon"], correct: 1 },
    { text: "What force keeps the planets in orbit around the Sun?", options: ["Electromagnetic", "Nuclear", "Gravitational", "Centrifugal"], correct: 2 },
    { text: "Which vitamin is produced when human skin is exposed to sunlight?", options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin B12"], correct: 2 },
    { text: "What is the rarest naturally occurring element in the Earth's crust?", options: ["Francium", "Astatine", "Promethium", "Technetium"], correct: 1 },
    { text: "What is the phenomenon where light splits into its component colours called?", options: ["Refraction", "Diffraction", "Dispersion", "Interference"], correct: 2 },
  ],

  "History": [
    { text: "Who was the first Emperor of Rome?", options: ["Julius Caesar", "Augustus", "Nero", "Caligula"], correct: 1 },
    { text: "In what year did the Titanic sink?", options: ["1910", "1912", "1914", "1916"], correct: 1 },
    { text: "Which ancient wonder was located in Alexandria?", options: ["Hanging Gardens", "Colossus", "Lighthouse", "Temple of Artemis"], correct: 2 },
    { text: "What was the shortest war in history?", options: ["Anglo-Zanzibar War", "Six-Day War", "Falklands War", "Football War"], correct: 0 },
    { text: "Who painted the ceiling of the Sistine Chapel?", options: ["Leonardo da Vinci", "Raphael", "Michelangelo", "Donatello"], correct: 2 },
    { text: "What year was the Magna Carta signed?", options: ["1066", "1215", "1415", "1492"], correct: 1 },
    { text: "Which empire was ruled by Genghis Khan?", options: ["Ottoman", "Roman", "Mongol", "Persian"], correct: 2 },
    { text: "What was the last country to abolish slavery?", options: ["Brazil", "United States", "Mauritania", "Saudi Arabia"], correct: 2 },
    { text: "Who was the first person to circumnavigate the globe?", options: ["Christopher Columbus", "Ferdinand Magellan", "Juan Sebastián Elcano", "Francis Drake"], correct: 2 },
    { text: "What ancient civilisation invented the concept of zero?", options: ["Greek", "Egyptian", "Babylonian", "Indian"], correct: 3 },
    { text: "In which city was Archduke Franz Ferdinand assassinated, triggering WWI?", options: ["Vienna", "Belgrade", "Sarajevo", "Zagreb"], correct: 2 },
    { text: "What was the name of the first artificial satellite launched into space?", options: ["Explorer 1", "Sputnik 1", "Vanguard 1", "Luna 1"], correct: 1 },
    { text: "Which treaty ended World War I?", options: ["Treaty of Paris", "Treaty of Versailles", "Treaty of Ghent", "Treaty of Westphalia"], correct: 1 },
    { text: "What was the largest contiguous land empire in history?", options: ["British Empire", "Roman Empire", "Mongol Empire", "Ottoman Empire"], correct: 2 },
    { text: "Who discovered penicillin?", options: ["Louis Pasteur", "Alexander Fleming", "Joseph Lister", "Robert Koch"], correct: 1 },
    { text: "What year did the French Revolution begin?", options: ["1776", "1789", "1799", "1804"], correct: 1 },
    { text: "Which civilisation built Machu Picchu?", options: ["Maya", "Aztec", "Inca", "Olmec"], correct: 2 },
    { text: "What was the name of Charles Darwin's famous ship?", options: ["HMS Victory", "HMS Endeavour", "HMS Beagle", "HMS Bounty"], correct: 2 },
    { text: "Who was the first female Prime Minister of the United Kingdom?", options: ["Theresa May", "Margaret Thatcher", "Queen Victoria", "Emmeline Pankhurst"], correct: 1 },
    { text: "What year did the Soviet Union officially dissolve?", options: ["1989", "1990", "1991", "1992"], correct: 2 },
  ],

  "Sport": [
    { text: "Which country has won the most Cricket World Cup titles?", options: ["India", "West Indies", "Australia", "England"], correct: 2 },
    { text: "What sport uses the term 'love' for zero?", options: ["Badminton", "Squash", "Tennis", "Table Tennis"], correct: 2 },
    { text: "How many players are on a rugby union team?", options: ["11", "13", "15", "17"], correct: 2 },
    { text: "What country hosted the first modern Olympic Games?", options: ["France", "Greece", "Italy", "United Kingdom"], correct: 1 },
    { text: "Who holds the record for most goals in FIFA World Cup history?", options: ["Pelé", "Ronaldo", "Miroslav Klose", "Just Fontaine"], correct: 2 },
    { text: "In which sport would you perform a 'Fosbury Flop'?", options: ["Long Jump", "Pole Vault", "High Jump", "Triple Jump"], correct: 2 },
    { text: "What is the diameter of a basketball hoop in inches?", options: ["16", "18", "20", "22"], correct: 1 },
    { text: "Which F1 driver has won the most World Championships?", options: ["Michael Schumacher", "Ayrton Senna", "Lewis Hamilton", "Max Verstappen"], correct: 2 },
    { text: "How many dimples does a standard golf ball have?", options: ["252", "336", "392", "420"], correct: 1 },
    { text: "What martial art was created in Brazil by the Gracie family?", options: ["Capoeira", "Judo", "Brazilian Jiu-Jitsu", "Muay Thai"], correct: 2 },
    { text: "What is the only Grand Slam tennis tournament played on clay?", options: ["Australian Open", "French Open", "Wimbledon", "US Open"], correct: 1 },
    { text: "How long is a marathon in miles?", options: ["24.2", "26.2", "28.2", "25.0"], correct: 1 },
    { text: "Which country invented the sport of badminton?", options: ["China", "India", "England", "Japan"], correct: 2 },
    { text: "In baseball, how many strikes make an out?", options: ["2", "3", "4", "5"], correct: 1 },
    { text: "What is the maximum break in snooker?", options: ["147", "150", "155", "170"], correct: 0 },
    { text: "Which country has won the most FIFA Women's World Cup titles?", options: ["Germany", "Brazil", "United States", "Japan"], correct: 2 },
    { text: "What is the only country to have played in every FIFA World Cup?", options: ["Germany", "Argentina", "Brazil", "Italy"], correct: 2 },
    { text: "In which year were women first allowed to compete in the Olympics?", options: ["1896", "1900", "1920", "1928"], correct: 1 },
    { text: "What sport is played on the largest pitch?", options: ["Cricket", "Polo", "Golf", "Aussie Rules"], correct: 1 },
    { text: "How many events are in a decathlon?", options: ["8", "10", "12", "15"], correct: 1 },
  ],

  "Geography": [
    { text: "What is the longest river in the world?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], correct: 1 },
    { text: "Which country has the most natural lakes?", options: ["Russia", "United States", "Canada", "Finland"], correct: 2 },
    { text: "What is the driest continent on Earth?", options: ["Africa", "Australia", "Antarctica", "Asia"], correct: 2 },
    { text: "Which two countries share the longest international border?", options: ["USA & Mexico", "Russia & China", "Canada & USA", "Argentina & Chile"], correct: 2 },
    { text: "What is the deepest point in the ocean?", options: ["Tonga Trench", "Puerto Rico Trench", "Mariana Trench", "Java Trench"], correct: 2 },
    { text: "What is the most populated city in the world?", options: ["Shanghai", "Delhi", "Tokyo", "São Paulo"], correct: 2 },
    { text: "Which African country has the most pyramids?", options: ["Egypt", "Sudan", "Libya", "Ethiopia"], correct: 1 },
    { text: "What is the smallest continent by land area?", options: ["Europe", "Antarctica", "Australia/Oceania", "South America"], correct: 2 },
    { text: "Which is the only country in the world that spans all four hemispheres?", options: ["Russia", "Brazil", "Kiribati", "Indonesia"], correct: 2 },
    { text: "What country has the most islands?", options: ["Indonesia", "Philippines", "Sweden", "Norway"], correct: 2 },
    { text: "Where would you find the Sea of Tranquility?", options: ["Arctic Ocean", "The Moon", "Antarctica", "Pacific Ocean"], correct: 1 },
    { text: "What is the highest waterfall in the world?", options: ["Niagara Falls", "Victoria Falls", "Angel Falls", "Iguazu Falls"], correct: 2 },
    { text: "Which desert is the largest in the world?", options: ["Sahara", "Gobi", "Antarctic Desert", "Arabian"], correct: 2 },
    { text: "What is the only sea with no coastline?", options: ["Dead Sea", "Caspian Sea", "Sargasso Sea", "Aral Sea"], correct: 2 },
    { text: "Which European country has the most UNESCO World Heritage Sites?", options: ["France", "Spain", "Italy", "Germany"], correct: 2 },
    { text: "What is the tallest mountain in Africa?", options: ["Mount Kenya", "Mount Kilimanjaro", "Mount Elgon", "Ras Dashen"], correct: 1 },
    { text: "Which city is located on two continents?", options: ["Cairo", "Moscow", "Istanbul", "Athens"], correct: 2 },
    { text: "What is the largest landlocked country in the world?", options: ["Mongolia", "Kazakhstan", "Chad", "Ethiopia"], correct: 1 },
    { text: "Which country has coastlines on both the Atlantic and Indian Oceans?", options: ["Brazil", "South Africa", "India", "Australia"], correct: 1 },
    { text: "What is the name of the imaginary line at 0° longitude?", options: ["Equator", "Tropic of Cancer", "Prime Meridian", "International Date Line"], correct: 2 },
  ],

  "Music": [
    { text: "What instrument has 88 keys?", options: ["Organ", "Accordion", "Piano", "Harpsichord"], correct: 2 },
    { text: "Which band had members named Freddie, Brian, Roger, and John?", options: ["The Beatles", "Led Zeppelin", "Queen", "The Who"], correct: 2 },
    { text: "What is the bestselling album of all time?", options: ["Abbey Road", "Back in Black", "Thriller", "The Dark Side of the Moon"], correct: 2 },
    { text: "What country is responsible for creating K-pop?", options: ["Japan", "China", "South Korea", "North Korea"], correct: 2 },
    { text: "How many strings does a standard violin have?", options: ["3", "4", "5", "6"], correct: 1 },
    { text: "Who composed 'The Four Seasons'?", options: ["Mozart", "Bach", "Vivaldi", "Beethoven"], correct: 2 },
    { text: "What was Elvis Presley's first number-one hit?", options: ["Jailhouse Rock", "Heartbreak Hotel", "Hound Dog", "Love Me Tender"], correct: 1 },
    { text: "Which musical key has no sharps or flats?", options: ["C major", "G major", "D major", "A major"], correct: 0 },
    { text: "What does 'fortissimo' mean in music?", options: ["Very slow", "Very soft", "Very loud", "Very fast"], correct: 2 },
    { text: "Which rapper's real name is Shawn Corey Carter?", options: ["Kanye West", "Jay-Z", "Eminem", "Drake"], correct: 1 },
    { text: "What year was Spotify launched?", options: ["2006", "2008", "2010", "2012"], correct: 1 },
    { text: "What is the national instrument of Scotland?", options: ["Fiddle", "Harp", "Bagpipes", "Accordion"], correct: 2 },
    { text: "How many symphonies did Beethoven compose?", options: ["5", "7", "9", "12"], correct: 2 },
    { text: "Which member of The Beatles was assassinated?", options: ["Paul McCartney", "George Harrison", "Ringo Starr", "John Lennon"], correct: 3 },
    { text: "What is the highest female singing voice?", options: ["Alto", "Mezzo-soprano", "Soprano", "Contralto"], correct: 2 },
    { text: "Which festival is held annually in the Black Rock Desert, Nevada?", options: ["Coachella", "Glastonbury", "Burning Man", "Lollapalooza"], correct: 2 },
    { text: "What woodwind instrument is known as the 'licorice stick'?", options: ["Oboe", "Flute", "Clarinet", "Bassoon"], correct: 2 },
    { text: "Who sang 'Bohemian Rhapsody'?", options: ["David Bowie", "Queen", "Elton John", "Led Zeppelin"], correct: 1 },
    { text: "What time signature is a waltz typically in?", options: ["2/4", "3/4", "4/4", "6/8"], correct: 1 },
    { text: "Which pop star is known as the 'Queen of Pop'?", options: ["Beyoncé", "Madonna", "Whitney Houston", "Lady Gaga"], correct: 1 },
  ],

  "Movies & TV": [
    { text: "What is the highest-grossing film of all time (not adjusted for inflation)?", options: ["Avengers: Endgame", "Avatar", "Titanic", "Star Wars: The Force Awakens"], correct: 1 },
    { text: "Who directed 'Inception' and 'The Dark Knight'?", options: ["Steven Spielberg", "Christopher Nolan", "Martin Scorsese", "Ridley Scott"], correct: 1 },
    { text: "What TV show holds the record for most Emmy Awards?", options: ["Breaking Bad", "Friends", "Game of Thrones", "The Simpsons"], correct: 2 },
    { text: "In 'The Matrix,' what colour pill does Neo take?", options: ["Blue", "Green", "Red", "White"], correct: 2 },
    { text: "What is the name of the fictional metal in the Marvel universe?", options: ["Adamantium", "Vibranium", "Unobtanium", "Kryptonite"], correct: 1 },
    { text: "Which actor has won the most Academy Awards for Best Actor?", options: ["Jack Nicholson", "Daniel Day-Lewis", "Meryl Streep", "Tom Hanks"], correct: 1 },
    { text: "What was the first feature-length animated film?", options: ["Fantasia", "Bambi", "Snow White and the Seven Dwarfs", "Pinocchio"], correct: 2 },
    { text: "In 'Friends,' what is the name of Ross's second wife?", options: ["Carol", "Emily", "Rachel", "Julie"], correct: 1 },
    { text: "What year was the first 'Star Wars' film released?", options: ["1975", "1977", "1979", "1980"], correct: 1 },
    { text: "Who played The Joker in 'The Dark Knight'?", options: ["Jack Nicholson", "Joaquin Phoenix", "Heath Ledger", "Jared Leto"], correct: 2 },
    { text: "What is the longest-running animated TV show?", options: ["Family Guy", "South Park", "The Simpsons", "SpongeBob"], correct: 2 },
    { text: "In which movie does the quote 'Here's looking at you, kid' appear?", options: ["Gone with the Wind", "The Godfather", "Casablanca", "Citizen Kane"], correct: 2 },
    { text: "Which Studio Ghibli film won the Academy Award for Best Animated Feature?", options: ["My Neighbor Totoro", "Spirited Away", "Princess Mononoke", "Howl's Moving Castle"], correct: 1 },
    { text: "What TV series takes place in the fictional Hawkins, Indiana?", options: ["Dark", "Westworld", "Stranger Things", "The OA"], correct: 2 },
    { text: "Who directed 'Pulp Fiction'?", options: ["Martin Scorsese", "Quentin Tarantino", "David Fincher", "Coen Brothers"], correct: 1 },
    { text: "What is the name of the AI system in '2001: A Space Odyssey'?", options: ["Skynet", "WOPR", "HAL 9000", "JARVIS"], correct: 2 },
    { text: "Which Breaking Bad character says 'I am the one who knocks'?", options: ["Jesse Pinkman", "Gustavo Fring", "Walter White", "Mike Ehrmantraut"], correct: 2 },
    { text: "What Pixar film features a rat who dreams of becoming a chef?", options: ["Finding Nemo", "Ratatouille", "Up", "WALL-E"], correct: 1 },
    { text: "How many James Bond films has Daniel Craig appeared in?", options: ["3", "4", "5", "6"], correct: 2 },
    { text: "What is the name of the kingdom in 'Frozen'?", options: ["Corona", "Arendelle", "DunBroch", "Agrabah"], correct: 1 },
  ],

  "Technology": [
    { text: "Which programming language was created in 10 days by Brendan Eich?", options: ["Python", "Java", "JavaScript", "Ruby"], correct: 2 },
    { text: "What does HTTP stand for?", options: ["HyperText Transfer Protocol", "High Tech Transfer Process", "HyperText Transformation Protocol", "Hybrid Transfer Text Protocol"], correct: 0 },
    { text: "What year was the first iPhone released?", options: ["2005", "2006", "2007", "2008"], correct: 2 },
    { text: "What does GPU stand for?", options: ["General Processing Unit", "Graphics Processing Unit", "Graphical Performance Unit", "Graphics Protocol Unit"], correct: 1 },
    { text: "Who co-founded Apple with Steve Jobs?", options: ["Bill Gates", "Steve Wozniak", "Tim Cook", "Larry Ellison"], correct: 1 },
    { text: "What was the first search engine on the internet?", options: ["Google", "Yahoo", "AltaVista", "Archie"], correct: 3 },
    { text: "What language is most of the Linux kernel written in?", options: ["C++", "C", "Rust", "Assembly"], correct: 1 },
    { text: "What does 'SQL' stand for?", options: ["Structured Query Language", "Simple Query Language", "Standard Query Logic", "Sequential Query Language"], correct: 0 },
    { text: "In what year was Bitcoin first released?", options: ["2007", "2008", "2009", "2010"], correct: 2 },
    { text: "What company developed the TypeScript programming language?", options: ["Google", "Facebook", "Apple", "Microsoft"], correct: 3 },
    { text: "What is the main programming language used for iOS development?", options: ["Kotlin", "Swift", "Objective-C", "Java"], correct: 1 },
    { text: "What does 'CSS' stand for?", options: ["Computer Style Sheets", "Creative Style System", "Cascading Style Sheets", "Colorful Style Sheets"], correct: 2 },
    { text: "Who is considered the father of computer science?", options: ["John von Neumann", "Alan Turing", "Charles Babbage", "Ada Lovelace"], correct: 1 },
    { text: "What was the first message sent over ARPANET?", options: ["HELLO", "TEST", "LO", "HI"], correct: 2 },
    { text: "What is Moore's Law about?", options: ["Internet speed doubling every year", "Transistor count doubling roughly every two years", "Storage capacity tripling every year", "Battery life doubling every 5 years"], correct: 1 },
    { text: "What does 'API' stand for?", options: ["Application Programming Interface", "Automated Process Integration", "Application Process Integrator", "Advanced Programming Interface"], correct: 0 },
    { text: "Which company created the Android operating system?", options: ["Google", "Samsung", "Android Inc.", "Microsoft"], correct: 2 },
    { text: "What is the maximum value of an unsigned 8-bit integer?", options: ["127", "128", "255", "256"], correct: 2 },
    { text: "What year was the World Wide Web invented?", options: ["1985", "1989", "1991", "1993"], correct: 1 },
    { text: "What protocol is used for secure web browsing?", options: ["HTTP", "FTP", "HTTPS", "SSH"], correct: 2 },
  ],

  "Engineering": [
    {
      text: "What is the function of a resistor in an electrical circuit?",
      options: [
        "To store electrical charge",
        "To oppose the flow of current",
        "To amplify voltage",
        "To convert AC to DC"
      ],
      correct: 1
    },
    {
      text: "In a gear train, the gear that receives power from the motor is called what?",
      options: [
        "Driven gear",
        "Idler gear",
        "Driver gear",
        "Compound gear"
      ],
      correct: 2
    },
    {
      text: "Why does connecting resistors in parallel decrease the total resistance of a circuit?",
      options: [
        "Because voltage increases across each resistor",
        "Because it creates more paths for current to flow through",
        "Because each resistor cancels out the others",
        "Because current slows down when split"
      ],
      correct: 1
    },
    {
      text: "Why do engineers use a step-up transformer in long-distance power transmission?",
      options: [
        "To increase current and reduce energy loss",
        "To reduce voltage so the cables are safer",
        "To increase voltage and reduce current, minimising heat loss",
        "To convert DC electricity into AC electricity"
      ],
      correct: 2
    },
    {
      text: "How does a capacitor behave differently from a resistor when connected to a DC circuit?",
      options: [
        "It allows current to flow indefinitely",
        "It charges up and then blocks further current flow",
        "It converts electrical energy into heat",
        "It reverses the direction of current"
      ],
      correct: 1
    },
    {
      text: "A bicycle needs to climb a steep hill. Which gear ratio should the rider select and why?",
      options: [
        "High gear ratio — more speed means more momentum up the hill",
        "Low gear ratio — smaller drive effort needed per pedal rotation makes climbing easier",
        "Equal gear ratio — balanced force is most efficient",
        "High gear ratio — it reduces the number of pedal rotations required"
      ],
      correct: 1
    },
    {
      text: "An LED in a circuit is burning out repeatedly. A technician suspects the current is too high. What is the most practical fix?",
      options: [
        "Replace the LED with a brighter one",
        "Add a capacitor in parallel with the LED",
        "Add a resistor in series with the LED to limit current",
        "Increase the supply voltage to stabilise the circuit"
      ],
      correct: 2
    },
    {
      text: "A student designs a circuit where a motor runs continuously draining the battery in 2 hours. Which single improvement would most effectively extend battery life?",
      options: [
        "Replace the motor with a higher voltage one",
        "Add a transistor switch so the motor only runs when triggered by a sensor",
        "Connect a second battery in series to double the voltage",
        "Add an LED indicator so the user knows when the motor is on"
      ],
      correct: 1
    },
    {
      text: "What does a diode allow in a circuit?",
      options: [
        "Current to flow in both directions equally",
        "Voltage to be stored and released",
        "Current to flow in one direction only",
        "Resistance to increase with temperature"
      ],
      correct: 2
    },
    {
      text: "A gear system has a driver gear with 10 teeth and a driven gear with 40 teeth. What is the gear ratio and what does it mean?",
      options: [
        "1:4 — the driven gear spins 4 times faster than the driver",
        "4:1 — the driven gear turns slower but with more torque",
        "1:4 — the driver gear spins 4 times slower",
        "4:1 — the driven gear spins faster with less force"
      ],
      correct: 1
    },
  ],
};
