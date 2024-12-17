// Do not edit this file

export type Item =
  | {
      type: "user";
      data: {
        firstName: string;
        lastName: string;
        title: string;
        organization: string;
      };
    }
  | {
      type: "event";
      data: {
        name: string;
        location: string;
      };
    }
  | {
      type: "tag";
      data: {
        label: string;
        description: string;
      };
    };

export function generateMockItems(count: number = 10): Item[] {
  const eventLocations = [
    "San Francisco Convention Center",
    "New York Tech Hub",
    "Virtual Meeting Room",
    "London Innovation Space",
    "Tokyo Conference Hall",
  ];

  const eventTypes = [
    "Conference",
    "Workshop",
    "Webinar",
    "Hackathon",
    "Meetup",
  ];

  const tags = [
    { label: "in-person", description: "Physical attendance required" },
    { label: "virtual", description: "Online participation available" },
    { label: "technical", description: "Advanced technical content" },
    { label: "beginner", description: "Suitable for newcomers" },
    { label: "hybrid", description: "Both online and in-person options" },
  ];

  const firstNames = ["Sarah", "James", "Elena", "Michael", "Priya"];
  const lastNames = ["Chen", "Rodriguez", "Kumar", "Smith", "Patel"];
  const titles = [
    "Product Manager",
    "Software Engineer",
    "UX Designer",
    "Data Scientist",
    "Technical Lead",
  ];
  const organizations = [
    "TechCorp",
    "Digital Dynamics",
    "InnoSys",
    "DataFlow",
    "CloudTech",
  ];

  const items: Item[] = [];

  for (let i = 0; i < count; i++) {
    const typeIndex = i % 3;

    switch (typeIndex) {
      case 0:
        items.push({
          type: "user",
          data: {
            firstName:
              firstNames[Math.floor(Math.random() * firstNames.length)],
            lastName: lastNames[Math.floor(Math.random() * lastNames.length)],
            title: titles[Math.floor(Math.random() * titles.length)],
            organization:
              organizations[Math.floor(Math.random() * organizations.length)],
          },
        });
        break;
      case 1:
        const location =
          eventLocations[Math.floor(Math.random() * eventLocations.length)];
        const eventType =
          eventTypes[Math.floor(Math.random() * eventTypes.length)];
        items.push({
          type: "event",
          data: {
            name: `${eventType} ${new Date().getFullYear()}`,
            location,
          },
        });
        break;
      case 2:
        const tag = tags[Math.floor(Math.random() * tags.length)];
        items.push({
          type: "tag",
          data: tag,
        });
        break;
    }
  }

  return items;
}
