module.exports = {
    branches: ['main'],
    plugins: [
        '@semantic-release/commit-analyzer',
        ['semantic-release-npm', { generateNotes: true, addChannel: 'next' }],
        '@semantic-release/changelog',
        [
            '@semantic-release/git',
            {
                assets: ['CHANGELOG.md', 'package.json'],
            },
        ],
    ],
};
