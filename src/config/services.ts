import household from "@/assets/service-household.jpg";
import furniture from "@/assets/service-furniture.jpg";
import office from "@/assets/service-office.jpg";
import garden from "@/assets/service-garden.jpg";
import appliance from "@/assets/service-appliance.jpg";
import villa from "@/assets/service-villa.jpg";
import warehouse from "@/assets/service-warehouse.jpg";
import mattress from "@/assets/service-mattress.jpg";

export type Service = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  image: string;
  benefits: string[];
  process: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  seoDescription: string;
};

export const services: Service[] = [
  {
    slug: "household-junk-removal",
    title: "Household Junk Removal",
    short: "Clear the clutter from any room without lifting a finger.",
    intro:
      "From a single storeroom clear-out to a full home refresh, our team removes unwanted household items quickly, quietly and with real care for your space.",
    image: household,
    benefits: [
      "Same-day and next-day slots across Dubai",
      "Uniformed crew, floor protection on request",
      "Sorted for donation and recycling where possible",
      "Transparent, room-based pricing",
    ],
    process: [
      { title: "Tell us what to clear", body: "Share photos on WhatsApp or call us for a quick over-the-phone estimate." },
      { title: "Book a slot that suits you", body: "Pick a two-hour window. Evenings and weekends included at no extra charge." },
      { title: "Sit back while we work", body: "Our team arrives on time, clears everything and leaves the space tidy." },
    ],
    faqs: [
      { q: "Do I need to move items to the door?", a: "No. Our team handles everything from inside the room, including heavy or awkward pieces." },
      { q: "How quickly can you come?", a: "In most Dubai communities we can be with you the same day if you book before noon." },
    ],
    seoDescription:
      "Fast, respectful household junk removal across Dubai. Same-day pickups, uniformed crew and transparent pricing for villas and apartments.",
  },
  {
    slug: "furniture-removal",
    title: "Furniture Removal",
    short: "Old sofas, wardrobes, beds and dining sets — collected and taken away.",
    intro:
      "Replacing a sofa or clearing out a bedroom? We disassemble, carry and remove furniture of any size from apartments, villas and offices across the city.",
    image: furniture,
    benefits: [
      "Full dismantling of wardrobes, beds and modular pieces",
      "Careful handling to protect walls, doors and lifts",
      "Reusable furniture donated to local charities",
      "Fixed pricing agreed before we start",
    ],
    process: [
      { title: "Send a quick photo", body: "A single image on WhatsApp is usually enough for us to price the job." },
      { title: "We arrive with the right tools", body: "Trolleys, straps, blankets and a spacious truck — every time." },
      { title: "Furniture gone, floors swept", body: "We leave the room ready for whatever comes next." },
    ],
    faqs: [
      { q: "Can you take a single item?", a: "Yes. Whether it is one armchair or ten pieces, we have a minimum call-out and a fair per-item rate." },
      { q: "Do you dismantle beds and wardrobes?", a: "Absolutely. Dismantling is included and no extra charge." },
    ],
    seoDescription:
      "Professional furniture removal in Dubai. Sofas, beds, wardrobes and office furniture dismantled and taken away with care.",
  },
  {
    slug: "office-junk-removal",
    title: "Office Junk Removal",
    short: "Cubicles, desks, chairs and old electronics — cleared after hours.",
    intro:
      "We work around your business, clearing outdated office furniture and equipment during evenings or weekends so your team never loses a working day.",
    image: office,
    benefits: [
      "After-hours and weekend clearances available",
      "Certified data destruction for old drives on request",
      "Bulk pricing for full-floor cleanouts",
      "Compliant with tower management requirements",
    ],
    process: [
      { title: "Site visit or photo estimate", body: "For larger floors we visit in person; smaller offices are quoted from photos." },
      { title: "Method statement submitted", body: "We handle the paperwork with your building's management office." },
      { title: "Clean handover", body: "Space cleared, floors vacuumed, ready for handover or refit." },
    ],
    faqs: [
      { q: "Can you work after 6pm?", a: "Yes — most of our commercial clearances happen in the evening to avoid disrupting staff." },
      { q: "Do you provide clearance certificates?", a: "Yes, on request, for landlord or head office records." },
    ],
    seoDescription:
      "Discreet office clearances in Dubai. After-hours removal of desks, chairs, cubicles and electronics for offices of any size.",
  },
  {
    slug: "garden-waste-removal",
    title: "Garden Waste Removal",
    short: "Palm fronds, clippings, soil bags and green cuttings, gone.",
    intro:
      "After the gardener has been, we take away what is left. Bagged clippings, palm fronds, tree branches and old planters — all cleared in one trip.",
    image: garden,
    benefits: [
      "Ideal for villas in Emirates Hills, Arabian Ranches and Al Barari",
      "We bring our own bags if needed",
      "Green waste taken to municipal composting where possible",
      "Recurring monthly plans available",
    ],
    process: [
      { title: "Book a garden pickup", body: "Tell us roughly how many bags or a rough volume — a truck bed, a corner pile, etc." },
      { title: "We come, we load", body: "Our crew loads everything, including loose branches and heavy planters." },
      { title: "Garden left tidy", body: "The area is swept and any stray leaves cleared." },
    ],
    faqs: [
      { q: "Do you take soil and gravel?", a: "Yes, in reasonable quantities. Very large volumes may need a dedicated trip." },
      { q: "Can you come after my gardener?", a: "Yes — many villa owners book us on a standing weekly or monthly slot." },
    ],
    seoDescription:
      "Garden clearance across Dubai villas: palm fronds, clippings, soil and old planters removed quickly and cleanly.",
  },
  {
    slug: "appliance-removal",
    title: "Appliance Removal",
    short: "Fridges, washers, ovens and ACs collected and disposed of responsibly.",
    intro:
      "Upgrading a kitchen or clearing out old white goods? Our team disconnects and removes large appliances safely, without damage to floors or cabinetry.",
    image: appliance,
    benefits: [
      "Safe disconnection of water and drainage",
      "Refrigerants handled by trained crew",
      "Working units offered to charity partners",
      "Two-person lift as standard",
    ],
    process: [
      { title: "Confirm what you have", body: "A single photo of each unit helps us bring the right equipment." },
      { title: "Careful disconnection", body: "We isolate water and power, cap what needs capping, and protect the floor." },
      { title: "Out of your home", body: "Units are wheeled out on a dolly and loaded onto our truck." },
    ],
    faqs: [
      { q: "Will you take a working fridge?", a: "Yes. Where possible we route working appliances to families and community groups." },
      { q: "Do you take split-unit ACs?", a: "Yes. Please mention this at booking so we send a qualified technician." },
    ],
    seoDescription:
      "Appliance removal in Dubai. Safe pickup of fridges, washers, dryers, ovens and split ACs with responsible disposal.",
  },
  {
    slug: "villa-apartment-cleanouts",
    title: "Villa & Apartment Cleanouts",
    short: "Full property clearances before you move, sell or hand back the keys.",
    intro:
      "End-of-lease, post-renovation or a full estate clear — we empty an entire home in a single visit and hand it back sparkling ready for the next chapter.",
    image: villa,
    benefits: [
      "Full property clearance in one visit",
      "Ideal for handovers, sales and estate settlements",
      "Coordination with cleaners, movers and building security",
      "Written confirmation of items removed on request",
    ],
    process: [
      { title: "On-site walkthrough", body: "A short visit lets us give a firm, fixed price for the entire property." },
      { title: "Coordinated clear day", body: "Our full crew arrives with multiple trucks and works room by room." },
      { title: "Empty and swept", body: "Every room is left broom-clean and ready for a deep clean or handover." },
    ],
    faqs: [
      { q: "Can you work with my move-out cleaner?", a: "Yes — we regularly hand over directly to cleaning teams the same day." },
      { q: "What about items I want to keep?", a: "We label everything with you first and only remove what you confirm." },
    ],
    seoDescription:
      "Complete villa and apartment cleanouts in Dubai. Move-out, post-renovation and estate clearances handled in a single visit.",
  },
  {
    slug: "warehouse-commercial-junk-removal",
    title: "Warehouse & Commercial Junk Removal",
    short: "Pallets, racking, machinery and stock — cleared at scale.",
    intro:
      "For warehouses, retail units and industrial sites, we bring the crew, the trucks and the planning to clear large volumes on a schedule that suits your operation.",
    image: warehouse,
    benefits: [
      "Fleet capacity for multi-trip projects",
      "Racking dismantled and removed",
      "Old stock and packaging cleared responsibly",
      "Health & safety documentation provided",
    ],
    process: [
      { title: "Site survey", body: "We visit, measure and agree a phased plan with your operations lead." },
      { title: "Crew and fleet mobilised", body: "Dedicated project manager, multiple trucks and the right lifting gear." },
      { title: "Certificate of clearance", body: "Full documentation issued once the site is fully cleared." },
    ],
    faqs: [
      { q: "Can you work overnight?", a: "Yes, especially for retail units that cannot close during the day." },
      { q: "Do you handle racking?", a: "Yes — dismantling, removal and disposal of shelving and racking is a core service." },
    ],
    seoDescription:
      "Large-scale warehouse and commercial clearances in Dubai. Racking, pallets, stock and machinery removed with full documentation.",
  },
  {
    slug: "mattress-bulky-item-removal",
    title: "Mattress & Bulky Item Removal",
    short: "Heavy, awkward pieces collected quickly — often the same day.",
    intro:
      "Mattresses, mirrors, gym equipment and oversized decor — the pieces most services refuse. We collect them cleanly, without damage to your walls or lift.",
    image: mattress,
    benefits: [
      "Same-day collection for single items",
      "Wrap-and-carry service to protect walls and lifts",
      "Mattresses taken to licensed recycling partners",
      "Fair per-item pricing",
    ],
    process: [
      { title: "Snap and send", body: "One photo on WhatsApp and we quote back within minutes." },
      { title: "Two-person lift", body: "Our crew arrives ready with straps, wraps and trolleys." },
      { title: "Gone in one visit", body: "The item is loaded, the area cleaned, the job done." },
    ],
    faqs: [
      { q: "Can you take a single mattress?", a: "Yes, single mattress pickups are one of our most requested services." },
      { q: "What about gym equipment?", a: "Treadmills, rowers and multi-gyms are no problem — please share a photo first." },
    ],
    seoDescription:
      "Same-day pickup of mattresses, gym equipment and bulky items across Dubai. Careful two-person lift and responsible disposal.",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
