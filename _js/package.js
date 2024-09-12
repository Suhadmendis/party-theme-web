const rentalPackages = [
  {
    packageName: 'Premium Package',
    imageUrl: 'images/package-image.png',
    amount: 100000,
    material: 'High-quality, wrinkle-resistant polyester fabric',
    description: 'Our top-tier package, perfect for weddings or large parties. Includes premium tents, elegant chairs, round tables, ambient lighting, a high-quality sound system, and stage setup for up to 200 guests.',
    availableAddOns: ['Luxury Catering', 'DJ Services', 'Photo Booth', 'Dance Floor', 'Full Event Coordination']
  },
  {
    packageName: 'Standard Package',
    imageUrl: 'images/package-image.png',
    amount: 50000,
    material: 'High-quality, wrinkle-resistant polyester fabric',
    description: 'Designed for medium-sized gatherings like birthdays or family celebrations. Includes standard tents, chairs, rectangular tables, basic lighting, and a sound system for up to 100 guests.',
    availableAddOns: ['Catering Options', 'Sound System Upgrade', 'Lighting Enhancement', 'Party Decor']
  },
  {
    packageName: 'Economy Package',
    imageUrl: 'images/package-image.png',
    amount: 30000,
    material: 'High-quality, wrinkle-resistant polyester fabric',
    description: 'Ideal for smaller events like intimate parties or baby showers. Includes a basic tent, simple chairs and tables for up to 50 guests, with optional light setup.',
    availableAddOns: ['Extra Seating', 'Tableware', 'Basic Decorations', 'Setup Assistance']
  },
  {
    packageName: 'Corporate Executive Package',
    imageUrl: 'images/package-image.png',
    amount: 150000,
    material: 'High-quality, wrinkle-resistant polyester fabric',
    description: 'A comprehensive solution for corporate events such as conferences, product launches, or gala dinners. Includes large, modern tents, conference tables, executive chairs, a high-end audio-visual setup, and full lighting for up to 300 attendees.',
    availableAddOns: ['Corporate Catering', 'Event Branding Materials', 'Professional AV Team', 'Event Photography', 'VIP Lounge Setup']
  },
  {
    packageName: 'Corporate Essentials Package',
    imageUrl: 'images/package-image.png',
    amount: 80000,
    material: 'High-quality, wrinkle-resistant polyester fabric',
    description: 'Tailored for business meetings, workshops, or team-building events. Includes tents, standard conference tables, chairs, projectors, and basic sound systems for up to 150 attendees.',
    availableAddOns: ['Refreshments & Snacks', 'Branding Setup', 'AV Technician', 'Presentation Setup']
  }
];

new Vue({
  el: "#package-section",
  data: {
    PACKAGES: rentalPackages,
  },
  created() {},
  methods: {
    fetchCloudinaryData(FLAG) {},
    GoTo(navigate, asset_id) {
      if (navigate == "PRODUCT") {
        window.location.href = `product.php?asset_id=${asset_id}`;
      }
    },
  },
});



