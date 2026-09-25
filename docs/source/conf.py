# Configuration file for the Sphinx documentation builder.

# -- Project information

project = 'Guide de Rédaction'
copyright = '2026, John Aoga'
author = 'John Aoga'

release = '0.1'
version = '0.1.0'

# -- General configuration

extensions = [
    'sphinx.ext.duration',
    'sphinx.ext.doctest',
    'sphinx.ext.autodoc',
    'sphinx.ext.autosummary',
    'sphinx.ext.intersphinx',
    'myst_parser',
]

intersphinx_mapping = {
    'python': ('https://docs.python.org/3/', None),
    'sphinx': ('https://www.sphinx-doc.org/en/master/', None),
}
intersphinx_disabled_domains = ['std']

templates_path = ['_templates']

# -- MyST (Markdown) configuration
# dollarmath/amsmath let the guidelines' LaTeX snippets ($...$, $$...$$) render.
myst_enable_extensions = [
    'dollarmath',
    'amsmath',
]

# -- Options for HTML output

html_theme = 'sphinx_rtd_theme'

# -- Options for EPUB output
epub_show_urls = 'footnote'

source_suffix = {
    '.rst': 'restructuredtext',
    '.txt': 'markdown',
    '.md': 'markdown',
}
