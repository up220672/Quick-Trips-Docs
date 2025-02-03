// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true; // noLink will create a route segment (section) but cannot be navigated
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title: "Getting Started",
    href: "/getting-started",
    noLink: true,
    items: [
      { title: "Introduction", href: "/introduction" },
    ],
  },
  {
    "title": "Database Model",
    "href": "/database",
    "noLink": true,
    "items": [
      { title: "Introduction", href: "/introduction" },
      {
        title: "Catalog Collections",
        href: "/catalogs",
        items: [
          { title: "Routes", href: "/routes" },
          { title: "User Type", href: "/user-type" },
          { title: "Payment Status Type", href: "/payment-status-type" },
          { title: "Aspects To Review", href: "/aspects-to-review" },
          { title: "Property Type", href: "/property-type" },
          { title: "Bathroom Type", href: "/bathroom-type" },
        ],
      },
      { title: "Main Collections", href: "/collections" },
      {
        title: "Models",
        href: "/models",
        items: [
          { title: "User", href: "/user" },
          { title: "Payment", href: "/payment" },
          { title: "Property", href: "/property" },
          { title: "Booking", href: "/booking" },
          {
            title: "Secondary Models",
            href: "/secondary-models",
            items: [
              { title: "Photo", href: "/photo" },
              { title: "Video", href: "/video" },
              { title: "Address", href: "/address" },
              { title: "Review", href: "/review" },
              { title: "Amount Details", href: "/amount-details" },
              { title: "Card Payment Method", href: "/card-payment-method" },
              { title: "Room Amenities", href: "/room-amenities" },
              { title: "Bathroom Amenities", href: "/bathroom-amenities" },
              { title: "Kitchen Amenities", href: "/kitchen-amenities" },
              { title: "Property Amenities", href: "/property-amenities" },
              { title: "People", href: "/people" },
              { title: "Beds", href: "/beds" },
              { title: "Bedroom", href: "/bedroom" },
              { title: "Bathroom", href: "/bathroom" },
              { title: "Kitchen", href: "/kitchen" },
              { title: "Notification", href: "/notification" },
            ],
          },
        ],
      },
    ]
  }
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
