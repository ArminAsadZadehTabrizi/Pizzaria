// ============================================
// Multi-Language Translation Dictionary
// ============================================

const translations = {
    de: {
        // Navigation
        menu: 'Speisekarte',
        about: 'Über Uns',
        reviews: 'Bewertungen',
        contact: 'Kontakt',
        bookTable: 'Tisch reservieren',

        // Hero
        heroTitle: 'Düsseldorf isst italienisch.',
        heroSubtitle: 'Handgemachte Pasta & Echte Amore.',
        heroButton: 'Unsere Speisekarte',

        // Menu Section
        menuTitle: 'Unsere Speisekarte',
        menuSubtitle: 'Tradition trifft Geschmack',
        filterAll: 'Alle',
        filterAntipasti: 'Antipasti',
        filterPizza: 'Pizza',
        filterPasta: 'Pasta',
        filterDessert: 'Desserts',

        // Menu Items (keyed by title for easy lookup)
        'Bruschetta Classica': {
            short: 'Geröstetes Ciabatta, Tomaten, Basilikum',
            full: 'Geröstetes Ciabatta mit frischen Tomaten, Basilikum und nativem Olivenöl extra'
        },
        'Caprese di Bufala': {
            short: 'Büffelmozzarella, Tomaten, Basilikum',
            full: 'Original Büffelmozzarella aus Kampanien, sonnegereifte Tomaten, frisches Basilikum und Olivenöl.'
        },
        'Vitello Tonnato': {
            short: 'Kalbsscheiben mit Thunfischcreme',
            full: 'Zarte Kalbsscheiben, rosa gegart, mit einer Creme aus Thunfisch, Kapern und Sardellen.'
        },
        'Margherita': {
            short: 'San Marzano Tomaten, Mozzarella',
            full: 'Der Klassiker: San Marzano Tomaten D.O.P., Fior di Latte Mozzarella, frisches Basilikum.'
        },
        'Diavola': {
            short: 'Pikante Salami, Chili',
            full: 'Pikante Salami (Salsiccia piccante), rote Zwiebeln, Chili-Öl.'
        },
        'Prosciutto e Funghi': {
            short: 'Schinken, Champignons',
            full: 'Tomatensauce, Mozzarella, italienischer Schinken (Prosciutto Cotto) und frische Champignons.'
        },
        'Spaghetti Carbonara': {
            short: 'Guanciale, Ei, Pecorino',
            full: 'Klassisch römisch: Spaghetti mit Guanciale, Ei, Pecorino Romano und schwarzem Pfeffer.'
        },
        'Ravioli di Ricotta': {
            short: 'Ricotta, Spinat, Salbeibutter',
            full: 'Hausgemachte Ravioli gefüllt mit Ricotta und Spinat, geschwenkt in Salbeibutter.'
        },
        'Penne Arrabbiata': {
            short: 'Pikante Tomatensauce, Knoblauch',
            full: 'Penne in pikanter Tomatensauce mit Knoblauch, Peperoncino und frischem Basilikum.'
        },
        'Tiramisu Classico': {
            short: 'Mascarpone, Espresso, Kakao',
            full: 'Der italienische Dessert-Klassiker: Mascarpone-Creme mit Espresso-getränkten Löffelbiskuits, Kakao.'
        },
        'Cannoli Siciliani': {
            short: 'Ricotta-Creme, Pistazien',
            full: 'Knusprige Teigrollen aus Sizilien, gefüllt mit süßer Ricottacreme und Pistazien.'
        },
        'Panna Cotta': {
            short: 'Vanille, Beerensauce',
            full: 'Seidig-cremiges Dessert aus Sahne und Vanille, serviert mit hausgemachter Beerensauce.'
        },
        'Pizza Margherita': {
            short: 'San Marzano Tomaten, Mozzarella',
            full: 'Der Klassiker: San Marzano Tomaten D.O.P., Fior di Latte Mozzarella, frisches Basilikum.'
        },
        'Pizza Diavola': {
            short: 'Pikante Salami, Chili',
            full: 'Pikante Salami (Salsiccia piccante), rote Zwiebeln, Chili-Öl.'
        },
        'Pizza Prosciutto e Funghi': {
            short: 'Schinken, Champignons',
            full: 'Tomatensauce, Mozzarella, italienischer Schinken (Prosciutto Cotto) und frische Champignons.'
        },

        // Badges
        badge_veggie: '🌱 Vegetarisch',
        badge_spicy: '🌶️ Scharf',

        // Chef Section
        chef_title: 'Unser Chef Luigi',
        chef_subtitle: 'Tradition aus Neapel',
        chef_p1: 'Luigi Esposito bringt die authentische neapolitanische Küche nach Düsseldorf. Aufgewachsen in einer Familie von Pasta-Machern in der dritten Generation, lernte er die Kunst der handgemachten Pasta bereits als Kind von seiner Nonna.',
        chef_p2: 'Jede Mahlzeit bei AMORE & PASTA wird mit derselben Leidenschaft und Sorgfalt zubereitet, die Luigi in den Straßen Neapels gelernt hat. Von der frischen Pasta, die jeden Morgen von Hand gerollt wird, bis zur perfekt gebackenen Pizza aus unserem Steinofen – hier schmecken Sie echte italienische Tradition.',
        chef_quote: '"Essen ist Liebe. Und Liebe ist das, was wir in jedes Gericht legen."',

        // Reviews Section
        reviewsTitle: 'Das sagen unsere Gäste',
        reviewsSubtitle: 'Authentische Bewertungen',
        review_1: '"Die beste Pizza außerhalb Italiens! Der Teig ist perfekt, die Zutaten frisch und der Service herzlich. Luigi\'s Carbonara ist göttlich!"',
        review_2: '"Endlich ein Restaurant, das wirklich authentisch ist. Die hausgemachte Pasta schmeckt wie bei Nonna in Italien. Absolute Empfehlung!"',
        review_3: '"Wunderschönes Ambiente und fantastisches Essen. Das Tiramisù ist ein Traum! Wir kommen definitiv wieder."',

        // Booking Section
        bookingTitle: 'Tisch Reservieren',
        bookingSubtitle: 'Wir freuen uns auf Ihren Besuch',
        booking_lead: 'Sichern Sie sich Ihren Lieblingsplatz ganz bequem online.',
        booking_cta: 'Jetzt Tisch reservieren',
        booking_note: 'Für Gruppen ab 8 Personen oder kurzfristige Anfragen erreichen Sie uns auch telefonisch:',
        booking_email_label: 'E-Mail:',

        // Footer
        footer_tagline: 'Italienische Trattoria',
        footer_handmade: 'Handgemachte Pasta seit 2020',
        footer_directions: 'Anfahrt',
        footer_hours: 'Öffnungszeiten',
        footer_hours_weekday: 'Mo–Fr:',
        footer_hours_weekend: 'Sa–So:',
        footer_closed: 'Dienstag Ruhetag',
        footer_contact: 'Kontakt',
        footer_follow: 'Folgen Sie uns',

        // Modal
        modalTitle: 'Tisch Reservieren',
        modalSubtitle: 'Wir freuen uns auf Ihren Besuch!',
        labelDate: 'Datum*',
        labelTime: 'Uhrzeit*',
        labelPersons: 'Anzahl Personen*',
        labelName: 'Name*',
        labelPhone: 'Telefon*',
        labelEmail: 'E-Mail*',
        submitButton: 'Reservierung anfragen',

        // Form Placeholders
        placeholder_name: 'Ihr vollständiger Name',
        placeholder_phone: '+49 123 456789',
        placeholder_email: 'ihre.email@beispiel.de',

        // Nutrition Modal
        nutrition_header: 'Nährwerte & Allergene',
        energy_label: '🔥 Energie:',
        allergens_label: '⚠️ Allergene:',

        // Booking Dropdown Options
        select_default: 'Bitte wählen',
        person_1: '1 Person',
        person_2: '2 Personen',
        person_3: '3 Personen',
        person_4: '4 Personen',
        person_5: '5 Personen',
        person_6: '6 Personen',
        person_7plus: '7+ Personen',

        // Nutrition Keywords (for dynamic replacement in modal)
        nutri_fat: 'Fett',
        nutri_carbs: 'Kohlenhydrate',
        nutri_protein: 'Eiweiß',
        nutri_kcal: 'kcal',
        allergen_gluten: 'Gluten',
        allergen_lactose: 'Laktose',
        allergen_egg: 'Ei',
        allergen_fish: 'Fisch',
        allergen_nuts: 'Nüsse',
        allergen_milk: 'Milch',
        allergen_wheat: 'Weizen'
    },
    en: {
        // Navigation
        menu: 'Menu',
        about: 'About Us',
        reviews: 'Reviews',
        contact: 'Contact',
        bookTable: 'Book a Table',

        // Hero
        heroTitle: 'Düsseldorf tastes Italian.',
        heroSubtitle: 'Handmade Pasta & True Amore.',
        heroButton: 'Our Menu',

        // Menu Section
        menuTitle: 'Our Menu',
        menuSubtitle: 'Tradition meets Taste',
        filterAll: 'All',
        filterAntipasti: 'Antipasti',
        filterPizza: 'Pizza',
        filterPasta: 'Pasta',
        filterDessert: 'Desserts',

        // Menu Items
        'Bruschetta Classica': {
            short: 'Toasted Ciabatta, Tomatoes, Basil',
            full: 'Toasted ciabatta with fresh tomatoes, basil and extra virgin olive oil'
        },
        'Caprese di Bufala': {
            short: 'Buffalo Mozzarella, Tomatoes, Basil',
            full: 'Original buffalo mozzarella from Campania, sun-ripened tomatoes, fresh basil and olive oil.'
        },
        'Vitello Tonnato': {
            short: 'Veal with Tuna Cream',
            full: 'Tender veal slices, roasted pink, with a cream of tuna, capers and anchovies.'
        },
        'Margherita': {
            short: 'San Marzano Tomatoes, Mozzarella',
            full: 'The classic: San Marzano D.O.P. tomatoes, Fior di Latte mozzarella, fresh basil.'
        },
        'Diavola': {
            short: 'Spicy Salami, Chili',
            full: 'Spicy salami (Salsiccia piccante), red onions, chili oil.'
        },
        'Prosciutto e Funghi': {
            short: 'Ham, Mushrooms',
            full: 'Tomato sauce, mozzarella, Italian ham (Prosciutto Cotto) and fresh mushrooms.'
        },
        'Spaghetti Carbonara': {
            short: 'Guanciale, Egg, Pecorino',
            full: 'Classic Roman style: Spaghetti with guanciale, egg, Pecorino Romano and black pepper.'
        },
        'Ravioli di Ricotta': {
            short: 'Ricotta, Spinach, Sage Butter',
            full: 'Homemade ravioli filled with ricotta and spinach, tossed in sage butter.'
        },
        'Penne Arrabbiata': {
            short: 'Spicy Tomato Sauce, Garlic',
            full: 'Penne in spicy tomato sauce with garlic, peperoncino and fresh basil.'
        },
        'Tiramisu Classico': {
            short: 'Mascarpone, Espresso, Cocoa',
            full: 'The Italian dessert classic: Mascarpone cream with espresso-soaked ladyfingers, cocoa.'
        },
        'Cannoli Siciliani': {
            short: 'Ricotta Cream, Pistachios',
            full: 'Crispy pastry rolls from Sicily, filled with sweet ricotta cream and pistachios.'
        },
        'Panna Cotta': {
            short: 'Vanilla, Berry Sauce',
            full: 'Silky-creamy dessert made from cream and vanilla, served with homemade berry sauce.'
        },
        'Pizza Margherita': {
            short: 'San Marzano Tomatoes, Mozzarella',
            full: 'The classic: San Marzano D.O.P. tomatoes, Fior di Latte mozzarella, fresh basil.'
        },
        'Pizza Diavola': {
            short: 'Spicy Salami, Chili',
            full: 'Spicy salami (Salsiccia piccante), red onions, chili oil.'
        },
        'Pizza Prosciutto e Funghi': {
            short: 'Ham, Mushrooms',
            full: 'Tomato sauce, mozzarella, Italian ham (Prosciutto Cotto) and fresh mushrooms.'
        },

        // Badges
        badge_veggie: '🌱 Vegetarian',
        badge_spicy: '🌶️ Spicy',

        // Chef Section
        chef_title: 'Our Chef Luigi',
        chef_subtitle: 'Tradition from Naples',
        chef_p1: 'Luigi Esposito brings authentic Neapolitan cuisine to Düsseldorf. Growing up in a third-generation family of pasta makers, he learned the art of handmade pasta as a child from his Nonna.',
        chef_p2: 'Every meal at AMORE & PASTA is prepared with the same passion and care that Luigi learned in the streets of Naples. From fresh pasta rolled by hand every morning to perfectly baked pizza from our stone oven – here you taste true Italian tradition.',
        chef_quote: '"Food is love. And love is what we put into every dish."',

        // Reviews Section
        reviewsTitle: 'What Our Guests Say',
        reviewsSubtitle: 'Authentic Reviews',
        review_1: '"The best pizza outside of Italy! The dough is perfect, the ingredients fresh and the service warm. Luigi\'s Carbonara is divine!"',
        review_2: '"Finally a restaurant that is truly authentic. The homemade pasta tastes just like Nonna\'s in Italy. Absolute recommendation!"',
        review_3: '"Beautiful ambiance and fantastic food. The Tiramisù is a dream! We will definitely be back."',

        // Booking Section
        bookingTitle: 'Book a Table',
        bookingSubtitle: 'We look forward to your visit',
        booking_lead: 'Secure your favorite spot conveniently online.',
        booking_cta: 'Book Table Now',
        booking_note: 'For groups of 8 or more or last-minute requests, you can also reach us by phone:',
        booking_email_label: 'Email:',

        // Footer
        footer_tagline: 'Italian Trattoria',
        footer_handmade: 'Handmade Pasta since 2020',
        footer_directions: 'Directions',
        footer_hours: 'Opening Hours',
        footer_hours_weekday: 'Mon–Fri:',
        footer_hours_weekend: 'Sat–Sun:',
        footer_closed: 'Closed Tuesdays',
        footer_contact: 'Contact',
        footer_follow: 'Follow Us',

        // Modal
        modalTitle: 'Book a Table',
        modalSubtitle: 'We look forward to your visit!',
        labelDate: 'Date*',
        labelTime: 'Time*',
        labelPersons: 'Number of Guests*',
        labelName: 'Name*',
        labelPhone: 'Phone*',
        labelEmail: 'Email*',
        submitButton: 'Request Booking',

        // Form Placeholders
        placeholder_name: 'Your full name',
        placeholder_phone: '+44 123 456789',
        placeholder_email: 'your.email@example.com',

        // Nutrition Modal
        nutrition_header: 'Nutrition & Allergens',
        energy_label: '🔥 Energy:',
        allergens_label: '⚠️ Allergens:',

        // Booking Dropdown Options
        select_default: 'Please select',
        person_1: '1 Person',
        person_2: '2 People',
        person_3: '3 People',
        person_4: '4 People',
        person_5: '5 People',
        person_6: '6 People',
        person_7plus: '7+ People',

        // Nutrition Keywords
        nutri_fat: 'Fat',
        nutri_carbs: 'Carbs',
        nutri_protein: 'Protein',
        nutri_kcal: 'kcal',
        allergen_gluten: 'Gluten',
        allergen_lactose: 'Lactose',
        allergen_egg: 'Egg',
        allergen_fish: 'Fish',
        allergen_nuts: 'Nuts',
        allergen_milk: 'Milk',
        allergen_wheat: 'Wheat'
    },
    it: {
        // Navigation
        menu: 'Menu',
        about: 'Chi Siamo',
        reviews: 'Recensioni',
        contact: 'Contatto',
        bookTable: 'Prenota un Tavolo',

        // Hero
        heroTitle: 'Düsseldorf gusta l\'italiano.',
        heroSubtitle: 'Pasta Fatta a Mano & Vero Amore.',
        heroButton: 'Il Nostro Menu',

        // Menu Section
        menuTitle: 'Il Nostro Menu',
        menuSubtitle: 'Tradizione incontra Gusto',
        filterAll: 'Tutti',
        filterAntipasti: 'Antipasti',
        filterPizza: 'Pizza',
        filterPasta: 'Pasta',
        filterDessert: 'Dolci',

        // Menu Items
        'Bruschetta Classica': {
            short: 'Ciabatta Tostata, Pomodori, Basilico',
            full: 'Ciabatta tostata con pomodori freschi, basilico e olio extravergine d\'oliva'
        },
        'Caprese di Bufala': {
            short: 'Mozzarella di Bufala, Pomodori, Basilico',
            full: 'Mozzarella di bufala originale della Campania, pomodori maturati al sole, basilico fresco e olio d\'oliva.'
        },
        'Vitello Tonnato': {
            short: 'Vitello con Crema di Tonno',
            full: 'Fette di vitello tenero, cotto al rosa, con una crema di tonno, capperi e acciughe.'
        },
        'Margherita': {
            short: 'Pomodori San Marzano, Mozzarella',
            full: 'Il classico: Pomodori San Marzano D.O.P., mozzarella Fior di Latte, basilico fresco.'
        },
        'Diavola': {
            short: 'Salame Piccante, Peperoncino',
            full: 'Salame piccante (Salsiccia piccante), cipolle rosse, olio al peperoncino.'
        },
        'Prosciutto e Funghi': {
            short: 'Prosciutto, Funghi',
            full: 'Salsa di pomodoro, mozzarella, prosciutto cotto italiano e funghi freschi.'
        },
        'Spaghetti Carbonara': {
            short: 'Guanciale, Uovo, Pecorino',
            full: 'Alla romana classica: Spaghetti con guanciale, uovo, Pecorino Romano e pepe nero.'
        },
        'Ravioli di Ricotta': {
            short: 'Ricotta, Spinaci, Burro e Salvia',
            full: 'Ravioli fatti in casa ripieni di ricotta e spinaci, saltati nel burro e salvia.'
        },
        'Penne Arrabbiata': {
            short: 'Salsa Piccante, Aglio',
            full: 'Penne in salsa di pomodoro piccante con aglio, peperoncino e basilico fresco.'
        },
        'Tiramisu Classico': {
            short: 'Mascarpone, Espresso, Cacao',
            full: 'Il classico dolce italiano: Crema al mascarpone con savoiardi imbevuti di caffè espresso, cacao.'
        },
        'Cannoli Siciliani': {
            short: 'Crema di Ricotta, Pistacchi',
            full: 'Croccanti rotoli di pasta siciliani, ripieni di dolce crema di ricotta e pistacchi.'
        },
        'Panna Cotta': {
            short: 'Vaniglia, Salsa ai Frutti di Bosco',
            full: 'Dolce setoso e cremoso a base di panna e vaniglia, servito con salsa ai frutti di bosco fatta in casa.'
        },
        'Pizza Margherita': {
            short: 'Pomodori San Marzano, Mozzarella',
            full: 'Il classico: Pomodori San Marzano D.O.P., mozzarella Fior di Latte, basilico fresco.'
        },
        'Pizza Diavola': {
            short: 'Salame Piccante, Peperoncino',
            full: 'Salame piccante (Salsiccia piccante), cipolle rosse, olio al peperoncino.'
        },
        'Pizza Prosciutto e Funghi': {
            short: 'Prosciutto, Funghi',
            full: 'Salsa di pomodoro, mozzarella, prosciutto cotto italiano e funghi freschi.'
        },

        // Badges
        badge_veggie: '🌱 Vegetariano',
        badge_spicy: '🌶️ Piccante',

        // Chef Section
        chef_title: 'Il Nostro Chef Luigi',
        chef_subtitle: 'Tradizione da Napoli',
        chef_p1: 'Luigi Esposito porta l\'autentica cucina napoletana a Düsseldorf. Cresciuto in una famiglia di pastai di terza generazione, ha imparato l\'arte della pasta fatta a mano da bambino dalla sua Nonna.',
        chef_p2: 'Ogni pasto da AMORE & PASTA è preparato con la stessa passione e cura che Luigi ha imparato nelle strade di Napoli. Dalla pasta fresca stesa a mano ogni mattina alla pizza perfettamente cotta nel nostro forno a pietra – qui assaporate la vera tradizione italiana.',
        chef_quote: '"Il cibo è amore. E l\'amore è ciò che mettiamo in ogni piatto."',

        // Reviews Section
        reviewsTitle: 'Cosa Dicono i Nostri Ospiti',
        reviewsSubtitle: 'Recensioni Autentiche',
        review_1: '"La migliore pizza fuori dall\'Italia! L\'impasto è perfetto, gli ingredienti freschi e il servizio caloroso. La Carbonara di Luigi è divina!"',
        review_2: '"Finalmente un ristorante veramente autentico. La pasta fatta in casa sa proprio come quella della Nonna in Italia. Consiglio assoluto!"',
        review_3: '"Ambiente meraviglioso e cibo fantastico. Il Tiramisù è un sogno! Torneremo sicuramente."',

        // Booking Section
        bookingTitle: 'Prenota un Tavolo',
        bookingSubtitle: 'Non vediamo l\'ora della tua visita',
        booking_lead: 'Prenota comodamente online il tuo posto preferito.',
        booking_cta: 'Prenota Ora',
        booking_note: 'Per gruppi di 8 o più persone o richieste dell\'ultimo minuto, potete contattarci anche telefonicamente:',
        booking_email_label: 'Email:',

        // Footer
        footer_tagline: 'Trattoria Italiana',
        footer_handmade: 'Pasta Fatta a Mano dal 2020',
        footer_directions: 'Come Arrivare',
        footer_hours: 'Orari di Apertura',
        footer_hours_weekday: 'Lun–Ven:',
        footer_hours_weekend: 'Sab–Dom:',
        footer_closed: 'Chiuso il Martedì',
        footer_contact: 'Contatto',
        footer_follow: 'Seguici',

        // Modal
        modalTitle: 'Prenota un Tavolo',
        modalSubtitle: 'Non vediamo l\'ora della tua visita!',
        labelDate: 'Data*',
        labelTime: 'Ora*',
        labelPersons: 'Numero di Ospiti*',
        labelName: 'Nome*',
        labelPhone: 'Telefono*',
        labelEmail: 'Email*',
        submitButton: 'Richiedi Prenotazione',

        // Form Placeholders
        placeholder_name: 'Il tuo nome completo',
        placeholder_phone: '+39 123 456789',
        placeholder_email: 'tua.email@esempio.it',

        // Nutrition Modal
        nutrition_header: 'Valori Nutrizionali & Allergeni',
        energy_label: '🔥 Energia:',
        allergens_label: '⚠️ Allergeni:',

        // Booking Dropdown Options
        select_default: 'Seleziona',
        person_1: '1 Persona',
        person_2: '2 Persone',
        person_3: '3 Persone',
        person_4: '4 Persone',
        person_5: '5 Persone',
        person_6: '6 Persone',
        person_7plus: '7+ Persone',

        // Nutrition Keywords
        nutri_fat: 'Grassi',
        nutri_carbs: 'Carboidrati',
        nutri_protein: 'Proteine',
        nutri_kcal: 'kcal',
        allergen_gluten: 'Glutine',
        allergen_lactose: 'Lattosio',
        allergen_egg: 'Uova',
        allergen_fish: 'Pesce',
        allergen_nuts: 'Noci',
        allergen_milk: 'Latte',
        allergen_wheat: 'Grano'
    },
    fr: {
        // Navigation
        menu: 'Menu',
        about: 'À Propos',
        reviews: 'Avis',
        contact: 'Contact',
        bookTable: 'Réserver une Table',

        // Hero
        heroTitle: 'Düsseldorf goûte l\'italien.',
        heroSubtitle: 'Pâtes Faites Maison & Vrai Amore.',
        heroButton: 'Notre Menu',

        // Menu Section
        menuTitle: 'Notre Menu',
        menuSubtitle: 'Tradition rencontre Goût',
        filterAll: 'Tous',
        filterAntipasti: 'Antipasti',
        filterPizza: 'Pizza',
        filterPasta: 'Pâtes',
        filterDessert: 'Desserts',

        // Menu Items
        'Bruschetta Classica': {
            short: 'Ciabatta Grillée, Tomates, Basilic',
            full: 'Ciabatta grillée avec tomates fraîches, basilic et huile d\'olive extra vierge'
        },
        'Caprese di Bufala': {
            short: 'Mozzarella de Bufflonne, Tomates, Basilic',
            full: 'Mozzarella de bufflonne originale de Campanie, tomates mûries au soleil, basilic frais et huile d\'olive.'
        },
        'Vitello Tonnato': {
            short: 'Veau avec Crème de Thon',
            full: 'Tranches de veau tendres, cuites rosées, avec une crème de thon, câpres et anchois.'
        },
        'Margherita': {
            short: 'Tomates San Marzano, Mozzarella',
            full: 'Le classique: Tomates San Marzano D.O.P., mozzarella Fior di Latte, basilic frais.'
        },
        'Diavola': {
            short: 'Salami Épicé, Piment',
            full: 'Salami épicé (Salsiccia piccante), oignons rouges, huile au piment.'
        },
        'Prosciutto e Funghi': {
            short: 'Jambon, Champignons',
            full: 'Sauce tomate, mozzarella, jambon italien (Prosciutto Cotto) et champignons frais.'
        },
        'Spaghetti Carbonara': {
            short: 'Guanciale, Œuf, Pecorino',
            full: 'À la romaine classique: Spaghetti avec guanciale, œuf, Pecorino Romano et poivre noir.'
        },
        'Ravioli di Ricotta': {
            short: 'Ricotta, Épinards, Beurre de Sauge',
            full: 'Ravioli faits maison farcis de ricotta et d\'épinards, sautés au beurre de sauge.'
        },
        'Penne Arrabbiata': {
            short: 'Sauce Tomate Épicée, Ail',
            full: 'Penne dans une sauce tomate épicée avec ail, peperoncino et basilic frais.'
        },
        'Tiramisu Classico': {
            short: 'Mascarpone, Espresso, Cacao',
            full: 'Le classique dessert italien: Crème au mascarpone avec biscuits à la cuillère imbibés d\'espresso, cacao.'
        },
        'Cannoli Siciliani': {
            short: 'Crème de Ricotta, Pistaches',
            full: 'Rouleaux de pâte croustillants de Sicile, garnis de crème de ricotta sucrée et de pistaches.'
        },
        'Panna Cotta': {
            short: 'Vanille, Sauce aux Fruits Rouges',
            full: 'Dessert soyeux et crémeux à base de crème et de vanille, servi avec sauce aux fruits rouges maison.'
        },
        'Pizza Margherita': {
            short: 'Tomates San Marzano, Mozzarella',
            full: 'Le classique: Tomates San Marzano D.O.P., mozzarella Fior di Latte, basilic frais.'
        },
        'Pizza Diavola': {
            short: 'Salami Épicé, Piment',
            full: 'Salami épicé (Salsiccia piccante), oignons rouges, huile au piment.'
        },
        'Pizza Prosciutto e Funghi': {
            short: 'Jambon, Champignons',
            full: 'Sauce tomate, mozzarella, jambon italien (Prosciutto Cotto) et champignons frais.'
        },

        // Badges
        badge_veggie: '🌱 Végétarien',
        badge_spicy: '🌶️ Épicé',

        // Chef Section
        chef_title: 'Notre Chef Luigi',
        chef_subtitle: 'Tradition de Naples',
        chef_p1: 'Luigi Esposito apporte la cuisine napolitaine authentique à Düsseldorf. Ayant grandi dans une famille de fabricants de pâtes de troisième génération, il a appris l\'art des pâtes faites à la main dès son enfance de sa Nonna.',
        chef_p2: 'Chaque repas chez AMORE & PASTA est préparé avec la même passion et le même soin que Luigi a appris dans les rues de Naples. Des pâtes fraîches roulées à la main chaque matin à la pizza parfaitement cuite de notre four en pierre – ici, vous goûtez la vraie tradition italienne.',
        chef_quote: '"La nourriture est amour. Et l\'amour est ce que nous mettons dans chaque plat."',

        // Reviews Section
        reviewsTitle: 'Ce Que Disent Nos Clients',
        reviewsSubtitle: 'Avis Authentiques',
        review_1: '"La meilleure pizza en dehors de l\'Italie! La pâte est parfaite, les ingrédients frais et le service chaleureux. La Carbonara de Luigi est divine!"',
        review_2: '"Enfin un restaurant vraiment authentique. Les pâtes faites maison ont exactement le goût de celles de Nonna en Italie. Recommandation absolue!"',
        review_3: '"Ambiance magnifique et nourriture fantastique. Le Tiramisù est un rêve! Nous reviendrons certainement."',

        // Booking Section
        bookingTitle: 'Réserver une Table',
        bookingSubtitle: 'Nous attendons votre visite avec impatience',
        booking_lead: 'Réservez votre place préférée facilement en ligne.',
        booking_cta: 'Réserver Maintenant',
        booking_note: 'Pour les groupes de 8 personnes ou plus ou les demandes de dernière minute, vous pouvez également nous joindre par téléphone:',
        booking_email_label: 'Email:',

        // Footer
        footer_tagline: 'Trattoria Italienne',
        footer_handmade: 'Pâtes Faites à la Main depuis 2020',
        footer_directions: 'Itinéraire',
        footer_hours: 'Heures d\'Ouverture',
        footer_hours_weekday: 'Lun–Ven:',
        footer_hours_weekend: 'Sam–Dim:',
        footer_closed: 'Fermé le Mardi',
        footer_contact: 'Contact',
        footer_follow: 'Suivez-Nous',

        // Modal
        modalTitle: 'Réserver une Table',
        modalSubtitle: 'Nous attendons votre visite avec impatience!',
        labelDate: 'Date*',
        labelTime: 'Heure*',
        labelPersons: 'Nombre de Personnes*',
        labelName: 'Nom*',
        labelPhone: 'Téléphone*',
        labelEmail: 'Email*',
        submitButton: 'Demander une Réservation',

        // Form Placeholders
        placeholder_name: 'Votre nom complet',
        placeholder_phone: '+33 123 456789',
        placeholder_email: 'votre.email@exemple.fr',

        // Nutrition Modal
        nutrition_header: 'Valeurs Nutritionnelles & Allergènes',
        energy_label: '🔥 Énergie:',
        allergens_label: '⚠️ Allergènes:',

        // Booking Dropdown Options
        select_default: 'Veuillez sélectionner',
        person_1: '1 Personne',
        person_2: '2 Personnes',
        person_3: '3 Personnes',
        person_4: '4 Personnes',
        person_5: '5 Personnes',
        person_6: '6 Personnes',
        person_7plus: '7+ Personnes',

        // Nutrition Keywords
        nutri_fat: 'Lipides',
        nutri_carbs: 'Glucides',
        nutri_protein: 'Protéines',
        nutri_kcal: 'kcal',
        allergen_gluten: 'Gluten',
        allergen_lactose: 'Lactose',
        allergen_egg: 'Œuf',
        allergen_fish: 'Poisson',
        allergen_nuts: 'Noix',
        allergen_milk: 'Lait',
        allergen_wheat: 'Blé'
    }
};

// Current language (load from localStorage or default to 'de')
let currentLanguage = localStorage.getItem('selectedLang') || 'de';

// ============================================
// Language Switcher Functionality
// ============================================

function changeLanguage(lang) {
    currentLanguage = lang;

    // CRITICAL: Store language in localStorage for persistence
    localStorage.setItem('selectedLang', lang);

    const t = translations[lang];

    // ===== 1. UPDATE DATA-I18N ELEMENTS =====
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (t[key]) {
            element.textContent = t[key];
        }
    });

    // ===== 2. UPDATE FORM PLACEHOLDERS =====
    document.querySelectorAll('[data-i18n-placeholder]').forEach(input => {
        const key = input.getAttribute('data-i18n-placeholder');
        if (t[key]) {
            input.placeholder = t[key];
        }
    });

    // ===== 3. UPDATE NAVIGATION =====
    const navLinks = document.querySelectorAll('.main-nav a:not(.booking-cta)');
    if (navLinks.length >= 4) {
        navLinks[0].textContent = t.menu;
        navLinks[1].textContent = t.about;
        navLinks[2].textContent = t.reviews;
        navLinks[3].textContent = t.contact;
    }

    // Update all booking buttons
    document.querySelectorAll('.booking-cta, #bookingCta, #bookingCtaBottom').forEach(btn => {
        if (btn) btn.textContent = t.bookTable;
    });

    // ===== 4. UPDATE HERO SECTION =====
    const heroTitle = document.querySelector('.hero-content h1');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroButton = document.querySelector('.hero-content .cta-button');
    if (heroTitle) heroTitle.textContent = t.heroTitle;
    if (heroSubtitle) heroSubtitle.textContent = t.heroSubtitle;
    if (heroButton) heroButton.textContent = t.heroButton;

    // ===== 5. UPDATE MENU SECTION =====
    const menuTitle = document.querySelector('.menu-section .section-title');
    const menuSubtitle = document.querySelector('.menu-section .section-subtitle');
    if (menuTitle) menuTitle.textContent = t.menuTitle;
    if (menuSubtitle) menuSubtitle.textContent = t.menuSubtitle;

    // Update filter tabs
    const filterTabs = document.querySelectorAll('.filter-tab');
    if (filterTabs.length >= 5) {
        filterTabs[0].textContent = t.filterAll;
        filterTabs[1].textContent = t.filterAntipasti;
        filterTabs[2].textContent = t.filterPizza;
        filterTabs[3].textContent = t.filterPasta;
        filterTabs[4].textContent = t.filterDessert;
    }

    // ===== 6. UPDATE MENU ITEMS (CRITICAL: Updates both visible AND hidden data attributes) =====
    document.querySelectorAll('.menu-item').forEach(item => {
        const titleElement = item.querySelector('h3');
        if (!titleElement) return;

        const dishTitle = titleElement.textContent.trim();
        const translation = t[dishTitle];

        if (translation && translation.short && translation.full) {
            // Update visible short description
            const descriptionElement = item.querySelector('.menu-item-description');
            if (descriptionElement) {
                descriptionElement.textContent = translation.short;
            }

            // Update hidden data-desc attribute (for modal compatibility)
            item.setAttribute('data-desc', translation.full);
        }
    });

    // ===== 7. UPDATE BADGES =====
    document.querySelectorAll('.badge-veggie').forEach(badge => {
        badge.textContent = t.badge_veggie;
    });
    document.querySelectorAll('.badge-spicy').forEach(badge => {
        badge.textContent = t.badge_spicy;
    });

    // ===== 8. UPDATE REVIEWS SECTION =====
    const reviewsTitle = document.querySelector('.reviews-section .section-title');
    const reviewsSubtitle = document.querySelector('.reviews-section .section-subtitle');
    if (reviewsTitle) reviewsTitle.textContent = t.reviewsTitle;
    if (reviewsSubtitle) reviewsSubtitle.textContent = t.reviewsSubtitle;

    // ===== 9. UPDATE BOOKING SECTION =====
    const bookingTitle = document.querySelector('.booking-section .section-title');
    const bookingSubtitle = document.querySelector('.booking-section .section-subtitle');
    if (bookingTitle) bookingTitle.textContent = t.bookingTitle;
    if (bookingSubtitle) bookingSubtitle.textContent = t.bookingSubtitle;

    // ===== 10. UPDATE MODAL =====
    const modalTitle = document.querySelector('.modal-title');
    const modalSubtitle = document.querySelector('.modal-subtitle');
    if (modalTitle) modalTitle.textContent = t.modalTitle;
    if (modalSubtitle) modalSubtitle.textContent = t.modalSubtitle;

    // Update form labels
    const labels = {
        'bookingDate': t.labelDate,
        'bookingTime': t.labelTime,
        'bookingPersons': t.labelPersons,
        'bookingName': t.labelName,
        'bookingPhone': t.labelPhone,
        'bookingEmail': t.labelEmail
    };

    Object.keys(labels).forEach(id => {
        const label = document.querySelector(`label[for="${id}"]`);
        if (label) label.textContent = labels[id];
    });

    const submitButton = document.querySelector('.submit-button');
    if (submitButton) submitButton.textContent = t.submitButton;
}

// Helper function to translate nutrition keywords dynamically
function translateNutritionText(text, lang) {
    if (!text) return text;

    const t = translations[lang];
    const germanKeywords = translations.de;

    let translatedText = text;

    // Replace nutrition keywords
    const keywordMap = {
        'Fett': 'nutri_fat',
        'Kohlenhydrate': 'nutri_carbs',
        'Eiweiß': 'nutri_protein',
        'kcal': 'nutri_kcal',
        'Gluten': 'allergen_gluten',
        'Laktose': 'allergen_lactose',
        'Ei': 'allergen_egg',
        'Fisch': 'allergen_fish',
        'Nüsse': 'allergen_nuts',
        'Milch': 'allergen_milk',
        'Weizen': 'allergen_wheat'
    };

    Object.keys(keywordMap).forEach(germanWord => {
        const key = keywordMap[germanWord];
        if (t[key]) {
            // Use word boundaries for proper replacement
            const regex = new RegExp('\\b' + germanWord + '\\b', 'gi');
            translatedText = translatedText.replace(regex, t[key]);
        }
    });

    return translatedText;
}

// ============================================
// Nutrition Modal Logic
// ============================================

document.addEventListener('DOMContentLoaded', function () {
    const nutritionModal = document.getElementById('nutritionModal');
    const closeNutritionBtn = document.getElementById('closeNutritionModal');
    const menuItems = document.querySelectorAll('.menu-item');

    // Elements inside modal
    const modalImg = document.getElementById('modalImg');
    const modalTitle = document.getElementById('modalTitle');
    const modalPrice = document.getElementById('modalPrice');
    const modalDesc = document.getElementById('modalDesc');
    const modalNutrition = document.getElementById('modalNutrition');
    const modalAllergens = document.getElementById('modalAllergens');

    // Open Modal on Card Click
    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            // Read data attributes
            const title = this.getAttribute('data-title');
            const price = this.getAttribute('data-price');
            const desc = this.getAttribute('data-desc');
            const nutrition = this.getAttribute('data-nutrition');
            const allergens = this.getAttribute('data-allergens');
            const imgSrc = this.querySelector('img').src;

            // Populate Modal
            modalTitle.textContent = title;
            modalPrice.textContent = price;
            modalDesc.textContent = desc;

            // CRITICAL: Translate nutrition and allergen keywords
            modalNutrition.textContent = translateNutritionText(nutrition, currentLanguage);
            modalAllergens.textContent = translateNutritionText(allergens, currentLanguage);

            modalImg.src = imgSrc;

            // Show Modal
            nutritionModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close Modal
    if (closeNutritionBtn) {
        closeNutritionBtn.addEventListener('click', () => {
            nutritionModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Close on background click (works for both modals)
    window.addEventListener('click', (e) => {
        if (e.target === nutritionModal) {
            nutritionModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // ============================================
    // Language Switcher Event Listener
    // ============================================

    const languageSwitcher = document.getElementById('languageSwitcher');
    if (languageSwitcher) {
        // Set initial value from localStorage
        languageSwitcher.value = currentLanguage;

        // Apply initial language on page load
        changeLanguage(currentLanguage);

        languageSwitcher.addEventListener('change', function () {
            changeLanguage(this.value);
        });
    }
});

// ============================================
// Menu Filter Functionality
// ============================================

document.addEventListener('DOMContentLoaded', function () {
    // Get all filter tabs and menu items
    const filterTabs = document.querySelectorAll('.filter-tab');
    const menuItemsElements = document.querySelectorAll('.menu-item');

    // Add click event to each filter tab
    filterTabs.forEach(tab => {
        tab.addEventListener('click', function () {
            // Get the selected category
            const category = this.getAttribute('data-category');

            // Update active state on tabs
            filterTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            // Filter menu items
            menuItemsElements.forEach(item => {
                const itemCategory = item.getAttribute('data-category');

                if (category === 'all' || itemCategory === category) {
                    // Show item with fade-in effect
                    item.classList.remove('hidden');
                    item.style.animation = 'fadeIn 0.5s ease-in-out';
                } else {
                    // Hide item
                    item.classList.add('hidden');
                }
            });
        });
    });

    // Add CSS animation for fade-in effect
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
});

// ============================================
// Smooth Scrolling for Navigation Links
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// Header Background on Scroll
// ============================================

const header = document.querySelector('.main-header');
let lastScroll = 0;

window.addEventListener('scroll', function () {
    const currentScroll = window.pageYOffset;

    // Add solid background when scrolled down
    if (currentScroll > 100) {
        header.style.backgroundColor = 'rgba(43, 43, 43, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
        header.style.padding = '1rem 0';
    } else {
        header.style.backgroundColor = 'transparent';
        header.style.backdropFilter = 'none';
        header.style.padding = '2rem 0';
    }

    lastScroll = currentScroll;
});

// ============================================
// Intersection Observer for Scroll Animations
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for fade-in effect
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    observer.observe(section);
});

// ============================================
// Mobile CTA Button Functionality
// ============================================

const mobileBookingCta = document.getElementById('mobileBookingCta');
let lastScrollPosition = 0;

window.addEventListener('scroll', function () {
    const currentScrollPosition = window.pageYOffset;

    if (window.innerWidth <= 768 && mobileBookingCta) {
        if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 100) {
            // Scrolling down - hide button
            mobileBookingCta.style.transform = 'translateX(-50%) translateY(100px)';
            mobileBookingCta.style.opacity = '0';
        } else {
            // Scrolling up - show button
            mobileBookingCta.style.transform = 'translateX(-50%) translateY(0)';
            mobileBookingCta.style.opacity = '1';
        }
    }

    lastScrollPosition = currentScrollPosition;
});

// ============================================
// Booking Modal Functionality (Updated)
// ============================================

const bookingModal = document.getElementById('bookingModal');
const closeModal = document.getElementById('closeModal');
const bookingForm = document.getElementById('bookingForm');

// Open Modal Logic (Handles Header Button, Mobile Button, and new Footer Button)
const openModalButtons = document.querySelectorAll('#bookingCta, #mobileBookingCta, #bookingCtaBottom');

openModalButtons.forEach(button => {
    if (button) {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const modal = document.getElementById('bookingModal');
            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    }
});

// Close modal logic
function closeBookingModal() {
    bookingModal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
}

if (closeModal) closeModal.addEventListener('click', closeBookingModal);

// Close on background click
window.addEventListener('click', function (e) {
    if (e.target === bookingModal) {
        closeBookingModal();
    }
});

// Handle form submission
if (bookingForm) {
    bookingForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form data
        const formData = {
            date: document.getElementById('bookingDate').value,
            time: document.getElementById('bookingTime').value,
            persons: document.getElementById('bookingPersons').value,
            name: document.getElementById('bookingName').value,
            phone: document.getElementById('bookingPhone').value,
            email: document.getElementById('bookingEmail').value
        };

        // In a real application, you would send this data to a server
        console.log('Booking request:', formData);

        // Close modal and show success message
        closeBookingModal();

        // Show success message
        alert('Grazie! Tisch angefragt.\n\nWir haben Ihre Reservierungsanfrage erhalten und werden uns in Kürze bei Ihnen melden.');

        // Reset form
        bookingForm.reset();
    });
}

// ============================================
// Performance: Lazy Loading Enhancement
// ============================================

// Add loading="lazy" to all images if not already set
document.querySelectorAll('img').forEach(img => {
    if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
    }
});

// ============================================
// Menu Item Hover Effect Enhancement
// ============================================

const menuCards = document.querySelectorAll('.menu-item');

menuCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// ============================================
// Review Cards Animation on Scroll
// ============================================

const reviewCards = document.querySelectorAll('.review-card');

const reviewObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 150); // Stagger animation
        }
    });
}, {
    threshold: 0.2
});

reviewCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    reviewObserver.observe(card);
});

// ============================================
// Console Welcome Message
// ============================================

console.log('%c🍝 AMORE & PASTA 🍕', 'color: #c65d47; font-size: 24px; font-weight: bold;');
console.log('%cHandgemachte Pasta & Echte Amore', 'color: #5f6f52; font-size: 14px;');
console.log('%cWebsite by Armin Asad Zadeh Tabrizi', 'color: #2b2b2b; font-size: 12px;');
