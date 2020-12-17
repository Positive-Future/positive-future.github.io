export default () => {
  return new Promise(function (resolve) {
    resolve({
      resources: {
        noDataText: 'No resource available',
        noResultsText: 'No resource match your search',

        categories: {
          imagine_a_far_away_future: 'Imagine a far away future',
          stimulate_your_creativity: 'Stimulate your creativity',
          stay_positive: 'Stay positive',
          think_of_your_ideal_city: 'Think of our ideal city',
          face_our_challenges_today: 'Face our challenges today',
          learn_from_the_past: 'Learn from the past',
        },
        categoriesTexts: {
          imagine_a_far_away_future:
            'Horizon 2100… that is, a few generations away. \nImagine your daily life in version 2100, or how your grandchildren might be living.  \nThe same kind of human drama might still be going on at every individual level… But what will have changed compared to now?',
          stimulate_your_creativity:
            'Many people have tried to depict the future in artistic pieces (science fiction novels, drawings…). Some may be unrealistic or extreme... Allow yourself a glimpse into other worlds before you create your own universe.',
          stay_positive:
            'Too much literature and cinema today gives a bleak, dystopic view of the future. How can you turn this into something more positive? \nHuman beings have the capacity to cope, resist, and find solutions – whether it is at the individual, community or global level',
          think_of_your_ideal_city:
            'How would you like future cities to be like? Will they be high-tech megacities, or will there be a return to smaller size cities? \nWill cities look very different from an esthetic or material point of view? What would be an ideal city for human relationships and communities? ',
          face_our_challenges_today:
            'Our society today faces many challenges, which will impact the lives of future generations. This impact, which you will show in your proposal, will be a reflection of your realistic assessment of such issues as well as our ability to cope with them. ',
          learn_from_the_past:
            'Some fundamentals of human behavior do not seem to change. We have always tried to predict the future. We have also made mistakes. What have we learnt from them? Sometimes retrospection into the past gives the greatest insight for the future.',
        },
        types: {
          Article: 'Articles',
          Book: 'Books',
          Drawing: 'Drawings, paintings',
          Picture: 'Photos',
          Video: 'Videos and films',
        },
        perspectives: {
          foresight_studies: 'Foresight studies',
          case_studies: 'Case studies',
          data_and_trends: 'Data and trends',
          magazine: 'Magazine',
          opinions: 'Opinions',
          policy: 'Policy',
          risk_management: 'Risk management',
          science_fiction: 'Science Fiction',
        },
        issues: {
          agriculture_forestry_fishing: 'Agriculture, forestry, fishing',
          architecture: 'Architecture',
          clothing: 'Clothing',
          culture: 'Culture',
          democracy_participation: 'Democracy, participation',
          economy_trade: 'Economy, trade',
          education: 'Education',
          energy: 'Energy',
          environment: 'Environment',
          food: 'Food',
          government_local_and_national: 'Government, local and national',
          health: 'Health',
          housing: 'Housing',
          imigration: 'Imigration',
          information_communication: 'Information & communications',
          law_justice: 'Law, justice',
          leisure: 'Leisure',
          public_administration: 'Public administration',
          public_space: 'Public space',
          sciences_technologies: 'Sciences, technologies',
          security_police: 'Security, police',
          social_services: 'Social services',
          sport: 'Sport',
          tourism: 'Tourism',
          transport: 'Transport',
          urban_spatial_planning: 'Urban/spatial planning',
          work: 'Work',
        },
      },
      misc: {
        languages: {
          fr: 'French',
          en: 'English',
          de: 'German',
          es: 'Spanish',
        },
        social: {
          facebook: 'Visit our Facebook page',
          twitter: 'Follow us on Twitter',
        },
        ui: {
          contact_us: 'Contact us',
          maintained: 'This website is maintained by',
          maintainer: 'Paris IAS',
          seeCredits: 'Credits',
          subscribe: 'Subscribe to the newsletter',
          accept: 'Accept',
          more: 'See more',
        },
      },
      navigation: {
        about: 'About us',
        contest: 'Contest',
        resources: 'Food for thought',
        sab: 'Scientific Advisory Board',
        jury: 'Jury',
        who: 'Who are we?',
        privacy_policy: 'Privacy Policy',
      },
    })
  })
}
