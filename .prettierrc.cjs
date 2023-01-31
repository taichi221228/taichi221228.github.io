module.exports = {
  printWidth: 160,
  overrides: [
    {
      files: ['*.js', '*.cjs', '*.mjs', '*.jsx', '*.ts', '*.cts', '*.mts', '*.tsx'],
      options: {
        singleQuote: true,
      },
    },
  ],
};
