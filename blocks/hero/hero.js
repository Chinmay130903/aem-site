export default function decorate(block) {
  const rows = [...block.children];

  rows.forEach((row) => {
    const columns = [...row.children];

    columns.forEach((column) => {
      // Handle images
      const picture = column.querySelector('picture');

      if (picture) {
        picture.classList.add('hero-image');
      }

      // Handle text content
      const heading = column.querySelector('h1, h2, h3');

      if (heading) {
        heading.classList.add('hero-heading');
      }

      const paragraph = column.querySelector('p');

      if (paragraph) {
        paragraph.classList.add('hero-description');
      }

      // Handle buttons
      const links = column.querySelectorAll('a');

      links.forEach((link) => {
        if (link.querySelector('img')) return;

        link.classList.add('hero-button');
      });
    });
  });

  // Add a class to the hero block
  block.classList.add('hero-container');
}