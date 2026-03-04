/* i18n.js — L'Étoile de Mer Toliara — Multilingual support FR / MG / EN */
(function () {
  'use strict';

  var translations = {
    fr: {
      /* Navigation */
      nav_apropos: 'Notre Histoire',
      nav_carte: 'Carte',
      nav_evenements: 'Événements',
      nav_ambiance: 'Ambiance',
      nav_contact: 'Contact',

      /* Hero */
      hero_since: 'Depuis 1987',
      hero_tagline: 'Un océan de saveurs dans chaque assiette',
      hero_cta_carte: 'Découvrir notre carte',
      hero_cta_reserver: 'Réserver une table',
      hero_cta_evenement: 'Organiser un événement',
      hero_cta_livraison: 'Commander pour Livraison',

      /* Notre Histoire (Story) */
      story_label: 'Notre Histoire',
      story_heading_1: 'Trois générations,',
      story_heading_2: 'une passion.',
      story_text1: 'Depuis 1987, L\'Étoile de Mer est bien plus qu\'un restaurant — c\'est une institution de Toliara.',
      story_text2: 'Niché sur le Boulevard Lyautey (Bord de Mer), ce lieu a vu trois générations se succéder derrière les fourneaux et en salle.',
      story_text3: 'Aujourd\'hui, Sandrine et Laya perpétuent cette tradition avec la même passion et la même générosité qui ont fait la réputation de la maison. Chaque plat raconte une histoire, chaque soirée crée un souvenir, et chaque visiteur devient un ami.',

      /* Le Lieu */
      lieu_label: 'Le Lieu',
      lieu_heading: 'Un cadre unique face à l\'océan',
      lieu_desc1: 'Terrasse ombragée par les palmiers, bar coloré et fresque d\'ailes emblématique — L\'Étoile de Mer offre un cadre unique face au soleil de Toliara.',
      lieu_desc2: 'Notre scène en plein air, régulièrement animée par D-Lain, Wawa, Denise, Shyn, Big MJ et bien d\'autres, est le cœur battant de la ville. Des fruits de mer pêchés du jour aux pizzas au feu de bois, en passant par les saveurs malagasy et indiennes — la carte est aussi riche que généreuse.',

      /* Parallax */
      parallax_quote: 'Là où l\'océan rencontre la saveur',

      /* Spécialités */
      carte_label: 'Notre Carte',
      carte_heading: 'Nos Spécialités',
      carte_text: 'Les trésors de l\'océan, les saveurs du feu de bois et nos cocktails signature.',
      spec_fruitsmer_title: 'Fruits de Mer',
      spec_fruitsmer_desc: 'Langoustes, crevettes et poissons du jour grillés à la perfection sur feuille de bananier.',
      spec_pizza_title: 'Pizzas au Feu de Bois',
      spec_pizza_desc: 'Cuites dans notre four artisanal, garnies d\'ingrédients frais et locaux, croustillantes à souhait.',
      spec_cocktail_title: 'Cocktails Tropicaux',
      spec_cocktail_desc: 'Des créations originales aux couleurs du soleil, à base de fruits frais et de rhum malgache.',

      /* Traditions */
      trad_label: 'Saveurs du Monde',
      trad_heading: 'Cuisine traditionnelle & d\'ailleurs',
      trad_text: 'De Madagascar à l\'Inde, en passant par la mer — un tour du monde des saveurs à chaque table.',
      trad_malagasy_title: 'Saveurs Malagasy',
      trad_malagasy_desc: 'Ravitoto, romazava, vary amin\'anana… Les plats emblématiques de Madagascar cuisinés avec amour.',
      trad_indien_title: 'Cuisine Indienne',
      trad_indien_desc: 'Naan, biryani, tandoori et currys parfumés — un voyage de saveurs venu d\'Orient.',
      trad_crevettes_title: 'Crevettes Flambées',
      trad_crevettes_desc: 'Crevettes jumbo flambées au rhum de Madagascar, un spectacle autant qu\'un délice.',
      trad_poisson_title: 'Poisson du Jour',
      trad_poisson_desc: 'Pêche locale préparée selon l\'inspiration du chef, grillée, au four ou en sauce.',
      trad_desserts_title: 'Desserts Maison',
      trad_desserts_desc: 'Panna cotta au coco, crème brûlée vanille et sorbets aux fruits tropicaux.',

      /* Événements */
      events_label: 'Événements',
      events_heading: 'Votre événement d\'exception',
      events_text: 'L\'Étoile de Mer Toliara est bien plus qu\'un restaurant — c\'est un lieu de vie et de célébration. Avec notre terrasse spacieuse, notre scène de spectacle et notre équipe dédiée, nous accueillons tous vos événements.',
      event_diner_title: 'Dîners Dansants',
      event_diner_desc: 'Soirées inoubliables mêlant gastronomie et danse sous les étoiles.',
      event_concert_title: 'Concerts & Spectacles',
      event_concert_desc: 'Artistes malgaches et internationaux sur notre scène en plein air.',
      event_mariage_title: 'Mariages & Célébrations',
      event_mariage_desc: 'Votre plus beau jour dans un cadre tropical paradisiaque.',
      event_seminaire_title: 'Séminaires & Corporate',
      event_seminaire_desc: 'Un cadre inspirant pour vos réunions d\'entreprise et team building.',
      events_footer: 'Événements festifs, culturels, anniversaires… Contactez-nous pour créer votre moment unique.',
      events_cta: 'Organiser mon événement',

      /* Ambiance */
      ambiance_label: 'L\'Ambiance',
      ambiance_heading: 'Plus qu\'un restaurant, une expérience',
      amb_terrasse_title: 'Terrasse Tropicale',
      amb_terrasse_desc: 'Dînez sous les étoiles, entouré de végétation luxuriante et d\'éclairages d\'ambiance.',
      amb_musique_title: 'Musique Live',
      amb_musique_desc: 'Profitez de concerts et de soirées animées par les meilleurs artistes malgaches.',
      amb_lounge_title: 'Espace Lounge',
      amb_lounge_desc: 'Détendez-vous dans notre espace lounge avec billard et cocktails.',

      /* Galerie */
      galerie_label: 'Galerie',
      galerie_heading: 'La vie à L\'Étoile de Mer',
      gal_famille: 'Un lieu pour toute la famille',
      gal_equipe: 'Notre équipe',
      gal_livraison: 'Livraison à domicile',
      gal_enseigne: 'Notre enseigne',

      /* Contact */
      contact_label: 'Horaires & Contact',
      contact_heading: 'On vous attend',
      contact_maps: 'Ouvrir dans Google Maps →',
      day_lundi: 'Lundi',
      day_mardi: 'Mardi',
      day_mercredi: 'Mercredi',
      day_jeudi: 'Jeudi',
      day_vendredi: 'Vendredi',
      day_samedi: 'Samedi',
      day_dimanche: 'Dimanche',
      day_ferme: 'FERMÉ',

      /* Footer */
      footer_since: 'Depuis 1987',

      /* Menu Tabs */
      menu_tab_fruitsmer: 'Fruits de Mer',
      menu_tab_entrees: 'Entrées & Salades',
      menu_tab_viandes: 'Viandes & Volailles',
      menu_tab_pates: 'Pâtes',
      menu_tab_malagasy: 'Saveurs Malagasy',
      menu_tab_indien: 'Cuisine Indienne',
      menu_tab_pizzas: 'Pizzas',
      menu_tab_desserts: 'Desserts',

      /* Menu Labels */
      menu_specialite: 'La spécialité de la maison',
      menu_specialite_short: 'Spécialité',
      menu_featured_badge: 'À partager · Pour 2 personnes',
      menu_plateau_desc: 'Langoustes · Cigales · Crevettes · Calamar · Poisson · Crabes',
      menu_badge_arrivage: 'Arrivage du jour',
      menu_note_arrivage: 'Les plats marqués « Arrivage du jour » sont disponibles selon l\'humeur des pêcheurs et l\'arrivage du jour.',
      menu_voir_tout: 'Voir la carte complète',
      menu_modal_title: 'La Carte Complète',

      /* Menu Subtitles */
      menu_malagasy_subtitle: 'L\'âme de la Grande Île dans votre assiette',
      menu_malagasy_accomp: 'Accompagnements au choix : Tsaramaso · Kabaro · Ro matsatso · Rougail',
      menu_indien_subtitle: 'Les épices du voyage',
      menu_pizza_subtitle: 'Cuites au feu de bois · Pâte maison',
      menu_desserts_subtitle: 'La touche finale d\'un voyage culinaire',

      /* Sauces / Accompagnements */
      menu_sauces: 'Sauces au choix : Moutarde · Poivre vert · Bleu et camembert',
      menu_accompagnements: 'Accompagnements : Frites · Pommes sautées · Légumes sautés · Purée · Pâtes · Riz · Salade verte',
      menu_pizza_supplements: 'Suppléments : Œuf 4.000 · Champignon 5.000 · Crème fraîche 6.000 · Anchois / Fromage / Jambon 7.000 Ar',

      /* Menu Sub-headings */
      menu_sub_salades: 'Les Salades',
      menu_sub_entrees: 'Les Entrées',
      menu_sub_viandes: 'Les Viandes',
      menu_sub_volailles: 'Les Volailles',
      menu_sub_naans: 'Les Naans',
      menu_sub_paratas: 'Les Paratas',
      menu_sub_currys: 'Les Currys & Spécialités',
      menu_sub_pizza_veg: 'Végétariennes',
      menu_sub_pizza_mer: 'Fruits de Mer',
      menu_sub_pizza_viande: 'Viandes & Poulets',
      menu_sub_pizza_exo: 'Exotiques',
      menu_sub_pizza_sucrees: 'Sucrées',

      /* Menu Hint */
      menu_hint: 'Choisissez une catégorie pour découvrir nos plats',
      menu_interactive_title: 'Notre Menu',
      menu_interactive_subtitle: 'Cliquez sur une catégorie pour explorer'
    },

    mg: {
      /* Navigation */
      nav_apropos: 'Tantaranay',
      nav_carte: 'Lisitry ny sakafo',
      nav_evenements: 'Hetsika',
      nav_ambiance: 'Rindran-toerana',
      nav_contact: 'Fifandraisana',

      /* Hero */
      hero_since: 'Hatramin\'ny 1987',
      hero_tagline: 'Ranomasina tsiro ao anatin\'ny lovia tsirairay',
      hero_cta_carte: 'Jereo ny lisitry ny sakafo',
      hero_cta_reserver: 'Hanokana latabatra',
      hero_cta_evenement: 'Handamina hetsika',
      hero_cta_livraison: 'Mandefa handraisana fanaterana',

      /* Notre Histoire (Story) */
      story_label: 'Ny Tantaranay',
      story_heading_1: 'Taranaka telo,',
      story_heading_2: 'fitiavana iray.',
      story_text1: 'Hatramin\'ny 1987, ny Étoile de Mer dia mihoatra noho ny trano fisakafoanana — ivon-toeram-piainana ao Toliara izy.',
      story_text2: 'Mipetraka eo amin\'ny Boulevard Lyautey (Moron-dranomasina), ity toerana ity dia nahita taranaka telo nifandimby teo amin\'ny lakozia sy ny efitrano fisakafoanana.',
      story_text3: 'Ankehitriny, Sandrine sy Laya no manohy io lovan-tsofina io amin\'ny fitiavana sy fahalalahan-tanana mitovy izay nahatonga ny laza tsaran\'ny trano. Ny sakafo tsirairay dia mitantara tantara, ny hariva tsirairay dia mamorona fahatsiarovana, ary ny mpitsidika tsirairay dia lasa namana.',

      /* Le Lieu */
      lieu_label: 'Ny Toerana',
      lieu_heading: 'Toerana tsy manam-paharoa manoloana ny ranomasina',
      lieu_desc1: 'Terrasse alokalok\'ireo palmie, bar miloko sy sary elatra — ny Étoile de Mer dia manome toerana tsy manam-paharoa eo ambany masoandron\'i Toliara.',
      lieu_desc2: 'Ny sehatray ivelany, velombelon\'ny mpanakanto D-Lain, Wawa, Denise, Shyn, Big MJ sy maro hafa, no fo mivelona an\'ny tanàna. Avy amin\'ny vokatra avy an-dranomasina ka hatramin\'ny pizza natono amin\'ny kitay, ary ny tsiro Malagasy sy Indiana — lisitry ny sakafo manankarena sy malala-tanana.',

      /* Parallax */
      parallax_quote: 'Eo amin\'ny fihaonana eo amin\'ny ranomasina sy ny tsiro',

      /* Spécialités */
      carte_label: 'Lisitry ny Sakafo',
      carte_heading: 'Ny Spesialiteny',
      carte_text: 'Ny harenan\'ny ranomasina, ny tsiro avy amin\'ny afo ary ny cocktail signature anay.',
      spec_fruitsmer_title: 'Vokatra avy an-dranomasina',
      spec_fruitsmer_desc: 'Orana, makamba ary trondro natono tamin\'ny ravina akondro.',
      spec_pizza_title: 'Pizza natono tamin\'ny kitay',
      spec_pizza_desc: 'Natono tao anatin\'ny forno artisanaly, voafono vatsy vaovao sy eo an-toerana.',
      spec_cocktail_title: 'Cocktail Tropikaly',
      spec_cocktail_desc: 'Famoronana vaovao miloko masoandro, natao tamin\'ny voankazo vaovao sy toaka Malagasy.',

      /* Traditions */
      trad_label: 'Tsiro eran-tany',
      trad_heading: 'Sakafo nentim-paharazana sy hafa koa',
      trad_text: 'Avy any Madagasikara ka hatrany India, mandalo ny ranomasina — dia maneran-tany ny tsiro isaky ny latabatra.',
      trad_malagasy_title: 'Tsiro Malagasy',
      trad_malagasy_desc: 'Ravitoto, romazava, vary amin\'anana… Ny sakafo malaza Malagasy natao tamim-pitiavana.',
      trad_indien_title: 'Sakafo Indiana',
      trad_indien_desc: 'Naan, biryani, tandoori sy curry manitra — dia tsiro avy any Atsinanana.',
      trad_crevettes_title: 'Makamba natrehitra',
      trad_crevettes_desc: 'Makamba goavana natrehitra tamin\'ny toaka Malagasy, fitalinjovana sy fahafinaretana.',
      trad_poisson_title: 'Trondro androany',
      trad_poisson_desc: 'Jono eo an-toerana natao araka ny tsindrimandrin\'ny chef.',
      trad_desserts_title: 'Dessert natao an-trano',
      trad_desserts_desc: 'Panna cotta coco, crème brûlée vanille ary sorbets voankazo tropikaly.',

      /* Événements */
      events_label: 'Hetsika',
      events_heading: 'Ny hetsika manokana ho anao',
      events_text: 'Ny Étoile de Mer Toliara dia mihoatra noho ny trano fisakafoanana — toerana fiainana sy fankalazana izy. Miaraka amin\'ny terrasse malalaka, ny sehatra fampisehoana ary ny ekipa voatolotra, mandray ny hetsikao rehetra izahay.',
      event_diner_title: 'Sakafo hariva sy dihy',
      event_diner_desc: 'Hariva tsy hay hadinoina mampifandray sakafo sy dihy eo ambany kintana.',
      event_concert_title: 'Konisera sy fampisehoana',
      event_concert_desc: 'Mpanakanto Malagasy sy iraisam-pirenena eo amin\'ny sehatra ivelany.',
      event_mariage_title: 'Fanambadiana sy fankalazana',
      event_mariage_desc: 'Ny andronao tsara indrindra ao anatin\'ny toerana tropikaly paradisa.',
      event_seminaire_title: 'Seminera sy Corporate',
      event_seminaire_desc: 'Toerana manosika ho an\'ny fivoriana orinasa sy team building.',
      events_footer: 'Hetsika fety, kolontsaina, fitsingerenan\'ny andro nahaterahana… Mifandraisa aminay handaminana ny fotoananao manokana.',
      events_cta: 'Handamina ny hetsiko',

      /* Ambiance */
      ambiance_label: 'Rindran-toerana',
      ambiance_heading: 'Mihoatra noho ny trano fisakafoanana, traikefa',
      amb_terrasse_title: 'Terrasse Tropikaly',
      amb_terrasse_desc: 'Misakafo eo ambany kintana, voahodidin\'ny zavamaniry mirindra sy jiro feno rindran-toerana.',
      amb_musique_title: 'Mozika Live',
      amb_musique_desc: 'Ankafizo ny konisera sy ny hariva velombelon\'ny mpanakanto Malagasy tsara indrindra.',
      amb_lounge_title: 'Toerana Lounge',
      amb_lounge_desc: 'Mialà voly ao amin\'ny toerana lounge miaraka amin\'ny billard sy cocktail.',

      /* Galerie */
      galerie_label: 'Galeria',
      galerie_heading: 'Ny fiainana ao amin\'ny Étoile de Mer',
      gal_famille: 'Toerana ho an\'ny fianakaviana manontolo',
      gal_equipe: 'Ny ekipanay',
      gal_livraison: 'Fanaterana an-trano',
      gal_enseigne: 'Ny takelaka famantaranay',

      /* Contact */
      contact_label: 'Ora sy Fifandraisana',
      contact_heading: 'Avia mahita anay',
      contact_maps: 'Sokafy amin\'ny Google Maps →',
      day_lundi: 'Alatsinainy',
      day_mardi: 'Talata',
      day_mercredi: 'Alarobia',
      day_jeudi: 'Alakamisy',
      day_vendredi: 'Zoma',
      day_samedi: 'Sabotsy',
      day_dimanche: 'Alahady',
      day_ferme: 'MIHIDY',

      /* Footer */
      footer_since: 'Hatramin\'ny 1987',

      /* Menu Tabs */
      menu_tab_fruitsmer: 'Vokatra avy an-dranomasina',
      menu_tab_entrees: 'Fidirana & Salady',
      menu_tab_viandes: 'Hena & Akoho',
      menu_tab_pates: 'Pasta',
      menu_tab_malagasy: 'Tsiro Malagasy',
      menu_tab_indien: 'Sakafo Indiana',
      menu_tab_pizzas: 'Pizza',
      menu_tab_desserts: 'Dessert',

      /* Menu Labels */
      menu_specialite: 'Ny spesialiten\'ny trano',
      menu_specialite_short: 'Spésialite',
      menu_featured_badge: 'Ho an\'ny roa · Hizara',
      menu_plateau_desc: 'Orana · Cigales · Makamba · Calamar · Trondro · Foza',
      menu_badge_arrivage: 'Arrivage androany',
      menu_note_arrivage: 'Ny sakafo voamarika hoe « Arrivage androany » dia misy araka ny eritreritry ny mpanjono sy ny vokatra androany.',
      menu_voir_tout: 'Jereo ny lisitra feno',
      menu_modal_title: 'Ny Lisitra Feno',

      /* Menu Subtitles */
      menu_malagasy_subtitle: 'Ny fanahin\'ny Nosy Lehibe ao anatin\'ny lovia',
      menu_malagasy_accomp: 'Fanohana azo safidiana : Tsaramaso · Kabaro · Ro matsatso · Rougail',
      menu_indien_subtitle: 'Ny tsiro manitra ny dia',
      menu_pizza_subtitle: 'Natono tamin\'ny kitay · Pasta natao an-trano',
      menu_desserts_subtitle: 'Ny fepetra farany amin\'ny diabe sakafo',

      /* Sauces / Accompagnements */
      menu_sauces: 'Sauce azo safidiana : Mustarda · Dipoavatra maitso · Bleu sy camembert',
      menu_accompagnements: 'Fanohana : Pommes frites · Pommes de terre · Anana · Puree · Pasta · Vary · Salady maitso',
      menu_pizza_supplements: 'Fanampiny : Atody 4.000 · Champignon 5.000 · Crème 6.000 · Anchois / Fromage / Jambon 7.000 Ar',

      /* Menu Sub-headings */
      menu_sub_salades: 'Ny Salady',
      menu_sub_entrees: 'Ny Fidirana',
      menu_sub_viandes: 'Ny Hena',
      menu_sub_volailles: 'Ny Akoho',
      menu_sub_naans: 'Ny Naans',
      menu_sub_paratas: 'Ny Paratas',
      menu_sub_currys: 'Ny Curry & Spésialite',
      menu_sub_pizza_veg: 'Anana ihany',
      menu_sub_pizza_mer: 'Vokatra avy an-dranomasina',
      menu_sub_pizza_viande: 'Hena & Akoho',
      menu_sub_pizza_exo: 'Ekzotika',
      menu_sub_pizza_sucrees: 'Mamy',

      /* Menu Hint */
      menu_hint: 'Misafidiana sokajy iray hahitana ny sakafo',
      menu_interactive_title: 'Ny Sakafonay',
      menu_interactive_subtitle: 'Tsindrio ny sokajy iray hijerena'
    },

    en: {
      /* Navigation */
      nav_apropos: 'Our Story',
      nav_carte: 'Menu',
      nav_evenements: 'Events',
      nav_ambiance: 'Ambiance',
      nav_contact: 'Contact',

      /* Hero */
      hero_since: 'Since 1987',
      hero_tagline: 'An ocean of flavors in every dish',
      hero_cta_carte: 'Discover our menu',
      hero_cta_reserver: 'Book a table',
      hero_cta_evenement: 'Plan an event',
      hero_cta_livraison: 'Order for Delivery',

      /* Notre Histoire (Story) */
      story_label: 'Our Story',
      story_heading_1: 'Three generations,',
      story_heading_2: 'one passion.',
      story_text1: 'Since 1987, L\'Étoile de Mer has been much more than a restaurant — it\'s an institution of Toliara.',
      story_text2: 'Nestled on Boulevard Lyautey (the seafront), this place has seen three generations succeed one another in the kitchen and in the dining room.',
      story_text3: 'Today, Sandrine and Laya carry on this tradition with the same passion and generosity that built the house\'s reputation. Every dish tells a story, every evening creates a memory, and every visitor becomes a friend.',

      /* Le Lieu */
      lieu_label: 'The Venue',
      lieu_heading: 'A unique setting facing the ocean',
      lieu_desc1: 'Palm-shaded terrace, colorful bar and iconic wing mural — L\'Étoile de Mer offers a unique setting under the Toliara sun.',
      lieu_desc2: 'Our open-air stage, regularly enlivened by D-Lain, Wawa, Denise, Shyn, Big MJ and many more, is the beating heart of the city. From fresh-caught seafood to wood-fired pizza, and Malagasy and Indian flavors — the menu is as rich as it is generous.',

      /* Parallax */
      parallax_quote: 'Where the ocean meets flavor',

      /* Spécialités */
      carte_label: 'Our Menu',
      carte_heading: 'Our Specialties',
      carte_text: 'Treasures of the ocean, wood-fired flavors and our signature cocktails.',
      spec_fruitsmer_title: 'Seafood',
      spec_fruitsmer_desc: 'Lobster, shrimp and catch of the day, grilled to perfection on banana leaf.',
      spec_pizza_title: 'Wood-Fired Pizza',
      spec_pizza_desc: 'Baked in our artisan oven, topped with fresh local ingredients, perfectly crispy.',
      spec_cocktail_title: 'Tropical Cocktails',
      spec_cocktail_desc: 'Original creations in sunset colors, made with fresh fruits and Malagasy rum.',

      /* Traditions */
      trad_label: 'World Flavors',
      trad_heading: 'Traditional & international cuisine',
      trad_text: 'From Madagascar to India, via the sea — a world tour of flavors at every table.',
      trad_malagasy_title: 'Malagasy Flavors',
      trad_malagasy_desc: 'Ravitoto, romazava, vary amin\'anana… The iconic dishes of Madagascar, cooked with love.',
      trad_indien_title: 'Indian Cuisine',
      trad_indien_desc: 'Naan, biryani, tandoori and fragrant curries — a journey of flavors from the East.',
      trad_crevettes_title: 'Flambéed Shrimp',
      trad_crevettes_desc: 'Jumbo shrimp flambéed with Malagasy rum, a spectacle as much as a delight.',
      trad_poisson_title: 'Fish of the Day',
      trad_poisson_desc: 'Local catch prepared by the chef\'s inspiration, grilled, baked or in sauce.',
      trad_desserts_title: 'Homemade Desserts',
      trad_desserts_desc: 'Coconut panna cotta, vanilla crème brûlée and tropical fruit sorbets.',

      /* Événements */
      events_label: 'Events',
      events_heading: 'Your exceptional event',
      events_text: 'L\'Étoile de Mer Toliara is much more than a restaurant — it\'s a place of life and celebration. With our spacious terrace, entertainment stage and dedicated team, we welcome all your events.',
      event_diner_title: 'Dinner Dances',
      event_diner_desc: 'Unforgettable evenings blending gastronomy and dancing under the stars.',
      event_concert_title: 'Concerts & Shows',
      event_concert_desc: 'Malagasy and international artists on our open-air stage.',
      event_mariage_title: 'Weddings & Celebrations',
      event_mariage_desc: 'Your most beautiful day in a tropical paradise setting.',
      event_seminaire_title: 'Seminars & Corporate',
      event_seminaire_desc: 'An inspiring setting for your business meetings and team building.',
      events_footer: 'Festive, cultural events, birthdays… Contact us to create your unique moment.',
      events_cta: 'Plan my event',

      /* Ambiance */
      ambiance_label: 'The Ambiance',
      ambiance_heading: 'More than a restaurant, an experience',
      amb_terrasse_title: 'Tropical Terrace',
      amb_terrasse_desc: 'Dine under the stars, surrounded by lush vegetation and ambient lighting.',
      amb_musique_title: 'Live Music',
      amb_musique_desc: 'Enjoy concerts and evenings enlivened by the best Malagasy artists.',
      amb_lounge_title: 'Lounge Area',
      amb_lounge_desc: 'Relax in our lounge area with billiards and cocktails.',

      /* Galerie */
      galerie_label: 'Gallery',
      galerie_heading: 'Life at L\'Étoile de Mer',
      gal_famille: 'A place for the whole family',
      gal_equipe: 'Our team',
      gal_livraison: 'Home delivery',
      gal_enseigne: 'Our sign',

      /* Contact */
      contact_label: 'Hours & Contact',
      contact_heading: 'Come visit us',
      contact_maps: 'Open in Google Maps →',
      day_lundi: 'Monday',
      day_mardi: 'Tuesday',
      day_mercredi: 'Wednesday',
      day_jeudi: 'Thursday',
      day_vendredi: 'Friday',
      day_samedi: 'Saturday',
      day_dimanche: 'Sunday',
      day_ferme: 'CLOSED',

      /* Footer */
      footer_since: 'Since 1987',

      /* Menu Tabs */
      menu_tab_fruitsmer: 'Seafood',
      menu_tab_entrees: 'Starters & Salads',
      menu_tab_viandes: 'Meat & Poultry',
      menu_tab_pates: 'Pasta',
      menu_tab_malagasy: 'Malagasy Flavors',
      menu_tab_indien: 'Indian Cuisine',
      menu_tab_pizzas: 'Pizzas',
      menu_tab_desserts: 'Desserts',

      /* Menu Labels */
      menu_specialite: 'The house specialty',
      menu_specialite_short: 'Specialty',
      menu_featured_badge: 'To share · For 2 people',
      menu_plateau_desc: 'Lobster · Slipper Lobster · Shrimp · Squid · Fish · Crab',
      menu_badge_arrivage: 'Catch of the day',
      menu_note_arrivage: 'Items marked « Catch of the day » are available subject to the fishermen\'s haul and daily catch.',
      menu_voir_tout: 'View the full menu',
      menu_modal_title: 'The Full Menu',

      /* Menu Subtitles */
      menu_malagasy_subtitle: 'The soul of the Great Island in your plate',
      menu_malagasy_accomp: 'Choice of sides: Tsaramaso · Kabaro · Ro matsatso · Rougail',
      menu_indien_subtitle: 'The spices of the journey',
      menu_pizza_subtitle: 'Wood-fired · Homemade dough',
      menu_desserts_subtitle: 'The final touch of a culinary journey',

      /* Sauces / Accompaniments */
      menu_sauces: 'Choice of sauce: Mustard · Green pepper · Blue cheese & camembert',
      menu_accompagnements: 'Sides: Fries · Sautéed potatoes · Sautéed vegetables · Mash · Pasta · Rice · Green salad',
      menu_pizza_supplements: 'Extras: Egg 4,000 · Mushroom 5,000 · Crème fraîche 6,000 · Anchovy / Cheese / Ham 7,000 Ar',

      /* Menu Sub-headings */
      menu_sub_salades: 'Salads',
      menu_sub_entrees: 'Starters',
      menu_sub_viandes: 'Meat',
      menu_sub_volailles: 'Poultry',
      menu_sub_naans: 'Naans',
      menu_sub_paratas: 'Paratas',
      menu_sub_currys: 'Curries & Specialties',
      menu_sub_pizza_veg: 'Vegetarian',
      menu_sub_pizza_mer: 'Seafood',
      menu_sub_pizza_viande: 'Meat & Chicken',
      menu_sub_pizza_exo: 'Exotic',
      menu_sub_pizza_sucrees: 'Sweet',

      /* Menu Hint */
      menu_hint: 'Choose a category to explore our dishes',
      menu_interactive_title: 'Our Menu',
      menu_interactive_subtitle: 'Click a category to explore'
    }
  };

  var currentLang = 'fr';

  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;

    // Update HTML lang attribute
    document.documentElement.setAttribute('lang', lang === 'mg' ? 'mg' : lang === 'en' ? 'en' : 'fr');

    // Update all translatable elements
    var els = document.querySelectorAll('[data-i18n]');
    els.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // Update active lang button (both desktop & mobile)
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
  }

  // Attach click handlers to all language buttons
  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setLanguage(this.getAttribute('data-lang'));
    });
  });

  // Expose for external use
  window.EDM_i18n = {
    setLanguage: setLanguage,
    getCurrentLang: function () { return currentLang; }
  };
})();
