export default () => {
  return new Promise(function (resolve) {
    resolve({
      resources: {
        noDataText: 'Aucune ressource disponible',
        noResultsText: 'Aucune ressource ne correspond à votre recherche',
        categories: {
          imagine_a_far_away_future: 'Imaginer un futur lointain',
          stimulate_your_creativity: 'Stimuler votre créativité',
          stay_positive: 'Rester positifs',
          think_of_our_ideal_city: 'Penser la ville idéale',
          face_our_challenges_today: 'Faire face aux défis actuels',
          learn_from_the_past: 'Apprendre du passé',
        },
        categoriesTexts: {
          imagine_a_far_away_future:
            "Horizon 2100... c'est-à-dire à quelques générations d'ici. \nImaginez votre vie quotidienne dans la version 2100, ou comment vos petits-enfants pourraient vivre.  \nLe même genre de drame humain pourrait encore se produire à chaque niveau individuel... Mais qu'est-ce qui aura changé par rapport à maintenant ?",
          stimulate_your_creativity:
            "De nombreuses personnes ont essayé de dépeindre l'avenir dans des œuvres artistiques (romans de science-fiction, dessins...). Certains peuvent être irréalistes ou extrêmes... Permettez-vous d'entrevoir d'autres mondes avant de créer votre propre univers.",
          stay_positive:
            "Trop de littérature et de cinéma aujourd'hui donne une vision sombre et dystopique de l'avenir. Comment pouvez-vous transformer cela en quelque chose de plus positif ? \nLes êtres humains ont la capacité de faire face, de résister et de trouver des solutions - que ce soit au niveau individuel, communautaire ou mondial",
          think_of_our_ideal_city:
            "Comment aimeriez-vous que les futures villes soient ? Seront-elles des mégalopoles de haute technologie ou y aura-t-il un retour à des villes de plus petite taille ? \n Les villes seront-elles très différentes d'un point de vue esthétique ou matériel ? Quelle serait la ville idéale pour les relations humaines et les communautés ?",
          face_our_challenges_today:
            "Notre société est aujourd'hui confrontée à de nombreux défis, qui auront un impact sur la vie des générations futures. Cet impact, que vous montrerez dans votre proposition, sera le reflet de votre évaluation réaliste de ces questions ainsi que de notre capacité à y faire face.",
          learn_from_the_past:
            "Certains principes fondamentaux du comportement humain ne semblent pas changer. Nous avons toujours essayé de prédire l'avenir. Nous avons également commis des erreurs. Qu'avons-nous appris d'elles ? Parfois, la rétrospection du passé donne un meilleur aperçu de l'avenir.",
        },
        types: {
          Article: 'Articles',
          Book: 'Livres',
          Drawing: 'Dessins, peintures',
          Picture: 'Photos',
          Video: 'Vidéos et films',
        },
        perspectives: {
          foresight_studies: 'Travaux de prospective',
          case_studies: 'Etudes de cas',
          data_and_trends: 'Données et tendances',
          magazine: 'Magazine',
          opinions: 'Opinions',
          policy: 'Préconisations politiques',
          risk_management: 'Gestion du risque',
          science_fiction: 'Science fiction',
        },
        issues: {
          agriculture_forestry_fishing: 'Agriculture, forêt, pêche',
          architecture: 'Architecture',
          clothing: 'Habillement',
          culture: 'Culture',
          democracy_participation: 'Démocratie, participation',
          economy_trade: 'Economie, commerce',
          education: 'Education',
          energy: 'Energie',
          environment: 'Environnement',
          food: 'Alimentation',
          government_local_and_national: 'Gouvernance locale et nationale',
          health: 'Santé, médecine',
          housing: 'Logement',
          imigration: 'Immigration',
          information_communication: 'Information & Communications',
          law_justice: 'Droit, justice',
          leisure: 'Loisirs',
          public_administration: 'Administration publique',
          public_space: 'Espace public',
          sciences_technologies: 'Sciences, technologies',
          security_police: 'Sécurité, police',
          social_services: 'Services sociaux',
          sport: 'Sport',
          tourism: 'Tourisme',
          transport: 'Transport',
          urban_spatial_planning: 'Urbanisme, territoire',
          work: 'Emploi, travail',
        },
        languages: {
          FR: 'Français',
          en: 'Anglais',
          de: 'Allemand',
          es: 'Espagnol',
        },
      },
      misc: {
        languages: {
          fr: 'Français',
          en: 'Anglais',
        },
        social: {
          facebook: 'Visitez notre page Facebook',
          twitter: 'Suivez nous sur Twitter',
        },
        ui: {
          contact_us: 'Contactez nous',
          maintained: 'Ce site est géré par ',
          maintainer: "L'IEA de Paris",
          seeCredits: 'Crédits',
          subscribe: "S'inscrire à la newsletter",
          accept: 'Accepter',
          more: 'Voir plus',
        },
      },
      navigation: {
        about: 'À propos',
        contest: 'Concours',
        resources: 'Matière à penser',
        sab: 'Conseil Scientifique',
        jury: 'Jury',
        who: 'Qui sommes nous?',
        privacy_policy: 'Politique de confidentialité',
      },
    })
  })
}
