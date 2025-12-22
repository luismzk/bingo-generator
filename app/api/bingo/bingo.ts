// People with titles (require a company)
const titledPeople = [
  "The President of",
  "The Vice President of",
  "The CEO of",
  "The Founder of",
  "The Chairman of",
  "A Corporate Executive at",
  "A Board Member of",
  "The Head of Marketing at",
  "The Chief Technology Officer of",
  "The Chief Financial Officer of",
];

// Full name people (company is optional)
const namedPeople = [
  "Brad Pitt",
  "Taylor Swift",
  "Elon Musk",
  "Oprah Winfrey",
  "Tom Hanks",
  "Beyoncé",
  "Leonardo DiCaprio",
  "Dwayne Johnson",
  "Jennifer Lawrence",
  "Chris Hemsworth",
  "Scarlett Johansson",
  "Robert Downey Jr.",
  "Emma Watson",
  "Ryan Reynolds",
  "Margot Robbie",
  "Tim Cook",
  "Jeff Bezos",
  "Mark Zuckerberg",
  "Bill Gates",
  "Warren Buffett",
];

const companies = [
  "Coca-Cola",
  "Sony Entertainment",
  "a VC Firm",
  "Apple",
  "Google",
  "Microsoft",
  "Amazon",
  "Meta",
  "Netflix",
  "Disney",
  "Tesla",
  "Spotify",
  "Twitter",
  "Uber",
  "Airbnb",
  "Nike",
  "Starbucks",
  "McDonald's",
  "Walmart",
  "Goldman Sachs",
];

const actions = [
  "wins an Oscar",
  "wins a Grammy",
  "wins a Nobel Prize",
  "gets arrested for driving under the influence",
  "gets arrested for possession of a weapon",
  "gets arrested for possession of a controlled substance",
  "announces a surprise retirement",
  "launches a new product line",
  "makes a controversial statement",
  "goes viral on social media",
  "signs a major deal",
  "wins a major award",
  "announces a new partnership",
  "makes a surprise appearance",
  "releases a new album",
  "stars in a blockbuster movie",
  "writes a best-selling book",
  "starts a new business venture",
  "makes a charitable donation",
  "breaks a world record",
  "announces a new project",
  "wins a championship",
  "makes a public apology",
  "announces a comeback",
];

interface Person {
  name: string;
  isTitle: boolean;
}

function getRandomPerson(): Person {
  const allPeople = [
    ...titledPeople.map(name => ({ name, isTitle: true })),
    ...namedPeople.map(name => ({ name, isTitle: false })),
  ];
  return allPeople[Math.floor(Math.random() * allPeople.length)];
}

function generateBingoPhrase(): string {
  const person = getRandomPerson();
  const action = actions[Math.floor(Math.random() * actions.length)];
  
  // If it's a title, always include a company
  if (person.isTitle) {
    const company = companies[Math.floor(Math.random() * companies.length)];
    return `${person.name} ${company} ${action}`;
  } else {
    return `${person.name} ${action}`;
  }
}

export function generateBingoPhrases(count: number): string[] {
  const phrases = new Set<string>();
  
  // Generate unique phrases
  while (phrases.size < count) {
    phrases.add(generateBingoPhrase());
  }
  
  return Array.from(phrases);
}