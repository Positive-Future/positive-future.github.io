export default () => {
  return new Promise(function (resolve) {
    resolve({
      resources: {
        noDataText: 'Aucune ressource disponible',
        noResultsText: 'Aucune ressource ne correspond à votre recherche',
        thisDocumentLangIs: 'Cette ressource est en',
        resultFound: ' ressource trouvée',
        resultsFound: ' ressources trouvées',
        check: 'Consultez un aperçu des ressources sur la ville du futur',
        perPage: ' par page',
        filterAlternativeText:
          'Les ressources peuvent aussi être explorées à partir des filtres suivants:',
        filters: {
          search: 'Rechercher une ressource',
          category: 'Catégorie',
          type: 'Type',
          perspectives: 'Perspectives and approches',
          issues: 'Défis et problématiques',
          lang: 'Langue',
        },
        categories: {
          imagine_a_far_away_future: 'Imaginer un futur lointain',
          stimulate_your_creativity: 'Stimuler votre créativité',
          stay_positive: 'Rester positifs',
          think_of_your_ideal_city: 'Penser la ville idéale',
          face_our_challenges_today: 'Faire face aux défis actuels',
          learn_from_the_past: 'Apprendre du passé',
        },
        categoriesTexts: {
          imagine_a_far_away_future:
            "Horizon 2100... c'est-à-dire à quelques générations d'ici. <br>Imaginez votre vie quotidienne dans la version 2100, ou comment vos petits-enfants pourraient vivre.  <br>Le même genre de drame humain pourrait encore se produire à chaque niveau individuel... Mais qu'est-ce qui aura changé par rapport à maintenant ?",
          stimulate_your_creativity:
            "De nombreuses personnes ont essayé de dépeindre l'avenir dans des œuvres artistiques (romans de science-fiction, dessins...). Certains peuvent être irréalistes ou extrêmes... Permettez-vous d'entrevoir d'autres mondes avant de créer votre propre univers.",
          stay_positive:
            "Trop de littérature et de cinéma aujourd'hui donne une vision sombre et dystopique de l'avenir. Comment pouvez-vous transformer cela en quelque chose de plus positif ? <br>Les êtres humains ont la capacité de faire face, de résister et de trouver des solutions - que ce soit au niveau individuel, communautaire ou mondial.",
          think_of_your_ideal_city:
            "Comment aimeriez-vous que les futures villes soient ? Seront-elles des mégalopoles de haute technologie ou y aura-t-il un retour à des villes de plus petite taille ? <br> Les villes seront-elles très différentes d'un point de vue esthétique ou matériel ? Quelle serait la ville idéale pour les relations humaines et les communautés ?",
          face_our_challenges_today:
            "Notre société est aujourd'hui confrontée à de nombreux défis, qui auront un impact sur la vie des générations futures. Cet impact, que vous montrerez dans votre proposition, sera le reflet de votre évaluation réaliste de ces questions ainsi que de notre capacité à y faire face.",
          learn_from_the_past:
            "Certains principes fondamentaux du comportement humain ne semblent pas changer. Nous avons toujours essayé de prédire l'avenir. Nous avons également commis des erreurs. Qu'avons-nous appris d'elles ? Parfois, la rétrospection du passé donne un meilleur aperçu de l'avenir.",
        },
        types: {
          Article: 'Articles',
          Book: 'Livres',
          Drawing: 'Dessins, peintures',
          Photo: 'Photos',
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
          information_communications: 'Information & Communications',
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
      },
      form: {
        mandatory: 'Ce champ est requis',
        submit: 'Soumettre ma candidature',
        application: {
          title: 'Soumettez votre candidature',
          firstname: 'Prénom',
          lastname: 'Nom',
          email: 'Email',
          work_title: "Titre de l'oeuvre",
          team: 'Nom du ou des participant-e-s',
          description: "Description de l'oeuvre",
          file: 'Votre fichier',
          browse: 'Parcourir vos fichiers',
          url: 'URL du fichier',
          thank_you:
            'Merci pour votre candidature au concours Positive Future! ',
          back_to_home: "Revenir à la page d'accueil",
          contact:
            "Veuillez indiquer un contact. Si vous faites partie d'un groupe, veuillez indiquer un seul contact pour l'ensemble du groupe.",
          description_alt:
            "Présentez votre travail en quelques lignes, vos inspirations et les ressources que vous avez peut-être utilisé. Souvenez vous! Vous êtes tenu d'indiquer  tout usage d'une oeuvre originale déjà existante ou la participation d'un tiers dans la création de l'oeuvre proposée",
          format: {
            title: "Type d'oeuvre",
            article: 'Article de journal',
            novel: 'Scénario ou nouvelle',
            video: 'Film/court-métrage',
            comic: 'Bande dessinée/Roman graphique',
          },
          dialog: {
            title: 'Confirmez votre candidature',
            text:
              'Votre candidature est définitive et ne peut pas être modifiée une fois qu\'elle a été envoyée. Si vous vous êtes assuré(e) d\'avoir fourni des informations correctes, cliquez sur le bouton "Soumettre ma candidature"',
            submit: 'Soumettre ma candidature',
            submitting: 'Envoi en cours',
            error:
              'Un erreur est survenue. Merci de réessayer ou de nous contacter.',
            cancel: 'Annuler',
          },
          article_hint:
            "Pour rappel, votre article doit faire maximum 10,000 caractères (espaces compris), avec la possibilité d'inclure des illustrations.",
          novel_hint:
            'Pour rappel, votre nouvelle doit faire maximum 20,000 caractères (espaces compris). ',
          video_hint:
            'Pour rappel, la durée maximum autorisée est de 10 minutes',
          comic_hint:
            'Pour rappel, votre bande dessinée doit faire 15 pages maximum',
          agreed: 'Je certifie avoir lu les ',
          agreed_link: 'règles du concours Positive Future',
          agreed_2: ' et accepte les termes et conditions de participation',
          validation: {
            moreThan: 'Le champ {0} doit faire plus de {1} caractères.',
            lessThan: 'Le champ {0} doit faire moins de {1} caractères',
            required: 'Le champ {0} est requis',
            invalid: 'Le champ {0} est invalide',
            tos:
              "Vous devez accepter les termes et conditions d'usage pour continuer",
            url:
              'Une URL de fichier est nécessaire si vous ne fournissez pas le fichier directement',
            file:
              'Un fichier est requis si vous ne fournissez pas une URL de fichier.',
            fileSize: 'La taille de fichiers maximale autorisée est 25Mo.',
          },
          add_team: "Ajouter un membre de l'équipe",
          remove_team: "Retirer ce membre de l'équipe",
        },
      },
      misc: {
        languages: {
          fr: 'Français',
          en: 'Anglais',
          de: 'Allemand',
          es: 'Espagnol',
        },
        social: {
          facebook: 'Visitez notre page Facebook',
          twitter: 'Suivez nous sur Twitter',
          youtube: 'Découvrez notre chaîne Youtube',
          instagram: 'Notre page Instagram',
          linkedin: 'Retrouvez nous sur Linkedin',
        },
        ui: {
          download: 'Téléchargez le fichier joint',
          or: 'Ou',
          theme: 'Thème',
          contact_us: 'Contactez nous',
          maintained: 'Ce site est géré par ',
          maintainer: "L'IEA de Paris",
          seeCredits: 'Crédits',
          subscribe: "S'inscrire à la newsletter",
          subscribe2:
            'Inscrivez-vous à la newsletter et restez informé de toutes les actualités du concours !',
          subscribe3:
            'Vous êtes intéressé par le concours ? Cliquez ici pour vous inscrire à la newsletter!',
          accept: 'Accepter',
          more: 'Voir plus',
          news_intro:
            "Evénements, annonce du Jury, retrouvez toute l'actualité de Positive Future.",
          download_rules: 'Télécharger le règlement du concours',
          download_tips: 'Télécharger tous les conseils !',
          award: 'Prix',
          with_the_support_of: 'Avec le soutien de',
          thisDocumentLangIs: 'Ce document est en ',
          back_to_categories: 'Revenir à la vue par catégorie',
        },
      },
      navigation: {
        about: 'À propos',
        contest: 'Concours',
        resources: 'Matière à penser',
        sab: 'Conseil Scientifique',
        news: 'Actualités',
        jury: 'Jury',
        organizers: 'Organisateurs',
        privacy_policy: 'Politique de confidentialité',
        rules: 'Modalités',
        tips: 'Conseils',
      },
    })
  })
}
