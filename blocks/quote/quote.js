export default function decorate(block) {
  const [quoteRow, authorRow] = [...block.children];

  const blockquote = document.createElement('blockquote');
  blockquote.textContent = quoteRow.textContent.trim();

  const cite = document.createElement('cite');
  cite.textContent = authorRow.textContent.trim();

  block.replaceChildren(blockquote, cite);
}
