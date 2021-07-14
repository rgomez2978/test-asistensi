export const MenuLevel1 = [{
    products: [{
        id: 1,
        order: 1,
        title: "products",
        nodes: [
            {
                id: 1,
                order: 1,
                title: 'about us',
                url: '/aboutus',
            },
            {
                id: 2,
                order: 2,
                title: 'career',
                url: '/career',
            },
            {
                id: 3,
                order: 3,
                title: 'eature tour',
                url: '/tour',
            }
        ]
    }
    ],
    developers: [{
        id: 2,
        order: 2,
        title: "developers",
        nodes: [
            {
                id: 1,
                order: 1,
                title: 'presentation',
                url: '/presentation',
            },
            {
                id: 2,
                order: 2,
                title: 'Knowledge',
                url: '/knowledge',
            }

        ]
    }],
    company: [{
        id: 2,
        order: 2,
        title: "company",
        nodes: [
            {
                id: 1,
                order: 1,
                title: 'company 1',
                url: '/company1',
            },
            {
                id: 2,
                order: 2,
                title: 'company 2',
                url: '/company2',
            }
        ]
    }],
    newsletter: [{
        id: 1,
        order: 1,
        title: 'newsletter',
    }],
}];


export const MenuLevel2 = [{
    options: [
        {
            id: 1,
            order: 1,
            title: 'shop',
            url: '/shop',
        }, {
            id: 2,
            order: 2,
            title: 'service',
            url: '/service',
        }, {
            id: 3,
            order: 3,
            title: 'about',
            url: '/aboutus',
        }, {
            id: 4,
            order: 4,
            title: 'support',
            url: '/support',
        }
    ],
    socials: [
        {
            id: 1,
            order: 1,
            icon: "<i class=\"icofont-facebook\"></i>",
            title: 'facebook',
            url: '/facebook',
        }, {
            id: 2,
            order: 2,
            icon: "<i class=\"icofont-twitter\"></i>",
            title: 'twitter',
            url: '/twitter',
        }, {
            id: 3,
            order: 3,
            icon: "<i class=\"icofont-instagram\"></i>",
            title: 'instagram',
            url: '/istagram',
        }
    ]
}];
